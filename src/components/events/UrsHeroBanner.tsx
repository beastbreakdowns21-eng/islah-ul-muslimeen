import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, X, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useUrsCampaign, URS_CAMPAIGN_CONFIG } from '../../utils/ursCampaign';

export const UrsHeroBanner: React.FC = () => {
  const { language } = useLanguage();
  const { isCampaignActive, isUpcoming, isDuring, days, hours, minutes, seconds } = useUrsCampaign();

  // Session dismissal check
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('urs_hero_banner_dismissed_2026') === 'true';
    } catch {
      return false;
    }
  });

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem('urs_hero_banner_dismissed_2026', 'true');
    } catch {
      // Ignore storage error
    }
  };

  // If campaign expired (from 30 Nov 2026 00:00 PKT) or user dismissed it in this session, do not render
  if (!isCampaignActive || isDismissed) {
    return null;
  }

  return (
    <div
      id="urs-mubarak-banner"
      role="region"
      aria-label={
        language === 'ur'
          ? 'سالانہ عرس مبارک کا خصوصی اعلان'
          : language === 'ar'
          ? 'إعلان العرس السنوي المبارك'
          : 'Salana Urs Mubarak Special Announcement'
      }
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-2"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#12247A] text-white p-6 sm:p-8 lg:p-10 shadow-sm border border-amber-400/30">
        {/* Subtle geometric star grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label={language === 'ur' ? 'اعلان بند کریں' : language === 'ar' ? 'إغلاق الإعلان' : 'Close announcement'}
          className="absolute top-4 end-4 w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 text-start">
          {/* Left / Info Column */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {isDuring
                  ? language === 'ur'
                    ? 'تقریب جاری ہے'
                    : language === 'ar'
                    ? 'الفعالية جارية الآن'
                    : 'Event is Happening Now'
                  : language === 'ur'
                  ? 'خصوصی اعلان • سالانہ تقریب'
                  : language === 'ar'
                  ? 'إعلان هام • الفعالية السنوية'
                  : 'Special Announcement • Upcoming Grand Gathering'}
              </span>
            </div>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight ${
                language === 'ur'
                  ? 'font-urdu leading-normal'
                  : language === 'ar'
                  ? 'font-arabic leading-normal'
                  : 'tracking-tight'
              }`}
            >
              {language === 'ur'
                ? URS_CAMPAIGN_CONFIG.eventTitle.ur
                : language === 'ar'
                ? URS_CAMPAIGN_CONFIG.eventTitle.ar
                : URS_CAMPAIGN_CONFIG.eventTitle.en.toUpperCase()}
            </h2>

            {/* Date Display */}
            <div className="flex flex-wrap items-center gap-3 text-amber-300 font-bold text-base sm:text-lg">
              <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
              <span
                className={`tracking-wide ${
                  language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {language === 'ur'
                  ? URS_CAMPAIGN_CONFIG.datesDisplay.ur
                  : language === 'ar'
                  ? URS_CAMPAIGN_CONFIG.datesDisplay.ar
                  : URS_CAMPAIGN_CONFIG.datesDisplay.en}
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
              <span>
                {language === 'ur'
                  ? 'درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان'
                  : language === 'ar'
                  ? 'دركاه الله آباد شريف، كنډيارو، إقليم السند، باكستان'
                  : 'Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan'}
              </span>
            </div>
          </div>

          {/* Right / Countdown & Action Column */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4 shrink-0">
            {/* Live Countdown if Upcoming */}
            {isUpcoming && (
              <div
                className="bg-black/25 backdrop-blur-xs rounded-2xl border border-white/15 p-3.5 sm:p-4 text-center"
                aria-live="polite"
              >
                <div className="text-[11px] font-bold text-amber-200/90 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  <span>
                    {language === 'ur' ? 'عرس مبارک میں باقی وقت' : language === 'ar' ? 'الوقت المتبقي' : 'Countdown to Event'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                  <div className="bg-white/10 rounded-xl px-2.5 py-2 min-w-[54px] sm:min-w-[62px]">
                    <span className="block text-xl sm:text-2xl font-black text-white tabular-nums">
                      {days}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 font-medium">
                      {language === 'ur' ? 'دن' : language === 'ar' ? 'يوم' : 'Days'}
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl px-2.5 py-2 min-w-[54px] sm:min-w-[62px]">
                    <span className="block text-xl sm:text-2xl font-black text-white tabular-nums">
                      {String(hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 font-medium">
                      {language === 'ur' ? 'گھنٹے' : language === 'ar' ? 'ساعة' : 'Hours'}
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl px-2.5 py-2 min-w-[54px] sm:min-w-[62px]">
                    <span className="block text-xl sm:text-2xl font-black text-white tabular-nums">
                      {String(minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 font-medium">
                      {language === 'ur' ? 'منٹ' : language === 'ar' ? 'دقيقة' : 'Mins'}
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl px-2.5 py-2 min-w-[54px] sm:min-w-[62px]">
                    <span className="block text-xl sm:text-2xl font-black text-white tabular-nums text-amber-300">
                      {String(seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 font-medium">
                      {language === 'ur' ? 'سیکنڈ' : language === 'ar' ? 'ثانية' : 'Secs'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* During Event Banner Badge */}
            {isDuring && (
              <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-xl px-5 py-3 text-center">
                <span className="text-emerald-300 font-bold text-lg block">
                  {language === 'ur'
                    ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ur
                    : language === 'ar'
                    ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ar
                    : URS_CAMPAIGN_CONFIG.eventHappeningNowText.en}
                </span>
                <span className="text-white/80 text-xs mt-1 block">
                  {language === 'ur'
                    ? '27، 28 اور 29 نومبر 2026'
                    : '27, 28 & 29 November 2026'}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/events/urs"
                id="urs-hero-banner-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#12247A] text-sm font-bold shadow-md hover:shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
