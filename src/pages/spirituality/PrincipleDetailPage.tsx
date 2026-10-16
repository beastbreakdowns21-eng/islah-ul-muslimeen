import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  Compass, 
  Share2, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { SEO } from '../../components/common/SEO';
import { NAQSHBANDI_PRINCIPLES, NaqshbandiPrinciple } from '../../data/spiritualityData';

export const PrincipleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find principle by slug or numeric index
  const principleIndex = NAQSHBANDI_PRINCIPLES.findIndex(
    (p) => p.slug === slug || String(p.number) === slug
  );

  const principle: NaqshbandiPrinciple | undefined = 
    principleIndex !== -1 ? NAQSHBANDI_PRINCIPLES[principleIndex] : undefined;

  const prevPrinciple = principleIndex > 0 ? NAQSHBANDI_PRINCIPLES[principleIndex - 1] : null;
  const nextPrinciple = principleIndex < NAQSHBANDI_PRINCIPLES.length - 1 ? NAQSHBANDI_PRINCIPLES[principleIndex + 1] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!principle) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <SEO 
          title="Principle Not Found | Islah-ul-Muslimeen"
          description="The requested spiritual principle could not be found."
        />
        <div className="w-16 h-16 rounded-2xl bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] mb-6">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12247A] mb-3">
          {language === 'ur' ? 'اصول دستیاب نہیں ہے' : language === 'ar' ? 'الأصل غير موجود' : 'Principle Not Found'}
        </h1>
        <p className="text-sm text-[#64748B] max-w-md mb-8">
          {language === 'ur'
            ? 'مطلوبہ روحانی اصل کا صفحہ نہیں ملا۔ براہِ کرم تمام گیارہ کلماتِ قدسیہ کی فہرست ملاحظہ فرمائیں۔'
            : 'The principle you are looking for does not exist or may have been relocated.'}
        </p>
        <Link
          to="/spirituality/principles"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002FA7] text-white text-sm font-bold hover:bg-[#12247A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{language === 'ur' ? 'تمام گیارہ اصول دیکھیں' : 'View All 11 Sacred Principles'}</span>
        </Link>
      </div>
    );
  }

  const detailedItems = principle.detailedContent?.en;

  const pageTitle = language === 'ur'
    ? `${principle.term} (${principle.transliteration}) | طریقہ نقشبندیہ کے گیارہ اصول`
    : language === 'ar'
    ? `${principle.term} (${principle.transliteration}) | الأصول الإحدى عشرة للطريقة النقشبندية`
    : `${principle.transliteration} (${t(principle.meaning)}) | 11 Naqshbandi Principles`;

  const pageDesc = t(principle.preview || principle.explanation);

  return (
    <div className="pb-24 space-y-10">
      <SEO
        title={pageTitle}
        description={pageDesc}
        canonicalPath={`/spirituality/principles/${principle.slug}`}
        keywords={[
          principle.transliteration,
          principle.term,
          'Naqshbandi principles',
          'Kalimat-i Qudsiyya',
          'Islamic spirituality',
          'Dhikr',
          'Sufism',
          'Islah-ul-Muslimeen',
        ]}
      />

      {/* Hero / Header Section */}
      <section className="relative bg-gradient-to-b from-[#0F1E6A] via-[#12247A] to-[#002FA7] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle geometric pattern backdrop */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
          aria-hidden="true" 
        />

        <div className="max-w-4xl mx-auto relative z-10 text-start space-y-6">
          {/* Breadcrumb Navigation */}
          <nav 
            aria-label="Breadcrumb" 
            className="flex items-center gap-2 text-xs sm:text-sm text-blue-200/80 overflow-x-auto py-1"
          >
            <Link to="/spirituality" className="hover:text-white transition-colors shrink-0">
              {language === 'ur' ? 'روحانیات' : language === 'ar' ? 'الروحانيات' : 'Spirituality'}
            </Link>
            <span className="text-blue-300/40">/</span>
            <Link to="/spirituality/principles" className="hover:text-white transition-colors shrink-0">
              {language === 'ur' ? 'کلماتِ قدسیہ' : language === 'ar' ? 'الأصول الإحدى عشرة' : '11 Sacred Principles'}
            </Link>
            <span className="text-blue-300/40">/</span>
            <span className="text-white font-medium truncate">
              {principle.transliteration}
            </span>
          </nav>

          {/* Principle Number Badge & Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-semibold text-blue-100">
              <span className="w-5 h-5 rounded-full bg-white text-[#12247A] font-extrabold text-[11px] flex items-center justify-center">
                {principle.number}
              </span>
              <span>
                {language === 'ur'
                  ? `اصل نمبر ${principle.number} از 11`
                  : language === 'ar'
                  ? `الأصل ${principle.number} من 11`
                  : `Principle ${String(principle.number).padStart(2, '0')} of 11`}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="Copy link to this principle"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-emerald-200">{language === 'ur' ? 'لنک کاپی ہو گیا' : 'Link Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{language === 'ur' ? 'لنک کاپی کریں' : 'Share'}</span>
                </>
              )}
            </button>
          </div>

          {/* Calligraphy Term & English Title */}
          <div className="space-y-3">
            <div className="text-start" dir="rtl">
              <h2 className="font-arabic text-3xl sm:text-5xl lg:text-6xl font-bold text-amber-200 tracking-wide select-all leading-relaxed">
                {principle.term}
              </h2>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {principle.transliteration}
            </h1>

            <p className="text-base sm:text-xl text-blue-100 font-medium">
              {t(principle.meaning)}
            </p>
          </div>

          {/* Formulator / Attribution Pill */}
          <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-blue-200 border-t border-white/10">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white font-semibold">
                {language === 'ur' ? 'وضع کردہ / مصدر: ' : language === 'ar' ? 'المصدر: ' : 'Established By: '}
              </strong>
              {t(principle.source)}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EEF2F7] shadow-xs p-6 sm:p-10 lg:p-12 space-y-8 text-start">
          
          {/* Executive Summary / Meaning Card */}
          <div className="bg-[#F8FAFC] border-s-4 border-[#002FA7] rounded-r-2xl p-5 sm:p-6 space-y-2">
            <h2 className="text-xs font-bold tracking-wider uppercase text-[#002FA7]">
              {language === 'ur' ? 'خلاصۂ مفہوم' : language === 'ar' ? 'ملخص الأصل' : 'Core Essence & Definition'}
            </h2>
            <p className="text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed">
              {t(principle.explanation)}
            </p>
          </div>

          {/* Detailed Authentic Source Content */}
          <div className="space-y-6 text-[#1A1F2B] leading-relaxed">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#12247A] border-b border-[#EEF2F7] pb-3">
              {language === 'ur'
                ? 'تفصیلی مستند وضاحت اور ارشادات'
                : language === 'ar'
                ? 'الشرح التفصيلي المستند'
                : 'Detailed Exposition & Authentic Teachings'}
            </h2>

            {detailedItems && detailedItems.length > 0 ? (
              detailedItems.map((item, index) => {
                if (item.type === 'paragraph') {
                  return (
                    <p
                      key={index}
                      className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal"
                    >
                      {item.text}
                    </p>
                  );
                }

                if (item.type === 'blockquote') {
                  return (
                    <figure
                      key={index}
                      className="my-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-blue-50/30 border-s-4 border-[#002FA7] shadow-xs text-start space-y-3"
                    >
                      <blockquote className="text-base sm:text-lg italic font-serif leading-relaxed text-[#0F172A]">
                        “{item.text.replace(/^[“"]|[”"]$/g, '')}”
                      </blockquote>
                      {item.attribution && (
                        <figcaption className="text-xs sm:text-sm font-bold text-[#002FA7] not-italic flex items-center gap-1.5">
                          <span>—</span>
                          <span>{item.attribution}</span>
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                if (item.type === 'subheading') {
                  return (
                    <h3
                      key={index}
                      className="text-lg sm:text-xl font-bold text-[#12247A] pt-4 mt-6 border-t border-[#EEF2F7]"
                    >
                      {item.text}
                    </h3>
                  );
                }

                if (item.type === 'quran') {
                  return (
                    <div
                      key={index}
                      className="my-8 p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-xs space-y-4 text-start"
                    >
                      {/* Arabic Quranic Text with RTL */}
                      <div className="text-right" dir="rtl">
                        <span className="font-arabic text-2xl sm:text-3xl text-[#12247A] leading-loose block select-all font-semibold">
                          {item.arabic}
                        </span>
                      </div>

                      {/* Translation */}
                      <p className="text-sm sm:text-base text-[#1E293B] italic font-serif leading-relaxed">
                        “{item.translation}”
                      </p>

                      {/* Surah / Ayah Reference Badge */}
                      {item.reference && (
                        <div className="pt-1">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
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
                <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
                  {t(principle.explanation)}
                </p>
              </div>
            )}
          </div>

          {/* Practical Wisdom / Spiritual Fruit Callout */}
          <div className="pt-6 border-t border-[#EEF2F7]">
            <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 text-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-emerald-950">
                  {language === 'ur'
                    ? 'روزمرہ زندگی میں اس اصول کی پاسداری'
                    : language === 'ar'
                    ? 'التطبيق العملي في الحياة اليومية'
                    : 'Practical Application in Modern Life'}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  {language === 'ur'
                    ? 'یہ اصول محض نظریاتی علم نہیں بلکہ روزمرہ کے ہر لمحے میں اللہ تعالیٰ کے حضور دل کو بیدار رکھنے کی عملی ریاضت ہے۔'
                    : language === 'ar'
                    ? 'هذا الأصل منهج عملي لصيانة القلب ودوام استحضار عظمة الخالق في السكنات والحركات.'
                    : 'The Kalimat-i Qudsiyya are not mere abstract doctrines; they constitute a continuous, living discipline to safeguard the heart from heedlessness amidst modern responsibilities.'}
                </p>
              </div>
            </div>
          </div>

          {/* Next & Previous Principles Navigation */}
          <div className="pt-8 border-t border-[#EEF2F7]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Previous */}
              {prevPrinciple ? (
                <Link
                  to={`/spirituality/principles/${prevPrinciple.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#EEF2F7] hover:border-[#002FA7]/30 hover:bg-[#F8FAFC] transition-all group text-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center shrink-0 group-hover:bg-[#002FA7] group-hover:text-white transition-colors">
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-semibold text-[#64748B] block">
                      {language === 'ur' ? 'پچھلا اصل' : 'Previous Principle'} ({prevPrinciple.number})
                    </span>
                    <span className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors truncate block">
                      {prevPrinciple.transliteration}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="p-4 rounded-xl border border-dashed border-[#EEF2F7] text-center text-xs text-[#94A3B8] flex items-center justify-center">
                  <span>{language === 'ur' ? 'پہلا اصل' : 'First Principle'}</span>
                </div>
              )}

              {/* Next */}
              {nextPrinciple ? (
                <Link
                  to={`/spirituality/principles/${nextPrinciple.slug}`}
                  className="flex items-center justify-end gap-3 p-4 rounded-xl border border-[#EEF2F7] hover:border-[#002FA7]/30 hover:bg-[#F8FAFC] transition-all group text-end"
                >
                  <div className="truncate">
                    <span className="text-[11px] font-semibold text-[#64748B] block">
                      {language === 'ur' ? 'اگلا اصل' : 'Next Principle'} ({nextPrinciple.number})
                    </span>
                    <span className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors truncate block">
                      {nextPrinciple.transliteration}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#002FA7]/10 text-[#002FA7] flex items-center justify-center shrink-0 group-hover:bg-[#002FA7] group-hover:text-white transition-colors">
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </div>
                </Link>
              ) : (
                <div className="p-4 rounded-xl border border-dashed border-[#EEF2F7] text-center text-xs text-[#94A3B8] flex items-center justify-center">
                  <span>{language === 'ur' ? 'گیارہواں اور آخری اصل' : 'Final Principle'}</span>
                </div>
              )}
            </div>

            {/* Back to all principles button */}
            <div className="pt-6 text-center">
              <Link
                to="/spirituality/principles"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#EEF2F7] hover:border-[#002FA7]/30 bg-white hover:bg-[#F8FAFC] text-xs font-bold text-[#002FA7] transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>
                  {language === 'ur'
                    ? 'تمام گیارہ اصولوں کی مکمل فہرست'
                    : language === 'ar'
                    ? 'العودة لجميع الأصول الإحدى عشرة'
                    : 'View All 11 Sacred Principles'}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Carousel / Grid of all 11 Principles */}
        <div className="mt-12 space-y-4 text-start">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-[#12247A]">
              {language === 'ur'
                ? 'دیگر کلماتِ قدسیہ'
                : language === 'ar'
                ? 'بقية الكلمات القدسية'
                : 'All 11 Principles of the Naqshbandi Way'}
            </h3>
            <Link
              to="/spirituality/principles"
              className="text-xs font-bold text-[#002FA7] hover:text-[#12247A] flex items-center gap-1"
            >
              <span>{language === 'ur' ? 'تفصیلی فہرست' : 'Overview'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {NAQSHBANDI_PRINCIPLES.map((p) => {
              const isCurrent = p.number === principle.number;
              return (
                <Link
                  key={p.number}
                  to={`/spirituality/principles/${p.slug}`}
                  className={`p-3 rounded-xl border text-start transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#002FA7] bg-[#002FA7]/5 ring-1 ring-[#002FA7]'
                      : 'border-[#EEF2F7] bg-white hover:border-[#002FA7]/30 hover:bg-[#F8FAFC]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`w-6 h-6 rounded-md font-bold text-[11px] flex items-center justify-center ${
                        isCurrent
                          ? 'bg-[#002FA7] text-white'
                          : 'bg-[#EEF2F7] text-[#64748B]'
                      }`}
                    >
                      {p.number}
                    </span>
                    <span className="text-[10px] font-semibold text-[#002FA7] truncate max-w-[90px]">
                      {p.transliteration}
                    </span>
                  </div>
                  <span
                    className={`font-arabic text-sm truncate font-medium ${
                      isCurrent ? 'text-[#002FA7]' : 'text-[#12247A]'
                    }`}
                    dir="rtl"
                  >
                    {p.term}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrincipleDetailPage;
