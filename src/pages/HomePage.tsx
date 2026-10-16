import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  Compass,
  Building2,
  Calendar,
  ExternalLink,
  BookMarked,
  Scroll,
  Video,
  MapPin,
  Quote,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { QURAN_VERSES } from '../data/quranData';
import { HADITH_ITEMS } from '../data/hadithData';
import { BOOKS_DATA, OFFICIAL_BLOG_POSTS } from '../data/libraryData';
import { GRAND_MOSQUE_DATA } from '../data/aboutData';
import { EVENTS_DATA } from '../data/eventsData';
import { UrsHeroBanner } from '../components/events/UrsHeroBanner';
import { UrsAnnouncementModal } from '../components/events/UrsAnnouncementModal';
import { getFeaturedKhitabatVideos } from '../data/youtubeContent';
import { SEO } from '../components/common/SEO';
import { QiblaMurshidMiniCard } from '../components/home/QiblaMurshidMiniCard';
import { YouTubeCard } from '../components/media/YouTubeCard';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  const featuredVerse = QURAN_VERSES[0]; // Ar-Ra'd 13:28
  const featuredHadith = HADITH_ITEMS[0]; // Bukhari 52 (Noman bin Basheer - Heart)
  const mainUrs = EVENTS_DATA[0];
  const featuredKhitabat = getFeaturedKhitabatVideos();

  const homeStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Islah-ul-Muslimeen',
      'alternateName': ['Jamaat Islah-ul-Muslimeen', 'جماعت اصلاح المسلمین'],
      'url': 'https://islahulmuslimeen.org/',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://islahulmuslimeen.org/library?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Jamaat Islah-ul-Muslimeen',
      'alternateName': ['Islah-ul-Muslimeen', 'جماعت اصلاح المسلمین'],
      'url': 'https://islahulmuslimeen.org/',
      'logo': 'https://islahulmuslimeen.org/Logo.png',
      'foundingDate': '1983',
      'founder': {
        '@type': 'Person',
        'name': 'Hazrat Khwaja Allah Bakhsh Abbasi (Khwaja Sohna Saeen R.A)',
      },
      'leader': {
        '@type': 'Person',
        'name': 'Hazrat Khwaja Muhammad Tahir Bakhshi (Hazrat Sajjan Saeen)',
        'image': 'https://islahulmuslimeen.org/sajjan-sain.png',
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Kandiaro',
        'addressRegion': 'Sindh',
        'addressCountry': 'Pakistan',
      },
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <SEO
        title="Islah-ul-Muslimeen | Islamic Content, Publications & Media"
        description="Official Islamic educational and spiritual platform of Jamaat Islah-ul-Muslimeen. Quran, Hadith, Zikr-e-Qalbi, Silsila Naqshbandia, At-Tahir magazine, and teachings of Hazrat Sajjan Saeen."
        canonicalPath="/"
        keywords={[
          'Islah-ul-Muslimeen',
          'Islah ul Muslimeen',
          'Islah-ul-Muslimeen website',
          'Sajjan Sain',
          'Sajjan Saeen',
          'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi',
          'At-Tahir',
          'Attahir magazine',
          'Zikr',
          'Islamic Zikr',
          'Zikr-e-Qalbi',
          'Naqshbandi Tahiri',
          'Dargah Allahabad Sharif',
          'Islamic publications',
        ]}
        structuredData={homeStructuredData}
      />

      {/* Session-Aware Urs Mubarak Campaign Modal */}
      <UrsAnnouncementModal />

      {/* ==================================================
          1. PREMIUM HERO SECTION
          ================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-[#EEF2F7]/50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#EEF2F7]">
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#002FA7 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Sacred Bismillah Calligraphy */}
            <div className="py-2">
              <span
                className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#12247A] tracking-wider select-none"
                dir="rtl"
              >
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
              </span>
            </div>

            {/* Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002FA7]/8 text-[#002FA7] border border-[#002FA7]/15 text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#002FA7]" />
              <span>
                {language === 'ur'
                  ? 'جماعت اصلاح المسلمین کا مصدقہ پورٹل'
                  : language === 'ar'
                  ? 'البوابة الرسمية المعتمدة لجمعية إصلاح المسلمين'
                  : 'Official Portal of Jamaat Islah-ul-Muslimeen'}
              </span>
            </div>

            {/* Main Title */}
            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-black text-[#12247A] tracking-tight ${
                language === 'ur'
                  ? 'font-urdu leading-[1.3] sm:leading-[1.3]'
                  : language === 'ar'
                  ? 'font-arabic leading-[1.3]'
                  : 'leading-[1.15]'
              }`}
            >
              {language === 'ur' ? (
                <>
                  ذکرِ الٰہی، احیائے سنت اور <span className="text-[#002FA7]">اصلاحِ معاشرہ</span> کی عالمی تحریک
                </>
              ) : language === 'ar' ? (
                <>
                  حركة عالمية للتزكية الروحية، <span className="text-[#002FA7]">إحياء السنة</span> ووحدة الأمة
                </>
              ) : (
                <>
                  Awakening the Heart Through <span className="text-[#002FA7]">Zikr-e-Qalbi</span> & Prophetic Sunnah
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed ${
                language === 'ur' ? 'font-urdu text-lg sm:text-xl' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur'
                ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ کا مرکزی روحانی پلیٹ فارم۔ درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان۔'
                : language === 'ar'
                ? 'المنصة الرسمية للطريقة النقشبندية المجددية الطاهرية. دركاه الله آباد شريف، إقليم السند، باكستان.'
                : 'Central spiritual and educational repository of Silsila Naqshbandia Mujaddidia Tahiriya, headquartered at Dargah Allahabad Sharif, Sindh, Pakistan.'}
            </p>

            {/* High-Contrast Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/spirituality/zikr-e-qalbi"
                id="hero-cta-zikr"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#002FA7] hover:bg-[#12247A] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>{language === 'ur' ? 'ذکرِ قلبی کا تعارف' : language === 'ar' ? 'منهج الذكر القلبي' : 'Explore Zikr-e-Qalbi'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>

              <Link
                to="/quran"
                id="hero-cta-quran"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F7F9FC] text-[#12247A] border border-[#EEF2F7] hover:border-[#002FA7]/30 text-sm sm:text-base font-bold shadow-xs transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#002FA7]" />
                <span>{language === 'ur' ? 'تلاوتِ قرآنِ پاک' : language === 'ar' ? 'تلاوة القرآن الكريم' : 'Read the Holy Quran'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL URS MUBARAK TEMPORARY HERO ANNOUNCEMENT BANNER */}
      <UrsHeroBanner />

      {/* ==================================================
          2. SHORT ISLAMIC MISSION / INTRODUCTORY SECTION
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-8 sm:p-10 shadow-xs text-start space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#002FA7]/10 text-[#002FA7]">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'تعارف و مشن' : 'Movement Mission'}</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-[#12247A] tracking-tight ${
              language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur'
              ? 'اخلاقی، تعلیمی اور روحانی احیاء کی ایک منظم تحریک'
              : 'Moral, Educational, and Spiritual Revival'}
          </h2>

          <p
            className={`text-sm sm:text-base text-[#475569] leading-relaxed max-w-4xl ${
              language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
            }`}
          >
            {language === 'ur'
              ? 'جماعت اصلاح المسلمین کا مقصد مسلمانوں کے دلوں میں حبِ رسول ﷺ کو اجاگر کرنا، ذکرِ قلبی کے ذریعے باطنی صفائی پیدا کرنا، شریعت و سنت کی عملی پاسداری اور امتِ مسلمہ کے درمیان اخوت اور باہمی ہمدردی کو فروغ دینا ہے۔'
              : 'Jamaat Islah-ul-Muslimeen is a non-political spiritual welfare movement dedicated to cultivating love for Prophet Muhammad ﷺ, purifying hearts through silent remembrance (Zikr-e-Qalbi), upholding the pristine Sunnah, and fostering brotherhood and service across humanity.'}
          </p>
        </div>
      </section>

      {/* ==================================================
          3. FEATURED QURAN & HADITH CONTENT
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured Quran Card */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs hover:border-[#002FA7]/30 transition-colors flex flex-col justify-between text-start">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>
                    {language === 'ur' ? 'آیتِ مبارکہ' : language === 'ar' ? 'آية كريمة' : 'Featured Quranic Verse'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#64748B]">
                  Surah {featuredVerse.surahNameEnglish} ({featuredVerse.surahNumber}:{featuredVerse.ayahNumber})
                </span>
              </div>

              {/* Arabic Verse */}
              <div className="my-5 p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]" dir="rtl">
                <p className="font-arabic text-xl sm:text-2xl text-[#12247A] leading-[2.2] text-right font-medium">
                  {featuredVerse.arabicText}
                </p>
              </div>

              {/* Translation */}
              <p className={`text-sm sm:text-base text-[#1A1F2B] leading-relaxed mb-4 ${language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''}`}>
                {language === 'ur' ? featuredVerse.urduTranslation : featuredVerse.englishTranslation}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EEF2F7] flex items-center justify-between">
              <span className="text-xs text-[#64748B]">
                {language === 'ur' ? 'موضوع: طمأنینتِ قلب و ذکر' : 'Theme: Inner Serenity'}
              </span>
              <Link
                to="/quran"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] hover:underline"
              >
                <span>{language === 'ur' ? 'تمام آیات دیکھیں' : 'Read Full Quran'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Featured Hadith Card */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs hover:border-[#002FA7]/30 transition-colors flex flex-col justify-between text-start">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Scroll className="w-3.5 h-3.5 text-emerald-700" />
                  <span>
                    {language === 'ur' ? 'حدیثِ رسول ﷺ' : language === 'ar' ? 'حديث شريف' : 'Prophetic Tradition'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#64748B]">
                  {featuredHadith.collection} #{featuredHadith.hadithNumber}
                </span>
              </div>

              {/* Arabic Matn */}
              <div className="my-5 p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]" dir="rtl">
                <p className="font-arabic text-lg sm:text-xl text-[#12247A] leading-[2] text-right font-medium">
                  {featuredHadith.arabicText}
                </p>
              </div>

              {/* Translation */}
              <p className={`text-sm sm:text-base text-[#1A1F2B] leading-relaxed mb-4 ${language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''}`}>
                {language === 'ur' ? featuredHadith.urduTranslation : featuredHadith.englishTranslation}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EEF2F7] flex items-center justify-between">
              <span className="text-xs text-[#64748B]">
                {language === 'ur'
                  ? `راوی: ${t(featuredHadith.narrator)}`
                  : language === 'ar'
                  ? `الراوي: ${t(featuredHadith.narrator)}`
                  : `Narrator: ${t(featuredHadith.narrator)}`}
              </span>
              <Link
                to="/hadith"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] hover:underline"
              >
                <span>{language === 'ur' ? 'تمام احادیث دیکھیں' : 'View Hadith Collection'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. QIBLA & MURSHID MINI PROFILE CARD
          (CONCISE, ELEGANT, NON-INVASIVE CARD WITH OFFICIAL PHOTO)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QiblaMurshidMiniCard />
      </section>

      {/* ==================================================
          5. FEATURED ZIKR / SPIRITUALITY CONTENT (FOUR PILLARS)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full">
            {language === 'ur' ? 'بنیادی مقاصد' : language === 'ar' ? 'الأركان الأساسية' : 'Core Foundations'}
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-[#12247A] mt-3 ${
              language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur'
              ? 'جماعت اصلاح المسلمین کے چار بنیادی ستون'
              : language === 'ar'
              ? 'الأركان الأربعة لدعوة إصلاح المسلمين'
              : 'Four Pillars of Moral & Spiritual Reformation'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {[
            {
              icon: <Heart className="w-6 h-6 text-[#002FA7]" />,
              title: { en: 'Zikr-e-Qalbi', ur: 'ذکرِ قلبی', ar: 'الذكر القلبي' },
              desc: {
                en: 'Silent remembrance of Allah within the spiritual chambers of the heart (Lataif) to eradicate heedlessness.',
                ur: 'دل کی دھڑکنوں کو ذکرِ الٰہی کا عادی بنا کر باطن کو غفلت اور دنیاوی کدورتوں سے پاک کرنا۔',
                ar: 'عمارة القلب بذكر الله الدائم وتطهير اللطائف الروحية من شوائب الغفلة.',
              },
              link: '/spirituality/zikr-e-qalbi',
            },
            {
              icon: <Compass className="w-6 h-6 text-[#002FA7]" />,
              title: { en: 'Adherence to Sunnah', ur: 'اتباعِ سنت', ar: 'اتباع السنة' },
              desc: {
                en: 'Aligning every facet of daily worship, commerce, and interpersonal conduct with the blessed Prophet ﷺ.',
                ur: 'زندگی کے تمام شعبوں، عبادات اور معاملات کو حضور نبی کریم ﷺ کی سنتِ مطہرہ کے مطابق ڈھالنا۔',
                ar: 'التزام السنة النبوية المطهرة في العبادات والمعاملات والأخلاق كافة.',
              },
              link: '/about/code-of-conduct',
            },
            {
              icon: <Users className="w-6 h-6 text-[#002FA7]" />,
              title: { en: 'Islamic Brotherhood', ur: 'اتحادِ امت', ar: 'أخوة المسلمين' },
              desc: {
                en: 'Transcending sectarian fractures through mutual love, tolerance, humility, and service to humanity.',
                ur: 'فرقہ واریت اور انتشار سے بالاتر ہو کر اخوتِ اسلامی اور خدمتِ خلق کو فروغ دینا۔',
                ar: 'توثيق عرى المحبة والتعاون ونبذ الفرقة والتعصب بين أبناء الأمة الإسلامية.',
              },
              link: '/about/mission',
            },
            {
              icon: <BookMarked className="w-6 h-6 text-[#002FA7]" />,
              title: { en: 'Holistic Education', ur: 'دینی و عصری تعلیم', ar: 'التربية والتعليم' },
              desc: {
                en: 'Balancing traditional Quranic and Hadith scholarship with modern academic and moral excellence.',
                ur: 'مدارس طاہریہ اور تعلیمی نیٹ ورک کے ذریعے دینی علوم اور اخلاقی تربیت کی ترویج۔',
                ar: 'الجمع بين أصالة العلوم الشرعية في المعاهد ومتطلبات العصر في التربية الرشيدة.',
              },
              link: '/about/organizations',
            },
          ].map((pillar, idx) => {
            const pillarCtas = [
              { en: 'Learn Zikr Method', ur: 'طریقۂ ذکر سیکھیں', ar: 'تعلم طريقة الذكر' },
              { en: 'Review Code of Conduct', ur: 'دستور العمل دیکھیں', ar: 'مراجعة ميثاق العمل' },
              { en: 'Read Movement Manifesto', ur: 'منشور و مقاصد پڑھیں', ar: 'قراءة رسالة الجمعية' },
              { en: 'Explore Wings & Madaris', ur: 'مدارس و شعبہ جات دیکھیں', ar: 'استعراض الأجنحة والمعاهد' },
            ];
            const currentCta = pillarCtas[idx] || { en: 'Discover Pillar', ur: 'مزید تفصیل', ar: 'قراءة المزيد' };

            return (
              <Link
                key={idx}
                to={pillar.link}
                className="bg-white rounded-2xl border border-[#EEF2F7] p-6 hover:border-[#002FA7]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#002FA7]/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3
                    className={`text-lg font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(pillar.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {t(pillar.desc)}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#002FA7] mt-3">
                  <span>{t(currentCta)}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          6. FEATURED LIBRARY / PUBLICATIONS (MAKTABA TAHIRIYA)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full">
              {language === 'ur' ? 'ادارہ اشاعتِ طاہریہ' : 'Maktaba Tahiriya'}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold text-[#12247A] mt-2 ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur' ? 'مستند کتب و روحانی ذخیرہ' : 'Authentic Books & Publications'}
            </h2>
          </div>
          <Link
            to="/library/books"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002FA7] hover:underline"
          >
            <span>{language === 'ur' ? 'کتب خانہ ملاحظہ فرمائیں' : language === 'ar' ? 'استعراض مكتبة الكتب' : 'Explore Books Library'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {BOOKS_DATA.slice(0, 3).map((book) => {
            const isMalfuzat = book.slug === 'malfuzat-e-tahiriya' || book.id === 'book-2';

            return (
              <div
                key={book.id}
                className="bg-white rounded-2xl border border-[#EEF2F7] p-6 shadow-xs flex flex-col justify-between hover:border-[#002FA7]/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md uppercase">
                      {t(book.category)}
                    </span>
                    <span className="text-[11px] text-[#64748B] font-mono">{book.pages} pages</span>
                  </div>
                  <h3
                    className={`text-base sm:text-lg font-bold text-[#12247A] mb-1.5 ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {isMalfuzat ? (
                      <Link
                        to="/library/books/malfuzat-e-tahiriya"
                        className="hover:text-[#002FA7] transition-colors"
                      >
                        {t(book.title)}
                      </Link>
                    ) : (
                      t(book.title)
                    )}
                  </h3>
                  <p className="text-xs text-[#002FA7] font-semibold mb-3">{t(book.author)}</p>
                  <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                    {t(book.description)}
                  </p>
                </div>

                {isMalfuzat ? (
                  <div className="pt-4 mt-4 border-t border-[#EEF2F7] flex items-center justify-between gap-2">
                    <Link
                      to="/library/books/malfuzat-e-tahiriya"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#002FA7] hover:bg-[#002277] text-white text-xs font-bold transition-colors shadow-2xs"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{language === 'ur' ? 'آن لائن مطالعہ' : language === 'ar' ? 'قراءة الكتاب' : 'Read Online'}</span>
                    </Link>
                    <div className="flex items-center gap-1.5">
                      {book.pdfUrl && (
                        <button
                          type="button"
                          onClick={() => window.open(book.pdfUrl, '_blank', 'noopener,noreferrer')}
                          title={language === 'ur' ? 'نئے ٹیب میں پی ڈی ایف کھولیں' : 'Read in New Tab'}
                          aria-label={language === 'ur' ? 'نئے ٹیب میں پی ڈی ایف کھولیں' : 'Read in New Tab'}
                          className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-[#002FA7] transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <Link
                        to="/library/books/malfuzat-e-tahiriya"
                        className="text-xs font-bold text-[#002FA7] hover:underline px-1 py-1"
                      >
                        {language === 'ur' ? 'تفصیلات دیکھیں' : language === 'ar' ? 'تفاصيل الكتاب' : 'View Book'}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 mt-4 border-t border-[#EEF2F7] flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      {language === 'ur' ? 'جلد دستیاب ہوگا' : 'Coming Soon'}
                    </span>
                    <Link
                      to="/library/books"
                      className="text-xs font-bold text-[#002FA7] hover:underline"
                    >
                      {language === 'ur' ? 'کتاب کی تفصیلات دیکھیں' : language === 'ar' ? 'تفاصيل الكتاب' : 'View Book Details'}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          7. FEATURED MEDIA & LECTURES (JIM MEDIA WING)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#002FA7]" />
              <span>{language === 'ur' ? 'منتخب خطبات و بیانات' : language === 'ar' ? 'الخطب والمواعظ المختارة' : 'Featured Khitabat & Bayanat'}</span>
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold text-[#12247A] mt-2 ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur' ? 'امیرِ جماعت اور علمائے کرام کے خطابات' : 'Spiritual Lectures & Guidance Discourses'}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {language === 'ur'
                ? 'الجماعت اصلاح المسلمین کے آفیشل یوٹیوب چینل (JIM Media Wing) سے تصدیق شدہ بیانات'
                : 'Direct recordings from the official Al-Islah YouTube Channel (@alislahofficial)'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/library/khitabat"
              id="view-all-khitabat-btn"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002FA7] hover:underline"
            >
              <span>{language === 'ur' ? 'تمام خطبات و بیانات سنیں' : language === 'ar' ? 'استماع لجميع الخطب' : 'Listen to All Discourses'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {featuredKhitabat.map((video) => (
            <YouTubeCard key={video.id} video={video} showSpeaker={true} />
          ))}
        </div>
      </section>

      {/* ==================================================
          8. UPCOMING EVENTS & SALANA URS MUBARAK
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Grand Mosque Feature */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 flex flex-col justify-between text-start shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? 'مرکزی درگاہ و مسجد' : 'Central Markaz & Mosque'}</span>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-extrabold text-[#12247A] mb-3 ${
                  language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {t(GRAND_MOSQUE_DATA.title)}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                {t(GRAND_MOSQUE_DATA.content[0])}
              </p>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {t(GRAND_MOSQUE_DATA.content[1])}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#EEF2F7]">
              <Link
                to="/about/grand-mosque"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#002FA7] hover:underline"
              >
                <span>{language === 'ur' ? 'تعمیراتی تفصیلات و تاریخ' : 'View Architectural Details'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Salana Urs Mubarak Feature */}
          <div className="bg-[#F7F9FC] rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 flex flex-col justify-between text-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full mb-4">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'ur' ? 'سالانہ روحانی اجتماع' : 'Grand Annual Gathering'}</span>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-extrabold text-[#12247A] mb-3 ${
                  language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {t(mainUrs.title)}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                {t(mainUrs.description)}
              </p>
              <div className="bg-white rounded-xl p-4 border border-[#EEF2F7] space-y-2">
                <div className="text-xs font-bold text-[#12247A] flex items-center justify-between">
                  <span>{language === 'ur' ? 'مقام' : 'Location'}:</span>
                  <span className="text-[#64748B] font-normal">{t(mainUrs.location)}</span>
                </div>
                <div className="text-xs font-bold text-[#12247A] flex items-center justify-between">
                  <span>{language === 'ur' ? 'تاریخ' : 'Date'}:</span>
                  <span className="text-[#002FA7] font-semibold">{mainUrs.date}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#EEF2F7]">
              <Link
                to="/events/urs"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#002FA7] hover:underline"
              >
                <span>{language === 'ur' ? 'پروگرام و شیڈول دیکھیں' : 'View Urs Guidelines & Schedule'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          9. CONTACT / DIRECTORY SECTION
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#12247A] to-[#002FA7] rounded-2xl p-8 sm:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-start">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
              <MapPin className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'رابطہ و مراکز' : language === 'ar' ? 'المراكز والتواصل' : 'Verified Directory'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {language === 'ur'
                ? 'درگاہ اللہ آباد شریف و ملکی و بین الاقوامی مراکز'
                : language === 'ar'
                ? 'تواصل مع المقر العام والمراكز المعتمدة'
                : 'Connect With Dargah Allahabad Sharif & Regional Centers'}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              {language === 'ur'
                ? 'پاکستان بھر کے مراکز، بیرونِ ملک رابطے، اور خلفائے کرام کی مکمل اور باضابطہ رابطہ معلومات ملاحظہ فرمائیں۔'
                : 'Access direct phone numbers and verified locations for Central Markaz Allahabad Sharif, 13 verified Pakistan centers, international halqas, and regional Khulafa.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#002FA7] hover:bg-blue-50 text-sm font-bold shadow-md transition-colors"
            >
              <Building2 className="w-4 h-4 text-[#002FA7]" />
              <span>{language === 'ur' ? 'مراکز و رابطہ ڈائریکٹری' : language === 'ar' ? 'دليل المراكز والاتصال' : 'Explore Contact Directory'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
