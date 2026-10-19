import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { X, Upload, Camera, Check, RefreshCw, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSaveAvatar: (newAvatarUrl: string) => void;
  lang: Language;
}

export default function PhotoUploadModal({
  isOpen,
  onClose,
  currentAvatar,
  onSaveAvatar,
  lang
}: PhotoUploadModalProps) {
  const [previewUrl, setPreviewUrl] = useState<string>(currentAvatar);
  const [isDragging, setIsDragging] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPreviewUrl(result);
        setIsSaved(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleApply = () => {
    onSaveAvatar(previewUrl);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 900);
  };

  const handleResetToOriginal = () => {
    const permanentAvatar = 'https://i.postimg.cc/yNfjSHpC/Gemini-Generated-Image.jpg';
    setPreviewUrl(permanentAvatar);
    onSaveAvatar(permanentAvatar);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0e1017] border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#ff5e28]/15 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff5e28]/10 border border-[#ff5e28]/30 flex items-center justify-center text-[#ff5e28]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {lang === 'bn' ? 'আসল ছবি সেট করুন' : 'Set Original Photo'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'bn'
                  ? 'আপনার আসল ছবি কোনো প্রকার বিকৃতি ছাড়াই যুক্ত করুন'
                  : 'Display your exact original photo with zero distortion'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="mt-5 space-y-5 relative z-10">
          {/* Live Preview Area */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#ff5e28]/50 shadow-[0_0_30px_rgba(255,94,40,0.25)] bg-[#07080a] flex items-end justify-center">
              <img
                src={previewUrl}
                alt="Selected Original Photo"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = currentAvatar;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] text-slate-300 text-center font-medium">
                {lang === 'bn' ? 'প্রিভিউ' : 'Live Preview'}
              </div>
            </div>
          </div>

          {/* Upload Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer border-2 border-dashed rounded-xl p-5 text-center transition-all ${
              isDragging
                ? 'border-[#ff5e28] bg-[#ff5e28]/10'
                : 'border-white/15 hover:border-[#ff5e28]/50 hover:bg-white/[0.02]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ff5e28]">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-white">
                {lang === 'bn'
                  ? 'আপনার ডিভাইস থেকে আসল ছবিটি সিলেক্ট করুন'
                  : 'Click or Drag & Drop your original photo here'}
              </p>
              <p className="text-xs text-slate-400">
                {lang === 'bn'
                  ? 'JPG, PNG, JPEG বা WebP ফরম্যাট সমর্থিত'
                  : 'Supports JPG, PNG, JPEG or WebP formats'}
              </p>
            </div>
          </div>

          {/* Direct File Path Note */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#ff5e28] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              {lang === 'bn' ? (
                <>
                  <span className="font-semibold text-white">সরাসরি আপডেট:</span>{' '}
                  আপনি আপনার আসল ছবি নির্বাচন করলেই ব্রাউজারে এটি সংরক্ষিত হয়ে যাবে এবং হিরো সেকশনে সম্পূর্ণ নিখুঁতভাবে প্রদর্শিত হবে।
                </>
              ) : (
                <>
                  <span className="font-semibold text-white">Direct Update:</span>{' '}
                  Selecting your file immediately sets your genuine original photo across the website without distortion.
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
          <button
            type="button"
            onClick={handleResetToOriginal}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'রিসেট করুন' : 'Reset'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'বাতিল' : 'Cancel'}
            </button>
            <button
              type="button"
              onClick={handleApply}
              disabled={isSaved}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b3d] to-[#ff4722] hover:from-[#ff7d52] hover:to-[#ff5836] text-white text-xs font-bold tracking-wide shadow-[0_4px_16px_rgba(255,94,40,0.35)] active:scale-95 transition-all cursor-pointer"
            >
              {isSaved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'সেভ হয়েছে!' : 'Saved!'}</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'আসল ছবি প্রয়োগ করুন' : 'Apply Original Photo'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
