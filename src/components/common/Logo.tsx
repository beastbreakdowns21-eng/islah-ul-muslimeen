import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resolveAssetPath } from '../../utils/assetPath';

/**
 * Official Islah-ul-Muslimeen Logo Asset
 * Optimized WebP version (~8 KB) with PNG fallback (~34 KB) for ultra-fast, sharp header rendering.
 * Original uncompressed source asset is preserved at /assets/logo/logo.png (1.28 MB).
 */
export const OFFICIAL_LOGO_SRC = resolveAssetPath('/assets/logo/logo-optimized.webp');
export const OFFICIAL_LOGO_FALLBACK = resolveAssetPath('/assets/logo/logo-optimized.png');
export const OFFICIAL_LOGO_ORIGINAL = resolveAssetPath('/assets/logo/logo.png');
export const OFFICIAL_LOGO_ALT = 'Islah-ul-Muslimeen';

interface LogoProps {
  variant?: 'header' | 'footer' | 'drawer';
  className?: string;
  showTagline?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  onClick,
}) => {
  const [imgSrc, setImgSrc] = useState(OFFICIAL_LOGO_SRC);

  // Responsive, proportional height maintaining exact 1:1 aspect ratio:
  // Desktop header: 56px - 62px (max-height: 64px)
  // Mobile header: 44px - 48px (within recommended 42px - 50px)
  // Mobile drawer: 44px
  // Footer: 56px - 60px
  const sizeClasses =
    variant === 'header'
      ? 'h-[44px] sm:h-[48px] md:h-[56px] lg:h-[60px] max-h-[64px] w-auto aspect-square'
      : variant === 'drawer'
      ? 'h-[44px] sm:h-[48px] max-h-[48px] w-auto aspect-square'
      : 'h-[56px] sm:h-[60px] max-h-[64px] w-auto aspect-square';

  return (
    <Link
      to="/"
      id={`brand-logo-${variant}`}
      onClick={onClick}
      className={`inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] rounded-xl transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Islah-ul-Muslimeen Home"
    >
      <img
        src={imgSrc}
        alt={OFFICIAL_LOGO_ALT}
        width={60}
        height={60}
        className={`${sizeClasses} object-contain shrink-0`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => {
          if (imgSrc === OFFICIAL_LOGO_SRC) {
            setImgSrc(OFFICIAL_LOGO_FALLBACK);
          } else if (imgSrc === OFFICIAL_LOGO_FALLBACK) {
            setImgSrc(OFFICIAL_LOGO_ORIGINAL);
          }
        }}
      />
    </Link>
  );
};


