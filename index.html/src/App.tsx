import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import DesignModal from './components/DesignModal';
import CVModal from './components/CVModal';
import PhotoUploadModal from './components/PhotoUploadModal';
import PureImageViewer, { PureImageItem } from './components/PureImageViewer';
import {
  profileData,
  videoProjects,
  designProjects,
  expertiseItems,
  academicEducation,
  academicEducationBn,
  professionalTraining,
  certifiedCourses
} from './data/portfolioData';
import { Language, VideoProject, DesignProject } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [activeDesign, setActiveDesign] = useState<DesignProject | null>(null);
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);

  // Pure Image Fullscreen Zoom Viewer State
  const [isPureImageViewerOpen, setIsPureImageViewerOpen] = useState(false);
  const [pureImageIndex, setPureImageIndex] = useState(0);

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    const saved = localStorage.getItem('fazle_avatar_url_v2');
    return saved || profileData.defaultAvatar;
  });

  // Prepare images for pure image viewer
  const pureImageItems: PureImageItem[] = useMemo(() => {
    return designProjects.map((p) => ({
      id: p.id,
      url: p.image,
      fallbackUrl: p.sourceFileName,
      title: p.title,
      titleBn: p.titleBn,
      categoryLabel: p.categoryLabel,
      categoryLabelBn: p.categoryLabelBn
    }));
  }, []);

  const handleOpenPureImage = (project: DesignProject) => {
    const idx = designProjects.findIndex((p) => p.id === project.id);
    setPureImageIndex(idx >= 0 ? idx : 0);
    setIsPureImageViewerOpen(true);
  };

  const handleSaveAvatar = (newUrl: string) => {
    setAvatarUrl(newUrl);
    try {
      localStorage.setItem('fazle_avatar_url_v2', newUrl);
    } catch {
      // storage quota fallback
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleOpenVideo = (project: VideoProject) => {
    setActiveVideo(project);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    setActiveVideo(null);
  };

  const handleOpenDesign = (project: DesignProject) => {
    setActiveDesign(project);
    setIsDesignModalOpen(true);
  };

  const handleCloseDesign = () => {
    setIsDesignModalOpen(false);
    setActiveDesign(null);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col selection:bg-[#ff5e28] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenCV={() => setIsCVModalOpen(true)}
        profile={profileData}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          profile={profileData}
          avatarUrl={avatarUrl}
        />

        <Portfolio
          lang={lang}
          videoProjects={videoProjects}
          designProjects={designProjects}
          onOpenVideo={handleOpenVideo}
          onOpenDesign={handleOpenDesign}
          onOpenPureImage={handleOpenPureImage}
        />

        <Expertise lang={lang} items={expertiseItems} />

        <Education
          lang={lang}
          academicList={lang === 'bn' ? academicEducationBn : academicEducation}
          professional={professionalTraining}
          certifiedCourses={certifiedCourses}
        />

        <Contact lang={lang} profile={profileData} />
      </main>

      {/* Footer */}
      <Footer lang={lang} profile={profileData} />

      {/* Interactive Modals */}
      <VideoModal
        project={activeVideo}
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideo}
        lang={lang}
      />

      <DesignModal
        project={activeDesign}
        isOpen={isDesignModalOpen}
        onClose={handleCloseDesign}
        lang={lang}
        onOpenPureImage={handleOpenPureImage}
      />

      {/* Pure Fullscreen Image Viewer with 2-3x Zoom */}
      <PureImageViewer
        isOpen={isPureImageViewerOpen}
        onClose={() => setIsPureImageViewerOpen(false)}
        images={pureImageItems}
        currentIndex={pureImageIndex}
        onIndexChange={(idx) => setPureImageIndex(idx)}
        lang={lang}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        lang={lang}
        profile={profileData}
      />

      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentAvatar={avatarUrl}
        onSaveAvatar={handleSaveAvatar}
        lang={lang}
      />
    </div>
  );
}
