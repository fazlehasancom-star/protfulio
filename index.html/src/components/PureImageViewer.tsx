import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { Language } from '../types';

export interface PureImageItem {
  id?: string;
  url: string;
  fallbackUrl?: string;
  title?: string;
  titleBn?: string;
  categoryLabel?: string;
  categoryLabelBn?: string;
}

interface PureImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  images: PureImageItem[];
  currentIndex: number;
  onIndexChange?: (newIndex: number) => void;
  lang: Language;
}

const ZOOM_STEPS = [1, 1.6, 2.5, 3.8];

export default function PureImageViewer({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  lang
}: PureImageViewerProps) {
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [zoomStep, setZoomStep] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const positionStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pointerDownPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Sync internal index with prop
  useEffect(() => {
    setInternalIndex(currentIndex);
  }, [currentIndex]);

  const activeIndex = internalIndex >= 0 && internalIndex < images.length ? internalIndex : 0;
  const currentImage = images[activeIndex];

  // Reset zoom & pan when image changes or closes
  const resetZoom = useCallback(() => {
    setZoomStep(0);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    resetZoom();
  }, [activeIndex, resetZoom]);

  useEffect(() => {
    if (!isOpen) {
      resetZoom();
    }
  }, [isOpen, resetZoom]);

  // Navigate images
  const goToNext = useCallback(() => {
    if (images.length <= 1) return;
    const nextIdx = (activeIndex + 1) % images.length;
    setInternalIndex(nextIdx);
    onIndexChange?.(nextIdx);
  }, [activeIndex, images.length, onIndexChange]);

  const goToPrev = useCallback(() => {
    if (images.length <= 1) return;
    const prevIdx = (activeIndex - 1 + images.length) % images.length;
    setInternalIndex(prevIdx);
    onIndexChange?.(prevIdx);
  }, [activeIndex, images.length, onIndexChange]);

  // Keyboard navigation & zoom
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        resetZoom();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goToNext, goToPrev, resetZoom]);

  // Hide hint after 4 seconds
  useEffect(() => {
    if (isOpen) {
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeIndex]);

  if (!isOpen || !currentImage) return null;

  // Multi-step click to zoom: 1x -> 1.6x -> 2.5x -> 3.8x -> 1x
  const handleImageClick = (e: React.MouseEvent) => {
    // Only trigger zoom if not dragged
    const dragDistance = Math.hypot(
      e.clientX - pointerDownPosRef.current.x,
      e.clientY - pointerDownPosRef.current.y
    );
    if (dragDistance > 6) return;

    const nextStep = (zoomStep + 1) % ZOOM_STEPS.length;
    setZoomStep(nextStep);
    const targetScale = ZOOM_STEPS[nextStep];
    setScale(targetScale);

    if (targetScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = () => {
    setZoomStep((prev) => {
      const next = Math.min(prev + 1, ZOOM_STEPS.length - 1);
      setScale(ZOOM_STEPS[next]);
      return next;
    });
  };

  const handleZoomOut = () => {
    setZoomStep((prev) => {
      const next = Math.max(prev - 1, 0);
      const targetScale = ZOOM_STEPS[next];
      setScale(targetScale);
      if (targetScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setScale((prevScale) => {
      const newScale = Math.min(Math.max(prevScale + delta, 1), 4.5);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  // Mouse / Touch Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownPosRef.current = { x: e.clientX, y: e.clientY };
    if (scale <= 1) return;

    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    positionStartRef.current = { ...position };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || scale <= 1) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPosition({
      x: positionStartRef.current.x + dx,
      y: positionStartRef.current.y + dy
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const currentTitle = lang === 'bn' ? currentImage.titleBn || currentImage.title : currentImage.title;
  const currentCategory = lang === 'bn' ? currentImage.categoryLabelBn || currentImage.categoryLabel : currentImage.categoryLabel;

  return (
    <div
      id="pure-image-viewer-backdrop"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-xl select-none animate-in fade-in duration-200"
      onWheel={handleWheel}
      onClick={(e) => {
        // Close if backdrop clicked outside image area
        if (e.target === containerRef.current) {
          onClose();
        }
      }}
    >
      {/* Top Floating Bar: Minimalist & Clean */}
      <header className="absolute top-0 inset-x-0 z-40 p-4 sm:p-6 flex items-center justify-between pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        {/* Left: Artwork Title & Counter */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 font-mono">
            {activeIndex + 1} / {images.length}
          </div>
          {currentTitle && (
            <div className="hidden sm:block max-w-md truncate">
              <span className="text-sm font-semibold text-white/90 drop-shadow-md">
                {currentTitle}
              </span>
              {currentCategory && (
                <span className="ml-2 text-xs text-teal-400 font-medium">
                  • {currentCategory}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right: Floating Zoom & Close Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Zoom Level Indicator */}
          <div className="px-2.5 py-1 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-mono text-teal-300 font-bold min-w-[50px] text-center shadow-lg">
            {Math.round(scale * 100)}%
          </div>

          {/* Zoom Out Button */}
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            aria-label="Zoom out"
            className="p-2 rounded-xl bg-black/60 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-black/60 text-slate-200 border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Zoom In Button */}
          <button
            onClick={handleZoomIn}
            disabled={scale >= 3.8}
            aria-label="Zoom in"
            className="p-2 rounded-xl bg-black/60 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-black/60 text-slate-200 border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Reset Zoom Button */}
          {scale > 1 && (
            <button
              onClick={resetZoom}
              aria-label="Reset zoom"
              className="p-2 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
              title="Reset 1:1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            id="close-pure-image-viewer-btn"
            aria-label="Close image viewer"
            className="p-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Viewport Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-hidden cursor-default relative p-2 sm:p-6"
      >
        <div
          className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={handleImageClick}
        >
          <img
            ref={imageRef}
            src={currentImage.url}
            alt={currentTitle || 'Artwork'}
            referrerPolicy="no-referrer"
            draggable={false}
            onError={(e) => {
              if (currentImage.fallbackUrl && e.currentTarget.src !== currentImage.fallbackUrl) {
                e.currentTarget.src = currentImage.fallbackUrl;
              }
            }}
            className="max-w-[92vw] max-h-[88vh] sm:max-w-[90vw] sm:max-h-[90vh] object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.95)] drop-shadow-2xl transition-all select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* Navigation Arrows (Prev / Next) */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-teal-500 text-white hover:text-slate-950 border border-white/20 hover:border-teal-300 backdrop-blur-md transition-all cursor-pointer shadow-2xl hover:scale-110 active:scale-95 group z-40"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next artwork"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-teal-500 text-white hover:text-slate-950 border border-white/20 hover:border-teal-300 backdrop-blur-md transition-all cursor-pointer shadow-2xl hover:scale-110 active:scale-95 group z-40"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Floating Bottom Hint & Zoom Helper */}
      <footer className="absolute bottom-4 sm:bottom-6 inset-x-0 z-40 flex items-center justify-center pointer-events-none">
        <div
          className={`pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs text-slate-200 backdrop-blur-md shadow-2xl transition-opacity duration-300 ${
            showHint ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
          <span>
            {lang === 'bn'
              ? 'ছবিতে ২-৩ বার ক্লিক করে জুম করুন (১x → ২x → ৩x) • স্ক্রিন ড্র্যাগ করে ঘুরিয়ে দেখুন'
              : 'Click image 2-3 times to zoom in (1x → 2x → 3x) • Drag to pan'}
          </span>
        </div>
      </footer>
    </div>
  );
}
