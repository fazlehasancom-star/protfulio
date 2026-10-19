import { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2, Languages, Palette, Sparkles } from 'lucide-react';
import { ProfileInfo, Language } from '../types';
import { academicEducation, professionalTraining, certifiedCourses, expertiseItems } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  profile: ProfileInfo;
}

export default function CVModal({ isOpen, onClose, lang, profile }: CVModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="cv-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#0d0e12] border border-[#ff5e28]/40 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ff5e28]/25 bg-black/90">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Curriculum Vitae (CV) - {profile.nameEn}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff5e28]/20 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#ff5e28]" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090a0f] text-slate-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <h1 className="text-3xl font-black text-white uppercase tracking-tight">
                {profile.nameEn}
              </h1>
              <p className="text-sm font-bold text-[#ff7a45] mt-1 tracking-wider uppercase">
                {lang === 'bn' ? profile.titleBn : 'Video Editor & Motion Designer'}
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
                {profile.bioEn}
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff5e28]" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ff5e28]" />
              <span>Core Competencies & Tools</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertiseItems.map((item) => (
                <div key={item.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                  <span className="font-bold text-white block">{item.title}</span>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">{item.description}</span>
                  {item.tools && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {item.tools.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-300 text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Training & Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Professional Training & Certifications
            </h2>
            <div className="space-y-3">
              {/* As-Sunnah SBMC Training */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-teal-500/20 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{professionalTraining.institution}</span>
                  <span className="text-teal-300 font-mono text-[11px]">{professionalTraining.batch}</span>
                </div>
                <p className="text-slate-300 font-medium">{professionalTraining.courseName}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {professionalTraining.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{t.name}: <strong className="text-slate-200">{t.tools}</strong></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certified Courses: Spoken English & Calligraphy Painting */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifiedCourses.map((c) => (
                  <div
                    key={c.id}
                    className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                      c.iconType === 'language'
                        ? 'bg-sky-500/[0.03] border-sky-500/25'
                        : 'bg-amber-500/[0.03] border-amber-500/25'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">{c.institution}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        c.iconType === 'language' ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      }`}>
                        Certified
                      </span>
                    </div>
                    <p className="font-semibold text-slate-200">{c.title}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {c.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 font-mono border border-white/5">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Academic Education
            </h2>
            <div className="space-y-3">
              {academicEducation.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">{edu.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-orange-300 font-mono">{edu.year}</span>
                    <span className="block text-[10px] text-slate-500">{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
