import { useState, FormEvent } from 'react';
import {
  Mail,
  Phone,
  Facebook,
  ExternalLink,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  MessageSquare,
  Sparkles,
  Clock,
  Check
} from 'lucide-react';
import { ProfileInfo, Language } from '../types';

interface ContactProps {
  lang: Language;
  profile: ProfileInfo;
}

export default function Contact({ lang, profile }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedFacebook, setCopiedFacebook] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyFacebook = () => {
    navigator.clipboard.writeText(profile.socials.facebook);
    setCopiedFacebook(true);
    setTimeout(() => setCopiedFacebook(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger WhatsApp or mailto action
    const text = encodeURIComponent(
      `Hello ${profile.nameEn},\nMy name is ${formData.name} (${formData.email}).\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/8801408022969?text=${text}`, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#07080a] text-slate-100 relative overflow-hidden border-t border-[#ff5e28]/20"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5e28]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/85 border border-[#ff5e28]/40 text-[#ff7a48] text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,94,40,0.2)]">
            <MessageSquare className="w-3.5 h-3.5 text-[#ff5e28]" />
            <span>{lang === 'bn' ? 'যোগাযোগ' : 'GET IN TOUCH'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {lang === 'bn' ? (
              <>
                প্রজেক্ট নিয়ে <span className="text-[#ff5e28]">কথা বলুন</span>
              </>
            ) : (
              <>
                Let&apos;s Build Something <span className="text-[#ff5e28]">Extraordinary</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'আপনার প্রজেক্টের গল্প দর্শক পর্যন্ত পৌঁছানোর সেরা পরিকল্পনা করতে সরাসরি মেসেজ দিন বা কল করুন।'
              : 'Have a project in mind, need viral video editing, or high CTR thumbnails? Reach out directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0e1017] to-[#0a0b0f] border border-[#ff5e28]/30 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div>
                  <span className="text-sm font-bold text-white block">
                    {lang === 'bn' ? 'প্রজেক্টের জন্য উন্মুক্ত' : 'Available for New Projects'}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-[#ff5e28]" />
                    {lang === 'bn' ? 'রেসপন্স টাইম: ২ ঘণ্টার মধ্যে' : 'Response within 2 hours'}
                  </span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-slate-800 hover:border-[#ff5e28]/60 transition-all duration-300 shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#ff5e28] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      {lang === 'bn' ? 'ইমেইল অ্যাড্রেস' : 'Official Email'}
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-bold text-white hover:text-[#ff7a45] transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-slate-800 hover:border-emerald-500/60 transition-all duration-300 shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      {lang === 'bn' ? 'হোয়াটসঅ্যাপ ও ফোন' : 'WhatsApp & Phone'}
                    </span>
                    <a
                      href={profile.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {profile.whatsapp}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/80">
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold transition-all border border-emerald-500/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'Start WhatsApp Chat'}</span>
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-slate-800 hover:border-blue-500/60 transition-all duration-300 shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      {lang === 'bn' ? 'ফেসবুক' : 'Facebook Profile'}
                    </span>
                    <a
                      href={profile.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      Fazle Hasan
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyFacebook}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy Facebook link"
                >
                  {copiedFacebook ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/80">
                <a
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-500/15 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-bold transition-all border border-blue-500/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'ফেসবুক প্রোফাইল দেখুন' : 'Visit Facebook Profile'}</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-slate-800 shadow-lg flex items-center gap-3">
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {lang === 'bn' ? 'লোকেশন' : 'Location'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {lang === 'bn' ? profile.locationBn : profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0e12]/90 border border-[#ff5e28]/35 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                {lang === 'bn' ? 'মেসেজ পাঠান' : 'Send a Direct Message'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {lang === 'bn'
                  ? 'আপনার প্রজেক্টের রিকোয়ারমেন্ট ও বিস্তারিত শেয়ার করুন।'
                  : 'Fill in the details below to discuss deliverables, deadlines, and pricing.'}
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">
                    {lang === 'bn' ? 'মেসেজ পাঠানো হয়েছে!' : 'Message Received!'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'bn'
                      ? 'ধন্যবাদ! আমি খুব দ্রুত আপনার সাথে যোগাযোগ করব।'
                      : 'Redirecting to WhatsApp for instant connection. Thank you!'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-slate-800 focus:border-[#ff5e28] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'bn' ? 'ইমেইল অ্যাড্রেস *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-slate-800 focus:border-[#ff5e28] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'bn' ? 'আপনার ভাবনা শেয়ার করুন *' : 'Share your vision *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-slate-800 focus:border-[#ff5e28] focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#ff6b3d] to-[#ff4722] hover:from-[#ff7d52] hover:to-[#ff5836] text-white font-bold text-sm tracking-wide shadow-[0_4px_24px_rgba(255,94,40,0.45)] hover:shadow-[0_6px_30px_rgba(255,94,40,0.6)] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'মেসেজ পাঠান (হোয়াটসঅ্যাপ)' : 'Send Message (WhatsApp)'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
