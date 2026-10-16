import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AudioPlayerProps {
  src?: string;
  title: string;
  speaker?: string;
  isVerified?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  title,
  speaker,
  isVerified = true,
}) => {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      setHasError(false);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => setHasError(true));
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (sec: number) => {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!src) {
    return (
      <div className="p-4 rounded-xl border border-[#EEF2F7] bg-[#F7F9FC] flex items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-[#12247A]">{title}</h4>
          {speaker && <p className="text-xs text-[#64748B] mt-0.5">{speaker}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl border border-[#002FA7]/20 bg-white shadow-xs">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center justify-between gap-4 mb-3">
        <div>
          <h4 className="text-sm font-bold text-[#12247A]">{title}</h4>
          {speaker && <p className="text-xs text-[#64748B] mt-0.5">{speaker}</p>}
        </div>
        <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
          Verified Audio
        </div>
      </div>

      {hasError ? (
        <div className="flex items-center gap-2 text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>
            {language === 'ur'
              ? 'آڈیو فائل لوڈ نہیں ہو سکی۔ براہِ کرم دوبارہ کوشش فرمائیں۔'
              : 'Audio could not be loaded at this time.'}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-10 h-10 rounded-full bg-[#002FA7] hover:bg-[#12247A] text-white flex items-center justify-center shadow-xs transition-colors shrink-0"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ms-0.5" />}
          </button>

          {/* Scrubber */}
          <div className="flex-1 flex flex-col gap-1">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Audio scrubber"
              className="w-full h-1.5 bg-[#EEF2F7] rounded-lg appearance-none cursor-pointer accent-[#002FA7]"
            />
            <div className="flex justify-between text-[11px] text-[#64748B] font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Mute button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className="p-2 text-[#64748B] hover:text-[#002FA7] transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
};
