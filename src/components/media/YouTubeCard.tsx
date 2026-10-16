import React, { useState } from 'react';
import { Play, Pause, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { YouTubeVideo } from '../../data/youtubeContent';
import { useLanguage } from '../../context/LanguageContext';

interface YouTubeCardProps {
  video: YouTubeVideo;
  className?: string;
  showSpeaker?: boolean;
  showDescription?: boolean;
  priority?: boolean;
}

/**
 * Premium YouTube Video Card with on-demand inline playback.
 * 
 * Features:
 * - Lazy loaded YouTube iframe: Renders high-quality thumbnail and play overlay initially.
 *   Only embeds the YouTube iframe when the user clicks Play.
 * - Dual action buttons: "Play" on website and "Watch on YouTube" external link.
 * - Thumbnail, title, duration badge, view count / date, and Urs Mubarak indicator.
 */
export const YouTubeCard: React.FC<YouTubeCardProps> = ({
  video,
  className = '',
  showSpeaker = true,
  showDescription = false,
}) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = video.id;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <div
      className={`group flex flex-col justify-between bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/30 shadow-xs hover:shadow-md transition-all overflow-hidden ${className}`}
    >
      <div>
        {/* Video Player / Thumbnail Area */}
        <div className="relative aspect-video bg-[#0F172A] overflow-hidden">
          {isPlaying ? (
            <div className="relative w-full h-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <button
                type="button"
                onClick={handleStop}
                aria-label="Stop playback"
                className="absolute top-2 end-2 p-1.5 rounded-md bg-black/80 hover:bg-black text-white text-xs transition-colors backdrop-blur-xs z-10 flex items-center gap-1"
              >
                <Pause className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium hidden sm:inline">Close</span>
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Play Button Overlay */}
              <button
                type="button"
                onClick={handlePlay}
                aria-label={`Play ${video.title} directly inside website`}
                className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#002FA7]/90 group-hover/btn:bg-[#002FA7] text-white flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-all duration-200 border-2 border-white/80">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white translate-x-0.5" aria-hidden="true" />
                </div>
              </button>

              {/* Duration Badge */}
              {video.duration && (
                <span className="absolute bottom-2.5 end-2.5 px-2 py-0.5 rounded-md bg-black/85 text-white text-[11px] font-mono font-medium tracking-tight shadow-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-300" aria-hidden="true" />
                  {video.duration}
                </span>
              )}

              {/* Urs Mubarak Badge */}
              {video.isUrsMubarak && (
                <span className="absolute top-2.5 start-2.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-[#12247A] text-[10px] font-black uppercase tracking-wide shadow-sm">
                  Urs Mubarak
                </span>
              )}
            </div>
          )}
        </div>

        {/* Video Details & Meta */}
        <div className="p-4 space-y-2">
          {showSpeaker && video.speaker && (
            <span className="text-[11px] font-bold text-[#002FA7] block truncate">
              {video.speaker}
            </span>
          )}

          <h3
            className="text-xs sm:text-sm font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors line-clamp-2 leading-snug cursor-pointer"
            onClick={!isPlaying ? handlePlay : undefined}
            title={video.title}
          >
            {video.title}
          </h3>

          {showDescription && video.description && (
            <p className="text-[11.5px] text-[#64748B] line-clamp-2 leading-relaxed">
              {video.description}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons: Play vs Watch on YouTube */}
      <div className="p-3.5 pt-0 border-t border-[#EEF2F7] mt-3 space-y-2.5">
        <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-[#002FA7] shrink-0" aria-hidden="true" />
          <span className="truncate">{video.views || video.publishedAt || 'Official Release'}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={isPlaying ? handleStop : handlePlay}
            aria-label={isPlaying ? `Pause ${video.title}` : `Play ${video.title} on website`}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              isPlaying
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                : 'bg-[#002FA7] hover:bg-[#001D6E] text-white shadow-xs'
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

          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${video.title} on YouTube`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-[#F8FAFC] hover:bg-red-50 text-[#1E293B] hover:text-red-700 border border-[#E2E8F0] hover:border-red-200 transition-all group/yt"
          >
            <span className="truncate">
              {language === 'ur' ? 'یوٹیوب' : language === 'ar' ? 'يوتيوب' : 'Watch'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/yt:text-red-600 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

