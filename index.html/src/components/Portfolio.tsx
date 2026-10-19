import { useState, useMemo, useEffect } from 'react';
import {
  Film,
  Palette,
  Play,
  Maximize2,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ZoomIn
} from 'lucide-react';
import { VideoProject, DesignProject, Language } from '../types';

interface PortfolioProps {
  lang: Language;
  videoProjects: VideoProject[];
  designProjects: DesignProject[];
  onOpenVideo: (project: VideoProject) => void;
  onOpenDesign: (project: DesignProject) => void;
  onOpenPureImage?: (project: DesignProject) => void;
}

export default function Portfolio({
  lang,
  videoProjects,
  designProjects,
  onOpenVideo,
  onOpenDesign,
  onOpenPureImage
}: PortfolioProps) {
  const [activeMainTab, setActiveMainTab] = useState<'video' | 'design'>('video');
  const [videoFilter, setVideoFilter] = useState<string>('all');
  const [designFilter, setDesignFilter] = useState<string>('all');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Responsive display: desktop (3 per row, 2 rows = 6 items), mobile (2 per row, 2 rows = 4 items)
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  const [showAllVideos, setShowAllVideos] = useState<boolean>(false);
  const [showAllDesigns, setShowAllDesigns] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter video projects
  const filteredVideos = useMemo(() => {
    if (videoFilter === 'all') return videoProjects;
    if (videoFilter === 'commercial') {
      return videoProjects.filter((p) => p.category === 'commercial');
    }
    if (videoFilter === 'reels') {
      return videoProjects.filter((p) => p.category === 'reels' || p.aspectRatio === '9:16');
    }
    if (videoFilter === 'motion') {
      return videoProjects.filter(
        (p) =>
          p.id.includes('motion') ||
          p.id.includes('animation') ||
          p.categoryLabel.toLowerCase().includes('motion') ||
          p.categoryLabel.toLowerCase().includes('animation')
      );
    }
    return videoProjects;
  }, [videoProjects, videoFilter]);

  // Filter design projects
  const filteredDesigns = useMemo(() => {
    if (designFilter === 'all') return designProjects;
    return designProjects.filter((p) => p.category === designFilter);
  }, [designProjects, designFilter]);

  // Initial display limits: Desktop = 3 columns x 2 rows = 6 items; Mobile = 2 columns x 2 rows = 4 items
  const initialLimit = isDesktop ? 6 : 4;

  const visibleVideos = useMemo(() => {
    return showAllVideos ? filteredVideos : filteredVideos.slice(0, initialLimit);
  }, [showAllVideos, filteredVideos, initialLimit]);

  const hasMoreVideos = filteredVideos.length > initialLimit;

  const visibleDesigns = useMemo(() => {
    return showAllDesigns ? filteredDesigns : filteredDesigns.slice(0, initialLimit);
  }, [showAllDesigns, filteredDesigns, initialLimit]);

  const hasMoreDesigns = filteredDesigns.length > initialLimit;

  const handleVideoFilterChange = (filterId: string) => {
    setVideoFilter(filterId);
    setShowAllVideos(false);
  };

  const handleDesignFilterChange = (filterId: string) => {
    setDesignFilter(filterId);
    setShowAllDesigns(false);
  };

  // Carousel handlers for design showcase
  const nextCarousel = () => {
    if (designProjects.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % designProjects.length);
  };

  const prevCarousel = () => {
    if (designProjects.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + designProjects.length) % designProjects.length);
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-[#ff5e28]/20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/85 border border-[#ff5e28]/40 text-[#ff7a48] text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,94,40,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5e28]" />
            <span>{lang === 'bn' ? 'মাই প্রজেক্টস' : 'MY PROJECTS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                মাই <span className="text-[#ff5e28]">প্রজেক্ট গ্যালারি</span>
              </>
            ) : (
              <>
                Selected <span className="text-[#ff5e28]">Work Showcase</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'bn'
              ? 'বাস্তব ক্লায়েন্ট ও ব্র্যান্ডের জন্য তৈরি প্রফেশনাল ভিডিও এডিটিং, মোশন গ্রাফিক্স, সোশ্যাল রিলস এবং ক্রিয়েটিভ গ্রাফিক ডিজাইন।'
              : 'Explore high-production video edits, vertical short-form reels, motion graphics, and creative graphic designs.'}
          </p>

          {/* Primary Main Tabs (Video Editing vs Graphic Design) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setActiveMainTab('video')}
              id="filter-video-projects"
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeMainTab === 'video'
                  ? 'bg-[#ff5e28] text-white shadow-[0_0_24px_rgba(255,94,40,0.55)] scale-105 border border-[#ff7a48]'
                  : 'bg-black/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              <Film className={`w-4 h-4 ${activeMainTab === 'video' ? 'text-white' : 'text-orange-400'}`} />
              <span>{lang === 'bn' ? 'ভিডিও এডিটিং' : 'Video Editing'}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeMainTab === 'video' ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {videoProjects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('design')}
              id="filter-design-projects"
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeMainTab === 'design'
                  ? 'bg-teal-500 text-slate-950 shadow-[0_0_24px_rgba(45,212,191,0.55)] scale-105 border border-teal-300'
                  : 'bg-black/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              <Palette className={`w-4 h-4 ${activeMainTab === 'design' ? 'text-slate-950' : 'text-teal-300'}`} />
              <span>{lang === 'bn' ? 'গ্রাফিক ডিজাইন' : 'Graphic Design'}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeMainTab === 'design' ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {designProjects.length}
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: VIDEO EDITING SECTION */}
        {activeMainTab === 'video' && (
          <div id="sub-section-video-editing" className="space-y-8 animate-in fade-in duration-300">
            {/* Header & Sub-filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ff5e28]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e28]/15 border border-[#ff5e28]/40 flex items-center justify-center text-[#ff5e28] shadow-[0_0_15px_rgba(255,94,40,0.2)]">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {lang === 'bn' ? 'ভিডিও এডিট' : 'Video Editing'}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#ff5e28]/20 text-[#ff8f66] text-xs font-mono font-bold">
                      {filteredVideos.length} {lang === 'bn' ? 'টি প্রজেক্ট' : 'Projects'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lang === 'bn'
                      ? 'ইউটিউব লং-ফর্ম, সোশ্যাল মিডিয়া রিলস ও কমার্শিয়াল ভিডিও বিজ্ঞাপন'
                      : 'Commercial video ads, viral social reels, and YouTube longforms'}
                  </p>
                </div>
              </div>

              {/* Sub Category Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 bg-black/60 p-1.5 rounded-xl border border-slate-800">
                {[
                  { id: 'all', label: 'All', labelBn: 'সবগুলো' },
                  { id: 'commercial', label: 'Commercial', labelBn: 'কমার্শিয়াল' },
                  { id: 'reels', label: 'Vertical Reels (9:16)', labelBn: 'ভার্টিকাল রিলস' },
                  { id: 'motion', label: 'Motion Graphics', labelBn: 'মোশন' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleVideoFilterChange(item.id)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      videoFilter === item.id
                        ? 'bg-[#ff5e28] text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'bn' ? item.labelBn : item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Cards Grid: 2 columns on mobile (showing 4 initially = 2x2), 3 on desktop (showing 6 initially = 3x2) */}
            {filteredVideos.length === 0 ? (
              <div className="rounded-3xl bg-[#0e1017]/80 border border-[#ff5e28]/25 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ff5e28]/15 border border-[#ff5e28]/30 flex items-center justify-center text-[#ff5e28] mx-auto">
                  <Film className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {lang === 'bn' ? 'কোনো ভিডিও পাওয়া যায়নি' : 'No Videos Found'}
                </h4>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
                  {visibleVideos.map((project) => (
                    <div
                      key={project.id}
                      id={`video-card-${project.id}`}
                      onClick={() => onOpenVideo(project)}
                      className="group relative rounded-xl sm:rounded-2xl bg-[#0e1017]/90 border border-[#ff5e28]/25 hover:border-[#ff5e28]/80 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(255,94,40,0.25)] flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                    >
                      {/* Card Thumbnail Area */}
                      <div className="relative aspect-video w-full bg-black overflow-hidden">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src.includes('maxresdefault.jpg')) {
                              target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
                            }
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-black/30 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-1.5 inset-x-1.5 sm:top-3 sm:inset-x-3 flex items-center justify-between z-10">
                          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/80 text-orange-300 text-[9px] sm:text-[11px] font-bold border border-[#ff5e28]/40 backdrop-blur-md">
                            {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-black/80 text-slate-300 text-[9px] sm:text-[11px] font-mono flex items-center gap-0.5 sm:gap-1 border border-white/10 backdrop-blur-md">
                            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400" />
                            {project.duration}
                          </span>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                          <div className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-[#ff5e28] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(255,94,40,0.7)]">
                            <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-white ml-0.5 text-white" />
                          </div>
                        </div>

                        {/* Aspect Ratio Badge */}
                        {project.aspectRatio === '9:16' && (
                          <span className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 z-10 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded bg-[#ff5e28]/90 text-white text-[8px] sm:text-[10px] font-bold tracking-wider uppercase">
                            9:16 REEL
                          </span>
                        )}
                      </div>

                      {/* Card Body */}
                      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                        <div>
                          <h4 className="text-xs sm:text-base md:text-lg font-bold text-white group-hover:text-[#ff7a45] transition-colors line-clamp-1">
                            {lang === 'bn' ? project.titleBn : project.title}
                          </h4>
                          <p className="text-[10px] sm:text-xs text-slate-300/90 mt-0.5 sm:mt-1 line-clamp-2 leading-tight sm:leading-relaxed">
                            {lang === 'bn' ? project.descriptionBn : project.description}
                          </p>
                        </div>

                        {/* Tools and Client */}
                        <div className="pt-2 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-xs">
                          <div className="flex flex-wrap gap-1">
                            {project.toolsUsed.slice(0, 2).map((tool) => (
                              <span
                                key={tool}
                                className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-[9px] sm:text-[10px]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                          <span className="text-slate-400 font-medium truncate max-w-[65px] sm:max-w-[120px]">
                            {project.client}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* See More / Show Less Button for Videos */}
                {hasMoreVideos && (
                  <div className="flex justify-center pt-6 sm:pt-8">
                    <button
                      onClick={() => setShowAllVideos((prev) => !prev)}
                      className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ff5e28] to-[#ff3b00] hover:from-[#ff6e3b] hover:to-[#ff4c14] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(255,94,40,0.35)] hover:shadow-[0_0_35px_rgba(255,94,40,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#ff7a48]/60"
                    >
                      <span>
                        {showAllVideos
                          ? (lang === 'bn' ? 'কম দেখুন' : 'Show Less')
                          : (lang === 'bn' ? 'আরো দেখুন' : 'See More')}
                      </span>
                      {showAllVideos ? (
                        <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* TAB 2: GRAPHIC DESIGN SECTION */}
        {activeMainTab === 'design' && (
          <div id="sub-section-graphic-design" className="space-y-8 animate-in fade-in duration-300">
            {/* Header & Sub-filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-teal-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/40 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {lang === 'bn' ? 'গ্রাফিক ডিজাইন' : 'Graphic Design'}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-xs font-mono font-bold">
                      {filteredDesigns.length} {lang === 'bn' ? 'টি প্রজেক্ট' : 'Projects'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lang === 'bn'
                      ? 'ইউটিউব থাম্বনেইল ও পোস্টার, প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস (৩ডি শোকেস সহ), ফটো ম্যানিপুলেশন এবং টাইপোগ্রাফি'
                      : 'YouTube Thumbnails & Posters, Product Branding & Ads (incl. 3D Showcases), Photo Manipulation & Typography'}
                  </p>
                </div>
              </div>

              {/* Sub Category Filters */}
              <div className="flex flex-wrap items-center gap-1.5 bg-black/60 p-1.5 rounded-xl border border-slate-800">
                {[
                  { id: 'all', label: 'All', labelBn: 'সবগুলো' },
                  {
                    id: 'thumbnail-poster',
                    label: '01-Thumbnails & Posters',
                    labelBn: '০১-থাম্বনেইল ও পোস্টার'
                  },
                  {
                    id: 'product-branding',
                    label: '02-Product Branding & Ads',
                    labelBn: '০২-প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস'
                  },
                  {
                    id: 'photo-manipulation',
                    label: '03-Photo Manipulation',
                    labelBn: '০৩-ফটো ম্যানিপুলেশন'
                  },
                  {
                    id: 'typography',
                    label: '04-Typography',
                    labelBn: '০৪-টাইপোগ্রাফি'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleDesignFilterChange(item.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      designFilter === item.id
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'bn' ? item.labelBn : item.label}
                  </button>
                ))}
              </div>
            </div>

            {filteredDesigns.length === 0 ? (
              <div className="rounded-3xl bg-[#0e1017]/80 border border-teal-500/25 p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mx-auto">
                  <Palette className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {lang === 'bn' ? 'কোনো প্রজেক্ট পাওয়া যায়নি' : 'No Designs Found'}
                </h4>
              </div>
            ) : (
              <>
                {/* Featured Carousel Showcase for Graphic Design */}
                {designProjects.length > 0 && designProjects[carouselIndex] && (
                  <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1017] to-[#07080a] border border-teal-500/30 p-4 sm:p-6 shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        {lang === 'bn' ? 'ফিচার্ড আর্টবোর্ড প্রিভিউ' : 'Featured Artboard Slider'}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={prevCarousel}
                          className="p-2 rounded-xl bg-white/5 hover:bg-teal-500/20 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                          aria-label="Previous artwork"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-mono text-slate-400">
                          {carouselIndex + 1} / {designProjects.length}
                        </span>
                        <button
                          onClick={nextCarousel}
                          className="p-2 rounded-xl bg-white/5 hover:bg-teal-500/20 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                          aria-label="Next artwork"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Slider Active Item */}
                    <div
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
                    >
                      <div
                        onClick={() => onOpenDesign(designProjects[carouselIndex])}
                        className="lg:col-span-7 bg-black/60 rounded-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4 border border-teal-500/20 h-[300px] sm:h-[400px] relative cursor-pointer"
                        title={lang === 'bn' ? 'ক্লিক করে বড় ও বিস্তারিত দেখুন' : 'Click to view larger with details'}
                      >
                        <img
                          src={designProjects[carouselIndex].image}
                          alt={designProjects[carouselIndex].title}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const fallback = designProjects[carouselIndex].sourceFileName;
                            if (fallback && fallback.startsWith('http') && e.currentTarget.src !== fallback) {
                              e.currentTarget.src = fallback;
                            }
                          }}
                          className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                        />

                        {/* Quick View Badge */}
                        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/85 text-teal-300 text-xs font-bold border border-teal-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'বিস্তারিত ও বড় করে দেখুন' : 'View Details & Project'}</span>
                        </div>
                      </div>

                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                            {lang === 'bn'
                              ? designProjects[carouselIndex].categoryLabelBn
                              : designProjects[carouselIndex].categoryLabel}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {designProjects[carouselIndex].dimensions}
                          </span>
                        </div>

                        <h4
                          onClick={() => onOpenDesign(designProjects[carouselIndex])}
                          className="text-2xl font-extrabold text-white tracking-tight hover:text-teal-300 transition-colors cursor-pointer"
                        >
                          {lang === 'bn'
                            ? designProjects[carouselIndex].titleBn
                            : designProjects[carouselIndex].title}
                        </h4>

                        <p className="text-sm text-slate-300 leading-relaxed">
                          {lang === 'bn'
                            ? designProjects[carouselIndex].descriptionBn
                            : designProjects[carouselIndex].description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {designProjects[carouselIndex].toolsUsed.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-0.5 rounded bg-white/5 text-slate-300 text-xs border border-white/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 flex items-center gap-3">
                          <button
                            onClick={() => onOpenDesign(designProjects[carouselIndex])}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-md cursor-pointer"
                          >
                            <Maximize2 className="w-4 h-4" />
                            <span>{lang === 'bn' ? 'বিস্তারিত ও বড় করে দেখুন' : 'View Details & Artwork'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Design Gallery Grid: 2 columns on mobile (showing 4 initially = 2x2), 3 on desktop (showing 6 initially = 3x2) */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 pt-4">
                  {visibleDesigns.map((project) => (
                    <div
                      key={project.id}
                      id={`design-card-${project.id}`}
                      className="group relative rounded-xl sm:rounded-2xl bg-[#0e1017]/90 border border-teal-500/20 hover:border-teal-500/70 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(45,212,191,0.2)] flex flex-col justify-between hover:-translate-y-1"
                    >
                      {/* Artwork Container: First click opens DesignModal with text & larger image */}
                      <div
                        onClick={() => onOpenDesign(project)}
                        className="relative aspect-[4/3] w-full bg-black/60 flex items-center justify-center p-2 sm:p-3 overflow-hidden cursor-pointer"
                        title={lang === 'bn' ? 'ক্লিক করে বড় ও বিস্তারিত দেখুন' : 'Click to view larger with details'}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            const fallback = project.sourceFileName;
                            if (fallback && fallback.startsWith('http') && e.currentTarget.src !== fallback) {
                              e.currentTarget.src = fallback;
                            }
                          }}
                          className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        />

                        {/* Hover Inspect Icon */}
                        <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/85 hover:bg-teal-500 text-white hover:text-slate-950 text-xs backdrop-blur-md transition-all shadow-md border border-white/20 flex items-center gap-1 font-bold">
                            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-300 group-hover:text-slate-950" />
                          </div>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3">
                          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/80 text-teal-300 text-[8px] sm:text-[10px] font-bold border border-teal-500/30 backdrop-blur-md">
                            {lang === 'bn' ? project.categoryLabelBn : project.categoryLabel}
                          </span>
                        </div>
                      </div>

                      {/* Card Body: Clicking opens DesignModal for details */}
                      <div
                        onClick={() => onOpenDesign(project)}
                        className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-1.5 sm:space-y-2 border-t border-teal-500/10 cursor-pointer"
                      >
                        <div>
                          <h4 className="text-xs sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-1">
                            {lang === 'bn' ? project.titleBn : project.title}
                          </h4>
                          <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 line-clamp-2 leading-tight sm:leading-relaxed">
                            {lang === 'bn' ? project.descriptionBn : project.description}
                          </p>
                        </div>

                        <div className="pt-1.5 sm:pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] sm:text-xs text-slate-400">
                          <span className="truncate max-w-[65px] sm:max-w-none">{project.client}</span>
                          <span className="font-mono text-[9px] sm:text-[11px] text-teal-400/90">
                            {project.dimensions}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* See More / Show Less Button for Graphic Designs */}
                {hasMoreDesigns && (
                  <div className="flex justify-center pt-6 sm:pt-8">
                    <button
                      onClick={() => setShowAllDesigns((prev) => !prev)}
                      className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(45,212,191,0.35)] hover:shadow-[0_0_35px_rgba(45,212,191,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-teal-300/60"
                    >
                      <span>
                        {showAllDesigns
                          ? (lang === 'bn' ? 'কম দেখুন' : 'Show Less')
                          : (lang === 'bn' ? 'আরো দেখুন' : 'See More')}
                      </span>
                      {showAllDesigns ? (
                        <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

