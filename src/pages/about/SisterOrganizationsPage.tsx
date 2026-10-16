import React from 'react';
import { BookOpen, Users, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { SISTER_ORGANIZATIONS_DATA } from '../../data/aboutData';

export const SisterOrganizationsPage: React.FC = () => {
  const { t, language } = useLanguage();

  const wings = [
    {
      title: { en: 'Rohani Talaba Jamaat (RTJ)', ur: 'روحانی طلبہ جماعت (RTJ)', ar: 'اتحاد الطلاب الروحاني' },
      role: {
        en: 'Youth & student wing active across universities and colleges fostering Islamic morals, intellectual excellence, and character building.',
        ur: 'کالجز اور یونیورسٹیز کے طلبہ میں اسلامی اقدار، علمی لگن اور کردار سازی کے لیے کام کرنے والی باوقار طلبہ تنظیم۔',
        ar: 'منظمة طلابية في الجامعات والمعاهد لغرس التربية الإسلامية والأخلاق العالية والتفوق الدراسي.',
      },
      icon: <Users className="w-5 h-5 text-[#002FA7]" />,
    },
    {
      title: { en: 'Jamiat-e-Ulema Tahiriya', ur: 'جمعیت علمائے طاہریہ', ar: 'جمعية علماء طاهرية' },
      role: {
        en: 'Scholarly assembly of Islamic jurists, Muftis, and seminary principals supervising Islamic education and fatwa issuance.',
        ur: 'جید علمائے کرام اور مفتیانِ عظام کا نمائندہ فورم جو دینی مدارس کے تعلیمی معیار اور شرعی رہنمائی کی نگرانی کرتا ہے۔',
        ar: 'رابطة علمائية تجمع المفتين ومدرسي الشريعة للإشراف على المعاهد الدينية والإفتاء.',
      },
      icon: <Award className="w-5 h-5 text-[#002FA7]" />,
    },
    {
      title: { en: 'Al-Tahir Publications (Maktaba Tahiriya)', ur: 'ادارہ اشاعتِ طاہریہ', ar: 'دار النشر الطاهرية' },
      role: {
        en: 'Official publishing house printing authentic Islamic literature, research monographs, and the monthly magazine "Al-Tahir".',
        ur: 'مستند دینی کتب، رسائل، اور مقبول عام ماہنامہ "الطاہر" کی معیاری طباعت و اشاعت کا مرکزی ادارہ۔',
        ar: 'دار متخصصة في نشر أمهات كتب التصوف المحققة وإصدار مجلة "الطاهر" الشهرية.',
      },
      icon: <BookOpen className="w-5 h-5 text-[#002FA7]" />,
    },
    {
      title: { en: 'Tahiri Medical & Welfare Wing', ur: 'طاہری ویلفیئر سروسز', ar: 'مؤسسة طاهري للإغاثة والتنمية' },
      role: {
        en: 'Humanitarian welfare services providing free medical camps, emergency disaster relief, ambulances, and widow assistance.',
        ur: 'مفت طبی کیمپ، قدرتی آفات میں ہنگامی امداد، ایمبولینس سروسز اور نادار خاندانوں کی مالی کفالت۔',
        ar: 'تقديم الخدمات الإنسانية من مخيمات علاجية مجانية، وكفالة الأيتام، وإغاثة المنكوبين.',
      },
      icon: <HeartHandshake className="w-5 h-5 text-[#002FA7]" />,
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'معاون تنظیمیں' : language === 'ar' ? 'الأجنحة المتخصصة' : 'Sister Wings'}
        title={t(SISTER_ORGANIZATIONS_DATA.title)}
        subtitle={t(SISTER_ORGANIZATIONS_DATA.subtitle || { en: '', ur: '', ar: '' })}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'معاون تنظیمیں' : 'Sister Organizations',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wings.map((wing, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 shadow-xs space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#002FA7]/10 flex items-center justify-center">
                {wing.icon}
              </div>
              <h3
                className={`text-lg font-bold text-[#12247A] ${
                  language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {t(wing.title)}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {t(wing.role)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
