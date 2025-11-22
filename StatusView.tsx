import React, { useState, useEffect } from 'react';
import { STORIES } from '../constants';
import { Plus, X, CircleDashed, ChevronLeft, ChevronRight } from 'lucide-react';

export const StatusView: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const activeStory = activeStoryIndex !== null ? STORIES[activeStoryIndex] : null;

  // Timer Logic for 15 seconds
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (activeStory) {
      setProgress(0);
      const duration = 15000; // 15 seconds
      const step = 50; // Update every 50ms for smoothness
      
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + (step / duration) * 100;
        });
      }, step);
    }
    return () => clearInterval(interval);
  }, [activeStoryIndex]);

  const handleNext = () => {
    if (activeStoryIndex !== null) {
      if (activeStoryIndex < STORIES.length - 1) {
        setActiveStoryIndex(activeStoryIndex + 1);
      } else {
        setActiveStoryIndex(null); // Close if last
      }
    }
  };

  const handlePrev = () => {
    if (activeStoryIndex !== null) {
      if (activeStoryIndex > 0) {
        setActiveStoryIndex(activeStoryIndex - 1);
      } else {
        setActiveStoryIndex(null);
      }
    }
  };

  return (
    <div className="relative min-h-full bg-white dark:bg-gray-900 animate-in fade-in duration-500">
      {/* Main List View */}
      <div className="p-5 pb-24">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-display mb-6">Status</h2>

        {/* My Status Row */}
        <div className="flex items-center gap-4 mb-8 cursor-pointer active:opacity-70 transition-opacity">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-transparent">
              <img src="https://ui-avatars.com/api/?name=Eu&background=random" alt="Meu Status" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary-500 rounded-full p-1.5 border-2 border-white dark:border-gray-900">
              <Plus className="w-3 h-3 text-white stroke-[3]" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Meu Status</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Toque para atualizar</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Atualizações recentes</h3>
        </div>

        {/* Horizontal Scroll for Shopkeepers (Fileira de bolinhas) */}
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
            {STORIES.map((story, index) => (
                <div 
                    key={story.id} 
                    className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group" 
                    onClick={() => setActiveStoryIndex(index)}
                >
                    {/* Status Ring */}
                    <div className={`p-[3px] rounded-full ${story.isLive ? 'bg-gradient-to-tr from-primary-500 via-orange-400 to-purple-600' : 'bg-primary-500'}`}>
                        <div className="w-16 h-16 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden p-0.5 bg-white dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105">
                            <img src={story.image} alt={story.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center line-clamp-1 w-full max-w-[80px]">
                        {story.name}
                    </span>
                </div>
            ))}
        </div>
        
        {/* Informative Footer */}
        <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-6 text-center opacity-60">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <CircleDashed className="w-3 h-3" />
                Suas atualizações somem em 24h
            </p>
        </div>
      </div>

      {/* Full Screen Player Overlay */}
      {activeStory && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in zoom-in-95 duration-200">
          
          {/* Top Progress Bars */}
          <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2 pt-3">
             {STORIES.map((s, i) => (
                 <div key={s.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                     <div 
                        className="h-full bg-white transition-all duration-100 ease-linear"
                        style={{ 
                            width: i === activeStoryIndex ? `${progress}%` : i < activeStoryIndex ? '100%' : '0%' 
                        }}
                     />
                 </div>
             ))}
          </div>

          {/* Header Info */}
          <div className="absolute top-6 left-0 right-0 z-20 px-4 py-2 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white/50">
                      <img src={activeStory.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-white drop-shadow-md">
                      <p className="font-bold text-sm leading-tight">{activeStory.name}</p>
                      <p className="text-[10px] opacity-80">Há 2 horas</p>
                  </div>
              </div>
              <button 
                onClick={() => setActiveStoryIndex(null)} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                  <X className="w-6 h-6 text-white drop-shadow-md" />
              </button>
          </div>

          {/* Story Content (Simulating full screen video/image) */}
          <div className="flex-1 relative flex items-center justify-center bg-gray-900">
              {/* Using high-res placeholder for story content */}
              <img 
                src={`https://picsum.photos/600/1000?random=${activeStory.id}`} 
                alt="Story Content" 
                className="w-full h-full object-cover opacity-90" 
              />
              
              {/* Gradient Overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

              {/* Tap Zones for Navigation */}
              <div className="absolute inset-y-0 left-0 w-1/3 z-10" onClick={handlePrev}></div>
              <div className="absolute inset-y-0 right-0 w-1/3 z-10" onClick={handleNext}></div>
          </div>
          
          {/* Reply / Interaction Area */}
          <div className="absolute bottom-4 left-0 right-0 px-4 z-20 flex items-center gap-4">
              <div className="flex-1 h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center px-4 text-white/70 text-sm">
                  Responder...
              </div>
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 active:scale-95 transition-transform">
                ❤️
              </button>
          </div>
        </div>
      )}
    </div>
  );
};