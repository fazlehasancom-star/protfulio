import { VideoProject, DesignProject, ExpertiseItem, EducationItem, ProfessionalTraining, CertifiedCourse, ProfileInfo } from '../types';

export const profileData: ProfileInfo = {
  name: 'ফজলে হাসান',
  nameEn: 'Fazle Hasan',
  title: 'ভিডিও এডিটর অ্যান্ড মোশন ডিজাইনার',
  titleBn: 'ভিডিও এডিটর অ্যান্ড মোশন ডিজাইনার',
  bio: 'উচ্চমানের ভিডিও এডিটিং ও ডায়নামিক মোশন ডিজাইনের মাধ্যমে ব্র্যান্ড ও কনটেন্ট ক্রিয়েটরদের কাজকে অনন্য রূপ দেই।',
  bioEn: 'Transforming raw footage into high-retention video stories, viral reels, and dynamic motion graphics.',
  email: 'fazlehasan200@gmail.com',
  whatsapp: '+8801408022969',
  whatsappUrl: 'https://wa.me/8801408022969?text=Hello%20Fazle%20Hasan,%20let%27s%20discuss%20a%20project!',
  location: 'Dhaka, Bangladesh',
  locationBn: 'ঢাকা, বাংলাদেশ',
  defaultAvatar: '/fazle-avatar.jpg',
  logo: '/fazle-logo.jpg',
  socials: {
    youtube: 'https://www.youtube.com/@fazlehasan3610',
    facebook: 'https://www.facebook.com/share/1HRtGy2cgk/',
    instagram: 'https://www.instagram.com/hasan28231_?dlrf=bWR0cmpxZ3NhYXU=',
    linkedin: 'https://linkedin.com'
  }
};

export const videoProjects: VideoProject[] = [
  {
    id: 'yt-sabrly-saas-animation',
    title: 'Sabrly | High-Quality SaaS Animation & Video Production',
    titleBn: 'Sabrly • হাই-কোয়ালিটি SaaS অ্যানিমেশন ও ভিডিও প্রোডাকশন',
    category: 'commercial',
    categoryLabel: 'SaaS Motion & Video (16:9)',
    categoryLabelBn: 'SaaS মোশন ও ভিডিও (১৬:৯)',
    youtubeUrl: 'https://www.youtube.com/embed/C_aMaAQiJb4?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/C_aMaAQiJb4/maxresdefault.jpg',
    duration: 'Video',
    client: 'Sabrly',
    views: 'SaaS Showcase',
    aspectRatio: '16:9',
    description: 'High-quality SaaS product animation and commercial video production featuring dynamic UI motion graphics, kinetic typography, sleek transitions, and polished sound design.',
    descriptionBn: 'উচ্চমানের SaaS প্রোডাক্ট অ্যানিমেশন ও কমার্শিয়াল ভিডিও প্রোডাকশন — ডায়নামিক ইউআই মোশন গ্রাফিক্স, কাইনেটিক টাইপোগ্রাফি এবং সিনেমাটিক সাউন্ড ডিজাইন শোকেস।',
    toolsUsed: ['After Effects', 'Premiere Pro', 'Illustrator'],
    keyFeatures: [
      'Dynamic SaaS UI Motion Graphics',
      'Smooth Camera & Kinetic Pacing',
      'High-Impact Typography & Branding',
      'Synchronized Audio FX & Mastering'
    ],
    keyFeaturesBn: [
      'ডায়নামিক SaaS ইউআই মোশন গ্রাফিক্স',
      'স্মুথ ক্যামেরা ট্র্যাকিং ও কাইনেটিক পেসিং',
      'হাই-ইমপ্যাক্ট টাইপোগ্রাফি ও ব্র্যান্ডিং',
      'নিখুঁত অডিও এফেক্ট ও মাস্টারিং'
    ]
  },
  {
    id: 'yt-green-screen-before-after',
    title: 'Before vs After Green Screen Video Editing | English Scientist Ad',
    titleBn: 'Before vs After গ্রিন স্ক্রিন ভিডিও এডিটিং • কমার্শিয়াল অ্যাড',
    category: 'reels',
    categoryLabel: 'Green Screen & VFX Reel (9:16)',
    categoryLabelBn: 'গ্রিন স্ক্রিন ও ভিএফএক্স রিল (৯:১৬)',
    youtubeUrl: 'https://www.youtube.com/embed/BEcfz6hcXJA?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/BEcfz6hcXJA/maxresdefault.jpg',
    duration: 'Shorts',
    client: 'English Scientist / Branding',
    views: 'VFX Breakdown',
    aspectRatio: '9:16',
    description: 'Before vs After green screen keying, advanced chroma background replacement, cinematic color grading, dynamic sound design, and retention-focused vertical editing.',
    descriptionBn: 'গ্রিন স্ক্রিন বিফোর-আফটার কম্প্যারিসন, নিখুঁত ক্রোমা কিয়িং, সিনেমাটিক ব্যাকগ্রাউন্ড রিপ্লেসমেন্ট, কালার গ্রেডিং এবং ডায়নামিক সাউন্ড ডিজাইনে তৈরি শর্ট-ফর্ম রিল।',
    toolsUsed: ['Premiere Pro', 'After Effects', 'Chroma Key'],
    keyFeatures: [
      'Precision Green Screen Chroma Keying',
      'Contextual Background Environment Compositing',
      'Cinematic Color Match & Grading',
      'High-Retention Before/After Reveal'
    ],
    keyFeaturesBn: [
      'নিখুঁত গ্রিন স্ক্রিন ক্রোমা কিয়িং',
      'রিয়েলিস্টিক ব্যাকগ্রাউন্ড কম্পোজিটিং',
      'সিনেমাটিক কালার ম্যাচিং ও গ্রেডিং',
      'হাই-রিটেনশন বিফোর/আফটার রিভিল'
    ]
  },
  {
    id: 'yt-bap-ka-beta-style',
    title: 'Bap ka beta style video',
    titleBn: 'Bap ka beta style video • ডায়নামিক রিল এডিট',
    category: 'reels',
    categoryLabel: 'Vertical Reel (9:16)',
    categoryLabelBn: 'ভার্টিকাল রিলস (৯:১৬)',
    youtubeUrl: 'https://www.youtube.com/embed/PU8NqcOHsSA?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/PU8NqcOHsSA/maxresdefault.jpg',
    duration: 'Shorts',
    client: 'Fazle Hasan',
    views: 'YouTube Shorts',
    aspectRatio: '9:16',
    description: 'Bap ka beta style short-form video edit featuring fast-paced cuts, punch-in framing, dynamic sound effects, and high-retention pacing.',
    descriptionBn: 'দ্রুতগতির কাট, ডায়নামিক জুম-ইন ফ্রেমিং এবং সাউন্ড ডিজাইনে তৈরি শর্ট-ফর্ম রিল ভিডিও এডিট।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'Fast-Paced Retention Cuts',
      'Dynamic Zoom & Framing',
      'Clean Voice & SFX Balancing',
      'Short-Form Rhythm Pacing'
    ],
    keyFeaturesBn: [
      'দ্রুতগতির হাই-রিটেনশন কাট',
      'ডায়নামিক জুম ও ফ্রেমিং',
      'ক্লিয়ার ভয়েস ও সাউন্ড এফেক্ট',
      'শর্ট-ফর্ম রিদম পেসিং'
    ]
  },
  {
    id: 'yt-english-coaching-content',
    title: 'Content for a English coaching center',
    titleBn: 'Content for a English coaching center • প্রমোশনাল রিল',
    category: 'reels',
    categoryLabel: 'Promotional Reel (9:16)',
    categoryLabelBn: 'প্রমোশনাল রিলস (৯:১৬)',
    youtubeUrl: 'https://www.youtube.com/embed/tCnZDoAUF7I?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/tCnZDoAUF7I/maxresdefault.jpg',
    duration: 'Shorts',
    client: 'English Coaching Center',
    views: 'Promotional Reel',
    aspectRatio: '9:16',
    description: 'Promotional vertical video edit crafted for an English coaching center with glowing kinetic typography, contextual B-roll overlays, and animated call-to-action cards.',
    descriptionBn: 'ইংলিশ কোচিং সেন্টারের জন্য তৈরি প্রমোশনাল রিল ভিডিও। এতে গ্লোয়িং কাইনেটিক টাইপোগ্রাফি, প্রাসঙ্গিক বি-রোল ফুটেজ এবং অ্যানিমেটেড কল-টু-অ্যাকশন কার্ড যুক্ত করা হয়েছে।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'Kinetic Bangla & English Typography',
      'Contextual B-Roll Cutaways',
      'Animated Branch & Contact Cards',
      'Clean Audio Mastering'
    ],
    keyFeaturesBn: [
      'কাইনেটিক বাংলা ও ইংলিশ টাইপোগ্রাফি',
      'প্রাসঙ্গিক বি-রোল ফুটেজ',
      'অ্যানিমেটেড ব্রাঞ্চ ও কন্টাক্ট কার্ড',
      'ক্লিয়ার অডিও মাস্টারিং'
    ]
  },
  {
    id: 'yt-nafess-salim-review-edit',
    title: 'Nafess Salim Review Video Edit | Professional Video Editing & Motion Design',
    titleBn: 'Nafess Salim Review Video Edit • প্রফেশনাল ভিডিও এডিটিং ও মোশন ডিজাইন',
    category: 'commercial',
    categoryLabel: 'Video Edit & Motion',
    categoryLabelBn: 'ভিডিও এডিটিং ও মোশন',
    youtubeUrl: 'https://www.youtube.com/embed/SqfHZQFRauk?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/SqfHZQFRauk/maxresdefault.jpg',
    duration: 'Video',
    client: 'Portfolio Showcase',
    views: 'Review Video Edit',
    aspectRatio: '16:9',
    description: 'Nafess Salim Review Video Edit showcasing professional video editing, motion graphics, smooth visual transitions, and polished sound design.',
    descriptionBn: 'নাফিস সালিম রিভিউ ভিডিও এডিট — প্রফেশনাল ভিডিও এডিটিং, মোশন গ্রাফিক্স, স্মুথ ট্রানজিশন এবং নিখুঁত সাউন্ড ডিজাইনের পোর্টফোলিও শোকেস।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'Professional Storytelling & Pacing',
      'Custom Motion Graphics & Overlays',
      'Seamless Visual Transitions',
      'Layered SFX & Audio Mixing'
    ],
    keyFeaturesBn: [
      'প্রফেশনাল স্টোরিটেলিং ও পেসিং',
      'কাস্টম মোশন গ্রাফিক্স ও ওভারলে',
      'স্মুথ ভিজ্যুয়াল ট্রানজিশন',
      'লেয়ারড সাউন্ড এফেক্ট ও অডিও মিক্সিং'
    ]
  },
  {
    id: 'yt-send-button-ui-motion',
    title: 'Send Button Micro-Interaction & UI Motion Animation',
    titleBn: 'Send Button Micro-Interaction & UI Motion Animation • ইউআই মোশন',
    category: 'commercial',
    categoryLabel: 'UI Motion',
    categoryLabelBn: 'ইউআই মোশন',
    youtubeUrl: 'https://www.youtube.com/embed/zgQB2x_CtOQ?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/zgQB2x_CtOQ/maxresdefault.jpg',
    duration: 'UI Motion',
    client: 'After Effects Portfolio',
    views: 'UI Motion',
    aspectRatio: '16:9',
    description: 'Send Button Micro-Interaction & UI Motion Animation crafted in Adobe After Effects using custom shape layers, keyframe graph editor curves, and synchronized sound design.',
    descriptionBn: 'অ্যাডোবি আফটার ইফেক্টস (After Effects) দিয়ে তৈরি সেন্ড বাটন মাইক্রো-ইন্টারঅ্যাকশন এবং ইউআই মোশন (UI Motion) অ্যানিমেশন। এতে কাস্টম শেইপ লেয়ার, স্মুথ গ্রাফ এডিটর কি-ফ্রেম এবং সাউন্ড সিঙ্ক ব্যবহার করা হয়েছে।',
    toolsUsed: ['After Effects', 'Premiere Pro'],
    keyFeatures: [
      'UI Motion & Micro-Interaction',
      'Smooth Graph Editor Keyframe Curves',
      'Custom Shape Layer Morphing',
      'Synchronized Tactile Sound FX'
    ],
    keyFeaturesBn: [
      'ইউআই মোশন ও মাইক্রো-ইন্টারঅ্যাকশন',
      'স্মুথ গ্রাফ এডিটর ও কি-ফ্রেম অ্যানিমেশন',
      'কাস্টম শেইপ লেয়ার ও ভেক্টর মোশন',
      'নিখুঁত সাউন্ড সিঙ্ক'
    ]
  },
  {
    id: 'yt-assunnah-skill-promo',
    title: 'As-Sunnah Skill Development Promo | Motion Design & Video Editing Showreel',
    titleBn: 'As-Sunnah Skill Development Promo • মোশন ডিজাইন ও ভিডিও এডিটিং রিল',
    category: 'reels',
    categoryLabel: 'Course Promo Reel (9:16)',
    categoryLabelBn: 'কোর্স প্রোমো রিল (৯:১৬)',
    youtubeUrl: 'https://www.youtube.com/embed/fWyFxvcKySo?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/fWyFxvcKySo/maxresdefault.jpg',
    duration: 'Shorts',
    client: 'As-Sunnah Skill Development Institute',
    views: 'Promo Showreel',
    aspectRatio: '9:16',
    description: 'As-Sunnah Skill Development Promo combining motion design, kinetic Bengali captions, picture-in-picture skill cards, and high-retention editing in Premiere Pro & After Effects.',
    descriptionBn: 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউটের প্রোমো রিল — প্রিমিয়ার প্রো ও আফটার ইফেক্টসে তৈরি মোশন ডিজাইন, কাইনেটিক বাংলা ক্যাপশন এবং ডায়নামিক ভিডিও এডিটিং শোকেস।',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    keyFeatures: [
      'High-Energy Opening Hook',
      'Motion Graphics & PIP Cards',
      'Kinetic Bangla Typography',
      'Balanced Voice & Crowd Audio'
    ],
    keyFeaturesBn: [
      'হাই-এনার্জি ওপেনিং হুক',
      'মোশন গ্রাফিক্স ও পিআইপি কার্ড',
      'কাইনেটিক বাংলা টাইপোগ্রাফি',
      'ব্যালেন্সড ভয়েস ও অডিও মাস্টারিং'
    ]
  },
  {
    id: 'yt-degrees-vs-skills-motion',
    title: 'Degrees vs Skills | Video Editing & Motion Design Showreel',
    titleBn: 'Degrees vs Skills • ভিডিও এডিটিং ও মোশন ডিজাইন রিল',
    category: 'commercial',
    categoryLabel: 'Motion Design (9:16)',
    categoryLabelBn: 'মোশন ডিজাইন (৯:১৬)',
    youtubeUrl: 'https://www.youtube.com/embed/mUQeDKh4I5k?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/mUQeDKh4I5k/maxresdefault.jpg',
    duration: 'Shorts',
    client: 'As-Sunnah Skill Development Institute',
    views: 'Motion Showreel',
    aspectRatio: '9:16',
    description: 'Degrees vs Skills — Video Editing & Motion Design Showreel crafted in Adobe After Effects and Premiere Pro featuring custom motion graphics, smooth transitions, and sound design.',
    descriptionBn: 'ডিগ্রি বনাম স্কিলস — অ্যাডোবি আফটার ইফেক্টস ও প্রিমিয়ার প্রো দিয়ে তৈরি ভিডিও এডিটিং, কাস্টম মোশন গ্রাফিক্স এবং সাউন্ড ডিজাইন শোরিল।',
    toolsUsed: ['After Effects', 'Premiere Pro'],
    keyFeatures: [
      'Custom After Effects Motion Graphics',
      'Engaging Pacing & Visual Storytelling',
      'Dynamic Pop-up Graphics & Transitions',
      'Clean Sound FX & Audio Mastering'
    ],
    keyFeaturesBn: [
      'কাস্টম আফটার ইফেক্টস মোশন গ্রাফিক্স',
      'আকর্ষণীয় পেসিং ও ভিজ্যুয়াল স্টোরিটেলিং',
      'ডায়নামিক পপ-আপ গ্রাফিক্স ও ট্রানজিশন',
      'সাউন্ড এফেক্ট ও অডিও মাস্টারিং'
    ]
  }
];

export const designProjects: DesignProject[] = [
  // 01 - YouTube Thumbnails & Posters
  {
    id: 'design-class-work-21',
    title: 'Qualities of an Ideal Teacher — YouTube Thumbnail',
    titleBn: 'শিক্ষক কেমন হওয়া উচিত? • নূরুল কুরআন একাডেমি থাম্বনেইল',
    category: 'thumbnail-poster',
    categoryLabel: 'YouTube Thumbnails & Posters',
    categoryLabelBn: 'ইউটিউব থাম্বনেইল ও পোস্টার',
    image: '/designs/class-work-21.jpg',
    sourceFileName: 'https://i.postimg.cc/0QbYxkkB/class-work-21.jpg',
    client: 'Nurul Quran Academy',
    dimensions: '1280x720 (16:9 HD)',
    description: 'Modern split-panel lecture thumbnail design with repeating typographic pattern, warm gold accents, and high-contrast Bengali headline.',
    descriptionBn: 'আবদুল্লাহ আল মাসউদের আলোচনার ইউটিউব থাম্বনেইল — গোল্ডেন স্প্লিট প্যানেল, রিপিটিং টেক্সট প্যাটার্ন এবং হাই-কনট্রাস্ট বাংলা হেডলাইন ডিজাইন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Split-Panel Editorial Grid',
      'Repeating Typographic Pattern',
      'Highlighted Headline Emphasis',
      'Warm Gold & Charcoal Contrast'
    ],
    keyFeaturesBn: [
      'স্প্লিট-প্যানেল এডিটোরিয়াল গ্রিড',
      'রিপিটিং টাইপোগ্রাফিক ব্যাকগ্রাউন্ড প্যাটার্ন',
      'হাইলাইটেড বাংলা হেডলাইন',
      'গোল্ডেন ও চারকোল কালার কনট্রাস্ট'
    ]
  },
  {
    id: 'design-class-owrk-20',
    title: 'Islamic Lecture Thumbnail — Khilafah in Modern State',
    titleBn: 'আধুনিক সেকুলার রাষ্ট্রে খিলাফত প্রতিষ্ঠার প্রচেষ্টা • ইউটিউব থাম্বনেইল',
    category: 'thumbnail-poster',
    categoryLabel: 'YouTube Thumbnails & Posters',
    categoryLabelBn: 'ইউটিউব থাম্বনেইল ও পোস্টার',
    image: '/designs/class-owrk-20.jpg',
    sourceFileName: 'https://i.postimg.cc/rF61X2vG/class-owrk-20.jpg',
    client: 'Khalid Muhammad Saifullah',
    dimensions: '1280x720 (16:9 HD)',
    description: 'High-impact YouTube lecture thumbnail featuring bold custom Bangla typography, clean speaker cutout, and architectural silhouette composition.',
    descriptionBn: 'খালিদ মুহাম্মাদ সাইফুল্লাহর আলোচনার জন্য তৈরি ইউটিউব থাম্বনেইল — বোল্ড বাংলা টাইপোগ্রাফি, নিখুঁত সাবজেক্ট কাটআউট এবং আর্কিটেকচারাল ব্যাকগ্রাউন্ড কম্পোজিশন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Bold 3D-Layered Bangla Typography',
      'Clean Subject Cutout & Color Grading',
      'Architectural Silhouette Backdrop',
      'High CTR Visual Hierarchy'
    ],
    keyFeaturesBn: [
      'বোল্ড লেয়ারড বাংলা টাইপোগ্রাফি',
      'নিখুঁত সাবজেক্ট কাটআউট ও কালার গ্রেডিং',
      'আর্কিটেকচারাল ব্যাকগ্রাউন্ড ব্লেন্ডিং',
      'হাই সিটিআর ভিজ্যুয়াল হায়ারার্কি'
    ]
  },
  {
    id: 'design-class-owrk-22',
    title: 'Qurani Halaqah Framework — Lecture Thumbnail & Poster',
    titleBn: 'কুরআনী হালাকার রূপরেখা • নূরুল কুরআন একাডেমি থাম্বনেইল',
    category: 'thumbnail-poster',
    categoryLabel: 'YouTube Thumbnails & Posters',
    categoryLabelBn: 'ইউটিউব থাম্বনেইল ও পোস্টার',
    image: '/designs/class-owrk-22.jpg',
    sourceFileName: 'https://i.postimg.cc/9F3d5Hvt/class-owrk-22.jpg',
    client: 'Nurul Quran Academy',
    dimensions: '1280x720 (16:9 HD)',
    description: 'Editorial-style YouTube thumbnail and poster for Abdullah Al Masud featuring a taped Polaroid frame on textured paper with crisp Bengali typography.',
    descriptionBn: 'নূরুল কুরআন একাডেমির প্রতিষ্ঠাতা আবদুল্লাহ আল মাসউদের আলোচনার থাম্বনেইল — পেপার টেক্সচার ব্যাকগ্রাউন্ডে টেপড পোলারয়েড ফ্রেম ও নান্দনিক বাংলা টাইপোগ্রাফি।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Taped Polaroid Frame Aesthetic',
      'Paper Texture Background Styling',
      'Balanced Warm & Crimson Palette',
      'Clean Brand Watermark Integration'
    ],
    keyFeaturesBn: [
      'নান্দনিক টেপড পোলারয়েড ফ্রেম লুক',
      'পেপার টেক্সচার ব্যাকগ্রাউন্ড স্টাইলিং',
      'ভারসাম্যপূর্ণ কালার প্যালেট',
      'ক্লিন ব্র্যান্ডিং ও লেআউট'
    ]
  },
  {
    id: 'design-typography-miswak',
    title: 'Reviving the Sunnah of Miswak — Bengali Typography Poster',
    titleBn: 'মিসওয়াকের সুন্নাহ • ইসলামিক বাংলা টাইপোগ্রাফি পোস্টার',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelBn: 'টাইপোগ্রাফি',
    image: '/designs/typography.png',
    sourceFileName: 'https://i.postimg.cc/vZsCmj6y/tiapography.png',
    client: 'Islamic Da’wah Poster',
    dimensions: '1080x1080 (Square Poster)',
    description: 'Expressive Bengali typographic poster highlighting the prophetic Sunnah of using Miswak, blending atmospheric photography with clean hierarchical lettering.',
    descriptionBn: 'প্রিয় নবীজি (সা.)-এর প্রিয় সুন্নাহ মিসওয়াক নিয়ে তৈরি শিল্পসম্মত বাংলা টাইপোগ্রাফি ও সচেতনতামূলক দাওয়াহ পোস্টার ডিজাইন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Expressive Bengali Calligraphic Typography',
      'Moody High-Contrast Photography Integration',
      'Balanced Focal Hierarchy',
      'Social Media Ready Square Layout'
    ],
    keyFeaturesBn: [
      'নান্দনিক বাংলা টাইপোগ্রাফি লেআউট',
      'হাই-কনট্রাস্ট ফটোগ্রাফি ও লাইটিং ব্লেন্ড',
      'স্পষ্ট ভিজ্যুয়াল হায়ারার্কি',
      'সোশ্যাল মিডিয়া শেয়ার উপযোগী কম্পোজিশন'
    ]
  },
  {
    id: 'design-arabic-course-poster',
    title: 'Learn Arabic Language Course — Educational Promo Poster',
    titleBn: 'এসো আরবি শিখি • আরবি ভাষা শিক্ষা কোর্স প্রমোশনাল পোস্টার',
    category: 'thumbnail-poster',
    categoryLabel: 'YouTube Thumbnails & Posters',
    categoryLabelBn: 'ইউটিউব থাম্বনেইল ও পোস্টার',
    image: '/designs/download-1.jpg',
    sourceFileName: 'https://i.postimg.cc/s21mf9Kz/download-(1).jpg',
    client: 'Design Bari / Educational Institute',
    dimensions: '1080x1500 (Vertical Flyer)',
    description: 'Structured educational course flyer and social media poster featuring clean information blocks, course highlights, and enrollment call-to-action.',
    descriptionBn: 'আরবি ভাষা শিক্ষা কোর্সের জন্য তৈরি প্রফেশনাল ইনফরমেশনাল পোস্টার ও ফ্লায়ার — পরিচ্ছন্ন লেআউট, কোর্সের বৈশিষ্ট্য এবং ভর্তির বিস্তারিত তথ্য উপস্থাপনা।',
    toolsUsed: ['Illustrator', 'Photoshop'],
    keyFeatures: [
      'Clean Educational Grid Architecture',
      'Structured Feature & Benefit Badges',
      'Royal Blue & Crisp White Contrast',
      'Clear Enrollment Call-to-Action'
    ],
    keyFeaturesBn: [
      'পরিচ্ছন্ন এডুকেশনাল গ্রিড লেআউট',
      'কোর্স ফিচার ও তথ্য বক্স উপস্থাপনা',
      'রয়্যাল ব্লু ও হোয়াইট কালার কনট্রাস্ট',
      'স্পষ্ট কল-টু-অ্যাকশন ও কন্টাক্ট সেকশন'
    ]
  },

  // 02 - Product Branding & Ads
  {
    id: 'design-untitled-1',
    title: 'Listen & Feel — Headphone Social Media Ad Series',
    titleBn: 'Listen And Feel • হেডফোন ব্র্যান্ডিং ও সোশ্যাল মিডিয়া অ্যাড সিরিজ',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/untitled-1.png',
    sourceFileName: 'https://i.postimg.cc/TwFr3z1k/Untitled-1.png',
    client: 'Tech & Audio Brands',
    dimensions: '1080x1080 (Ad Campaign Showcase)',
    description: 'Multi-card social media advertising showcase for premium headphones (Bose QuietComfort Ultra, New Arrival 50% Off, and Peak Trend Electronics).',
    descriptionBn: 'প্রিমিয়াম হেডফোন ব্র্যান্ডের জন্য তৈরি ৩টি সোশ্যাল মিডিয়া অ্যাড ক্রিয়েটিভের সমন্বিত শোকেস (Bose, New Arrival Offer এবং Peak Trend Electronics)।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      '3-Card Campaign Presentation',
      'Sleek Tech Lighting & Reflections',
      'Conversion-Focused Promo Badges',
      'Modern Product Hierarchy'
    ],
    keyFeaturesBn: [
      '৩টি ভিন্ন ধাঁচের হেডফোন অ্যাড কার্ড',
      'মডার্ন টেক লাইটিং ও শ্যাডো রিফ্লেকশন',
      'আকর্ষণীয় ডিসকাউন্ট ও কল-টু-অ্যাকশন ব্যাজ',
      'প্রিমিয়াম প্রোডাক্ট প্রেজেন্টেশন'
    ]
  },
  {
    id: 'design-class-work-15',
    title: "Afsara's Shoes — Sneaker Social Media Ad Creative",
    titleBn: "Afsara's Shoes • স্নিকার প্রোডাক্ট ব্র্যান্ডিং ও অ্যাড ডিজাইন",
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/class-work-15.jpg',
    sourceFileName: 'https://i.postimg.cc/jdVH0YGZ/class-work-15.jpg',
    client: "Afsara's Shoes",
    dimensions: '1080x1080 (Square)',
    description: 'Stylish footwear social media advertisement featuring dynamic angled sneaker placement, forest green brand stripe, barcode accent, and size callout.',
    descriptionBn: 'ফুটওয়্যার ব্র্যান্ড Afsara\'s Shoes-এর জন্য তৈরি সোশ্যাল মিডিয়া অ্যাড — ফরেস্ট গ্রিন ব্র্যান্ড স্ট্রাইপ, বারকোড অ্যাকসেন্ট ও ডায়নামিক স্নিকার প্লেসমেন্ট।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Dynamic Floating Shoe Angle',
      'Forest Green & Cream Color Harmony',
      'Minimalist Barcode & Size Graphic',
      'Realistic Ground Contact Shadow'
    ],
    keyFeaturesBn: [
      'ডায়নামিক ফ্লোটিং স্নিকার অ্যাঙ্গেল',
      'ফরেস্ট গ্রিন ও ক্রিম কালার প্যালেট',
      'বারকোড ও সাইজ গ্রাফিক এলিমেন্ট',
      'রিয়েলিস্টিক ড্রপ শ্যাডো'
    ]
  },
  {
    id: 'design-class-work-16',
    title: 'Natura EKOS Ryo Chuva — Fragrance Branding & Ad',
    titleBn: 'Natura EKOS • পারফিউম প্রোডাক্ট ব্র্যান্ডিং ও সোশ্যাল অ্যাড',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/class-work-16.jpg',
    sourceFileName: 'https://i.postimg.cc/TY8VMvZt/class-work-16.jpg',
    client: 'Natura EKOS',
    dimensions: '1080x1080 (Square)',
    description: 'Botanical fragrance social media advertisement combining bold geometric background lettering, tropical foliage framing, and realistic glass bottle shadow.',
    descriptionBn: 'ন্যাচারাল পারফিউম ব্র্যান্ড Natura EKOS-এর প্রমোশনাল পোস্টার — বোল্ড ব্যাকগ্রাউন্ড টাইপোগ্রাফি, ট্রপিক্যাল পাতা এবং রিয়েলিস্টিক গ্লাস বোতল শ্যাডো।',
    toolsUsed: ['Photoshop', 'Lightroom'],
    keyFeatures: [
      'Translucent Glass Bottle Highlighting',
      'Botanical Leaf Framing',
      'Bold Olive Typographic Grid',
      'Soft Directional Studio Shadow'
    ],
    keyFeaturesBn: [
      'গ্লাস পারফিউম বোতল লাইটিং ও হাইলাইট',
      'ন্যাচারাল ট্রপিক্যাল লিফ ফ্রেমিং',
      'বোল্ড অলিভ-গ্রিন টাইপোগ্রাফিক গ্রিড',
      'সফট স্টুডিও ডিরেকশনাল শ্যাডো'
    ]
  },
  {
    id: 'design-strawberry-juice-ad',
    title: 'Fresh Strawberry Juice — Beverage Commercial Ad',
    titleBn: 'Strawberry Juice • ফ্রেশ বেভারেজ প্রোডাক্ট ব্র্যান্ডিং ও অ্যাড',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/create-poster-ai.png',
    sourceFileName: 'https://i.postimg.cc/s21mf9Ky/create-such-Poster-using-AI-Recovered.png',
    client: 'Beverage Brand Campaign',
    dimensions: '1080x1350 (Portrait Ad)',
    description: 'High-energy commercial beverage poster featuring a chilled glass bottle, splashing liquid dynamics, floating strawberries, and vibrant crimson lighting.',
    descriptionBn: 'ফ্রেশ স্ট্রবেরি জুসের জন্য তৈরি হাই-এনার্জি কমার্শিয়াল পোস্টার — লিকুইড স্প্ল্যাশ ইফেক্ট, ফ্লোটিং ফ্রুট এলিমেন্টস এবং ভাইব্রেন্ট রেড গ্রেডিয়েন্ট।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Dynamic Liquid Splash Compositing',
      'Floating Fruit & Leaf Depth Blur',
      'Vibrant Crimson Studio Lighting',
      'Bold Commercial Display Typography'
    ],
    keyFeaturesBn: [
      'ডায়নামিক লিকুইড স্প্ল্যাশ কম্পোজিটিং',
      'ফ্লোটিং স্ট্রবেরি ও ডেপথ-অব-ফিল্ড ব্লার',
      'ভাইব্রেন্ট রেড স্টুডিও লাইটিং',
      'বোল্ড কমার্শিয়াল টাইপোগ্রাফি'
    ]
  },
  {
    id: 'design-reelmi-earbuds-3d',
    title: 'Realme Wireless Earbuds — 3D Podium Product Showcase',
    titleBn: 'Realme Wireless Earbuds • ৩ডি পোডিয়াম প্রোডাক্ট শোকেস',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/final-exam.png',
    sourceFileName: 'https://i.postimg.cc/Mp7trpHq/ffinal-exam.png',
    client: 'Realme Audio',
    dimensions: '1080x1080 (3D Podium)',
    description: 'Sleek monochromatic dark-slate 3D podium presentation for Realme wireless earbuds featuring floating product angles and studio spotlighting.',
    descriptionBn: 'Realme ওয়্যারলেস ইয়ারবাডসের জন্য তৈরি ডার্ক-স্লেট ৩ডি পোডিয়াম প্রোডাক্ট শোকেস — ফ্লোটিং ইয়ারবাড কম্পোজিশন ও স্টুডিও স্পটলাইট।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      '3D Cylindrical Podium Lighting',
      'Floating Earbud Depth Composition',
      'Matte Charcoal & Silver Contrast',
      'Bold Commercial Display Header'
    ],
    keyFeaturesBn: [
      'থ্রিডি সিলিন্ড্রিক্যাল পোডিয়াম লাইটিং',
      'ফ্লোটিং ইয়ারবাড ডেপথ কম্পোজিশন',
      'ম্যাট চারকোল ও সিলভার কনট্রাস্ট',
      'বোল্ড কমার্শিয়াল ডিসপ্লে টাইটেল'
    ]
  },
  {
    id: 'design-projector-3d-showcase',
    title: 'See More Feel More — Smart Projector 3D Podium Showcase',
    titleBn: 'See More Feel More • পোর্টেবল প্রজেক্টর ৩ডি প্রোডাক্ট শোকেস',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/assignment-002.png',
    sourceFileName: 'https://i.postimg.cc/Y2L6sCyq/Assinment-002.png',
    client: 'Home Cinema Tech',
    dimensions: '1080x1350 (3D Podium)',
    description: 'Futuristic purple-toned 3D pedestal showcase for a portable smart projector with glowing feature callouts and atmospheric rim lighting.',
    descriptionBn: 'পোর্টেবল স্মার্ট প্রজেক্টরের জন্য তৈরি ফিউচারিস্টিক পার্পল-টোন ৩ডি পোডিয়াম শোকেস — প্রোডাক্ট ফিচার কলআউট এবং গ্লোয়িং স্টুডিও লাইটিং।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      '3D Illuminated Podium Stage',
      'Futuristic Violet & Neon Palette',
      'Interactive Spec Callout Badges',
      'Clean Tech Product Retouching'
    ],
    keyFeaturesBn: [
      'থ্রিডি ইলুমিনেটেড পোডিয়াম স্টেজ',
      'ফিউচারিস্টিক পার্পল ও নিয়ন কালার প্যালেট',
      'স্পেসিফিকেশন কলআউট ব্যাজ',
      'ক্লিন টেক প্রোডাক্ট রিটাচিং'
    ]
  },
  {
    id: 'design-class-owrk-03',
    title: 'Lululemon Insulated Bottle — 3D Podium Product Showcase',
    titleBn: 'Lululemon ওয়াটার বোতল • ৩ডি পোডিয়াম প্রোডাক্ট শোকেস',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/class-owrk-03.jpg',
    sourceFileName: 'https://i.postimg.cc/L4gtb80q/class-owrk-03.jpg',
    client: 'Lululemon Showcase',
    dimensions: '667x800 (3D Stage)',
    description: 'Dramatic 3D product stage presentation featuring a metallic green Lululemon bottle on a dark circular pedestal with glowing crimson neon rim lighting.',
    descriptionBn: 'ডার্ক থ্রিডি পোডিয়ামের ওপর মেটালিক গ্রিন Lululemon বোতলের প্রিমিয়াম প্রোডাক্ট শোকেস — নিয়ন রেড রিম লাইটিং এবং ড্রামাটিক রিফ্লেকশন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      '3D Pedestal Stage Composition',
      'Neon Crimson Rim & Floor Glow',
      'Metallic Surface Highlighting',
      'High-Contrast Luxury Presentation'
    ],
    keyFeaturesBn: [
      'থ্রিডি পোডিয়াম স্টেজ কম্পোজিশন',
      'নিয়ন রেড রিম ও ফ্লোর গ্লো ইফেক্ট',
      'মেটালিক সারফেস রিফ্লেকশন ও লাইটিং',
      'হাই-কনট্রাস্ট প্রিমিয়াম লুক'
    ]
  },
  {
    id: 'design-gal',
    title: 'Anua Niacinamide Serum — 3D Arch Product Showcase',
    titleBn: 'Anua Skincare Serum • ৩ডি আর্চ প্রোডাক্ট শোকেস ডিজাইন',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/gal.png',
    sourceFileName: 'https://i.postimg.cc/3RVgxsNf/gal.png',
    client: 'Anua Skincare',
    dimensions: '1080x1350 (3D Arch)',
    description: 'Minimalist 3D architectural arch showcase for Anua Niacinamide 10% + TXA 4% Dark Spot Correcting Serum with monochromatic rose gradients and studio lighting.',
    descriptionBn: 'Anua Niacinamide 10% + TXA 4% সিরামের জন্য তৈরি মিনিমালিস্ট ৩ডি আর্চ প্রোডাক্ট শোকেস — সফট রোজ-পিঙ্ক গ্রেডিয়েন্ট এবং নিখুঁত স্টুডিও শ্যাডো।',
    toolsUsed: ['Photoshop', 'Lightroom'],
    keyFeatures: [
      '3D Architectural Arch Framing',
      'Monochromatic Rose-Pink Palette',
      'Crisp Glass Dropper Bottle Detail',
      'Soft Realistic Floor Shadow'
    ],
    keyFeaturesBn: [
      'মিনিমালিস্ট ৩ডি আর্চ ফ্রেমিং',
      'মনোক্রোমাটিক রোজ-পিঙ্ক কালার গ্রেডিয়েন্ট',
      'গ্লাস বোতলের নিখুঁত রিফ্লেকশন',
      'সফট রিয়েলিস্টিক ফ্লোর শ্যাডো'
    ]
  },
  {
    id: 'design-burger-hub-ad',
    title: 'Burger Hub — Love at First Bite! Fast Food Ad',
    titleBn: 'Burger Hub • ফাস্ট-ফুড প্রমোশনাল সোশ্যাল মিডিয়া অ্যাড',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/download-9.png',
    sourceFileName: 'https://i.postimg.cc/KY4fcrQZ/download-(9)-Recovered.png',
    client: 'Burger Hub',
    dimensions: '1080x1080 (Square)',
    description: 'Mouth-watering fast-food social media advertisement showcasing a double-patty gourmet burger on a glowing red podium with bold promotional typography.',
    descriptionBn: 'Burger Hub-এর জন্য তৈরি আকর্ষণীয় ফাস্ট-ফুড সোশ্যাল মিডিয়া অ্যাড — রেড পোডিয়ামের ওপর সুস্বাদু বার্গার প্রেজেন্টেশন এবং বোল্ড টাইপোগ্রাফি।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Appetizing Food Color Grading',
      '3D Red Podium Stage Placement',
      'High-Impact Fast Food Typography',
      'Clean Order Call-to-Action Layout'
    ],
    keyFeaturesBn: [
      'লোভনীয় ফুড কালার গ্রেডিং ও লাইটিং',
      'রেড পোডিয়াম স্টেজ প্লেসমেন্ট',
      'বোল্ড ফাস্ট-ফুড ব্র্যান্ড টাইপোগ্রাফি',
      'সোশ্যাল মিডিয়া অ্যাড রেডি লেআউট'
    ]
  },
  {
    id: 'design-classic-cold-8coffee',
    title: 'Classic Cold Coffee — Cafe Menu & Branding Card',
    titleBn: 'Cold Coffee • ক্যাফে ও রেস্তোরাঁ মেনু কার্ড ব্র্যান্ডিং',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold-8coffee.png',
    sourceFileName: 'https://i.postimg.cc/Mp9t8r0k/Classsic-cold-8coffee.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Minimalist espresso-brown cafe menu card showcasing chilled iced coffee with creamy swirls and glowing display typography.',
    descriptionBn: 'ক্যাফে ও রেস্তোরাঁ ব্র্যান্ডিং সিরিজের কোল্ড কফি মেনু কার্ড — এসপ্রেসো ব্রাউন রাউন্ডেড ফ্রেম, গ্লোয়িং টাইটেল এবং প্রিমিয়াম বেভারেজ প্রেজেন্টেশন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Consistent Espresso Brand Frame',
      'Appetizing Beverage Retouching',
      'Soft Glow Header Typography',
      'Print & Digital Menu Ready'
    ],
    keyFeaturesBn: [
      'এসপ্রেসো ব্রাউন ব্র্যান্ডেড ফ্রেম',
      'প্রিমিয়াম কোল্ড কফি রিটাচিং',
      'সফট গ্লো টাইটেল টাইপোগ্রাফি',
      'প্রিন্ট ও ডিজিটাল মেনু উপযোগী'
    ]
  },
  {
    id: 'design-classic-pizza-card',
    title: 'Artisan Cheesy Pizza — Restaurant Menu Card Design',
    titleBn: 'Cheesy Pizza • রেস্তোরাঁ ফুড ও মেনু কার্ড ব্র্যান্ডিং',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold-co5ffee.png',
    sourceFileName: 'https://i.postimg.cc/52spMk5W/Classsic-cold-co5ffee.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Appetizing pizza menu card featuring a dynamic hot cheese-pull slice, warm dark-roast border framing, and clean display lettering.',
    descriptionBn: 'রেস্তোরাঁ ব্র্যান্ডিং সিরিজের পিজ্জা মেনু কার্ড — ডায়নামিক চিজ-পুল স্লাইস ফটোগ্রাফি, ডার্ক-রোস্ট ফ্রেম এবং আকর্ষণীয় কালার গ্রেডিং।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Dynamic Cheese-Pull Food Shot',
      'Warm Appetite Color Enhancement',
      'Unified Bistro Card Identity',
      'High-Contrast Menu Header'
    ],
    keyFeaturesBn: [
      'ডায়নামিক চিজ-পুল ফুড ফটোগ্রাফি',
      'লোভনীয় ওয়ার্ম কালার এনহ্যান্সমেন্ট',
      'ইউনিফাইড রেস্তোরাঁ কার্ড আইডেন্টিটি',
      'হাই-কনট্রাস্ট মেনু হেডার'
    ]
  },
  {
    id: 'design-classic-fries-card',
    title: 'Crispy French Fries — Fast Food Menu Card Design',
    titleBn: 'French Fries • ফাস্ট-ফুড ও ক্যাফে মেনু কার্ড ডিজাইন',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold-cof6fee.png',
    sourceFileName: 'https://i.postimg.cc/GmXz1SPc/Classsic-cold-cof6fee.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Golden-crispy French fries menu card crafted for modern cafes and fast-food brands with cohesive brown card framing.',
    descriptionBn: 'আধুনিক ক্যাফে ও ফাস্ট-ফুড ব্র্যান্ডের জন্য তৈরি ফ্রেঞ্চ ফ্রাইজ মেনু কার্ড — গোল্ডেন-ক্রিস্পি ফুড হাইলাইট ও কোহেসিভ ব্র্যান্ড লেআউট।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Golden-Crisp Texture Highlighting',
      'Cohesive Cafe Card Architecture',
      'Clean Display Title Styling',
      'Social Story & Table Menu Ready'
    ],
    keyFeaturesBn: [
      'গোল্ডেন-ক্রিস্পি ফুড টেক্সচার হাইলাইট',
      'কোহেসিভ ক্যাফে কার্ড আর্কিটেকচার',
      'ক্লিন ডিসপ্লে টাইটেল স্টাইলিং',
      'টেবিল মেনু ও সোশ্যাল স্টোরি উপযোগী'
    ]
  },
  {
    id: 'design-classic-coldrink-card',
    title: 'Refreshing Cold Drink — Beverage Menu Card Design',
    titleBn: 'Cold Drink • রিফ্রেশিং বেভারেজ মেনু কার্ড ডিজাইন',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold-coff4ee.png',
    sourceFileName: 'https://i.postimg.cc/JzpKWd3R/Classsic-cold-coff4ee.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Vibrant mocktail and cold drink showcase card featuring chilled glass condensation, citrus garnish, and signature cafe border design.',
    descriptionBn: 'রিফ্রেশিং মকটেইল ও কোল্ড ড্রিংকস মেনু কার্ড — চিলড গ্লাস ডিটেইল, ভাইব্রেন্ট রেড কালার টোন এবং সিগনেচার ক্যাফে বর্ডার ডিজাইন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Vibrant Chilled Beverage Contrast',
      'Signature Rounded Cafe Border',
      'Luminous Title Treatment',
      'Cohesive Series Branding'
    ],
    keyFeaturesBn: [
      'ভাইব্রেন্ট চিলড বেভারেজ কনট্রাস্ট',
      'সিগনেচার রাউন্ডেড ক্যাফে বর্ডার',
      'লুমিনাস টাইটেল ট্রিটমেন্ট',
      'ধারাবাহিক সিরিজ ব্র্যান্ডিং'
    ]
  },
  {
    id: 'design-classic-sandwich-card',
    title: 'Grilled Club Sandwich — Cafe Menu Card Design',
    titleBn: 'Grilled Sandwich • ক্যাফে ফুড ও মেনু কার্ড ব্র্যান্ডিং',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold-coffee.png',
    sourceFileName: 'https://i.postimg.cc/x16gSFGj/Classsic-cold-coffee.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Stacked gourmet grilled sandwich menu card with rich food color grading and signature dark-roast cafe framing.',
    descriptionBn: 'গ্রিলড ক্লাব স্যান্ডউইচ মেনু কার্ড — লেয়ারড ফুড ফটোগ্রাফি, ন্যাচারাল কালার রিটাচিং এবং সিগনেচার ক্যাফে কার্ড ফ্রেমিং।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Crisp Layered Ingredient Detail',
      'Warm Cafe Color Harmony',
      'Clean Rounded Frame Layout',
      'Consistent Menu Series Typography'
    ],
    keyFeaturesBn: [
      'শার্প লেয়ারড স্যান্ডউইচ ডিটেইল',
      'ওয়ার্ম ক্যাফে কালার হারমনি',
      'ক্লিন রাউন্ডেড ফ্রেম লেআউট',
      'মেনু সিরিজ টাইপোগ্রাফি'
    ]
  },
  {
    id: 'design-classic-pasta-card',
    title: 'Italian Penne Pasta — Restaurant Menu Card Design',
    titleBn: 'Italian Pasta • রেস্তোরাঁ মেনু ও ফুড কার্ড ব্র্যান্ডিং',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold-coffee2.png',
    sourceFileName: 'https://i.postimg.cc/dV5nKSRt/Classsic-cold-coffee2.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Top-down culinary showcase card for Italian penne pasta in rich tomato-herb sauce within the unified cafe menu card system.',
    descriptionBn: 'ইতালিয়ান পাস্তা মেনু কার্ড ডিজাইন — টপ-ডাউন ফুড প্রেজেন্টেশন, রিচ সস কালার গ্রেডিং এবং ইউনিফাইড ক্যাফে মেনু লেআউট।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Overhead Culinary Composition',
      'Rich Sauce & Herb Color Pop',
      'Signature Cafe Card Framing',
      'Clean Branded Presentation'
    ],
    keyFeaturesBn: [
      'টপ-ডাউন ফুড কম্পোজিশন',
      'রিচ কালার ও হার্ব হাইলাইট',
      'সিগনেচার ক্যাফে কার্ড ফ্রেমিং',
      'ক্লিন ব্র্যান্ডেড প্রেজেন্টেশন'
    ]
  },
  {
    id: 'design-classic-taco-card',
    title: 'Mexican Beef Taco — Bistro Menu Card Design',
    titleBn: 'Beef Taco • বিস্ট্রো ও ক্যাফে মেনু কার্ড ডিজাইন',
    category: 'product-branding',
    categoryLabel: 'Product Branding & Ads',
    categoryLabelBn: 'প্রোডাক্ট ব্র্যান্ডিং ও অ্যাডস',
    image: '/designs/classic-cold1-coffee.png',
    sourceFileName: 'https://i.postimg.cc/QdfSrngV/Classsic-cold1-coffee.png',
    client: 'Cafe & Bistro Menu Series',
    dimensions: '1080x1600 (Menu Card)',
    description: 'Loaded Mexican taco menu card featuring vibrant fresh toppings, rustic wood surface texture, and signature espresso-brown framing.',
    descriptionBn: 'মেক্সিকান বিফ টাকো মেনু কার্ড — ফ্রেশ টপিংস কালার পপ, রাস্টিক উড টেক্সচার এবং সিগনেচার এসপ্রেসো-ব্রাউন ফ্রেম ডিজাইন।',
    toolsUsed: ['Photoshop', 'Illustrator'],
    keyFeatures: [
      'Fresh Topping Color Contrast',
      'Rustic Culinary Presentation',
      'Cohesive Bistro Card System',
      'Glowing Display Title'
    ],
    keyFeaturesBn: [
      'ফ্রেশ টপিংস কালার কনট্রাস্ট',
      'রাস্টিক ফুড প্রেজেন্টেশন',
      'কোহেসিভ বিস্ট্রো কার্ড সিস্টেম',
      'গ্লোয়িং ডিসপ্লে টাইটেল'
    ]
  },

  // 03 - Photo Manipulation
  {
    id: 'design-class-work-02',
    title: 'Digital Persona — Portrait Photo Manipulation & Compositing',
    titleBn: 'ডিজিটাল পারসোনা • পোর্ট্রেট ফটো ম্যানিপুলেশন ও ভিজ্যুয়াল আর্ট',
    category: 'photo-manipulation',
    categoryLabel: 'Photo Manipulation',
    categoryLabelBn: 'ফটো ম্যানিপুলেশন',
    image: '/designs/class-work-02.jpg',
    sourceFileName: 'https://i.postimg.cc/L6zzm0pt/class-work-02.jpg',
    client: 'Conceptual Visual Art',
    dimensions: '1280x853 (Landscape)',
    description: 'Surreal portrait photo manipulation blending a sharp studio subject with dual glowing cyan and indigo digital particle face projections.',
    descriptionBn: 'শার্প স্টুডিও পোর্ট্রেটের সাথে সায়ান ও ব্লু ডিজিটাল পার্টিকেল ফেস সিলুয়েটের সমন্বয়ে তৈরি কনসেপচুয়াল ফটো ম্যানিপুলেশন আর্টওয়ার্ক।',
    toolsUsed: ['Photoshop', 'Lightroom'],
    keyFeatures: [
      'Precision Hair & Coat Masking',
      'Dual Particle Mesh Face Compositing',
      'Cyan & Indigo Edge Rim Lighting',
      'Deep Contrast Atmospheric Blending'
    ],
    keyFeaturesBn: [
      'নিখুঁত পোর্ট্রেট ও হেয়ার মাস্কিং',
      'ডিজিটাল পার্টিকেল ফেস কম্পোজিটিং',
      'সায়ান ও ব্লু এজ লাইটিং ব্লেন্ডিং',
      'ডিপ-ডার্ক কনসেপচুয়াল অ্যাটমোস্ফিয়ার'
    ]
  }
];

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    titleBn: 'ভিডিও এডিটিং',
    description: 'Professional editing, storytelling, motion graphics & post-production.',
    descriptionBn: 'প্রফেশনাল এডিটিং, স্টোরিটেলিং, মোশন গ্রাফিক্স ও পোস্ট-প্রোডাকশন।',
    iconName: 'video',
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    titleBn: 'গ্রাফিক ডিজাইন',
    description: 'Creative visual design, branding, social media & promotional materials.',
    descriptionBn: 'ক্রিয়েটিভ ভিজ্যুয়াল ডিজাইন, ব্র্যান্ডিং, সোশ্যাল মিডিয়া ও প্রমোশনাল ম্যাটেরিয়াল।',
    iconName: 'palette',
    tools: ['Photoshop', 'Illustrator', 'Canva Pro']
  },
  {
    id: 'creative-visualization',
    title: 'CREATIVE VISUALIZATION',
    titleBn: 'ক্রিয়েটিভ ভিজ্যুয়ালাইজেশন',
    description: 'Concept development, visual storytelling & information visualization.',
    descriptionBn: 'কনসেপ্ট ডেভেলপমেন্ট, ভিজ্যুয়াল স্টোরিটেলিং ও ইনফরমেশন ভিজ্যুয়ালাইজেশন।',
    iconName: 'eye',
    tools: ['Storyboard', 'Moodboards', 'Visual Scripts']
  },
  {
    id: 'script-writing',
    title: 'SCRIPT WRITING',
    titleBn: 'স্ক্রিপ্ট রাইটিং',
    description: 'Video scripts, promotional content, storytelling & voice-over scripts.',
    descriptionBn: 'ভিডিও স্ক্রিপ্ট, প্রমোশনাল কনটেন্ট, স্টোরিটেলিং ও ভয়েস-ওভার স্ক্রিপ্ট।',
    iconName: 'file-text',
    tools: ['Retention Hooks', 'Pacing Architecture', 'Call-to-Actions']
  },
  {
    id: 'public-speaking',
    title: 'PUBLIC SPEAKING',
    titleBn: 'পাবলিক স্পিকিং',
    description: 'Presentation, audience engagement & effective communication.',
    descriptionBn: 'প্রেজেন্টেশন, অডিয়েন্স এনগেজমেন্ট ও কার্যকরী যোগাযোগ।',
    iconName: 'mic'
  },
  {
    id: 'leadership',
    title: 'LEADERSHIP',
    titleBn: 'লিডারশিপ',
    description: 'Team coordination, creative direction & project execution.',
    descriptionBn: 'টিম সমন্বয়, ক্রিয়েটিভ ডিরেকশন ও প্রজেক্ট এক্সিকিউশন।',
    iconName: 'users'
  }
];

export const academicEducation: EducationItem[] = [
  {
    degree: 'Mishkat (Ongoing)',
    year: 'Ongoing',
    status: 'Currently Studying',
    desc: 'Advanced Islamic Studies & Hadith Literature (Mishkat-ul-Masabih curriculum).',
    iconName: 'book-open'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    year: 'Ongoing',
    status: 'Currently Studying',
    desc: 'Pursuing higher secondary educational curriculum.',
    iconName: 'award'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    year: 'Batch 2026',
    status: 'Batch 2026',
    desc: 'Secondary School Certificate examination curriculum.',
    iconName: 'graduation-cap'
  }
];

export const academicEducationBn: EducationItem[] = [
  {
    degree: 'মেশকাত (চলমান)',
    year: 'চলমান',
    status: 'অধ্যয়নরত',
    desc: 'ইসলামিক স্টাডিজ ও উচ্চতর হাদিস শাস্ত্রের শিক্ষাক্রম (মিশকাতুল মাসাবীহ)।',
    iconName: 'book-open'
  },
  {
    degree: 'এইচএসসি (HSC)',
    year: 'অধ্যয়নরত',
    status: 'অধ্যয়নরত',
    desc: 'উচ্চ মাধ্যমিক শিক্ষাক্রম চলমান।',
    iconName: 'award'
  },
  {
    degree: 'এসএসসি (SSC)',
    year: '২০২৬',
    status: 'পরীক্ষার্থী / সমাপ্তি',
    desc: 'মাধ্যমিক স্কুল সার্টিফিকেট পরীক্ষা।',
    iconName: 'graduation-cap'
  }
];

export const professionalTraining: ProfessionalTraining = {
  institution: 'As-Sunnah Skill Development Institute',
  institutionBn: 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট',
  courseName: 'SBMC (Small Business Management Course)',
  batch: 'Batch 36',
  topics: [
    {
      name: 'Video Editing',
      nameBn: 'ভিডিও এডিটিং',
      tools: 'Premiere Pro & After Effects'
    },
    {
      name: 'Graphic Design',
      nameBn: 'গ্রাফিক ডিজাইন',
      tools: 'Photoshop & Illustrator'
    },
    {
      name: 'Prompt Engineering & AI Visuals',
      nameBn: 'প্রম্পট ইঞ্জিনিয়ারিং ও এআই ভিজ্যুয়ালস',
      tools: 'Midjourney, Runway & ChatGPT Workflows'
    },
    {
      name: 'Real Project Execution',
      nameBn: 'হ্যান্ডস-অন রিয়েল প্রজেক্ট এক্সিকিউশন',
      tools: 'Commercial Ads, Thumbnails & Brand Promos'
    }
  ]
};

export const certifiedCourses: CertifiedCourse[] = [
  {
    id: 'spoken-english',
    title: 'Spoken English & Communication Course',
    titleBn: 'স্পোকেন ইংলিশ ও ভাষা কোর্স',
    institution: 'Ahmad Education',
    institutionBn: 'আহমদ এডুকেশন',
    credential: 'Certified English Speaking & Fluency',
    credentialBn: 'সার্টিফাইড স্পোকেন ইংলিশ কোর্স',
    description: 'Comprehensive English language training covering conversational fluency, phonetics, professional vocabulary, and confident everyday communication.',
    descriptionBn: 'আহমদ এডুকেশন থেকে সম্পন্নকৃত ইংলিশ ভাষা কোর্স— যেখানে সঠিক উচ্চারণ, ফ্লুয়েন্ট স্পিকিং, স্মার্ট কমিউনিকেশন ও প্র্যাকটিক্যাল কনভারসেশনের ওপর বিশেষ দক্ষতা অর্জন।',
    highlights: [
      'Spoken Fluency & Pronunciation',
      'Professional Communication Skills',
      'Structural Vocabulary & Grammar',
      'Interactive Speech & Presentation'
    ],
    highlightsBn: [
      'স্পিকিং ফ্লুয়েন্সি ও সঠিক উচ্চারণ',
      'প্রফেশনাল ও বিজনেস কমিউনিকেশন',
      'স্ট্রাকচারাল গ্রামার ও ভোকাবুলারি',
      'প্রেজেন্টেশন ও কনভারসেশন প্র্যাকটিস'
    ],
    iconType: 'language'
  },
  {
    id: 'calligraphy-painting',
    title: 'Calligraphy Painting & Visual Arts',
    titleBn: 'ক্যালিগ্রাফি পেইন্টিং ও চারুকলা কোর্স',
    institution: 'Mahmud Calligraphy Center',
    institutionBn: 'মাহমুদ ক্যালিগ্রাফি সেন্টার',
    credential: 'Certified Calligraphy Painting Artist',
    credentialBn: 'ক্যালিগ্রাফি পেইন্টিং সার্টিফিকেট অর্জন',
    description: 'Professional certification in classical Arabic calligraphy and modern canvas painting, integrating acrylic techniques with timeless Islamic artistic heritage.',
    descriptionBn: 'মাহমুদ ক্যালিগ্রাফি সেন্টার থেকে ক্যালিগ্রাফি পেইন্টিংয়ের ওপর সার্টিফিকেট অর্জন— ক্ল্যাসিক্যাল আরবি ক্যালিগ্রাফি, ক্যানভাস অ্যাক্রিলিক পেইন্টিং ও নান্দনিক আর্ট কম্পোজিশন।',
    highlights: [
      'Classical Arabic Scripts (Thuluth/Diwani)',
      'Canvas Acrylic Painting & Texturing',
      'Aesthetic Composition & Framing',
      'Certified Calligraphic Artistry'
    ],
    highlightsBn: [
      'ক্ল্যাসিক্যাল আরবি ক্যালিগ্রাফি স্ক্রিপ্টস',
      'ক্যানভাস আর্ট ও অ্যাক্রিলিক পেইন্টিং',
      'কম্পোজিশন ও নান্দনিক ফ্রেমওয়ার্ক',
      'সার্টিফাইড ক্যালিগ্রাফি আর্টওয়ার্ক'
    ],
    iconType: 'calligraphy'
  }
];
