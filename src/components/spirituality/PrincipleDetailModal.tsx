import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, CheckCircle, ExternalLink } from 'lucide-react';
import { NaqshbandiPrinciple } from '../../data/spiritualityData';
import { useLanguage } from '../../context/LanguageContext';

interface PrincipleDetailModalProps {
  principle: NaqshbandiPrinciple | null;
  onClose: () => void;
}

export const PrincipleDetailModal: React.FC<PrincipleDetailModalProps> = ({
  principle,
  onClose,
}) => {
  const { t, language } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key and trap focus
  useEffect(() => {
    if (!principle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Focus the close button when opened
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [principle, onClose]);

  if (!principle) return null;

  const detailedItems = principle.detailedContent?.en;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="principle-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity"
    >
      {/* Click outside backdrop to close */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-[#EEF2F7] flex flex-col overflow-hidden z-10 transition-transform duration-200 transform scale-100"
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#12247A] to-[#002FA7] text-white p-5 sm:p-6 select-none shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 pr-8">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-white/20 text-white font-extrabold text-xs flex items-center justify-center">
                  {principle.number}
                </span>
                <span className="font-arabic text-base sm:text-lg text-blue-100" dir="rtl">
                  {principle.term}
                </span>
              </div>

              <h2
                id="principle-modal-title"
                className="text-xl sm:text-2xl font-black tracking-tight text-white"
              >
                {principle.transliteration}
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                {t(principle.meaning)}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={language === 'ur' ? 'بند کریں' : language === 'ar' ? 'إغلاق' : 'Close modal'}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-start leading-relaxed text-[#1A1F2B]">
          {detailedItems && detailedItems.length > 0 ? (
            detailedItems.map((item, index) => {
              if (item.type === 'paragraph') {
                return (
                  <p key={index} className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    {item.text}
                  </p>
                );
              }

              if (item.type === 'blockquote') {
                return (
                  <blockquote
                    key={index}
                    className="my-5 p-4 sm:p-5 rounded-xl bg-[#F7F9FC] border-s-4 border-[#002FA7] text-[#1E293B]"
                  >
                    <p className="text-sm sm:text-base italic leading-relaxed font-serif text-[#0F172A]">
                      {item.text}
                    </p>
                    {item.attribution && (
                      <footer className="mt-2 text-xs sm:text-sm font-semibold text-[#002FA7] not-italic">
                        — {item.attribution}
                      </footer>
                    )}
                  </blockquote>
                );
              }

              if (item.type === 'subheading') {
                return (
                  <h3
                    key={index}
                    className="text-base sm:text-lg font-bold text-[#12247A] pt-3 border-t border-[#EEF2F7]"
                  >
                    {item.text}
                  </h3>
                );
              }

              if (item.type === 'quran') {
                return (
                  <div
                    key={index}
                    className="my-5 p-5 rounded-xl bg-amber-50/60 border border-amber-200 shadow-xs space-y-3"
                  >
                    {/* Arabic text with strict RTL */}
                    <div className="text-right" dir="rtl">
                      <span className="font-arabic text-xl sm:text-2xl text-[#12247A] leading-loose block select-all">
                        {item.arabic}
                      </span>
                    </div>

                    {/* Translation */}
                    <p className="text-sm sm:text-base text-[#1E293B] italic font-serif">
                      {item.translation}
                    </p>

                    {/* Reference badge */}
                    {item.reference && (
                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          <BookOpen className="w-3 h-3 text-amber-800" />
                          <span>{item.reference}</span>
                        </span>
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })
          ) : (
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {t(principle.explanation)}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#F8FAFC] border-t border-[#EEF2F7] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <CheckCircle className="w-4 h-4 text-[#002FA7]" aria-hidden="true" />
            <span>
              {principle.source
                ? t(principle.source)
                : principle.number <= 8
                ? (language === 'ur'
                    ? 'خواجہ عبد الخالق غجدوانی ؒ'
                    : language === 'ar'
                    ? 'الخواجة عبد الخالق الغجدواني رحمه الله'
                    : 'Khwaja Abdul Khaliq Ghujdawani (RA)')
                : (language === 'ur'
                    ? 'خواجہ بہاؤالدین نقشبند ؒ'
                    : language === 'ar'
                    ? 'الخواجة بهاء الدين نقشبند رحمه الله'
                    : 'Khwaja Bahauddin Naqshband (RA)')}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              to={`/spirituality/principles/${principle.slug}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-[#002FA7] hover:text-[#12247A] bg-[#002FA7]/10 hover:bg-[#002FA7]/15 rounded-xl transition-colors"
            >
              <span>
                {language === 'ur'
                  ? 'مکمل تفصیلی صفحہ کھولیں'
                  : language === 'ar'
                  ? 'فتح الصفحة الكاملة'
                  : 'Open Full Page'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 text-xs sm:text-sm font-bold text-[#12247A] bg-white border border-[#CBD5E1] rounded-xl hover:bg-[#F1F5F9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
            >
              {language === 'ur' ? 'بند کریں' : language === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
