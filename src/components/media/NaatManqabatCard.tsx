import React, { useState } from 'react';
import { Play, ExternalLink, Clock, Maximize2, Pause, Music, Mic, Heart, Radio } from 'lucide-react';
import { NaatManqabatItem } from '../../data/naatManqabatData';
import { useLanguage } from '../../context/LanguageContext';

interface NaatManqabatCardProps {
  item: NaatManqabatItem;
  className?: string;
  onOpenModal?: (item: NaatManqabatItem) => void;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}

export const NaatManqabatCard: React.FC<NaatManqabatCardProps> = ({
  item,
  className = '',
  onOpenModal,
  isPlaying: externalIsPlaying,
  onTogglePlay: externalOnTogglePlay,
}) => {
  const { language } = useLanguage();
  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Allow either externally controlled or internally managed play state
  const isPlaying = externalIsPlaying !== undefined ? externalIsPlaying : internalIsPlaying;

  const handlePlayClick = () => {
    setIframeError(false);
    if (externalOnTogglePlay) {
      externalOnTogglePlay();
    } else {
      setInternalIsPlaying(true);
    }
  };

  const handleStopPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (externalOnTogglePlay) {
      externalOnTogglePlay();
    } else {
      setInternalIsPlaying(false);
    }
  };

  const getCategoryBadge = () => {
    switch (item.category) {
      case 'naat':
        return {
          label: language === 'ur' ? 'نعت شریف' : language === 'ar' ? 'مدائح نبوية' : 'Naat Sharif',
          icon: <Mic className="w-3 h-3" aria-hidden="true" />,
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
        };
      case 'manqabat':
        return {
          label: language === 'ur' ? 'منقبت' : language === 'ar' ? 'منقبة مباركة' : 'Manqabat',
          icon: <Music className="w-3 h-3" aria-hidden="true" />,
          bg: 'bg-blue-50 text-[#002FA7] border-blue-200/80',
        };
      case 'devotional':
      default:
        return {
          label: language === 'ur' ? 'سجن سائیں کلام' : language === 'ar' ? 'كلام صوفي' : 'Devotional Kalam',
          icon: <Heart className="w-3 h-3" aria-hidden="true" />,
          bg: 'bg-amber-50 text-amber-900 border-amber-200/80',
        };
    }
  };

  const badge = getCategoryBadge();

  return (
    <article
      id={`media-card-${item.id}`}
      className={`group flex flex-col justify-between bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/35 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden ${className}`}
    >
      <div>
        {/* Media Frame (16:9 Aspect Ratio) */}
        <div className="relative aspect-video bg-[#0B132B] overflow-hidden">
          {isPlaying ? (
            <div className="relative w-full h-full">
              {iframeError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#0B132B] text-white text-center">
                  <p className="text-xs text-slate-300 mb-3">
                    {language === 'ur'
                      ? 'یہ ویڈیو یوٹیوب پر دیکھنے کے لیے دستیاب ہے'
                      : 'This video can be watched directly on YouTube.'}
                  </p>
                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold"
                  >
                    <span>{language === 'ur' ? 'یوٹیوب پر دیکھیں' : 'Watch on YouTube'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onError={() => setIframeError(true)}
                    className="w-full h-full border-0"
                  />
                  {/* Floating Stop / Collapse Button */}
                  <button
                    type="button"
                    onClick={handleStopPlay}
                    title="Stop playback"
                    aria-label="Stop playback"
                    className="absolute top-2 end-2 p-1.5 rounded-md bg-black/80 hover:bg-black text-white text-xs transition-colors backdrop-blur-xs z-10 flex items-center gap-1"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium hidden sm:inline">Close</span>
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="relative w-full h-full">
              {/* Thumbnail Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to standard definition if HQ fails
                  const target = e.currentTarget;
                  if (!target.src.includes('mqdefault')) {
                    target.src = `https://i.ytimg.com/vi/${item.youtubeId}/mqdefault.jpg`;
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

              {/* Central Play Button Overlay */}
              <button
                type="button"
                onClick={handlePlayClick}
                aria-label={`Play ${item.title} directly on website`}
                className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#002FA7]/90 group-hover/btn:bg-[#002FA7] text-white flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-all duration-200 border-2 border-white/90">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white translate-x-0.5" aria-hidden="true" />
                </div>
              </button>

              {/* Top Category Badge */}
              <div className="absolute top-2.5 start-2.5">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-xs border ${badge.bg}`}
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </span>
              </div>

              {/* Top Right Theater / Expand Button */}
              {onOpenModal && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(item);
                  }}
                  title="Expand to Theater Mode"
                  aria-label={`Open ${item.title} in theater mode`}
                  className="absolute top-2.5 end-2.5 p-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-white/90 hover:text-white transition-all backdrop-blur-xs"
                >
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}

              {/* Duration & Views Badge */}
              <div className="absolute bottom-2.5 start-2.5 end-2.5 flex items-center justify-between text-white text-[11px] font-medium pointer-events-none">
                {item.views ? (
                  <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs">
                    {item.views}
                  </span>
                ) : <span />}

                {item.duration && (
                  <span className="px-2 py-0.5 rounded-md bg-black/85 font-mono flex items-center gap-1 shadow-xs">
                    <Clock className="w-3 h-3 text-slate-300" aria-hidden="true" />
                    {item.duration}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-4 space-y-2 text-start">
          {/* Reciter / Source info */}
          <div className="flex items-center justify-between text-[11px] text-[#64748B]">
            <span className="font-semibold text-[#002FA7] truncate flex items-center gap-1">
              <Mic className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span className="truncate">{item.reciter}</span>
            </span>
            <span className="shrink-0 text-[10px] text-slate-400">Faiz e Sajjan Sain</span>
          </div>

          {/* Title */}
          <h3
            className="text-xs sm:text-sm font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors line-clamp-2 leading-snug cursor-pointer"
            onClick={!isPlaying ? handlePlayClick : undefined}
            title={item.title}
          >
            {item.title}
          </h3>

          {/* Description (Safe metadata only) */}
          {item.description && (
            <p className="text-[11.5px] text-[#64748B] line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>

      {/* Dual Action Controls: Play on Website vs Watch on YouTube */}
      <div className="p-3.5 pt-0 border-t border-[#EEF2F7] mt-2">
        <div className="grid grid-cols-2 gap-2">
          {/* PLAY BUTTON (Website Player) */}
          <button
            type="button"
            onClick={isPlaying ? handleStopPlay : handlePlayClick}
            aria-label={isPlaying ? `Pause ${item.title}` : `Play ${item.title} on website`}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              isPlaying
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                : 'bg-[#002FA7] hover:bg-[#001D6E] text-white shadow-xs hover:shadow'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>{language === 'ur' ? 'بند کریں' : 'Pause'}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" aria-hidden="true" />
                <span>{language === 'ur' ? 'چلائیں' : language === 'ar' ? 'تشغيل' : 'Play'}</span>
              </>
            )}
          </button>

          {/* WATCH ON YOUTUBE BUTTON (External YouTube Page) */}
          <a
            href={item.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${item.title} on YouTube`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-[#F8FAFC] hover:bg-red-50 text-[#1E293B] hover:text-red-700 border border-[#E2E8F0] hover:border-red-200 transition-all group/yt"
          >
            <span className="truncate">
              {language === 'ur' ? 'یوٹیوب' : language === 'ar' ? 'يوتيوب' : 'Watch'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/yt:text-red-600 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};
