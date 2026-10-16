import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

interface AtTahirCoverPlaceholderProps {
  issue?: string;
  date?: string;
  coverImage?: string;
  localCoverImage?: string | null;
  pdfUrl?: string | null;
  localPdfUrl?: string | null;
  storageKey?: string | null;
  className?: string;
  variant?: 'hero' | 'card' | 'detail';
  isUnavailable?: boolean;
}

/**
 * Authentic Cover Display for At-Tahir Publications.
 * Renders the authentic local scan cover image directly.
 * ZERO PDF downloads on initial page load: keeping the archive ultra-fast.
 * NO AI-generated artwork, NO fake graphics, NO artificial decorative magazine templates.
 */
export const AtTahirCoverPlaceholder: React.FC<AtTahirCoverPlaceholderProps> = ({
  issue = 'Issue',
  date,
  coverImage,
  localCoverImage,
  className = '',
  variant = 'card',
  isUnavailable = false,
}) => {
  const [activeThumbnail, setActiveThumbnail] = useState<string | null>(coverImage || localCoverImage || null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const candidate = coverImage || localCoverImage || null;
    setActiveThumbnail(candidate);
    setHasError(false);
  }, [coverImage, localCoverImage]);

  const handleImageError = () => {
    if (localCoverImage && activeThumbnail !== localCoverImage) {
      setActiveThumbnail(localCoverImage);
    } else {
      setHasError(true);
    }
  };

  // If explicitly unavailable
  if (isUnavailable) {
    const isCard = variant === 'card';
    return (
      <div
        aria-label={`At-Tahir ${issue} — Original PDF unavailable`}
        className={`relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col items-center justify-center ${
          isCard ? 'p-2' : 'p-6'
        } text-center select-none ${className}`}
      >
        <div
          className={`${
            isCard ? 'w-8 h-8 mb-1.5' : 'w-12 h-12 mb-3'
          } rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400`}
        >
          <FileText className={`${isCard ? 'w-4 h-4' : 'w-6 h-6'} text-slate-400`} />
        </div>
        <span className={`${isCard ? 'text-[10px] leading-tight' : 'text-xs sm:text-sm'} font-bold text-slate-700`}>
          Original PDF unavailable
        </span>
        <span className={`${isCard ? 'text-[9.5px]' : 'text-[11px]'} text-slate-400 mt-0.5`}>
          {issue}
        </span>
      </div>
    );
  }

  // If authentic cover thumbnail is available and hasn't errored
  if (activeThumbnail && !hasError) {
    return (
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] shadow-xs group-hover:shadow-md transition-all flex items-center justify-center ${className}`}
      >
        {/* Subtle loading skeleton background */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 z-5">
            <FileText className="w-8 h-8 opacity-40" />
          </div>
        )}

        {/* Authentic physical magazine left spine shadow */}
        <div className="absolute top-0 bottom-0 start-0 w-3 bg-gradient-to-r from-black/15 via-black/5 to-transparent z-10 pointer-events-none" />

        {/* Real first page scan from authentic issue */}
        <img
          src={activeThumbnail}
          alt={`Original Page 1 Cover of ${issue}`}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />

        {/* Authentic document page 1 badge on hover */}
        <div className="absolute bottom-2 end-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs pointer-events-none">
          Page 1 • Scanned
        </div>
      </div>
    );
  }

  // Fallback if image path was not provided or failed: Honest document indicator (NO decorative templates)
  const isCard = variant === 'card';
  return (
    <div
      aria-label={`At-Tahir Publication ${issue}`}
      className={`relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xs flex flex-col items-center justify-center ${
        isCard ? 'p-2' : 'p-6'
      } text-center select-none ${className}`}
    >
      <FileText className={`${isCard ? 'w-5 h-5 mb-1' : 'w-10 h-10 mb-2'} text-slate-400`} />
      <span className={`${isCard ? 'text-[10px]' : 'text-xs'} font-bold text-[#12247A]`}>{issue}</span>
      {date && <span className={`${isCard ? 'text-[9px]' : 'text-[11px]'} text-slate-500 mt-0.5`}>{date}</span>}
      <span className={`${isCard ? 'text-[8.5px]' : 'text-[10px]'} text-slate-400 mt-1`}>Archival Document</span>
    </div>
  );
};
