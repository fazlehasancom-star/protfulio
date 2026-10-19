import { useEffect } from 'react';
import { X, Clock, CheckCircle2, Tag, Layers, ExternalLink } from 'lucide-react';
import { VideoProject, Language } from '../types';

interface VideoModalProps {
  project: VideoProject | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function VideoModal({ project, isOpen, onClose, lang }: VideoModalProps) {
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

  const youtubeWatchUrl = project.youtubeUrl
    ? project.youtubeUrl
        .replace(
          'https://www.youtube.com/embed/',
          project.aspectRatio === '9:16'
            ? 'https://www.youtube.com/shorts/'
            : 'https://www.youtube.com/watch?v='
        )
        .split('?')[0]
    : null;

  return (
    <div
      id="video-player-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="video-player-modal"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          project.aspectRatio === '9:16' ? 'max-w-xl' : 'max-w-4xl'
        } bg-[#0d0e12] border border-[#ff5e28]/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,94,40,0.2)] my-auto animate-in zoom-in-95 duration-200`}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#ff5e28]/25 bg-black/90">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#ff5e28]/15 border border-[#ff5e28]/35 text-[#ff8142] text-xs font-semibold">
              {categoryLabel}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              {project.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-video-modal-btn"
            className="p-1.5 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-[#ff5e28]/20 border border-[#ff5e28]/30 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Embed Area */}
        <div
          className={`relative w-full ${
            project.aspectRatio === '9:16'
              ? 'aspect-[9/16] max-h-[65vh] mx-auto bg-black'
              : 'aspect-video bg-black'
          } flex items-center justify-center overflow-hidden`}
        >
          {project.videoSrc ? (
            <video
              src={project.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
              poster={project.thumbnail}
            >
              Your browser does not support HTML5 video.
            </video>
          ) : project.youtubeUrl ? (
            <iframe
              src={project.youtubeUrl}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title={project.title}
            />
          ) : project.vimeoEmbedUrl ? (
            <iframe
              src={project.vimeoEmbedUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title={project.title}
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Modal Information Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[35vh] overflow-y-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">{description}</p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-black/60 border border-[#ff5e28]/25">
              <span className="text-xs text-slate-400 block flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-slate-500" />
                {lang === 'bn' ? 'ক্লায়েন্ট / চ্যানেল:' : 'Client / Brand:'}
              </span>
              <span className="text-sm font-semibold text-white mt-0.5 block truncate">
                {project.client}
              </span>
            </div>

            {project.views && (
              <div className="p-3 rounded-xl bg-[#ff5e28]/10 border border-[#ff5e28]/30">
                <span className="text-xs text-[#ff8142] block flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'প্রজেক্ট ধরন:' : 'Project Type:'}
                </span>
                <span className="text-sm font-bold text-orange-200 mt-0.5 block">
                  {project.views}
                </span>
              </div>
            )}

            <div className="p-3 rounded-xl bg-black/60 border border-[#ff5e28]/25 col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-400 block">
                {lang === 'bn' ? 'ব্যবহৃত টুলস:' : 'Tools Used:'}
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features Checklist */}
          {keyFeatures && keyFeatures.length > 0 && (
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                {lang === 'bn' ? 'প্রধান বৈশিষ্ট্যসমূহ:' : 'Key Execution Highlights:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5e28] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* External YouTube / Vimeo link */}
          {youtubeWatchUrl && (
            <div className="pt-2 flex justify-end">
              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#ff7a45] hover:text-white transition-colors font-semibold"
              >
                <span>{lang === 'bn' ? 'ইউটিউবে সরাসরি দেখুন' : 'Watch on YouTube'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {project.vimeoId && (
            <div className="pt-2 flex justify-end">
              <a
                href={`https://vimeo.com/${project.vimeoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#ff7a45] hover:text-white transition-colors"
              >
                <span>{lang === 'bn' ? 'ভিমিওতে সরাসরি দেখুন' : 'Watch on Vimeo'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
