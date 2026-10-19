import { MouseEvent } from 'react';
import { Play, Mail, Sparkles, CheckCircle2, Film } from 'lucide-react';
import { Language, ProfileInfo } from '../types';

interface HeroProps {
  lang: Language;
  profile: ProfileInfo;
  avatarUrl: string;
  onOpenPhotoModal?: () => void;
}

export default function Hero({ lang, profile, avatarUrl }: HeroProps) {
  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#ff5e28]/12 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5e28]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center my-auto">
        {/* Mobile View Layout (sm / md) */}
        <div className="lg:hidden flex flex-col items-center text-center max-w-xl mx-auto my-auto py-2">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0e12]/90 border border-[#ff5e28]/40 text-slate-200 text-xs font-semibold tracking-wider uppercase backdrop-blur-xl shadow-[0_0_16px_rgba(255,94,40,0.2)] mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5e28] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5e28]" />
            </span>
            <span className="text-white font-bold">
              {lang === 'bn' ? 'ভিডিও এডিটর' : 'Video Editor'}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-[#ff7a48] font-bold">
              {lang === 'bn' ? 'মোশন ডিজাইনার' : 'Motion Designer'}
            </span>
          </div>

          {/* Mobile Display Name Heading */}
          <div className="relative w-full flex flex-col items-center justify-center mb-3">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[0.95] uppercase select-none text-center">
              <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                FAZLE
              </span>
              <span className="block bg-gradient-to-r from-[#ff6b3d] via-[#ff4d26] to-[#ff2b18] bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(255,75,35,0.5)]">
                HASAN
              </span>
            </h1>
          </div>

          {/* Mobile Avatar Image with Inner Circular Neon Ring */}
          <div
            className="relative z-10 w-64 h-80 sm:w-76 sm:h-96 flex items-end justify-center group mb-4 cursor-default select-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
            }}
          >
            {/* Soft Ambient Inner Glow */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#ff371a]/25 blur-[50px] pointer-events-none" />

            {/* Inside Circular Neon Ring */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[3px] border-[#ff371a] shadow-[0_0_20px_#ff371a,0_0_45px_rgba(255,55,26,0.85),inset_0_0_16px_rgba(255,55,26,0.55)] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]" />

            <img
              src={avatarUrl}
              alt={profile.nameEn}
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== profile.defaultAvatar) {
                  target.src = profile.defaultAvatar;
                }
              }}
              className="relative z-10 w-full h-full object-contain object-bottom select-none transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                filter: `
                  drop-shadow(0 0 2px rgba(255, 60, 25, 0.95))
                  drop-shadow(0 0 8px rgba(255, 45, 20, 0.75))
                  drop-shadow(0 0 16px rgba(230, 30, 15, 0.35))
                  contrast(106%)
                  brightness(104%)
                `
              }}
            />
          </div>

          {/* Subtitle Tagline */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug px-3 relative z-20 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                ভিজ্যুয়াল স্টোরিটেলিং ও <span className="text-[#ff5e28]">সিনেমাটিক এডিটিং</span>
              </>
            ) : (
              <>
                Visual Storytelling & <span className="text-[#ff5e28]">Cinematic Editing</span>
              </>
            )}
          </h2>

          <p className="text-sm text-slate-300/90 mt-3 max-w-md px-4 leading-relaxed">
            {lang === 'bn' ? profile.bio : profile.bioEn}
          </p>

          {/* Action CTAs */}
          <div className="flex items-center justify-center gap-3 mt-6 px-4 relative z-20 w-full max-w-sm mx-auto">
            <a
              href="#portfolio"
              onClick={(e) => handleScrollTo(e, '#portfolio')}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ff6b3d] to-[#ff4722] hover:from-[#ff7d52] hover:to-[#ff5836] text-white font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(255,94,40,0.4)] active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>{lang === 'bn' ? 'মাই প্রজেক্টস' : 'My Projects'}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0e1017]/90 hover:bg-[#181a24] text-slate-200 hover:text-white font-bold text-sm tracking-wide border border-white/15 hover:border-[#ff5e28]/50 active:scale-95 transition-all cursor-pointer backdrop-blur-xl"
            >
              <Mail className="w-4 h-4 text-[#ff5e28]" />
              <span>{lang === 'bn' ? 'কন্টাক্ট মি' : 'Contact Me'}</span>
            </a>
          </div>
        </div>

        {/* Desktop View Layout (lg / xl / 2xl) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Bio and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-7 text-left max-w-2xl lg:pl-4 xl:pl-8 my-auto">
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0e12]/90 border border-[#ff5e28]/40 text-slate-200 text-xs font-semibold tracking-wider uppercase backdrop-blur-xl shadow-[0_0_20px_rgba(255,94,40,0.22)] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5e28] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5e28]" />
              </span>
              <span className="text-white font-bold tracking-wider">
                {lang === 'bn' ? 'ভিডিও এডিটর' : 'Video Editor'}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[#ff7a48] font-bold tracking-wider">
                {lang === 'bn' ? 'মোশন ডিজাইনার' : 'Motion Designer'}
              </span>
            </div>

            {/* Display Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.93] uppercase select-none">
              <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                FAZLE
              </span>
              <span className="block bg-gradient-to-r from-[#ff6b3d] via-[#ff4d26] to-[#ff2b18] bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(255,75,35,0.45)]">
                HASAN
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] max-w-xl">
              {lang === 'bn' ? (
                <>
                  ভিজ্যুয়াল স্টোরিটেলিং ও{' '}
                  <span className="text-[#ff5e28] underline decoration-[#ff5e28]/40 underline-offset-8">
                    সিনেমাটিক এডিটিং
                  </span>
                </>
              ) : (
                <>
                  Visual Storytelling &{' '}
                  <span className="text-[#ff5e28] underline decoration-[#ff5e28]/40 underline-offset-8">
                    Cinematic Editing
                  </span>
                </>
              )}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              {lang === 'bn' ? profile.bio : profile.bioEn}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, '#portfolio')}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ff6b3d] to-[#ff4722] hover:from-[#ff7d52] hover:to-[#ff5836] text-white font-bold text-sm tracking-wide shadow-[0_4px_24px_rgba(255,94,40,0.45)] hover:shadow-[0_6px_30px_rgba(255,94,40,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>{lang === 'bn' ? 'মাই প্রজেক্টস' : 'My Projects'}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#0e1017]/90 hover:bg-[#181a24] text-slate-200 hover:text-white font-bold text-sm tracking-wide border border-white/15 hover:border-[#ff5e28]/60 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer backdrop-blur-xl shadow-lg"
              >
                <Mail className="w-4 h-4 text-[#ff5e28]" />
                <span>{lang === 'bn' ? 'কন্টাক্ট মি' : 'Contact Me'}</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Film className="w-3.5 h-3.5 text-[#ff5e28]" />
                <span>Premiere Pro & After Effects</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#2dd4bf]" />
                <span>Kinetic Motion FX</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>High CTR Retention Focus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Cutout Avatar with Inner Circular Neon Ring */}
          <div className="lg:col-span-5 flex items-center justify-end relative">
            <div className="relative w-full max-w-none flex flex-col items-center justify-end">
              <div
                className="relative w-full h-[480px] md:h-[540px] lg:h-[580px] flex items-end justify-center overflow-visible group cursor-default select-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 76%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 76%, transparent 100%)'
                }}
              >
                {/* Soft Ambient Inner Glow behind head & torso */}
                <div className="absolute top-12 lg:top-14 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-[#ff371a]/25 blur-[60px] pointer-events-none" />

                {/* Inside Circular Neon Ring */}
                <div className="absolute top-10 lg:top-12 left-1/2 -translate-x-1/2 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-[3.5px] border-[#ff371a] shadow-[0_0_25px_#ff371a,0_0_55px_rgba(255,55,26,0.85),inset_0_0_20px_rgba(255,55,26,0.6)] pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]" />

                <img
                  src={avatarUrl}
                  alt={profile.nameEn}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== profile.defaultAvatar) {
                      target.src = profile.defaultAvatar;
                    }
                  }}
                  className="relative z-10 w-full h-full object-contain object-bottom select-none transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    filter: `
                      drop-shadow(0 0 2px rgba(255, 60, 25, 0.95))
                      drop-shadow(0 0 8px rgba(255, 45, 20, 0.75))
                      drop-shadow(0 0 16px rgba(230, 30, 15, 0.35))
                      contrast(106%)
                      brightness(104%)
                    `
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
