export type Language = 'en' | 'bn';

export interface VideoProject {
  id: string;
  title: string;
  titleBn: string;
  category: string;
  categoryLabel: string;
  categoryLabelBn: string;
  vimeoId?: string;
  vimeoEmbedUrl?: string;
  videoSrc?: string;
  youtubeUrl?: string;
  thumbnail: string;
  duration: string;
  client: string;
  views?: string;
  aspectRatio: '16:9' | '9:16';
  description: string;
  descriptionBn: string;
  toolsUsed: string[];
  keyFeatures: string[];
  keyFeaturesBn: string[];
}

export interface DesignProject {
  id: string;
  title: string;
  titleBn: string;
  category: string;
  categoryLabel: string;
  categoryLabelBn: string;
  image: string;
  sourceFileName?: string;
  client: string;
  dimensions: string;
  description: string;
  descriptionBn: string;
  toolsUsed: string[];
  keyFeatures: string[];
  keyFeaturesBn: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  iconName: 'video' | 'palette' | 'eye' | 'file-text' | 'mic' | 'users';
  tools?: string[];
}

export interface EducationItem {
  degree: string;
  year: string;
  status: string;
  desc: string;
  iconName: 'book-open' | 'award' | 'graduation-cap';
}

export interface SkillTopic {
  name: string;
  tools: string;
}

export interface ProfessionalTraining {
  institution: string;
  institutionBn: string;
  courseName: string;
  batch: string;
  topics: {
    name: string;
    nameBn: string;
    tools: string;
  }[];
}

export interface CertifiedCourse {
  id: string;
  title: string;
  titleBn: string;
  institution: string;
  institutionBn: string;
  credential: string;
  credentialBn: string;
  description: string;
  descriptionBn: string;
  highlights: string[];
  highlightsBn: string[];
  iconType: 'language' | 'calligraphy';
}

export interface ProfileInfo {
  name: string;
  nameEn: string;
  title: string;
  titleBn: string;
  bio: string;
  bioEn: string;
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
  locationBn: string;
  defaultAvatar: string;
  logo: string;
  socials: {
    youtube: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}
