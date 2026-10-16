import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Users,
  Building2,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Eye,
  X,
  ImageOff,
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PageHeader } from '../../components/common/PageHeader';
import { useLanguage } from '../../context/LanguageContext';
import {
  getKhalifaProfileBySlug,
  getKhalifaProfileNavigation,
  BiographyImage,
} from '../../data/khulafaProfilesData';

const SUBHEADING_MAP: Record<string, { ur: string; en: string }> = {
  'ولادت:': { ur: 'ولادت', en: 'Birth & Early Life' },
  'بزرگوں سے محبت:': { ur: 'بزرگوں سے محبت', en: 'Reverence for the Pious Elders' },
  'خلافت:': { ur: 'خلافت', en: 'Spiritual Deputyship (Khilafat)' },
  'تجدید بیعت:': { ur: 'تجدید بیعت', en: 'Renewal of Allegiance (Bay\'ah)' },
  'تبلیغ دین:': { ur: 'تبلیغ دین', en: 'Propagation of Religion (Tabligh-e-Deen)' },
  'اخلاق و کردار:': { ur: 'اخلاق و کردار', en: 'Virtues & Moral Conduct' },
  'انتقال پر ملال:': { ur: 'انتقال پر ملال', en: 'Sorrowful Demise & Funeral' },
};

export const KhalifaProfilePage: React.FC = () => {
  const params = useParams<{ profileSlug?: string; slug?: string }>();
  const slug = params.profileSlug || params.slug;
  const { language, isRTL } = useLanguage();

  const [activeImageModal, setActiveImageModal] = useState<BiographyImage | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    return <Navigate to="/about/khulafa" replace />;
  }

  const profile = getKhalifaProfileBySlug(slug);

  if (!profile) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h2 className={`text-2xl font-bold text-[#12247A] mb-3 ${language === 'ur' ? 'font-urdu' : ''}`}>
          {language === 'ur' ? 'سوانح حیات دستیاب نہیں ہے' : 'Biography Profile Not Found'}
        </h2>
        <p className={`text-sm text-slate-600 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
          {language === 'ur'
            ? 'آپ کا مطلوبہ صفحہ موجود نہیں یا منتقلی کے عمل میں ہے۔'
            : 'The requested biography profile was not found in our archival records.'}
        </p>
        <Link
          to="/about/khulafa"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002FA7] text-white text-sm font-bold hover:bg-[#12247A] transition-colors"
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{language === 'ur' ? 'خلفائے کرام کی فہرست پر جائیں' : 'Return to Khulafa Directory'}</span>
        </Link>
      </div>
    );
  }

  const nav = getKhalifaProfileNavigation(slug);
  const heroImage = profile.images.find((img) => img.isHeroPortrait) || profile.images[0];
  const galleryImages = profile.images.filter((img) => img !== heroImage);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeImageModal) return;
    const all = profile.images;
    const currentIndex = all.findIndex((i) => i.id === activeImageModal.id);
    const nextIndex = (currentIndex + 1) % all.length;
    setActiveImageModal(all[nextIndex]);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeImageModal) return;
    const all = profile.images;
    const currentIndex = all.findIndex((i) => i.id === activeImageModal.id);
    const prevIndex = (currentIndex - 1 + all.length) % all.length;
    setActiveImageModal(all[prevIndex]);
  };

  // Canonical full-resolution image for social cards and schema
  const ogImageUrl = heroImage
    ? `https://www.islahulmuslimeen.org${heroImage.src}`
    : 'https://www.islahulmuslimeen.org/images/logo.png';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: language === 'ur' ? profile.nameUrdu : profile.nameEn,
      alternateName: language === 'ur' ? profile.nameEn : profile.nameUrdu,
      description: language === 'ur' ? profile.summaryUrdu : profile.summaryEn,
      image: ogImageUrl,
      jobTitle: language === 'ur' ? profile.designationUrdu : profile.designationEn,
      worksFor: {
        '@type': 'Organization',
        name: 'Jamaat Islah-ul-Muslimeen',
        url: 'https://www.islahulmuslimeen.org',
      },
      homeLocation: {
        '@type': 'Place',
        name: language === 'ur' ? profile.locationUrdu : profile.locationEn,
      },
    },
  };

  // Localized values for Quick Facts & Meta cards
  const displayName = language === 'ur' ? profile.nameUrdu : profile.nameEn;
  const displayTitle = language === 'ur' ? profile.titleUrdu : (profile.titleEn || profile.nameEn);
  const displayHonorific = language === 'ur' ? profile.honorificUrdu : (profile.honorificEn || '(RA)');
  const displayDesignation = language === 'ur' ? profile.designationUrdu : profile.designationEn;
  const displayLocation = language === 'ur' ? profile.locationUrdu : profile.locationEn;

  const displayDemiseDate = language === 'ur'
    ? profile.demiseDateUrdu
    : (profile.demiseDateEn || profile.demiseDateUrdu);
  const displayDemiseDateHijri = language === 'ur'
    ? profile.demiseDateHijriUrdu
    : (profile.demiseDateHijriEn || profile.demiseDateHijriUrdu);

  const displayBurialLocation = language === 'ur'
    ? profile.burialLocationUrdu
    : (profile.burialLocationEn || profile.burialLocationUrdu);

  const displayFuneralLeader = language === 'ur'
    ? profile.funeralLeaderUrdu
    : (profile.funeralLeaderEn || profile.funeralLeaderUrdu);

  const displayAuthor = language === 'ur'
    ? profile.authorUrdu
    : (profile.authorEn || profile.authorUrdu);

  const displayTranslator = language === 'ur'
    ? profile.translatorUrdu
    : (profile.translatorEn || profile.translatorUrdu);

  const displaySourceRef = language === 'ur'
    ? profile.sourceReferenceUrdu
    : (profile.sourceReferenceEn || profile.sourceReferenceUrdu);

  const displayPublicationDate = language === 'ur'
    ? profile.sourcePublicationDateUrdu
    : (profile.sourcePublicationDateEn || profile.sourcePublicationDateUrdu);

  return (
    <div className="space-y-12 pb-16">
      <SEO
        title={language === 'ur' ? `${profile.nameUrdu} - سوانح حیات` : `${profile.nameEn} - Spiritual Biography`}
        description={language === 'ur' ? profile.summaryUrdu : profile.summaryEn}
        ogImage={ogImageUrl}
        keywords={[
          profile.nameUrdu,
          profile.nameEn,
          'خلفائے کرام',
          'سوانح حیات',
          'Islah-ul-Muslimeen',
          'Naqshbandia Tahiriya',
        ]}
        structuredData={structuredData}
      />

      {/* Header */}
      <PageHeader
        badge={language === 'ur' ? 'مستند روحانی سوانح' : 'Verified Spiritual Biography'}
        title={displayTitle}
        subtitle={`${displayDesignation} — ${displayLocation}`}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'ہمارے بارے میں' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'خلفائے کرام' : 'Khulafa-e-Karam',
            path: '/about/khulafa',
          },
          {
            label: displayName,
          },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-start">
        {/* Top Historical Meta Cards Bar */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#002FA7]/10 text-[#002FA7] border border-[#002FA7]/20 ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#002FA7]" />
                <span>
                  {language === 'ur'
                    ? 'تصدیق شدہ تاریخی ریکارڈ'
                    : 'Verified Archival Record'}
                </span>
              </span>

              <span
                className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                <span>{displayHonorific}</span>
              </span>
            </div>

            <Link
              to="/about/khulafa"
              className={`inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] hover:underline ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              <span>
                {language === 'ur'
                  ? 'خلفائے کرام کی فہرست پر واپس جائیں'
                  : 'Back to Khulafa Directory'}
              </span>
            </Link>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            {/* Location */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7]">
              <MapPin className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
              <div>
                <span
                  className={`text-[11px] font-bold text-[#64748B] block ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'علاقہ و ضلع' : 'Region & District'}
                </span>
                <span
                  className={`font-semibold text-[#12247A] text-sm sm:text-base leading-snug ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {displayLocation}
                </span>
              </div>
            </div>

            {/* Demise Date */}
            {displayDemiseDate && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7]">
                <Calendar className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                <div>
                  <span
                    className={`text-[11px] font-bold text-[#64748B] block ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {language === 'ur' ? 'تاریخِ وصال' : 'Date of Demise'}
                  </span>
                  <span
                    className={`font-semibold text-[#12247A] text-sm sm:text-base leading-snug ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {displayDemiseDate}
                  </span>
                  {displayDemiseDateHijri && (
                    <span
                      className={`text-[11px] text-[#64748B] block mt-0.5 ${
                        language === 'ur' ? 'font-urdu' : ''
                      }`}
                    >
                      {displayDemiseDateHijri}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Resting Place / Burial */}
            {displayBurialLocation && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7]">
                <Building2 className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                <div>
                  <span
                    className={`text-[11px] font-bold text-[#64748B] block ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {language === 'ur' ? 'مدفن / مزار' : 'Resting Place / Mazar'}
                  </span>
                  <span
                    className={`font-semibold text-[#12247A] text-sm sm:text-base leading-snug ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {displayBurialLocation}
                  </span>
                </div>
              </div>
            )}

            {/* Funeral Leader */}
            {displayFuneralLeader && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7] sm:col-span-2 lg:col-span-1">
                <Users className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                <div>
                  <span
                    className={`text-[11px] font-bold text-[#64748B] block ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {language === 'ur' ? 'نمازِ جنازہ' : 'Funeral Prayer'}
                  </span>
                  <span
                    className={`font-semibold text-[#12247A] text-sm sm:text-base leading-snug ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {displayFuneralLeader}
                  </span>
                </div>
              </div>
            )}

            {/* Author / Source */}
            {(displayAuthor || displaySourceRef) && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7] sm:col-span-2">
                <BookOpen className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                <div>
                  <span
                    className={`text-[11px] font-bold text-[#64748B] block ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {language === 'ur'
                      ? 'مصنف اور حوالۂ ماخذ'
                      : 'Author & Source Reference'}
                  </span>
                  <div
                    className={`font-semibold text-[#12247A] space-y-0.5 text-xs sm:text-sm ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {displayAuthor && (
                      <div>
                        {language === 'ur'
                          ? `تحریر: ${displayAuthor}`
                          : `Author: ${displayAuthor}`}
                      </div>
                    )}
                    {displayTranslator && (
                      <div>
                        {language === 'ur'
                          ? `ترجمہ: ${displayTranslator}`
                          : `Translator: ${displayTranslator}`}
                      </div>
                    )}
                    {displaySourceRef && (
                      <div className="text-xs text-[#64748B]">
                        {displaySourceRef}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Portrait Section (if profile contains photos) */}
        {heroImage && (
          <div className="bg-white rounded-3xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="relative group shrink-0">
              <div className="w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#002FA7]/20 shadow-md bg-[#F8FAFC] flex items-center justify-center">
                {failedImages[heroImage.id] ? (
                  <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center space-y-2">
                    <ImageOff className="w-8 h-8 text-slate-300" />
                    <span className={`text-xs ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {language === 'ur' ? 'تصویر دستیاب نہیں' : 'Image Not Available'}
                    </span>
                  </div>
                ) : (
                  <img
                    src={heroImage.src}
                    alt={language === 'ur' ? heroImage.altUrdu : (heroImage.captionEn || heroImage.altUrdu)}
                    onError={() => handleImageError(heroImage.id)}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                  />
                )}
              </div>
              {!failedImages[heroImage.id] && (
                <button
                  type="button"
                  onClick={() => setActiveImageModal(heroImage)}
                  className="absolute bottom-3 end-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors shadow-sm"
                  title={language === 'ur' ? 'تصویر بڑی کریں' : 'Enlarge Image'}
                  aria-label={language === 'ur' ? 'تصویر بڑی کریں' : 'Enlarge Image'}
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="space-y-3 text-center md:text-start flex-1">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#002FA7]/10 text-[#002FA7] ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                <span>
                  {language === 'ur'
                    ? 'اصل تاریخی تصویر'
                    : 'Original Historical Photograph'}
                </span>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {displayName}
              </h3>
              <p
                className={`text-xs sm:text-sm text-[#475569] leading-relaxed ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? (heroImage.captionUrdu || profile.summaryUrdu)
                  : (heroImage.captionEn || profile.summaryEn)}
              </p>
              <div
                className={`pt-2 text-[11px] text-[#64748B] ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? 'یہ تصویر جماعت اصلاح المسلمین کے اصل تاریخی ریکارڈ سے محفوظ کی گئی ہے۔'
                  : 'This photograph is preserved from the authentic archival records of Jamaat Islah-ul-Muslimeen.'}
              </div>
            </div>
          </div>
        )}

        {/* Main Biographical Article Content */}
        <article
          dir="rtl"
          lang="ur"
          className="bg-white rounded-3xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6 text-start"
        >
          {/* Article Header */}
          <div className="border-b border-[#F1F5F9] pb-4 flex items-center justify-between gap-4 flex-wrap">
            <h2
              className={`text-lg sm:text-xl font-black text-[#12247A] ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {language === 'ur'
                ? 'سیرتِ مبارکہ و احوالِ حیات'
                : 'Noble Biography & Life Accounts'}
            </h2>
            {displayPublicationDate && (
              <span
                className={`text-xs text-[#64748B] ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? `تاریخِ اشاعت: ${displayPublicationDate}`
                  : `Publication Date: ${displayPublicationDate}`}
              </span>
            )}
          </div>

          {/* Full Paragraphs — Preserved 100% Verbatim in Authentic Urdu */}
          <div className="space-y-5 text-base sm:text-lg text-[#1A1F2B] font-urdu leading-[2.2] tracking-normal">
            {profile.paragraphs.map((para, pIdx) => {
              // Check if paragraph is a poetic verse or Persian submission
              const isPoem =
                para.includes('آ دیکھ میرا پیر جو محبوب خدا ہے') ||
                para.includes('جان محمد ضرور') ||
                para.includes('بسم اللہ الرحمٰن الرحیم حال مارا خود بدانی') ||
                para.includes('فقیر بر شما راضی');

              if (isPoem) {
                return (
                  <div
                    key={pIdx}
                    className="my-6 p-6 rounded-2xl bg-[#F8FAFC] border-s-4 border-[#002FA7] text-center font-urdu text-lg sm:text-xl text-[#12247A] font-bold leading-relaxed shadow-2xs"
                  >
                    <p className="whitespace-pre-line">{para}</p>
                  </div>
                );
              }

              // Check if paragraph starts with a known subheading
              let matchedKey: string | null = null;
              for (const key of Object.keys(SUBHEADING_MAP)) {
                if (para.startsWith(key)) {
                  matchedKey = key;
                  break;
                }
              }

              if (matchedKey) {
                const subMeta = SUBHEADING_MAP[matchedKey];
                const parts = para.split(':');
                const head = parts[0] + ':';
                const body = parts.slice(1).join(':').trim();

                if (language === 'en') {
                  return (
                    <div key={pIdx} className="pt-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#002FA7] mb-2 font-sans flex items-center gap-2 flex-wrap">
                        <span>{subMeta.en}:</span>
                        <span className="font-urdu text-sm font-normal text-[#64748B]">({head})</span>
                      </h3>
                      <p className="text-justify">{body}</p>
                    </div>
                  );
                }

                return (
                  <div key={pIdx} className="pt-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#002FA7] mb-2 font-urdu">
                      {head}
                    </h3>
                    <p className="text-justify">{body}</p>
                  </div>
                );
              }

              return (
                <p key={pIdx} className="text-justify">
                  {para}
                </p>
              );
            })}
          </div>
        </article>

        {/* Gallery of Additional Historical Photographs (if any) */}
        {galleryImages.length > 0 && (
          <div className="bg-white rounded-3xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6 text-start">
            <div className="border-b border-[#F1F5F9] pb-4 flex items-center justify-between gap-4">
              <div>
                <span
                  className={`text-[11px] font-bold text-[#002FA7] block ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'تصویری گیلری' : 'Photo Gallery'}
                </span>
                <h3
                  className={`text-lg sm:text-xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur'
                    ? 'یادگار تاریخی تصاویر و مناظر'
                    : 'Historical Photographs & Scenes'}
                </h3>
              </div>
              <span
                className={`text-xs font-semibold text-[#002FA7] bg-[#002FA7]/5 px-3 py-1 rounded-full border border-[#002FA7]/10 ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? `${profile.images.length} تصاویر`
                  : `${profile.images.length} Photos`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="rounded-2xl border border-[#EEF2F7] overflow-hidden bg-[#F8FAFC] group hover:border-[#002FA7]/40 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
                    {failedImages[img.id] ? (
                      <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center space-y-2">
                        <ImageOff className="w-8 h-8 text-slate-300" />
                        <span className={`text-xs ${language === 'ur' ? 'font-urdu' : ''}`}>
                          {language === 'ur' ? 'تصویر دستیاب نہیں' : 'Image Not Available'}
                        </span>
                      </div>
                    ) : (
                      <>
                        <img
                          src={img.src}
                          alt={language === 'ur' ? img.altUrdu : (img.captionEn || img.altUrdu)}
                          onError={() => handleImageError(img.id)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <button
                          type="button"
                          onClick={() => setActiveImageModal(img)}
                          className="absolute bottom-2 end-2 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                          title={language === 'ur' ? 'تصویر بڑی کریں' : 'Enlarge Image'}
                          aria-label={language === 'ur' ? 'تصویر بڑی کریں' : 'Enlarge Image'}
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>

                  {(img.captionUrdu || img.captionEn) && (
                    <div
                      className={`p-3.5 text-start text-xs sm:text-sm text-[#1A1F2B] leading-relaxed border-t border-[#EEF2F7] ${
                        language === 'ur' ? 'font-urdu' : ''
                      }`}
                    >
                      {language === 'ur'
                        ? img.captionUrdu
                        : (img.captionEn || img.captionUrdu)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Previous / Next Khalifa Navigation Bar */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#EEF2F7] p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          {nav.prev ? (
            <Link
              to={`/about/khulafa/${nav.prev.slug}`}
              className={`w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EEF2F7] hover:border-[#002FA7] text-[#12247A] text-xs sm:text-sm font-bold transition-colors group text-start ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {isRTL ? (
                <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-0.5 transition-transform" />
              ) : (
                <ArrowLeft className="w-4 h-4 text-[#002FA7] group-hover:-translate-x-0.5 transition-transform" />
              )}
              <div>
                <span
                  className={`text-[10px] text-[#64748B] block ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'سابقہ سوانح' : 'Previous Biography'}
                </span>
                <span className={language === 'ur' ? 'font-urdu' : ''}>
                  {language === 'ur' ? nav.prev.nameUrdu : nav.prev.nameEn}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            to="/about/khulafa"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002FA7] text-white hover:bg-[#12247A] text-xs sm:text-sm font-bold transition-colors shadow-xs ${
              language === 'ur' ? 'font-urdu' : ''
            }`}
          >
            <span>
              {language === 'ur'
                ? 'خلفائے کرام کی فہرست'
                : 'Back to Khulafa Directory'}
            </span>
          </Link>

          {nav.next ? (
            <Link
              to={`/about/khulafa/${nav.next.slug}`}
              className={`w-full sm:w-auto inline-flex items-center justify-end sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EEF2F7] hover:border-[#002FA7] text-[#12247A] text-xs sm:text-sm font-bold transition-colors group text-end sm:text-start ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              <div>
                <span
                  className={`text-[10px] text-[#64748B] block ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'اگلی سوانح' : 'Next Biography'}
                </span>
                <span className={language === 'ur' ? 'font-urdu' : ''}>
                  {language === 'ur' ? nav.next.nameUrdu : nav.next.nameEn}
                </span>
              </div>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 text-[#002FA7] group-hover:-translate-x-0.5 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-0.5 transition-transform" />
              )}
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </div>

      {/* Internal Image Lightbox Modal */}
      {activeImageModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="p-4 bg-[#12247A] text-white flex items-center justify-between">
              <span
                className={`text-xs font-bold ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? (activeImageModal.captionUrdu || profile.nameUrdu)
                  : (activeImageModal.captionEn || activeImageModal.captionUrdu || profile.nameEn)}
              </span>
              <button
                type="button"
                onClick={() => setActiveImageModal(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white"
                aria-label={language === 'ur' ? 'بند کریں' : 'Close'}
                title={language === 'ur' ? 'بند کریں' : 'Close'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative p-4 overflow-auto flex-1 flex items-center justify-center bg-black/5 min-h-[300px]">
              {profile.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label={language === 'ur' ? 'پچھلی تصویر' : 'Previous Photo'}
                    title={language === 'ur' ? 'پچھلی تصویر' : 'Previous Photo'}
                    className="absolute start-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white shadow-md z-10 transition-colors"
                  >
                    {isRTL ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronLeft className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label={language === 'ur' ? 'اگلی تصویر' : 'Next Photo'}
                    title={language === 'ur' ? 'اگلی تصویر' : 'Next Photo'}
                    className="absolute end-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white shadow-md z-10 transition-colors"
                  >
                    {isRTL ? (
                      <ChevronLeft className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </>
              )}

              <img
                src={activeImageModal.src}
                alt={
                  language === 'ur'
                    ? activeImageModal.altUrdu
                    : (activeImageModal.captionEn || activeImageModal.altUrdu)
                }
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {(activeImageModal.captionUrdu || activeImageModal.captionEn) && (
              <div
                className={`p-4 bg-white border-t border-[#EEF2F7] text-start text-sm text-[#1A1F2B] ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? activeImageModal.captionUrdu
                  : (activeImageModal.captionEn || activeImageModal.captionUrdu)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
