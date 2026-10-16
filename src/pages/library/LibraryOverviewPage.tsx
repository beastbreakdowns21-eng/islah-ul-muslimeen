import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Globe, Newspaper, Users, Languages, ArrowRight, Video } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';

export const LibraryOverviewPage: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      id: 'books',
      title: { en: 'Authentic Books (Kutub)', ur: 'مستند کتب و تصانیف', ar: 'الكتب والمؤلفات' },
      description: {
        en: 'Core canonical works by Hazrat Khwaja Sohna Saeen and venerable scholars on Islamic theology, Tazkiyah, and Shariah.',
        ur: 'حضرت خواجہ سوہنا سائیں اور علمائے طاہریہ کی بنیادی تصانیف اور تفاسیر۔',
        ar: 'مؤلفات مشايخ الطريقة في العقيدة، التزكية، والفقه والتصوف السني.',
      },
      icon: <Book className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/books',
      badge: { en: 'Cataloged Library', ur: 'کتب خانہ', ar: 'مكتبة المصادر' },
      cta: { en: 'Browse Books Catalog', ur: 'کتب خانہ ملاحظہ فرمائیں', ar: 'تصفح قائمة الكتب' },
    },
    {
      id: 'articles',
      title: { en: 'Research Articles', ur: 'تحقیقی مقالات و مضامین', ar: 'الأبحاث والمقالات' },
      description: {
        en: 'Peer-reviewed scholarly treatises on Shariah compliance, Tasawwuf, moral reform, and societal harmony.',
        ur: 'شریعت و طریقت کی ہم آہنگی اور معاشرتی اصلاح پر وقیع علمی مقالات۔',
        ar: 'دراسات محكمة في الجمع بين الشريعة والحقيقة وتربية النفس.',
      },
      icon: <FileText className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/articles',
      badge: { en: 'Scholarly Papers', ur: 'علمی مقالات', ar: 'أوراق بحثية' },
      cta: { en: 'Read Scholarly Articles', ur: 'تحقیقی مقالات کا مطالعہ کریں', ar: 'قراءة الأبحاث العلمية' },
    },
    {
      id: 'blog',
      title: { en: 'Official Blog (Sajjan Saeen)', ur: 'آفیشل بلاگ سجن سائیں', ar: 'المدونة الرسمية للشيخ' },
      description: {
        en: 'Direct repository of Hazrat Sajjan Saeen’s sermons, guidance notes, and central announcements from sajjansaeen.blogspot.com.',
        ur: 'امیرِ جماعت حضرت سجن سائیں کے بیانات، فرمودات اور باضابطہ اعلانات کا تصدیق شدہ مأخذ۔',
        ar: 'بيانات وتوجيهات الشيخ سجن سائیں حفظه الله المنشورة في المدونة الرسمية.',
      },
      icon: <Globe className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/blog',
      badge: { en: 'Primary Archive', ur: 'مصدقہ پورٹل', ar: 'المرجع الرسمي' },
      cta: { en: 'Read Blog Discourses', ur: 'بلاگ کے بیانات پڑھیں', ar: 'قراءة تدوينات المدونة' },
    },
    {
      id: 'magazine',
      title: { en: 'Monthly At-Tahir Magazine', ur: 'ماہنامہ الطاہر (آرکائیو)', ar: 'مجلة الطاهر الشهرية' },
      description: {
        en: 'The official publication of Jamaat Islah-ul-Muslimeen spanning decades of Islamic journalism and spiritual guidance.',
        ur: 'جماعت اصلاح المسلمین کا ترجمانِ اشاعت، جس میں دینی، تاریخی اور روحانی مضامین شامل ہیں۔',
        ar: 'المجلة الشهرية الرسمية الصادرة عن الجمعية في خدمة الثقافة الإسلامية.',
      },
      icon: <Newspaper className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/at-tahir',
      badge: { en: 'Official Organ', ur: 'ترجمانِ جماعت', ar: 'المنبر الإعلامي' },
      cta: { en: 'Explore Magazine Issues', ur: 'رسالے کے شمارے دیکھیں', ar: 'استعراض أعداد المجلة' },
    },
    {
      id: 'biographies',
      title: { en: 'Short Biographies (Mashaikh)', ur: 'سوانح و تذکرۂ مشائخ', ar: 'تراجم وسير المشايخ' },
      description: {
        en: 'Profiles of the founding luminaries: Pir Mitha R.A, Khwaja Sohna Saeen R.A, Pir Fazal Ali Shah Qureshi R.A, and Hazrat Sajjan Saeen.',
        ur: 'اکابرینِ طریقت: حضرت پیر مٹھا، حضرت خواجہ سوہنا سائیں اور مشائخِ کبار کے حالاتِ زندگی۔',
        ar: 'سير أعلام الطريقة النقشبندية المجددية ومؤسسي الجمعية.',
      },
      icon: <Users className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/biographies',
      badge: { en: 'Spiritual Masters', ur: 'تذکرۂ صالحین', ar: 'سير الأعلام' },
      cta: { en: 'Read Mashaikh Biographies', ur: 'سوانحِ مشائخ کا مطالعہ کریں', ar: 'قراءة سير المشايخ' },
    },
    {
      id: 'translations',
      title: { en: 'Language Translations', ur: 'کتب کے تراجم و شعبۂ لغات', ar: 'الترجمات واللغات' },
      description: {
        en: 'Multilingual publication projects making the wisdom of Dargah Allahabad Sharif accessible in English, Arabic, and Sindhi.',
        ur: 'انگریزی، عربی اور سندھی زبانوں میں جماعت کی مطبوعات اور زیرِ تکمیل علمی منصوبے۔',
        ar: 'مشاريع الترجمة المعتمدة إلى اللغات العالمية لخدمة المسلمين في كل مكان.',
      },
      icon: <Languages className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/translations',
      badge: { en: 'Global Outreach', ur: 'بین الاقوامی تراجم', ar: 'إصدارات عالمية' },
      cta: { en: 'View Language Translations', ur: 'تراجم کا ریکارڈ ملاحظہ فرمائیں', ar: 'استعراض سجل الترجمات' },
    },
    {
      id: 'khitabat',
      title: { en: 'Khitabat & Bayanat', ur: 'خطب و بیانات', ar: 'الخطب والبيانات' },
      description: {
        en: 'Official discourses, lectures, and Urs addresses recorded live by JIM Media Wing from the verified YouTube channel.',
        ur: 'جماعت اصلاح المسلمین کے آفیشل یوٹیوب چینل کے تصدیق شدہ بیانات اور سالانہ عرس مبارک کے خطابات۔',
        ar: 'الخطب والمواعظ الموثقة لحضرة الشيخ سجن سائیں ومشايخ الطريقة عبر القناة الرسمية.',
      },
      icon: <Video className="w-6 h-6 text-[#002FA7]" />,
      path: '/library/khitabat',
      badge: { en: 'YouTube Channel', ur: 'یوٹیوب چینل', ar: 'تسجيلات معتمدة' },
      cta: { en: 'Listen to All Discourses', ur: 'خطبات و بیانات سنیں', ar: 'الاستماع للخطب والمواعظ' },
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'مرکزی کتب خانہ' : language === 'ar' ? 'المكتبة الإسلامية' : 'Central Islamic Library'}
        title={
          language === 'ur'
            ? 'علمی و روحانی کتب خانہ'
            : language === 'ar'
            ? 'المكتبة الإسلامية والمركز الوثائقي'
            : 'Islamic Research & Spiritual Library'
        }
        subtitle={
          language === 'ur'
            ? 'قرآن و سنت کی روشنی میں تزکیۂ نفس، تاریخِ طریقت اور اسلامی اصلاحِ معاشرہ پر مستند دستاویزات کا مرکز۔'
            : 'Authoritative archival repository of classical texts, contemporary treatises, and official publications.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : 'Library',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <Link
              key={sec.id}
              to={sec.path}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 hover:border-[#002FA7]/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#002FA7]/5 group-hover:bg-[#002FA7]/10 transition-colors">
                    {sec.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {language === 'ur' ? sec.badge.ur : language === 'ar' ? sec.badge.ar : sec.badge.en}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                    language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic text-lg' : ''
                  }`}
                >
                  {language === 'ur' ? sec.title.ur : language === 'ar' ? sec.title.ar : sec.title.en}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                  {language === 'ur' ? sec.description.ur : language === 'ar' ? sec.description.ar : sec.description.en}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF2F7] flex items-center justify-between text-xs font-semibold text-[#002FA7]">
                <span>{t(sec.cta)}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
