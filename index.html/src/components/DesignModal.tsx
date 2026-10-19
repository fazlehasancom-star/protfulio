import { useEffect } from 'react';
import { X, ExternalLink, Tag, Maximize2, CheckCircle2, Download, ZoomIn } from 'lucide-react';
import { DesignProject, Language } from '../types';

interface DesignModalProps {
  project: DesignProject | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenPureImage?: (project: DesignProject) => void;
}

export default function DesignModal({ project, isOpen, onClose, lang, onOpenPureImage }: DesignModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const title = lang === 'bn' ? project.titleBn : project.title;
  const description = lang === 'bn' ? project.descriptionBn : project.description;
  const categoryLabel = lang === 'bn' ? project.categoryLabelBn : project.categoryLabel;
  const keyFeatures = lang === 'bn' ? project.keyFeaturesBn : project.keyFeatures;

  return (
    <div
      id="design-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="design-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0d0e12] border border-teal-500/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.95),0_0_30px_rgba(45,212,191,0.2)] my-auto animate-in zoom-in-95 duration-200 flex flex-col lg:flex-row max-h-[90vh]"
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          id="close-design-modal-btn"
          className="absolute top-4 right-4 z-30 p-2 rounded-full text-slate-300 hover:text-white bg-black/70 hover:bg-rose-500/20 border border-white/20 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left / Top: High Res Artwork View with Pure Image Zoom Click */}
        <div className="lg:w-7/12 bg-black/80 flex items-center justify-center p-4 sm:p-6 relative min-h-[300px] lg:min-h-[500px] group/art">
          <div
            className="relative max-h-[70vh] flex items-center justify-center cursor-zoom-in"
            onClick={() => onOpenPureImage?.(project)}
            title={lang === 'bn' ? 'ছবিতে আবার ক্লিক করে শুধুমাত্র ছবি জুম করে দেখুন' : 'Click image again to view only picture with zoom'}
          >
            <img
              src={project.image}
              alt={title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fallback = project.sourceFileName;
                if (fallback && fallback.startsWith('http') && e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10 group-hover/art:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />

            {/* Click to inspect pure image overlay badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/art:opacity-100 transition-opacity duration-200">
              <div className="px-4 py-2 rounded-full bg-black/85 border border-teal-400 text-teal-300 text-xs font-bold tracking-wide shadow-2xl flex items-center gap-2 backdrop-blur-md">
                <ZoomIn className="w-4 h-4 text-teal-300" />
                <span>{lang === 'bn' ? 'ক্লিক করুন: জাস্ট শুধু ছবি দেখুন (জুম সহ)' : 'Click to View Picture Only (Zoomable)'}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenPureImage?.(project)}
            className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold backdrop-blur-md border border-teal-300 transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'জাস্ট শুধু ছবি দেখুন (ফুলস্ক্রিন)' : 'View Picture Only (Fullscreen)'}</span>
          </button>
        </div>

        {/* Right / Bottom: Details */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-teal-500/20 bg-[#0a0b0f]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-teal-500/15 border border-teal-500/35 text-teal-300 text-xs font-semibold">
                {categoryLabel}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.dimensions}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              {title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {description}
            </p>

            {/* Client & Tools */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-teal-400" />
                  {lang === 'bn' ? 'ক্লায়েন্ট:' : 'Client:'}
                </span>
                <span className="text-white font-semibold">{project.client}</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                <span className="text-slate-400 block mb-1">
                  {lang === 'bn' ? 'ব্যবহৃত সফটওয়্যার:' : 'Tools Used:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-teal-500/15 border border-teal-500/30 text-teal-300 text-[11px] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features List */}
            {keyFeatures && keyFeatures.length > 0 && (
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  {lang === 'bn' ? 'ডিজাইন হাইলাইটস:' : 'Design Highlights:'}
                </span>
                <div className="space-y-1.5">
                  {keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ইমেজ ডাউনলোড' : 'Download Image'}</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
            >
              {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
