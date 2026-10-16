import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Play,
  ArrowRight,
  PhoneCall,
  ExternalLink,
  ChevronRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { EVENTS_DATA } from '../../data/eventsData';
import { useUrsCampaign, URS_CAMPAIGN_CONFIG } from '../../utils/ursCampaign';
import { getUrsKhitabatVideos, OFFICIAL_YOUTUBE_CHANNEL_URL } from '../../data/youtubeContent';
import { SEO } from '../../components/common/SEO';

export const UrsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const urs = EVENTS_DATA[0];
  const { isUpcoming, isDuring, isExpired, days, hours, minutes, seconds } = useUrsCampaign();
  const relatedVideos = getUrsKhitabatVideos();

  const ursEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': 'Salana Urs Mubarak Hazrat Khwaja Sohna Saeen (R.A)',
    'alternateName': [
      'Urs Mubarak',
      'عرس مبارک حضرت سوہنا سائیں',
      'العرس المبارك للشيخ الخواجه سوهنا سائیں',
    ],
    'description':
      'The grand international spiritual convention held at Dargah Allahabad Sharif in holy memory of Hazrat Khwaja Sohna Saeen (R.A.), featuring Quranic recitation, Zikr-e-Qalbi, scholarly lectures, and collective supplications.',
    'startDate': '2026-11-27T00:00:00+05:00',
    'endDate': '2026-11-29T23:59:59+05:00',
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
    'image': 'https://islahulmuslimeen.org/public/sajjan-sain.png',
    'location': {
      '@type': 'Place',
      'name': 'Dargah Allahabad Sharif',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Kandiaro',
        'addressRegion': 'Naushahro Feroze, Sindh',
        'addressCountry': 'Pakistan',
      },
    },
    'organizer': {
      '@type': 'Organization',
      'name': 'Jamaat Islah-ul-Muslimeen',
      'url': 'https://islahulmuslimeen.org/',
    },
    'performer': {
      '@type': 'Person',
      'name': 'Hazrat Khwaja Muhammad Tahir Bakhshi (Hazrat Sajjan Saeen)',
    },
  };

  return (
    <div className="pb-24 text-start bg-[#FBFBFC]">
      <SEO
        title="Salana Urs Mubarak Hazrat Khwaja Sohna Saeen | Dargah Allahabad Sharif"
        description="Official schedule, verified dates, countdown, live discourses, and pilgrim arrangements for Salana Urs Mubarak at Dargah Allahabad Sharif under Hazrat Sajjan Saeen."
        canonicalPath="/events/urs"
        keywords={[
          'Urs Mubarak',
          'Salana Urs',
          'Khwaja Sohna Saeen',
          'Sajjan Sain',
          'Sajjan Saeen',
          'Dargah Allahabad Sharif',
          'Kandiaro',
          'Islah-ul-Muslimeen',
          'عرس مبارک',
          'Zikr-e-Qalbi',
          'Islamic spiritual gathering',
        ]}
        breadcrumbs={[
          { name: 'Events', item: '/events' },
          { name: 'Salana Urs Mubarak', item: '/events/urs' },
        ]}
        structuredData={ursEventSchema}
      />

      {/* ==================================================
          1. PREMIUM EDITORIAL ROYAL NAVY HERO & FEATURED COMPOSITION
          ================================================== */}
      <section className="relative overflow-hidden bg-[#0A1647] text-white pt-8 sm:pt-12 pb-16 sm:pb-24 border-b border-[#002FA7]/30">
        {/* Deep layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F2E] via-[#0A1647] to-[#0D1E5E] opacity-95 pointer-events-none" />

        {/* Subtle Islamic geometric star grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px), radial-gradient(#60A5FA 1px, transparent 1px)`,
            backgroundSize: '28px 28px, 56px 56px',
            backgroundPosition: '0 0, 14px 14px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-white/70 font-medium">
            <Link to="/" className="hover:text-amber-300 transition-colors">
              {language === 'ur' ? 'ہوم' : language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40 rtl:rotate-180" />
            <Link to="/events" className="hover:text-amber-300 transition-colors">
              {language === 'ur' ? 'پروگرامات' : language === 'ar' ? 'الفعاليات' : 'Events'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40 rtl:rotate-180" />
            <span className="text-amber-300 font-semibold">
              {language === 'ur' ? 'سالانہ عرس مبارک' : language === 'ar' ? 'العرس المبارك' : 'Salana Urs Mubarak'}
            </span>
          </nav>

          {/* Sacred Bismillah Calligraphy Heading Accent */}
          <div className="pt-2">
            <span
              className="font-arabic text-xl sm:text-2xl text-amber-200/75 tracking-wider select-none block"
              dir="rtl"
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </span>
          </div>

          {/* Unified Featured Event Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Main Event Typography & Information) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Event Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>
                    {language === 'ur'
                      ? 'مرکزی سالانہ روحانی اجتماع'
                      : language === 'ar'
                      ? 'الملتقى الروحي السنوي الجامع'
                      : 'Annual Spiritual Gathering'}
                  </span>
                </span>

                {isUpcoming && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      {language === 'ur' ? 'آئندہ تقریب' : language === 'ar' ? 'فعالية قادمة' : 'Upcoming Congregation'}
                    </span>
                  </span>
                )}

                {isDuring && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      {language === 'ur'
                        ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ur
                        : language === 'ar'
                        ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ar
                        : URS_CAMPAIGN_CONFIG.eventHappeningNowText.en}
                    </span>
                  </span>
                )}

                {isExpired && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                    {language === 'ur'
                      ? URS_CAMPAIGN_CONFIG.pastEventText.ur
                      : language === 'ar'
                      ? URS_CAMPAIGN_CONFIG.pastEventText.ar
                      : URS_CAMPAIGN_CONFIG.pastEventText.en}
                  </span>
                )}
              </div>

              {/* Main Event H1 Display Heading */}
              <div className="space-y-2">
                <h1
                  className={`text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight ${
                    language === 'ur'
                      ? 'font-urdu leading-[1.4] sm:leading-[1.4]'
                      : language === 'ar'
                      ? 'font-arabic leading-[1.35]'
                      : 'leading-[1.15]'
                  }`}
                >
                  {language === 'ur' ? (
                    <>سالانہ عرس مبارک: سید العارفین حضرت خواجہ سوہنا سائیں نور اللہ مرقدہ</>
                  ) : language === 'ar' ? (
                    <>العرس السنوي المبارك: الشيخ الخواجه سوهنا سائیں رحمه الله</>
                  ) : (
                    <>Salana Urs Mubarak: Hazrat Khwaja Sohna Saeen (R.A.)</>
                  )}
                </h1>

                <p
                  className={`text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl ${
                    language === 'ur' ? 'font-urdu text-lg' : language === 'ar' ? 'font-arabic text-base' : ''
                  }`}
                >
                  {language === 'ur'
                    ? 'درگاہ اللہ آباد شریف، کنڈیارو میں منعقد ہونے والا سلسلہ عالیہ طاہریہ کا سالانہ بین الاقوامی اجتماع۔'
                    : language === 'ar'
                    ? 'المؤتمر الروحي السنوي الجامع للطريقة النقشبندية الطاهرية في دركاه الله آباد شريف.'
                    : 'The grand international spiritual convention held at Dargah Allahabad Sharif in holy memory of Hazrat Khwaja Sohna Saeen (R.A.).'}
                </p>
              </div>

              {/* Refined Event Meta Panels (Date, Hijri, Location & Context) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/15">
                {/* Date & Hijri Block */}
                <div className="flex items-start gap-3 bg-white/[0.06] border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-300/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                      {language === 'ur' ? 'تاریخِ اجتماع' : language === 'ar' ? 'تاريخ الفعالية' : 'Event Dates'}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                      27 — 28 — 29 November 2026
                    </div>
                    <div className="text-xs text-amber-300/90 font-medium">
                      {urs.hijriDate}
                    </div>
                  </div>
                </div>

                {/* Location Block */}
                <div className="flex items-start gap-3 bg-white/[0.06] border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                      {language === 'ur' ? 'مقامِ مقدس' : language === 'ar' ? 'الموقع' : 'Sanctuary & Venue'}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white truncate">
                      Dargah Allahabad Sharif
                    </div>
                    <div className="text-xs text-white/70 truncate">
                      Kandiaro, Naushahro Feroze, Sindh
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Jump Navigation Anchors */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/15"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  <span>{language === 'ur' ? 'تین روزہ شیڈول' : language === 'ar' ? 'جدول الفعالية' : 'Congregation Schedule'}</span>
                </a>

                <a
                  href="#khitabat"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/15"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-amber-300" />
                  <span>{language === 'ur' ? 'عرس مبارک کے خطبات' : language === 'ar' ? 'خطبات العرس' : 'Discourses & Addresses'}</span>
                </a>

                <a
                  href="#guidance"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/15"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                  <span>{language === 'ur' ? 'زائرین کے لیے رہنمائی' : language === 'ar' ? 'إرشادات الزوار' : 'Pilgrim Arrangements'}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Premium Integrated Event Status & Countdown Panel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {isUpcoming && (
                <div
                  className="w-full max-w-md relative bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/15 p-5 sm:p-6 shadow-xl space-y-4 overflow-hidden"
                  aria-live="polite"
                >
                  {/* Subtle gold top hairline */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>
                        {language === 'ur'
                          ? 'عرس مبارک میں باقی وقت'
                          : language === 'ar'
                          ? 'الوقت المتبقي للفعالية'
                          : 'Countdown to Event'}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-white/70 bg-white/10 px-2 py-0.5 rounded-md">
                      Asia/Karachi (PKT)
                    </span>
                  </div>

                  {/* Clean 4-column responsive grid on all viewports without wrapping */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-2.5 text-center">
                    <div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors rounded-xl p-2.5 sm:p-3 border border-white/10 flex flex-col items-center justify-center">
                      <span className="block text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                        {days}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/65 font-semibold uppercase tracking-wider mt-1">
                        {language === 'ur' ? 'دن' : language === 'ar' ? 'يوم' : 'Days'}
                      </span>
                    </div>

                    <div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors rounded-xl p-2.5 sm:p-3 border border-white/10 flex flex-col items-center justify-center">
                      <span className="block text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                        {String(hours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/65 font-semibold uppercase tracking-wider mt-1">
                        {language === 'ur' ? 'گھنٹے' : language === 'ar' ? 'ساعة' : 'Hours'}
                      </span>
                    </div>

                    <div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors rounded-xl p-2.5 sm:p-3 border border-white/10 flex flex-col items-center justify-center">
                      <span className="block text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                        {String(minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/65 font-semibold uppercase tracking-wider mt-1">
                        {language === 'ur' ? 'منٹ' : language === 'ar' ? 'دقيقة' : 'Mins'}
                      </span>
                    </div>

                    <div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors rounded-xl p-2.5 sm:p-3 border border-amber-400/25 flex flex-col items-center justify-center relative">
                      <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 tabular-nums tracking-tight">
                        {String(seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-amber-200/85 font-semibold uppercase tracking-wider mt-1">
                        {language === 'ur' ? 'سیکنڈ' : language === 'ar' ? 'ثانية' : 'Secs'}
                      </span>
                    </div>
                  </div>

                  {/* Connected event details footer strip */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
                    <div className="flex items-center gap-1.5 font-medium text-white/85">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>27 — 29 Nov 2026</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Allahabad Sharif</span>
                    </div>
                  </div>
                </div>
              )}

              {isDuring && (
                <div className="w-full max-w-md bg-emerald-950/70 border border-emerald-400/30 rounded-2xl p-5 sm:p-6 text-center space-y-4 shadow-xl backdrop-blur-md">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      {language === 'ur'
                        ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ur
                        : language === 'ar'
                        ? URS_CAMPAIGN_CONFIG.eventHappeningNowText.ar
                        : URS_CAMPAIGN_CONFIG.eventHappeningNowText.en}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {language === 'ur' ? 'تقریب اللہ آباد شریف میں جاری ہے' : 'Gathering In Session'}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200/90">
                    {language === 'ur'
                      ? 'تمام روحانی مجالس، حلقۂ ذکر اور خطباتِ عالیہ جاری ہیں۔'
                      : 'Live sessions, Zikr halqas, and discourses currently in progress at Dargah Allahabad Sharif.'}
                  </p>
                  <a
                    href="#khitabat"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A1647] font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>{language === 'ur' ? 'خطبات و نشریات دیکھیں' : 'Watch Discourses & Coverage'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </a>
                </div>
              )}

              {isExpired && (
                <div className="w-full max-w-md bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/15 p-5 sm:p-6 text-center space-y-4 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
                    {language === 'ur'
                      ? URS_CAMPAIGN_CONFIG.pastEventText.ur
                      : language === 'ar'
                      ? URS_CAMPAIGN_CONFIG.pastEventText.ar
                      : URS_CAMPAIGN_CONFIG.pastEventText.en}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === 'ur' ? 'سالانہ عرس مبارک کا اختتام' : 'Archived Congregation'}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70">
                    {language === 'ur'
                      ? 'گزشتہ سالانہ اجتماعات کے تصویری و صوتی ریکارڈز دیکھنے کے لیے تاریخی آرکائیو ملاحظہ فرمائیں۔'
                      : 'Audio, video records, and resolutions of past conventions are preserved in the historical archives.'}
                  </p>
                  <Link
                    to="/events/archive"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A1647] font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>{language === 'ur' ? 'تاریخی آرکائیو دیکھیں' : 'Explore Historical Archives'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. SPIRITUAL SIGNIFICANCE & EDITORIAL OVERVIEW
          ================================================== */}
      <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-amber-500" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#002FA7]">
                {language === 'ur' ? 'روحانی تعارف و مقصد' : language === 'ar' ? 'الأهمية الروحية' : 'Spiritual Significance'}
              </span>
            </div>

            <h2
              className={`text-2xl sm:text-3xl font-bold text-[#12247A] tracking-tight ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur' ? 'تقریب کا تعارف و روحانی اہمیت' : 'Event Introduction & Spiritual Significance'}
            </h2>

            {/* Small gold accent line */}
            <div className="w-16 h-1 bg-amber-400 rounded-full" />
          </div>

          {/* Comfortable reading width description */}
          <div className="max-w-4xl space-y-4">
            <p
              className={`text-base sm:text-lg text-[#1A1F2B] leading-relaxed ${
                language === 'ur' ? 'font-urdu text-lg sm:text-xl leading-[2.1]' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t(urs.description)}
            </p>
          </div>

          {/* Verified Key Information Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-[#EEF2F7]">
            {/* Card 1: Verified Venue */}
            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] space-y-2 hover:border-[#002FA7]/30 transition-colors">
              <div className="text-xs font-bold text-[#002FA7] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#002FA7]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#002FA7]" />
                </div>
                <span>{language === 'ur' ? 'مقامِ اجتماع' : 'Verified Venue'}</span>
              </div>
              <p className="text-sm font-semibold text-[#12247A] leading-snug">
                {t(urs.location)}
              </p>
              <span className="text-[11px] text-[#64748B] block">
                Naushahro Feroze, Sindh, Pakistan
              </span>
            </div>

            {/* Card 2: Congregation Dates */}
            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] space-y-2 hover:border-[#002FA7]/30 transition-colors">
              <div className="text-xs font-bold text-[#002FA7] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#002FA7]/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-[#002FA7]" />
                </div>
                <span>{language === 'ur' ? 'مقررہ تواریخ' : 'Congregation Dates'}</span>
              </div>
              <p className="text-sm font-semibold text-[#12247A] leading-snug">
                27 — 28 — 29 November 2026
              </p>
              <span className="text-[11px] text-amber-700 font-medium block">
                {urs.hijriDate}
              </span>
            </div>

            {/* Card 3: Spiritual Patron */}
            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] space-y-2 hover:border-[#002FA7]/30 transition-colors">
              <div className="text-xs font-bold text-[#002FA7] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#002FA7]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#002FA7]" />
                </div>
                <span>{language === 'ur' ? 'روحانی سرپرستی' : 'Spiritual Patron'}</span>
              </div>
              <p className="text-sm font-semibold text-[#12247A] leading-snug">
                Hazrat Khwaja Muhammad Tahir Bakhshi (Sajjan Saeen M.Z.A)
              </p>
              <span className="text-[11px] text-[#64748B] block">
                Silsila Naqshbandia Mujaddidia Tahiriya
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. THREE-DAY CONGREGATION FRAMEWORK (SCHEDULE)
          ================================================== */}
      <section id="schedule" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EEF2F7]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-5 rounded-full bg-amber-500" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#002FA7]">
                  {language === 'ur' ? 'روزانہ کی ترتیبات' : language === 'ar' ? 'الجدول الزمني' : 'Order of Proceedings'}
                </span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-bold text-[#12247A] tracking-tight ${
                  language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {language === 'ur' ? 'تین روزہ باضابطہ شیڈول' : 'Three-Day Congregation Framework'}
              </h2>
            </div>
          </div>

          {/* Schedule list */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {urs.schedule?.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] hover:border-[#002FA7]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#002FA7] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#12247A]">
                      {t(item)}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {language === 'ur'
                        ? 'نشستوں کے اوقاتِ کار اور تفصیلی نظام الاوقات کا اعلان قریب از تقریب باضابطہ طور پر جاری کیا جائے گا۔'
                        : 'Specific session hours and stage orders are announced closer to the event date by the central organizing committee.'}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#002FA7] bg-white border border-[#EEF2F7] px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-center">
                  {idx === 0
                    ? '27 Nov 2026'
                    : idx === 1
                    ? '28 Nov 2026'
                    : '29 Nov 2026'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          4. VERIFIED URS DISCOURSES & KHITABAT (MEDIA SECTION)
          ================================================== */}
      <section id="khitabat" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EEF2F7]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] bg-[#002FA7]/8 px-3 py-1 rounded-full">
                <Play className="w-3 h-3 fill-current" />
                <span>
                  {language === 'ur'
                    ? 'عرس مبارک کے خطبات'
                    : language === 'ar'
                    ? 'خطبات العرس المبارك'
                    : 'Discourses & Addresses'}
                </span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-bold text-[#12247A] tracking-tight ${
                  language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {language === 'ur'
                  ? 'سالانہ عرس مبارک کے تصدیق شدہ خطبات و بیانات'
                  : 'Verified Urs Mubarak Discourses & Addresses'}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                {language === 'ur'
                  ? 'الجماعت اصلاح المسلمین کے آفیشل یوٹیوب چینل سے مصدقہ بیانات اور اختتامی دعائیں'
                  : 'Official discourses recorded live at Dargah Allahabad Sharif from the official YouTube channel'}
              </p>
            </div>

            <a
              href={OFFICIAL_YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 self-start sm:self-auto"
            >
              <span>{language === 'ur' ? 'آفیشل یوٹیوب چینل' : 'Official YouTube Channel'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid of Verified Urs Khitabat Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVideos.slice(0, 6).map((video) => (
              <div
                key={video.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/30 shadow-xs hover:shadow-md transition-all overflow-hidden"
              >
                <div>
                  {/* Real Thumbnail with Duration & Badge */}
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {video.duration && (
                      <span className="absolute bottom-2 end-2 px-2 py-0.5 rounded-md bg-black/80 text-white text-[11px] font-medium">
                        {video.duration}
                      </span>
                    )}

                    {video.isUrsMubarak && (
                      <span className="absolute top-2 start-2 px-2.5 py-0.5 rounded-full bg-amber-400 text-[#12247A] text-[10px] font-black uppercase tracking-wide shadow-sm">
                        Urs Mubarak
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    {video.speaker && (
                      <span className="text-[11px] font-bold text-[#002FA7] block truncate">
                        {video.speaker}
                      </span>
                    )}

                    <h3 className="text-xs sm:text-sm font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>

                    {video.description && (
                      <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-[#EEF2F7] mt-3 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>{video.views || video.publishedAt}</span>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#002FA7] hover:underline"
                  >
                    <span>{language === 'ur' ? 'یوٹیوب پر دیکھیں' : language === 'ar' ? 'مشاهدة' : 'Watch Discourse'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              to="/library/khitabat"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#002FA7] hover:underline"
            >
              <span>{language === 'ur' ? 'تمام خطبات و بیانات کی فہرست دیکھیں' : 'Explore Full Khitabat & Bayanat Library'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. PILGRIM ARRANGEMENTS & CENTRAL RECEPTION DESK
          ================================================== */}
      <section id="guidance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Pilgrim Arrangements */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#002FA7]">
              <div className="w-7 h-7 rounded-lg bg-[#002FA7]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#002FA7]" />
              </div>
              <span>{language === 'ur' ? 'زائرین کے لیے انتظامات' : 'Pilgrim Arrangements'}</span>
            </div>
            <h3 className="text-lg font-bold text-[#12247A]">
              {language === 'ur' ? 'اقامت، لنگر خانہ اور مفت طبی امداد' : 'Free Accommodation, Langar Khana & Medical Care'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {language === 'ur'
                ? 'درگاہ اللہ آباد شریف میں تمام حاضرین کے لیے رہائش، 24 گھنٹے جاری لنگر عام اور فرسٹ Aid میڈیکل کیمپ کا باقاعدہ انتظام موجود ہوتا ہے۔ تمام احباب سے گزارش ہے کہ نظم و ضبط اور صفائی کا خصوصی خیال رکھیں۔'
                : 'Free dormitory accommodations, 24-hour communal langar khana, and emergency first-aid medical camps are arranged by Jamaat volunteers for all attending guests and pilgrims.'}
            </p>
          </div>

          {/* Card 2: Central Guidance & Coordination */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#002FA7]">
                <div className="w-7 h-7 rounded-lg bg-[#002FA7]/10 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-[#002FA7]" />
                </div>
                <span>{language === 'ur' ? 'رابطہ و رہنمائی' : 'Official Guidance & Contact'}</span>
              </div>
              <h3 className="text-lg font-bold text-[#12247A]">
                {language === 'ur' ? 'مرکزی دفتر و رابطہ' : 'Central Inquiries & Coordination'}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {language === 'ur'
                  ? 'قافلوں کی روانگی اور زائرین کی رہنمائی کے لیے مصدقہ رابطہ ڈائریکٹری اور فارم سے رجوع فرمائیں۔'
                  : 'For logistical inquiries regarding regional caravan arrivals and guest guidelines, refer to the official contact directory.'}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EEF2F7] text-[#12247A] border border-[#EEF2F7] text-xs sm:text-sm font-bold transition-colors self-start w-full sm:w-auto"
            >
              <span>{language === 'ur' ? 'مرکزی رابطہ و رہنمائی ڈیسک' : language === 'ar' ? 'الاتصال بمكتب الاستقبال' : 'Contact Urs Guidance & Reception Desk'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

