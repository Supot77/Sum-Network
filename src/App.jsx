import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChapterContent from './components/content/ChapterContent';
import LabContainer from './components/labs/LabContainer';
import SearchModal from './components/common/SearchModal';
import ScrollToTop from './components/common/ScrollToTop';
import { COURSE_MODULES } from './data/courseData';

export default function App() {
  const [currentModuleId, setCurrentModuleId] = useState(1);
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const currentModule = COURSE_MODULES.find(m => m.id === currentModuleId) || COURSE_MODULES[0];

  const handleNext = () => {
    if (currentModuleId < COURSE_MODULES.length) {
      setCurrentModuleId(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentModuleId > 1) {
      setCurrentModuleId(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCompleteModule = (id) => {
    if (!completedModules.includes(id)) {
      setCompletedModules(prev => [...prev, id]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-zinc-950 text-zinc-100' : 'bg-[#F4EFE6] text-[#231D16]'} transition-colors duration-200 relative`}>
      <Header
        currentModule={currentModuleId}
        totalModules={COURSE_MODULES.length}
        onSelectModule={setCurrentModuleId}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="w-full flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Collapsible Sidebar */}
        {isSidebarOpen && (
          <Sidebar
            modules={COURSE_MODULES}
            currentModuleId={currentModuleId}
            onSelectModule={(id) => {
              setCurrentModuleId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            completedModules={completedModules}
          />
        )}

        {/* Full-width Seamless Content Canvas */}
        <main className="flex-1 w-full min-w-0 p-4 sm:p-8 lg:p-12 xl:p-16 space-y-12">
          <div className="w-full max-w-5xl mx-auto space-y-12">
            {/* Seamless Monolithic Chapter Content */}
            <ChapterContent
              module={currentModule}
              onNext={handleNext}
              onPrev={handlePrev}
              hasNext={currentModuleId < COURSE_MODULES.length}
              hasPrev={currentModuleId > 1}
              onCompleteModule={handleCompleteModule}
              isCompleted={completedModules.includes(currentModuleId)}
            />

            {/* Interactive Lab Sandbox */}
            <LabContainer
              moduleId={currentModule.id}
              labName={currentModule.labName}
              labDescription={currentModule.labDescription}
            />
          </div>
        </main>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectModule={setCurrentModuleId}
      />

      <ScrollToTop />
    </div>
  );
}
