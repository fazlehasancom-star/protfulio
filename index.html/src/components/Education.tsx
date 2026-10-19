import {
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building2,
  BadgeCheck,
  Languages,
  Palette
} from 'lucide-react';
import { EducationItem, ProfessionalTraining, CertifiedCourse, Language } from '../types';

interface EducationProps {
  lang: Language;
  academicList: EducationItem[];
  professional: ProfessionalTraining;
  certifiedCourses?: CertifiedCourse[];
}

export default function Education({ lang, academicList, professional, certifiedCourses }: EducationProps) {
  const getIcon = (iconName: EducationItem['iconName']) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-[#ff5e28]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-teal-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#ff5e28]" />;
    }
  };

  return (
    <section
      id="education"
      className="py-20 sm:py-24 bg-slate-950/70 backdrop-blur-[2px] text-slate-100 relative overflow-hidden border-t border-[#ff5e28]/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/85 border border-[#ff5e28]/40 text-[#ff7a48] text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,94,40,0.2)]">
            <GraduationCap className="w-3.5 h-3.5 text-[#ff5e28]" />
            <span>{lang === 'bn' ? 'শিক্ষাগত যোগ্যতা ও সার্টিফিকেশন' : 'EDUCATION & CERTIFICATIONS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                এডুকেশন ও <span className="text-[#ff5e28]">প্রফেশনাল ট্রেনিং</span>
              </>
            ) : (
              <>
                Academic & <span className="text-[#ff5e28]">Professional</span> Growth
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'প্রাতিষ্ঠানিক একাডেমিক ব্যাকগ্রাউন্ড, ইন্ডাস্ট্রিয়াল মিডিয়া স্কিল ট্রেনিং এবং ভাষা ও চারুকলার বিশেষায়িত সার্টিফিকেশন।'
              : 'Formal academic background grounded in discipline combined with rigorous hands-on technical training, language fluency, and creative calligraphy artistry.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Education (Col 6) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <BookOpen className="w-5 h-5 text-[#ff5e28]" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                {lang === 'bn' ? 'একাডেমিক শিক্ষা' : 'Academic Education'}
              </h3>
            </div>

            <div className="space-y-4">
              {academicList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0e1017]/90 border border-[#ff5e28]/25 hover:border-[#ff5e28]/60 transition-all duration-300 shadow-lg relative group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                        {getIcon(item.iconName)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-[#ff7a45] transition-colors">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                            <Calendar className="w-3 h-3 text-orange-400" />
                            {item.year}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30 font-semibold">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 pl-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Training & Certifications (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Award className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                {lang === 'bn' ? 'প্রফেশনাল স্কিল ট্রেনিং' : 'Professional Training'}
              </h3>
            </div>

            {/* As-Sunnah SBMC Training Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0e1017] to-[#07080a] border border-teal-500/30 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Institution Header */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold font-mono">
                    {professional.batch}
                  </span>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                    <BadgeCheck className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'সার্টিফাইড স্কিলস' : 'Verified Skills'}</span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white mt-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>{lang === 'bn' ? professional.institutionBn : professional.institution}</span>
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold text-teal-300">
                  {professional.courseName}
                </p>
              </div>

              {/* Topics Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {lang === 'bn' ? 'কোর্স মডিউল ও বাস্তব প্রজেক্টস:' : 'Course Modules & Live Work:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {professional.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-500/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        <span className="text-xs font-bold text-white">
                          {lang === 'bn' ? topic.nameBn : topic.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1.5 pl-6 font-mono">
                        {topic.tools}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Professional Certifications Section (Spoken English & Calligraphy Painting) */}
            {certifiedCourses && certifiedCourses.length > 0 && (
              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {lang === 'bn' ? 'ভাষা ও ক্রিয়েটিভ আর্ট সার্টিফিকেশন' : 'Language & Creative Certifications'}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {lang === 'bn' ? 'বিশেষায়িত কোর্স' : 'Certified Programs'}
                  </span>
                </div>

                <div className="space-y-4">
                  {certifiedCourses.map((course) => (
                    <div
                      key={course.id}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${
                        course.iconType === 'language'
                          ? 'from-[#0e141e] to-[#080b12] border-sky-500/30 hover:border-sky-500/60 shadow-[0_4px_20px_rgba(14,165,233,0.08)]'
                          : 'from-[#171110] to-[#0a0808] border-amber-500/30 hover:border-amber-500/60 shadow-[0_4px_20px_rgba(245,158,11,0.08)]'
                      } border transition-all duration-300 relative group overflow-hidden`}
                    >
                      {/* Ambient background glow */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none ${
                          course.iconType === 'language' ? 'bg-sky-500/10' : 'bg-amber-500/10'
                        }`}
                      />

                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 relative z-10">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2.5 rounded-xl border ${
                              course.iconType === 'language'
                                ? 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            }`}
                          >
                            {course.iconType === 'language' ? (
                              <Languages className="w-5 h-5" />
                            ) : (
                              <Palette className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <h5 className="text-base font-bold text-white group-hover:text-[#ff7a45] transition-colors">
                              {lang === 'bn' ? course.titleBn : course.title}
                            </h5>
                            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold mt-0.5">
                              <Building2 className="w-3.5 h-3.5 text-slate-400" />
                              <span>{lang === 'bn' ? course.institutionBn : course.institution}</span>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`shrink-0 text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 border ${
                            course.iconType === 'language'
                              ? 'bg-sky-500/15 text-sky-300 border-sky-500/40'
                              : 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                          }`}
                        >
                          <BadgeCheck className="w-3 h-3" />
                          <span>{lang === 'bn' ? course.credentialBn : course.credential}</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed relative z-10">
                        {lang === 'bn' ? course.descriptionBn : course.description}
                      </p>

                      {/* Highlights Tags */}
                      <div className="mt-3 pt-3 border-t border-white/5 relative z-10">
                        <div className="flex flex-wrap gap-1.5">
                          {(lang === 'bn' ? course.highlightsBn : course.highlights).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 text-[11px] font-mono border border-white/10 flex items-center gap-1"
                            >
                              <CheckCircle2
                                className={`w-3 h-3 ${
                                  course.iconType === 'language' ? 'text-sky-400' : 'text-amber-400'
                                }`}
                              />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
