import {
  Film,
  Palette,
  Eye,
  FileText,
  Mic,
  Users,
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { ExpertiseItem, Language } from '../types';

interface ExpertiseProps {
  lang: Language;
  items: ExpertiseItem[];
}

export default function Expertise({ lang, items }: ExpertiseProps) {
  const getIcon = (iconName: ExpertiseItem['iconName']) => {
    switch (iconName) {
      case 'video':
        return <Film className="w-6 h-6 text-[#ff5e28]" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-teal-400" />;
      case 'eye':
        return <Eye className="w-6 h-6 text-amber-400" />;
      case 'file-text':
        return <FileText className="w-6 h-6 text-indigo-400" />;
      case 'mic':
        return <Mic className="w-6 h-6 text-rose-400" />;
      case 'users':
        return <Users className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#ff5e28]" />;
    }
  };

  return (
    <section
      id="expertise"
      className="py-20 sm:py-24 bg-[#08090b]/60 backdrop-blur-[2px] text-slate-100 relative overflow-hidden border-t border-[#ff5e28]/20"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff5e28]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/85 border border-[#ff5e28]/40 text-[#ff7a48] text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,94,40,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-[#ff5e28]" />
            <span>{lang === 'bn' ? 'দক্ষতা ও বিশেষত্ব' : 'CORE SKILLS & EXPERTISE'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                কোর <span className="text-[#ff5e28]">এক্সপার্টিজ অ্যান্ড স্কিলস</span>
              </>
            ) : (
              <>
                Core Expertise & <span className="text-[#ff5e28]">Skills</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'ভিজ্যুয়াল স্টোরিটেলিং থেকে শুরু করে সিনেমাটিক ভিডিও এডিটিং ও টিম কোঅর্ডিনেশনের সমন্বিত দক্ষতা।'
              : 'End-to-end creative workflow encompassing video production, branding, visual architecture, and execution.'}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              id={`expertise-card-${item.id}`}
              className="group p-6 rounded-2xl bg-[#0d0e12]/85 border border-[#ff5e28]/25 hover:border-[#ff5e28]/70 transition-all duration-300 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(255,94,40,0.2)] flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#ff5e28]/50 group-hover:bg-[#ff5e28] transition-colors" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#ff7a45] transition-colors">
                  {lang === 'bn' ? item.titleBn : item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300/90 mt-2 leading-relaxed">
                  {lang === 'bn' ? item.descriptionBn : item.description}
                </p>
              </div>

              {/* Tools Tags if available */}
              {item.tools && item.tools.length > 0 && (
                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-md bg-[#161822] text-[#ff8142] text-[11px] font-medium border border-[#ff5e28]/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
