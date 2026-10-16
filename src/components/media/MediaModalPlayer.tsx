import React, { useEffect } from 'react';
import { X, ExternalLink, Clock, Mic, Music, Heart, Volume2 } from 'lucide-react';
import { NaatManqabatItem, FAIZ_E_SAJJAN_SAIN_CHANNEL_NAME } from '../../data/naatManqabatData';
import { useLanguage } from '../../context/LanguageContext';

interface MediaModalPlayerProps {
  item: NaatManqabatItem | null;
  onClose: () => void;
}

export const MediaModalPlayer: React.FC<MediaModalPlayerProps> = ({ item, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-video-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0F172A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-2 truncate me-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-300 truncate">
              {FAIZ_E_SAJJAN_SAIN_CHANNEL_NAME}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal player"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Responsive Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Info & Controls Bar */}
        <div className="p-4 sm:p-6 space-y-4 bg-[#0F172A] text-start">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs text-blue-400 font-semibold">
                <span>{item.reciter}</span>
                {item.duration && (
                  <span className="text-slate-400 font-mono">• {item.duration}</span>
                )}
                {item.views && (
                  <span className="text-slate-400">• {item.views}</span>
                )}
              </div>
              <h2
                id="modal-video-title"
                className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug"
              >
                {item.title}
              </h2>
            </div>

            {/* Watch on YouTube Link */}
            <div className="shrink-0">
              <a
                href={item.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm"
              >
                <span>{language === 'ur' ? 'یوٹیوب پر دیکھیں' : 'Watch on YouTube'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {item.description && (
            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
