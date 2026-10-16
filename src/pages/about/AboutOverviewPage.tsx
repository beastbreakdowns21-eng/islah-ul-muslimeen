import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  User,
  Users,
  BookOpen,
  Compass,
  ArrowRight,
  Sparkles,
  Quote,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import {
  ABOUT_OVERVIEW_DATA,
  MISSION_DATA,
  GRAND_MOSQUE_DATA,
} from '../../data/aboutData';
import { SEO } from '../../components/common/SEO';

export const AboutOverviewPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-20 space-y-12">
      <SEO
        title="About Jamaat Islah-ul-Muslimeen | History, Mission & Spiritual Path"
        description="Learn about Jamaat Islah-ul-Muslimeen, founded by Hazrat Khwaja Sohna Saeen (R.A) and led by Hazrat Sajjan Saeen. Discover its history, welfare, and spiritual reform."
        canonicalPath="/about"
        keywords={[
          'Islah-ul-Muslimeen',
          'Islah ul Muslimeen',
          'Islah Muslim',
          'Jamaat Islah-ul-Muslimeen',
          'Sajjan Sain',
          'Sajjan Saeen',
          'Our Sheikh',
          'Khwaja Sohna Saeen',
          'Dargah Allahabad Sharif',
          'Naqshbandi Tariqah',
          'Islamic welfare',
          'جماعت اصلاح المسلمین',
        ]}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about' },
        ]}
      />
      <PageHeader
        badge={language === 'ur' ? 'تعارفِ جماعت' : language === 'ar' ? 'نبذة عن الجمعية' : 'About Movement'}
        title={t(ABOUT_OVERVIEW_DATA.title)}
        subtitle={t(ABOUT_OVERVIEW_DATA.subtitle || { en: '', ur: '', ar: '' })}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Content Article */}
        <section className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs text-start space-y-6">
          <div className="space-y-4">
            {ABOUT_OVERVIEW_DATA.content.map((p, i) => (
              <p
                key={i}
                className={`text-sm sm:text-base text-[#1A1F2B] leading-relaxed ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                {t(p)}
              </p>
            ))}
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#EEF2F7]">
            {ABOUT_OVERVIEW_DATA.highlights?.map((h, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
                <h4
                  className={`text-sm font-bold text-[#12247A] mb-1 ${
                    language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t(h.title)}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">{t(h.description)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEDICATED OUR SHEIKH FEATURE PROFILE SECTION WITH ID ANCHOR */}
        <section
          id="our-sheikh"
          className="scroll-mt-24 rounded-2xl bg-gradient-to-br from-[#0B1545] via-[#12247A] to-[#002FA7] text-white p-6 sm:p-10 shadow-xl relative overflow-hidden border border-white/15"
        >
          {/* Subtle Islamic Geometric Motif */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen"
            style={{
              backgroundImage: 'radial-gradient(circle at 18px 18px, rgba(255,255,255,0.4) 1.5px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Official Photograph */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-48 sm:w-56 rounded-2xl overflow-hidden bg-white/10 p-1.5 border-2 border-white/30 shadow-2xl">
                <img
                  src="/sajjan-sain.png"
                  alt="Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen) - Official Photograph"
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right: Profile Info & Anchors */}
            <div className="lg:col-span-8 space-y-4 text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-200 border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>{language === 'ur' ? 'امیرِ جماعت و شیخِ طریقت' : 'Spiritual Guide & Ameer'}</span>
              </div>

              <div className="space-y-1">
                <h2
                  className={`text-2xl sm:text-3xl font-black text-white ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}
                >
                  {language === 'ur' ? 'ہمارے شیخ' : 'Our Sheikh'}
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-blue-100">
                  {language === 'ur'
                    ? 'ہمارے شیخ – حضرت خواجہ محمد طاہر بخشی نقشبندی'
                    : 'Our Sheikh – Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi'}
                </h3>
                <div className="text-sm font-extrabold text-amber-300">
                  {language === 'ur' ? 'سجن سائیں' : 'Sajjan Saeen'}
                </div>
              </div>

              <p
                className={`text-xs sm:text-sm text-blue-100/90 leading-relaxed ${
                  language === 'ur' ? 'font-urdu text-sm sm:text-base leading-relaxed' : ''
                }`}
              >
                {language === 'ur'
                  ? 'حضرت خواجہ محمد طاہر بخشی نقشبندی المعروف سجن سائیں صوبہ سندھ سے تعلق رکھتے ہیں، شریعت و طریقت اور تصوف کے پیروکار ہیں، اسلام کی تبلیغ فرماتے ہیں اور دورِ حاضر کے عظیم رہنما اور روحانی شخصیت ہیں۔'
                  : 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi, known as Sajjan Saeen, belongs to Sindh province and is a follower of Tareeqat and Tassawuf (Sufism); preaches Islam, is a great advisor and leading spiritual personality of today.'}
              </p>

              {/* Verified Highlight Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center sm:text-start">
                <div className="bg-white/10 rounded-lg p-2 text-xs">
                  <div className="text-[10px] text-blue-200 uppercase font-semibold">Born</div>
                  <div className="font-bold text-white">1963 • Rehmatpur</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-xs">
                  <div className="text-[10px] text-blue-200 uppercase font-semibold">Tradition</div>
                  <div className="font-bold text-white">Naqshbandi Mujaddidi</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-xs">
                  <div className="text-[10px] text-blue-200 uppercase font-semibold">Khilafah</div>
                  <div className="font-bold text-white">1982 • Dargah Allah Abad</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-xs">
                  <div className="text-[10px] text-blue-200 uppercase font-semibold">Studies</div>
                  <div className="font-bold text-white">1st Position MA</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about/sheikh"
                  id="about-view-full-sheikh-profile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#12247A] hover:bg-blue-50 text-xs sm:text-sm font-extrabold transition-all shadow-md"
                >
                  <User className="w-4 h-4 text-[#002FA7]" />
                  <span>{language === 'ur' ? 'مکمل سوانحِ حیات دیکھیں' : 'View Full Profile'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>

                <Link
                  to="/about/sheikh#sheikh-sayings-section"
                  id="about-view-sheikh-sayings"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold border border-white/25 transition-colors backdrop-blur-xs"
                >
                  <Quote className="w-4 h-4 text-amber-300" />
                  <span>{language === 'ur' ? 'ارشاداتِ عالیہ (۵ ارشادات)' : 'His Sayings'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Grid to Sub-Pages */}
        <section className="space-y-6 text-start">
          <h2
            className={`text-2xl font-extrabold text-[#12247A] ${
              language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur' ? 'شعبہ جات و متعلقہ تفصیلات' : 'Explore About Sections'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: {
                  en: 'Our Sheikh (Sajjan Saeen)',
                  ur: 'مرشدِ کامل (سجن سائیں)',
                  ar: 'شيخنا الجليل',
                },
                desc: {
                  en: 'Life, education, spiritual lineage, and teachings of Hazrat Khwaja Muhammad Tahir',
                  ur: 'حضرت خواجہ محمد طاہر بخشی محبوب سجن سائیں کی سیرت، تعلیم اور ارشادات',
                  ar: 'سيرة وتوجيهات فضيلة الشيخ خواجه محمد طاهر',
                },
                path: '/about/sheikh',
                icon: <User className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'Read Complete Biography', ur: 'مکمل سوانحِ حیات پڑھیں', ar: 'قراءة السيرة الذاتية كاملة' },
              },
              {
                title: GRAND_MOSQUE_DATA.title,
                desc: GRAND_MOSQUE_DATA.subtitle,
                path: '/about/grand-mosque',
                icon: <Building2 className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'View Mosque Architecture', ur: 'جامع مسجد کی تاریخ و فنِ تعمیر', ar: 'استعراض عمارة وتاريخ الجامع' },
              },
              {
                title: MISSION_DATA.title,
                desc: MISSION_DATA.subtitle,
                path: '/about/mission',
                icon: <Compass className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'Read Movement Manifesto', ur: 'منشور و بنیادی مقاصد پڑھیں', ar: 'قراءة رسالة وأهداف الجمعية' },
              },
              {
                title: { en: 'Code of Conduct (Dastur)', ur: 'دستور العمل', ar: 'ميثاق العمل' },
                desc: {
                  en: 'Spiritual discipline and behavioral ethics for every associate',
                  ur: 'ہر رکن و سالک کے لیے لازمی شرعی و اخلاقی ضابطہ',
                  ar: 'المنهج السلوكي والأخلاقي للمنتسبين',
                },
                path: '/about/code-of-conduct',
                icon: <ShieldCheck className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'Review Code of Conduct', ur: 'دستور العمل کے نکات دیکھیں', ar: 'مراجعة بنود ميثاق العمل' },
              },
              {
                title: { en: 'Organizational Structure', ur: 'تنظیمی ڈھانچہ', ar: 'الهيكل التنظيمي' },
                desc: {
                  en: 'Majlis-e-Shura and provincial/district branches',
                  ur: 'مرکزی مجلسِ شوریٰ اور تنظیمی نظام',
                  ar: 'مجلس الشورى المركزي واللجان الفرعية',
                },
                path: '/about/organization',
                icon: <Building2 className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'View Administrative Shura', ur: 'مرکزی شوریٰ و شعبہ جات دیکھیں', ar: 'استعراض الهيكل ومجلس الشورى' },
              },
              {
                title: { en: 'Sister Organizations', ur: 'معاون تنظیمیں', ar: 'المؤسسات التابعة' },
                desc: {
                  en: 'Rohani Talaba Jamaat, Jamiat-e-Ulema, and Welfare',
                  ur: 'روحانی طلبہ جماعت اور جمعیت علمائے طاہریہ',
                  ar: 'اتحاد الطلاب وهيئة العلماء والعمل الخيري',
                },
                path: '/about/organizations',
                icon: <BookOpen className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'Explore Wings & Madaris', ur: 'معاون تنظیمیں اور مدارس دیکھیں', ar: 'استعراض الأجنحة والمعاهد' },
              },
              {
                title: { en: 'Khulafa-e-Karam Directory', ur: 'خلفائے کرام کی باضابطہ فہرست', ar: 'دليل الخلفاء الكرام' },
                desc: {
                  en: 'Directory of 472 authorized spiritual deputies across provinces and overseas',
                  ur: 'حضرت سجن سائیں کے 472 باضابطہ خلفائے کرام کا صوبہ وار و ضلع وار مصدقہ ریکارڈ',
                  ar: '472 خليفة ونائب موثق في مختلف الأقاليم وخارج باكستان',
                },
                path: '/about/khulafa',
                icon: <Users className="w-5 h-5 text-[#002FA7]" />,
                cta: { en: 'Browse Complete Directory', ur: 'مکمل مصدقہ فہرست دیکھیں', ar: 'استعراض الدليل المعتمد' },
              },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.path}
                className="bg-white rounded-2xl border border-[#EEF2F7] p-6 hover:border-[#002FA7]/40 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#002FA7]/10 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3
                    className={`text-base font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(card.title)}
                  </h3>
                  {card.desc && (
                    <p className="text-xs text-[#64748B] leading-relaxed">{t(card.desc)}</p>
                  )}
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#002FA7] mt-4">
                  <span>{t(card.cta)}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
