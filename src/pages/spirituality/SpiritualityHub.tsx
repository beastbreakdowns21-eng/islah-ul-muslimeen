import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Compass, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { NAQSHBANDI_PRINCIPLES } from '../../data/spiritualityData';

export const SpiritualityHub: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      title: {
        en: 'Zikr-e-Qalbi & The 6 Subtle Faculties',
        ur: 'ذکرِ قلبی اور لطائفِ ستہ',
        ar: 'الذكر القلبي واللطائف الست',
      },
      desc: {
        en: 'The inner silent remembrance in the heart that purifies core spiritual faculties.',
        ur: 'دل کی دھڑکنوں سے ذکرِ الٰہی کا باطنی طریقہ اور ششگانہ لطائف کا تعارف۔',
        ar: 'منهج الذكر الخفي في القلب لتطهير اللطائف الروحية الست.',
      },
      path: '/spirituality/zikr-qalbi',
      icon: <Heart className="w-5 h-5 text-[#002FA7]" />,
      tag: { en: 'Core Practice', ur: 'بنیادی عمل', ar: 'الأساس' },
      cta: { en: 'Learn Zikr-e-Qalbi Method', ur: 'طریقۂ ذکرِ قلبی سیکھیں', ar: 'تعلم طريقة الذكر القلبي' },
    },
    {
      title: {
        en: 'The Golden Chain (Shijra-e-Aaliya)',
        ur: 'شجرہ عالیہ مبارکہ',
        ar: 'السلسلة الذهبية النقشبندية',
      },
      desc: {
        en: 'The unbroken lineage of 41 spiritual masters connecting the Prophet ﷺ to Dargah Allahabad Sharif.',
        ur: 'رسول اللہ ﷺ سے لے کر دورِ حاضر تک چودہ صدیوں پر محیط برگزیدہ مشائخ کی مقدس لڑی۔',
        ar: 'السلسلة المتصلة من النبي ﷺ والصديق ؓ إلى مشايخ دركاه الله آباد شريف.',
      },
      path: '/spirituality/golden-chain',
      icon: <Sparkles className="w-5 h-5 text-[#002FA7]" />,
      tag: { en: 'Unbroken Lineage', ur: 'مقدس لڑی', ar: 'السند المتصل' },
      cta: { en: 'View Complete Lineage (Shijra)', ur: 'شجرۂ عالیہ کی مبارک لڑی دیکھیں', ar: 'استعراض السلسلة الذهبية' },
    },
    {
      title: {
        en: `${NAQSHBANDI_PRINCIPLES.length} Sacred Principles of Naqshbandi Path`,
        ur: `طریقہ نقشبندیہ کے ${NAQSHBANDI_PRINCIPLES.length === 11 ? 'گیارہ' : NAQSHBANDI_PRINCIPLES.length} کلمات و اصول`,
        ar: 'الأصول الإحدى عشرة للطريقة',
      },
      desc: {
        en: 'Hosh dar Dam, Nazar bar Qadam, Khalwat dar Anjuman, and perpetual awareness of God.',
        ur: 'ہوش در دم، نظر بر قدم اور خلوت در انجمن کے سنہری کلماتِ قدسیہ۔',
        ar: 'الكلمات القدسية لدوام الحضور ومراقبة الأنفاس والخطوات في كل حين.',
      },
      path: '/spirituality/principles',
      icon: <Compass className="w-5 h-5 text-[#002FA7]" />,
      tag: { en: 'Spiritual Axioms', ur: 'کلماتِ قدسیہ', ar: 'الأصول' },
      cta: { en: `Study ${NAQSHBANDI_PRINCIPLES.length} Sacred Principles`, ur: 'گیارہ کلماتِ قدسیہ کا مطالعہ کریں', ar: 'دراسة الأصول الإحدى عشرة' },
    },
    {
      title: {
        en: 'Sayings & Counsels of the Masters',
        ur: 'ارشادات و ملفوظاتِ طاہریہ',
        ar: 'أقوال ووصايا المشايخ',
      },
      desc: {
        en: 'Profound spiritual counsels of Hazrat Khwaja Sohna Saeen and Hazrat Sajjan Saeen.',
        ur: 'حضرت سوہنا سائیں اور حضرت سجن سائیں کے ایمان افروز فرمودات اور نصیحتیں۔',
        ar: 'درر وحكم ووصايا الشيخين الجليلين في السلوك وحسن المعاملة.',
      },
      path: '/spirituality/sayings',
      icon: <BookOpen className="w-5 h-5 text-[#002FA7]" />,
      tag: { en: 'Wisdom', ur: 'حکمت و موعظت', ar: 'الحكمة' },
      cta: { en: 'Read Counsels of the Masters', ur: 'ارشادات و ملفوظات ملاحظہ فرمائیں', ar: 'قراءة وصايا وحكم المشايخ' },
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'روحانیات و تصوف' : language === 'ar' ? 'التصوف والتزكية' : 'Spiritual Tradition'}
        title={
          language === 'ur'
            ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ'
            : language === 'ar'
            ? 'منهج السلوك في الطريقة النقشبندية الطاهرية'
            : 'The Naqshbandi Mujaddidi Tahiri Spiritual Order'
        }
        subtitle={
          language === 'ur'
            ? 'تزکیۂ نفس، تصفیۂ قلب اور اتباعِ سنتِ نبویہ ﷺ کی روشنی میں باطنی منازل کا طے کرنا۔'
            : 'Purification of the soul, illumination of the heart, and steadfast emulation of the Sunnah.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'روحانیات' : 'Spirituality',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <Link
              key={idx}
              to={section.path}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs hover:border-[#002FA7]/40 hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#002FA7]/10 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md uppercase">
                    {t(section.tag)}
                  </span>
                </div>

                <h3
                  className={`text-lg sm:text-xl font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                    language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t(section.title)}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {t(section.desc)}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EEF2F7] flex items-center justify-between text-xs font-bold text-[#002FA7]">
                <span>{t(section.cta)}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
