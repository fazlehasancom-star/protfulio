import { useState, useEffect, MouseEvent } from 'react';
import { Download, Share2, Check, Menu, X, Mail, Sparkles } from 'lucide-react';
import { Language, ProfileInfo } from '../types';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCV: () => void;
  profile: ProfileInfo;
}

export default function Navbar({ lang, onToggleLang, onOpenCV, profile }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'portfolio', 'expertise', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'হোম', labelEn: 'Home', href: '#home' },
    { id: 'portfolio', label: 'মাই প্রজেক্টস', labelEn: 'My Projects', href: '#portfolio' },
    { id: 'expertise', label: 'কোর এক্সপার্টিজ অ্যান্ড স্কিলস', labelEn: 'Core Expertise & Skills', href: '#expertise' },
    { id: 'education', label: 'এডুকেশন', labelEn: 'Education', href: '#education' },
    { id: 'contact', label: 'যোগাযোগ', labelEn: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${profile.nameEn} - Video Editor & Motion Designer`,
      text: `Explore ${profile.nameEn}'s Video Editing, Motion Graphics & Creative Portfolio.`,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 3000);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080a]/92 backdrop-blur-md border-b border-[#ff5e28]/25 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo - Minimal Aesthetic */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="brand-logo-link"
            className="group focus:outline-none shrink-0"
            title={lang === 'bn' ? 'হোম পেজে যান' : 'Go to top'}
          >
            <BrandLogo lang={lang} size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden xl:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-[#ff5e28]/35 backdrop-blur-md shadow-[0_0_15px_rgba(255,94,40,0.12)]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white/15 text-white shadow-sm border border-[#ff5e28]/50 shadow-[0_0_10px_rgba(255,94,40,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{lang === 'bn' ? link.label : link.labelEn}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e28]" />}
                </a>
              );
            })}

            {/* Download CV CTA */}
            <button
              onClick={onOpenCV}
              id="nav-download-cv-btn"
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 text-[#ff7a45] hover:text-white hover:bg-[#ff5e28]/20 border border-[#ff5e28]/30 hover:border-[#ff5e28]/60 cursor-pointer ml-1"
              title={lang === 'bn' ? 'সিভি দেখুন / ডাউনলোড করুন' : 'View / Download CV'}
            >
              <Download className="w-3.5 h-3.5 text-[#ff5e28]" />
              <span>{lang === 'bn' ? 'ডাউনলোড সিভি' : 'Download CV'}</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              id="lang-toggle-btn"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-[#ff5e28]/30 text-xs font-bold transition-all cursor-pointer shadow-sm"
              title={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <span className={lang === 'en' ? 'text-[#ff5e28]' : 'text-slate-400'}>EN</span>
              <span className="text-slate-500">/</span>
              <span className={lang === 'bn' ? 'text-[#2dd4bf]' : 'text-slate-400'}>বাং</span>
            </button>

            {/* Share Button */}
            <button
              id="share-portfolio-btn"
              onClick={handleShare}
              className="hidden sm:flex p-2.5 rounded-full bg-white/5 hover:bg-[#ff5e28]/15 text-slate-300 hover:text-white border border-[#ff5e28]/35 hover:border-[#ff5e28] transition-all cursor-pointer relative group shadow-sm"
              title={lang === 'bn' ? 'পোর্টফোলিও লিংক শেয়ার করুন' : 'Share Portfolio'}
            >
              {linkCopied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4 text-slate-300 group-hover:text-white" />
              )}
              {linkCopied && (
                <span className="absolute -bottom-8 right-0 text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap shadow-lg">
                  {lang === 'bn' ? 'লিংক কপি হয়েছে!' : 'Link Copied!'}
                </span>
              )}
            </button>

            {/* Contact CTA */}
            <a
              id="nav-contact-cta-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff6b3d] to-[#ff4722] hover:from-[#ff7d52] hover:to-[#ff5836] rounded-full shadow-[0_0_20px_rgba(255,94,40,0.35)] hover:shadow-[0_0_26px_rgba(255,94,40,0.55)] transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'কন্টাক্ট করুন' : 'Hire Me'}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#07080a]/95 backdrop-blur-xl border-b border-[#ff5e28]/30 shadow-2xl p-4 sm:p-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#ff5e28]/20 text-[#ff7a45] border border-[#ff5e28]/40'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{lang === 'bn' ? link.label : link.labelEn}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#ff5e28]" />}
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#ff5e28]/20 text-[#ff7a45] font-bold text-sm border border-[#ff5e28]/40"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সিভি ডাউনলোড করুন' : 'Download CV'}</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff6b3d] to-[#ff4722] text-white font-bold text-sm shadow-lg shadow-orange-600/30"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Me'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
