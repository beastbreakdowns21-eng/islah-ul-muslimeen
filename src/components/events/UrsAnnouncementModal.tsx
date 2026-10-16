import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Calendar, Clock, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useUrsCampaign, URS_CAMPAIGN_CONFIG } from '../../utils/ursCampaign';

const MODAL_STORAGE_KEY = 'urs_mubarak_2026_popup_seen';

export const UrsAnnouncementModal: React.FC = () => {
  const { language } = useLanguage();
  const { isCampaignActive, isUpcoming, isDuring, days, hours, minutes, seconds } = useUrsCampaign();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Check if popup should open once per session/visit during active campaign
  useEffect(() => {
    if (!isCampaignActive) {
      setIsOpen(false);
      return;
    }

    try {
      const hasSeen = sessionStorage.getItem(MODAL_STORAGE_KEY);
      if (!hasSeen) {
        // Subtle delay for natural UX so visitor sees the site first
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage read error
    }
  }, [isCampaignActive]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(MODAL_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage write error
    }
  };

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Auto focus close button for accessibility
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Do not render anything if campaign expired or modal closed
  if (!isCampaignActive || !isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="urs-modal-title"
      aria-describedby="urs-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
    >
      {/* Click outside backdrop to close */}
      <div
        className="fixed inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-[#EEF2F7] overflow-hidden z-10 transition-transform duration-300 transform scale-100"
      >
        {/* Top Header Banner in Royal Blue with Islamic geometric dots */}
        <div className="relative bg-[#12247A] text-white p-6 sm:p-8 text-center overflow-hidden">
          {/* Subtle geometric star grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
            aria-hidden="true"
          />

          {/* Close button with 44px touch target */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label={language === 'ur' ? 'بند کریں' : language === 'ar' ? 'إغلاق' : 'Close modal'}
            className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-bold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {isDuring
                ? language === 'ur'
                  ? 'تقریب جاری ہے'
                  : language === 'ar'
                  ? 'الفعالية جارية الآن'
                  : 'Event is Happening Now'
                : language === 'ur'
                ? 'اہم روحانی تقریب کا اعلان'
                : language === 'ar'
                ? 'إعلان الفعالية الكبرى'
                : 'Upcoming Grand Spiritual Gathering'}
            </span>
          </div>

          <h2
            id="urs-modal-title"
            className={`text-2xl sm:text-3xl font-black text-white tracking-tight ${
              language === 'ur'
                ? 'font-urdu leading-normal'
                : language === 'ar'
                ? 'font-arabic leading-normal'
                : ''
            }`}
          >
            {language === 'ur'
              ? URS_CAMPAIGN_CONFIG.eventTitle.ur
              : language === 'ar'
              ? URS_CAMPAIGN_CONFIG.eventTitle.ar
              : URS_CAMPAIGN_CONFIG.eventTitle.en}
          </h2>

          <p
            id="urs-modal-desc"
            className="text-amber-300 font-bold text-sm sm:text-base mt-2 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
            <span
              className={
                language === 'ur' ? 'font-urdu text-base' : language === 'ar' ? 'font-arabic' : ''
              }
            >
              {language === 'ur'
                ? URS_CAMPAIGN_CONFIG.datesDisplay.ur
                : language === 'ar'
                ? URS_CAMPAIGN_CONFIG.datesDisplay.ar
                : URS_CAMPAIGN_CONFIG.datesDisplay.en}
            </span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-start">
          {/* Location details */}
          <div className="p-4 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1A1F2B]">
              <span className="font-bold block text-[#12247A]">
                {language === 'ur'
                  ? 'درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان'
                  : language === 'ar'
                  ? 'دركاه الله آباد شريف، كنډيارو، إقليم السند، باكستان'
                  : 'Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan'}
              </span>
              <span className="text-[#64748B] text-xs mt-0.5 block">
                {language === 'ur'
                  ? 'زیرِ سرپرستی: حضرت خواجہ محمد طاہر بخشی المعروف سجن سائیں مدظلہ العالی'
                  : language === 'ar'
                  ? 'تحت إشراف: حضرة الشيخ محمد طاهر بخشي (سجن سائیں) حفظه الله'
                  : 'Under the spiritual patronship of Hazrat Khwaja Muhammad Tahir Bakhshi (Sajjan Saeen)'}
              </span>
            </div>
          </div>

          {/* Countdown timer if upcoming */}
          {isUpcoming && (
            <div className="text-center space-y-2">
              <div className="text-xs font-bold text-[#64748B] flex items-center justify-center gap-1.5 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#002FA7]" />
                <span>
                  {language === 'ur' ? 'عرس مبارک میں باقی وقت' : language === 'ar' ? 'الوقت المتبقي للفعالية' : 'Countdown to Event'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#EEF2F7]/70 rounded-xl p-2.5">
                  <span className="block text-xl sm:text-2xl font-black text-[#12247A] tabular-nums">
                    {days}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748B] font-medium">
                    {language === 'ur' ? 'دن' : language === 'ar' ? 'يوم' : 'Days'}
                  </span>
                </div>
                <div className="bg-[#EEF2F7]/70 rounded-xl p-2.5">
                  <span className="block text-xl sm:text-2xl font-black text-[#12247A] tabular-nums">
                    {String(hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748B] font-medium">
                    {language === 'ur' ? 'گھنٹے' : language === 'ar' ? 'ساعة' : 'Hours'}
                  </span>
                </div>
                <div className="bg-[#EEF2F7]/70 rounded-xl p-2.5">
                  <span className="block text-xl sm:text-2xl font-black text-[#12247A] tabular-nums">
                    {String(minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748B] font-medium">
                    {language === 'ur' ? 'منٹ' : language === 'ar' ? 'دقيقة' : 'Mins'}
                  </span>
                </div>
                <div className="bg-[#EEF2F7]/70 rounded-xl p-2.5">
                  <span className="block text-xl sm:text-2xl font-black text-[#002FA7] tabular-nums">
                    {String(seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748B] font-medium">
                    {language === 'ur' ? 'سیکنڈ' : language === 'ar' ? 'ثانية' : 'Secs'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* If event is happening now */}
          {isDuring && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-emerald-800 font-bold text-base block">
                {language === 'ur'
                  ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ur
                  : language === 'ar'
                  ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ar
                  : URS_CAMPAIGN_CONFIG.eventHappeningNowText.en}
              </span>
              <p className="text-xs text-emerald-700 mt-1">
                {language === 'ur'
                  ? 'درگاہ اللہ آباد شریف میں روحانی محافل جاری ہیں'
                  : 'Congregations are actively taking place at Dargah Allahabad Sharif'}
              </p>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/events/urs"
              onClick={handleClose}
              id="urs-modal-view-btn"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#002FA7] hover:bg-[#12247A] text-white text-sm font-bold shadow-md hover:shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
            >
              <span>
                {language === 'ur'
                  ? URS_CAMPAIGN_CONFIG.ctaText.ur
                  : language === 'ar'
                  ? URS_CAMPAIGN_CONFIG.ctaText.ar
                  : URS_CAMPAIGN_CONFIG.ctaText.en}
              </span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <button
              type="button"
              onClick={handleClose}
              id="urs-modal-close-btn"
              className="px-5 py-3 rounded-lg bg-white hover:bg-[#F7F9FC] text-[#64748B] hover:text-[#1A1F2B] border border-[#EEF2F7] text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              {language === 'ur' ? 'بند کریں' : language === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
