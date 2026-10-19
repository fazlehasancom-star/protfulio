import { ArrowUp, Heart, Youtube, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { ProfileInfo, Language } from '../types';
import BrandLogo from './BrandLogo';

interface FooterProps {
  lang: Language;
  profile: ProfileInfo;
}

export default function Footer({ lang, profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] border-t border-[#ff5e28]/25 text-slate-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <BrandLogo lang={lang} size="sm" showTagline={true} />

            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'bn'
                ? 'কাঁচা মুহূর্তগুলোকে রূপ দিই চিরন্তন গল্পে। ভিডিও এডিটিং, মোশন গ্রাফিক্স ও সোশ্যাল মিডিয়া ব্র্যান্ডিং।'
                : 'Cutting raw moments into timeless stories. High-retention video editing and digital visual design.'}
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'bn' ? 'কুইক লিংকস' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#ff7a45] transition-colors">
                  {lang === 'bn' ? 'হোম' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#ff7a45] transition-colors">
                  {lang === 'bn' ? 'মাই প্রজেক্টস' : 'My Projects Gallery'}
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#ff7a45] transition-colors">
                  {lang === 'bn' ? 'কোর এক্সপার্টিজ' : 'Core Expertise & Skills'}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#ff7a45] transition-colors">
                  {lang === 'bn' ? 'এডুকেশন ও ট্রেনিং' : 'Education & Training'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff7a45] transition-colors">
                  {lang === 'bn' ? 'যোগাযোগ' : 'Contact Me'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'bn' ? 'যোগাযোগ' : 'Direct Reach'}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff5e28]" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors truncate">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {profile.whatsapp}
                </a>
              </li>
              <li className="text-slate-400 pt-1 leading-relaxed">
                {lang === 'bn' ? profile.locationBn : profile.location}
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'bn' ? 'সোশ্যাল মিডিয়া' : 'Connect & Follow'}
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-rose-600 hover:text-white text-slate-300 border border-white/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white text-slate-300 border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-600 hover:text-white text-slate-300 border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-sky-600 hover:text-white text-slate-300 border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
              {lang === 'bn'
                ? 'সপ্তাহের যে কোনো দিন প্রজেক্টের জরুরি প্রয়োজনে কানেক্ট করতে পারেন।'
                : 'Open for international and local creative contracts.'}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © {currentYear} {profile.nameEn}. All rights reserved. Crafted for visual impact.
          </p>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff5e28]/20 text-slate-300 hover:text-white border border-[#ff5e28]/30 transition-all cursor-pointer text-xs"
          >
            <span>{lang === 'bn' ? 'উপরে যান' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff5e28]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
