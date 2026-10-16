import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  GraduationCap,
  Sparkles,
  Award,
  BookOpen,
  MapPin,
  Globe2,
  Heart,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/common/SEO';
import { SheikhSayingsSection } from '../../components/sheikh/SheikhSayingsSection';

export const SheikhProfilePage: React.FC = () => {
  const { language } = useLanguage();

  const sheikhPersonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi',
    'alternateName': [
      'Sajjan Saeen',
      'Sajjan Sain',
      'خواجہ محمد طاہر بخشی',
      'سجن سائیں',
      'محبوب سجن سائیں',
    ],
    'birthDate': '1963',
    'birthPlace': {
      '@type': 'Place',
      'name': 'Rehmatpur Sharif (Larkana), Pakistan',
    },
    'jobTitle': 'Spiritual Guide, Preacher of Islam & Ameer of Jamaat Islah-ul-Muslimeen',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Jamaat Islah-ul-Muslimeen',
      'url': 'https://islahulmuslimeen.org/',
    },
    'alumniOf': [
      {
        '@type': 'EducationalOrganization',
        'name': 'University of Sindh (First Position, MA Islamic Studies)',
      },
      {
        '@type': 'EducationalOrganization',
        'name': 'Al-Markaz-e-Qadriya Karachi',
      },
      {
        '@type': 'EducationalOrganization',
        'name': 'Allahabad Sharif Kandyaro',
      },
      {
        '@type': 'EducationalOrganization',
        'name': 'Dargah Fakirpur Sharif Radhan (Larkana)',
      },
    ],
    'description':
      'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi, known as Sajjan Saeen, is a spiritual guide and leading Islamic scholar of Tareeqat and Tassawuf from Sindh, Pakistan. Sajjada Nasheen and recipient of Khilafah in 1982 at Dargah Allah Abad Sharif.',
    'image': 'https://islahulmuslimeen.org/sajjan-sain.png',
    'homeLocation': {
      '@type': 'Place',
      'name': 'Dargah Allah Abad Sharif, Kandyaro, Sindh, Pakistan',
    },
  };

  const scrollToSayings = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('sheikh-sayings-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-24 space-y-16">
      <SEO
        title="Our Sheikh – Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi | Sajjan Saeen"
        description="Official profile, verified biography, education, spiritual lineage, and discourses of Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen), Ameer of Jamaat Islah-ul-Muslimeen."
        canonicalPath="/about/sheikh"
        keywords={[
          'Our Sheikh',
          'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi',
          'Sajjan Saeen',
          'Sajjan Sain',
          'Islah-ul-Muslimeen',
          'Islah ul Muslimeen',
          'Naqshbandi Mujaddidi',
          'Tareeqat and Tassawuf',
          'Zikr',
          'Zikr-e-Qalbi',
          'Dargah Allah Abad Sharif',
          'Islamic spiritual teachings',
          'سجن سائیں',
        ]}
        breadcrumbs={[
          { name: 'About Us', item: '/about' },
          { name: 'Our Sheikh', item: '/about/sheikh' },
        ]}
        structuredData={sheikhPersonSchema}
      />

      {/* 1. REFINED HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1545] via-[#12247A] to-[#002FA7] text-white">
        {/* Subtle Islamic Geometric Radial Motif */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.4) 1.5px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-blue-200/80">
            <Link to="/" className="hover:text-white transition-colors">
              {language === 'ur' ? 'صفحۂ اول' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/about" className="hover:text-white transition-colors">
              {language === 'ur' ? 'تعارف' : 'About Us'}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">
              {language === 'ur' ? 'ہمارے شیخ' : 'Our Sheikh'}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT COLUMN: Large Official Sheikh Photograph */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Elegant Image Frame */}
                <div className="relative rounded-2xl bg-white/10 border border-white/25 p-2.5 sm:p-3 shadow-md">
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/30 aspect-[3/4] shadow-inner">
                    <img
                      src="/sajjan-sain.png"
                      alt="Official Photograph of Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen)"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle Gradient Shadow at bottom for title legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1545]/90 via-[#0B1545]/40 to-transparent flex items-end p-4">
                      <div>
                        <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                          {language === 'ur' ? 'نقشبندی مجددی' : 'Naqshbandi Mujaddidi'}
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-white">
                          {language === 'ur' ? 'حضرت خواجہ محمد طاہر بخشی' : 'Hazrat Muhammad Tahir Bakhshi'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: H1, Headings, Subtitles, Highlights, and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-start order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>
                  {language === 'ur'
                    ? 'امیرِ جماعت اصلاح المسلمین و شیخِ طریقت'
                    : language === 'ar'
                    ? 'المرشد الروحي وأمير جمعية إصلاح المسلمين'
                    : 'Spiritual Guide & Islamic Teacher'}
                </span>
              </div>

              <div className="space-y-2">
                <h1
                  className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white ${
                    language === 'ur' ? 'font-urdu leading-tight' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {language === 'ur' ? 'ہمارے شیخ' : 'Our Sheikh'}
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-100/95 leading-snug">
                  {language === 'ur'
                    ? 'ہمارے شیخ – حضرت خواجہ محمد طاہر بخشی نقشبندی'
                    : 'Our Sheikh – Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi'}
                </h2>

                <div className="inline-block px-3 py-1 rounded-lg bg-white/10 text-amber-300 font-extrabold text-base sm:text-lg border border-amber-300/30">
                  {language === 'ur' ? 'سجن سائیں' : 'Sajjan Saeen'}
                </div>
              </div>

              {/* Short Profile Introduction based strictly on supplied source */}
              <p
                className={`text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                {language === 'ur'
                  ? 'حضرت خواجہ محمد طاہر بخشی نقشبندی المعروف سجن سائیں صوبہ سندھ سے تعلق رکھتے ہیں، شریعت و طریقت اور تصوف کے پیروکار ہیں، اسلام کی تبلیغ فرماتے ہیں اور دورِ حاضر کے عظیم رہنما اور روحانی شخصیت ہیں۔ آپ سلسلہ عالیہ نقشبندیہ مجددیہ سے تعلق رکھتے ہیں اور اسلامی علوم و تصوف میں نمایاں مقام رکھتے ہیں۔'
                  : 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi, known as Sajjan Saeen, belongs to Sindh province and is a follower of Tareeqat and Tassawuf (Sufism); preaches Islam, and is a great advisor and spiritual personality of today. Born in 1963 in Rehmatpur Sharif (Larkana), Pakistan, he belongs to the Naqshbandi Mujaddidi dynasty and is a leading personality of today as far as Islamic knowledge and mysticism (Tassawuf) is concerned.'}
              </p>

              {/* Quick Hero Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 border border-white/15 rounded-lg p-3">
                  <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-0.5">
                    {language === 'ur' ? 'ولادت' : 'Born'}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    1963 • Rehmatpur Sharif
                  </div>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-lg p-3">
                  <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-0.5">
                    {language === 'ur' ? 'سلسلہ طریقت' : 'Spiritual Tradition'}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Naqshbandi Mujaddidi
                  </div>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-lg p-3 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-0.5">
                    {language === 'ur' ? 'خلافت' : 'Khilafah'}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    1982 • Dargah Allah Abad
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToSayings}
                  id="sheikh-hero-sayings-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#12247A] hover:bg-blue-50 text-xs sm:text-sm font-bold transition-colors shadow-sm cursor-pointer"
                >
                  <Quote className="w-4 h-4 text-[#002FA7]" />
                  <span>
                    {language === 'ur' ? 'ارشاداتِ عالیہ پڑھیں (۵ ارشادات)' : 'Explore His Sayings (5 Discourses)'}
                  </span>
                </button>

                <a
                  href="#profile-details-section"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/25 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{language === 'ur' ? 'مکمل سوانح کا مطالعہ' : 'Read Full Biography'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-start">
        {/* 2. PROFILE HIGHLIGHT CARDS (SECTION 7 SPECIFICATION) */}
        <section aria-label="Profile Highlights">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 shadow-xs hover:border-[#002FA7]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] mb-2.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                {language === 'ur' ? 'سالِ ولادت' : 'Born'}
              </div>
              <div className="text-base font-extrabold text-[#12247A] mt-0.5">1963</div>
              <div className="text-xs text-[#64748B] mt-0.5">
                Rehmatpur Sharif (Larkana), Pakistan
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 shadow-xs hover:border-[#002FA7]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] mb-2.5">
                <Compass className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                {language === 'ur' ? 'سلسلہ عالیہ' : 'Spiritual Tradition'}
              </div>
              <div className="text-base font-extrabold text-[#12247A] mt-0.5">
                Naqshbandi Mujaddidi
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">
                Dynasty of Mysticism & Tareeqat
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 shadow-xs hover:border-[#002FA7]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] mb-2.5">
                <Heart className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                {language === 'ur' ? 'روحانی تربیت' : 'Spiritual Education'}
              </div>
              <div className="text-base font-extrabold text-[#12247A] mt-0.5">
                Hazrat Allah Bakhsh
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">
                Sohna Saeen (May Allah be Pleased with Him)
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 shadow-xs hover:border-[#002FA7]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] mb-2.5">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                {language === 'ur' ? 'دستارِ فضیلت و خلافت' : 'Khilafah'}
              </div>
              <div className="text-base font-extrabold text-[#12247A] mt-0.5">1982</div>
              <div className="text-xs text-[#64748B] mt-0.5">
                Dargah Allah Abad Sharif
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 shadow-xs hover:border-[#002FA7]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] mb-2.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                {language === 'ur' ? 'اسلامی علوم' : 'Islamic Studies'}
              </div>
              <div className="text-base font-extrabold text-[#12247A] mt-0.5">
                First Position, MA
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">
                Sindh University
              </div>
            </div>
          </div>
        </section>

        {/* 3. STRUCTURED EDITORIAL BIOGRAPHY (SECTIONS 5 & 6 SPECIFICATION) */}
        <section id="profile-details-section" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full">
              {language === 'ur' ? 'سوانحِ حیات' : 'Official Biography'}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-black text-[#12247A] ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {language === 'ur' ? 'ہمارے شیخ – ان کا سوانحی تعارف' : 'Our Sheikh – His Profile'}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-10">
            {/* Section A: Background & Early Life */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#002FA7]">
                <MapPin className="w-5 h-5" />
                <h2
                  className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'پس منظر اور ابتدائی زندگی' : 'Background & Early Life'}
                </h2>
              </div>
              <div
                className={`text-sm sm:text-base text-[#334155] leading-relaxed pl-7 rtl:pl-0 rtl:pr-7 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#002FA7]/20 ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                <p>
                  Hazrat Khwaja Muhammad Tahir Bakhsi Naqshbandi known as Sajjan Saeen belongs to Sindh province, is a follower of Tareeqat and Tassawuf (Sufism); preaches Islam, is a great advisor and spiritual personality of today. He was born in 1963 in Rehmatpur Sharif (Larkana), Pakistan. He belongs to the Naqshbandi Mujaddidi dynasty and is a leading personality of today as far as Islamic knowledge and mysticism (Tassawuf) is concerned.
                </p>
              </div>
            </div>

            {/* Section B: Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#002FA7]">
                <GraduationCap className="w-5 h-5" />
                <h2
                  className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'تعلیم اور اساتذہ کرام' : 'Education'}
                </h2>
              </div>
              <div
                className={`text-sm sm:text-base text-[#334155] leading-relaxed pl-7 rtl:pl-0 rtl:pr-7 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#002FA7]/20 space-y-3 ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                <p>
                  He got his primary education from Dargah Fakirpur Sharif Radhan (in District Larkana) and got his Dars-i-Nizami education from Allahabad Sharif Kandyaro. He received first position in MA Islamic Studies from Sindh University.
                </p>
                <p>
                  For his initial Dars-i-Nizami study of basic books he was admitted to Al-Markaz-e-Qadriya Karachi. At that time, he studied from Sheikh-ul-Hadith Hazrat Allama Muntakhib-ul-Haq AlQadri, a well-known teacher Allama Yahya Siddiqui, Sheikh-ul-Adaab Maulana Saeed-ur-Rehman and other scholars; studied Tafsir (interpretation of Quran) and rules of Tafsir, Hadith and rules of Hadith, Fiqah and rules of Fiqah, Philosophy, Antilogy, Public Speaking, Arabic Literature and History.
                </p>
                <p>
                  He also studied from an internationally known researcher Respectable Abdul Qudus Hashmi the knowledge of history of different religions and comparison of different religions and has perfected his knowledge of the subject.
                </p>
              </div>
            </div>

            {/* Section C: Spiritual Education & Khilafah */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#002FA7]">
                <Award className="w-5 h-5" />
                <h2
                  className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'روحانی تربیت اور دستارِ خلافت' : 'Spiritual Education & Khilafah'}
                </h2>
              </div>
              <div
                className={`text-sm sm:text-base text-[#334155] leading-relaxed pl-7 rtl:pl-0 rtl:pr-7 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#002FA7]/20 ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                <p>
                  He completed his spiritual education from his father Hazrat Allah Bakhsh, Sohna Saeen (May Allah be Pleased with Him). Hazrat Sohna Saeen awarded him the turban of honour (Khilafah) in 1982 at Dargah Allah Abad Sharif in an annual gathering. Hazrat Muhammad Tahir Bakhshi has devoted himself completely to the sacred cause of propagation of Islam after the death of his Shaikh Hazrat Allah Bakhsh.
                </p>
              </div>
            </div>

            {/* Section D: Preaching & Islamic Work */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#002FA7]">
                <Sparkles className="w-5 h-5" />
                <h2
                  className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'تبلیغ اور اسلامی خدمات' : 'Preaching & Islamic Work'}
                </h2>
              </div>
              <div
                className={`text-sm sm:text-base text-[#334155] leading-relaxed pl-7 rtl:pl-0 rtl:pr-7 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#002FA7]/20 ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                <p>
                  His approach to preaching is cordial; lectures are informative, striking, simple and lovely. He is young and much zealous to preach Islam. Hundreds of thousands of followers are attached to him to enlighten their hearts with Zikr of Allah. These people belong not only to Pakistan but the rest of the world.
                </p>
              </div>
            </div>

            {/* Section E: Spiritual Preaching Centers */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#002FA7]">
                <Compass className="w-5 h-5" />
                <h2
                  className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'روحانی دعوتی و تبلیغی مراکز' : 'Spiritual Preaching Centers'}
                </h2>
              </div>
              <div
                className={`text-sm sm:text-base text-[#334155] leading-relaxed pl-7 rtl:pl-0 rtl:pr-7 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#002FA7]/20 ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                <p>
                  He has established several spiritual preaching centers in different cities and towns of Pakistan such as Karachi, Hyderabad, Lahore, Larkana, Faisalabad, Rawalpindi, Sialkot, Rahimyar Khan etc.
                </p>
              </div>
            </div>

            {/* Section F: International Dawah Visits */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#002FA7]">
                <Globe2 className="w-5 h-5" />
                <h2
                  className={`text-xl sm:text-2xl font-bold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'بین الاقوامی دعوتی دورہ جات' : 'International Dawah Visits'}
                </h2>
              </div>
              <div
                className={`text-sm sm:text-base text-[#334155] leading-relaxed pl-7 rtl:pl-0 rtl:pr-7 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#002FA7]/20 ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                <p>
                  He also visits U.A.E for propagation of Islam twice a year. Since 2000, he has also been visiting the United Kingdom for the propagation of Islam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MESSAGE / TEACHINGS FEATURE (SECTION 8 SPECIFICATION) */}
        <section aria-label="Message of Hazrat Khwaja Sajjan Saeen">
          <div className="bg-[#F8FAFC] border border-[#EEF2F7] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#002FA7]">
                {language === 'ur' ? 'پیغام و ہدایات' : 'Spiritual Message'}
              </span>
              <h2
                className={`text-2xl sm:text-3xl font-black text-[#12247A] ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}
              >
                {language === 'ur'
                  ? 'پیغام: حضرت خواجہ سجن سائیں'
                  : 'Message of Hazrat Khwaja Sajjan Saeen'}
              </h2>
            </div>

            {/* Verbatim Source Message Quote */}
            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 text-[#002FA7]/30 shrink-0 mt-1" />
                <div
                  className={`text-sm sm:text-base text-[#1E293B] leading-relaxed font-serif italic ${
                    language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed not-italic' : ''
                  }`}
                >
                  “The message of Hazrat Khwaja Sajjan Saeen is very simple but very effective. He says that one should keep a check of one’s own wrong doings and never think wrongfully of any religion or sect. One should only focus on one’s own moral values and for the betterment of others. Never harm anyone by your deeds, by your strength or by your wealth. Act like a flowing spring under the surface of the earth, that is, help the mankind with your qualities without propagation. For the betterment of the world and self, perform zikr (remembrance of Allah in ones heart) and always keep your connection with Allah and follow the Sunnah of Nabi-i-Akram (peace be upon him). His message teaches love, kindness and brotherhood and is clear from all worldly desires and pretence. His message is a true copy of his own personality, and that it gives a person inner satisfaction that helps in purifying his soul.”
                </div>
              </div>
            </div>

            {/* 10 Highlighted Themes from Source Text */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] text-center">
                {language === 'ur' ? 'پیغام کے دس بنیادی عناصر' : 'Ten Core Themes of the Message'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { title: 'Self-accountability', ur: 'اپنا احتساب' },
                  { title: 'Respect for religions & sects', ur: 'مذاہب و مسالک کا احترام' },
                  { title: 'Helping mankind', ur: 'خلقِ خدا کی مدد' },
                  { title: 'Zikr of Allah', ur: 'ذکرِ الٰہی' },
                  { title: 'Connection with Allah', ur: 'اللہ تعالیٰ سے تعلق' },
                  { title: 'Following the Sunnah', ur: 'اتباعِ سنتِ نبوی ﷺ' },
                  { title: 'Love', ur: 'محبت' },
                  { title: 'Kindness', ur: 'شفقت و نرمی' },
                  { title: 'Brotherhood', ur: 'اخوت و بھائی چارہ' },
                  { title: 'Purification of soul', ur: 'تزکیۂ نفس' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-[#EEF2F7] p-3 text-center shadow-2xs hover:border-[#002FA7]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#002FA7] mx-auto mb-1.5" />
                    <div className="text-xs font-bold text-[#12247A]">
                      {language === 'ur' ? item.ur : item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR SHEIKH — HIS SAYINGS (SECTION 9 SPECIFICATION) */}
        <SheikhSayingsSection />

        {/* 6. INTERNAL EXPLORATION LINKS (SEO & USABILITY) */}
        <section className="pt-6 border-t border-[#EEF2F7]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link
              to="/spirituality/zikr-e-qalbi"
              className="bg-white rounded-2xl border border-[#EEF2F7] p-5 hover:border-[#002FA7]/40 transition-all group flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-[#64748B]">Spirituality</div>
                <div className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7]">
                  Zikr-e-Qalbi Guide
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about/khulafa"
              className="bg-white rounded-2xl border border-[#EEF2F7] p-5 hover:border-[#002FA7]/40 transition-all group flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-[#64748B]">Spiritual Deputies</div>
                <div className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7]">
                  Khulafa-e-Karam (472)
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/library/books"
              className="bg-white rounded-2xl border border-[#EEF2F7] p-5 hover:border-[#002FA7]/40 transition-all group flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-[#64748B]">Library</div>
                <div className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7]">
                  Maktaba Tahiriya Books
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/library/khitabat"
              className="bg-white rounded-2xl border border-[#EEF2F7] p-5 hover:border-[#002FA7]/40 transition-all group flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-[#64748B]">Media & Lectures</div>
                <div className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7]">
                  Spiritual Discourses
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="bg-white rounded-2xl border border-[#EEF2F7] p-5 hover:border-[#002FA7]/40 transition-all group flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-[#64748B]">Directory</div>
                <div className="text-sm font-bold text-[#12247A] group-hover:text-[#002FA7]">
                  Centers & Contacts
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#002FA7] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
