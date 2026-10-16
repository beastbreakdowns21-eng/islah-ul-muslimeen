import React from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Video, Radio, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { NAAT_MANQABAT_ITEMS } from '../../data/naatManqabatData';
import { VERIFIED_YOUTUBE_VIDEOS } from '../../data/youtubeContent';

export const MediaOverviewPage: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      id: 'audio',
      title: {
        en: 'Naat & Manqabat Gallery',
        ur: 'نعت، منقبت و صوفیانہ کلام',
        ar: 'مكتبة المدائح والمناقب الشريفة',
      },
      description: {
        en: 'Authentic Naat Sharif, Manqabat, and devotional poetry directly from the official Faiz e Sajjan Sain channel.',
        ur: 'فیضِ سجن سائیں آفیشل چینل کے مصدقہ اور پرتاثیر نعتیں، مناقب اور صوفیانہ کلام۔',
        ar: 'مجموعة مباركة من المدائح النبوية والمناقب الصوفية المستندة رسمياً لقناة فيض سجن سائیں.',
      },
      icon: <Volume2 className="w-6 h-6 text-[#002FA7]" />,
      path: '/media/audio',
      count: `${NAAT_MANQABAT_ITEMS.length} Devotional Tracks`,
      countUr: `${NAAT_MANQABAT_ITEMS.length} نعت و منقبت`,
      cta: { en: 'Listen & Watch Now', ur: 'کلام سنیں اور دیکھیں', ar: 'استمع وشاهد الآن' },
    },
    {
      id: 'video',
      title: {
        en: 'Video Discourses & Lectures',
        ur: 'ویڈیو خطابات و بیانات',
        ar: 'المحاضرات المرئية والخطب',
      },
      description: {
        en: 'Official YouTube discourses of Hazrat Khwaja Muhammad Tahir (Sajjan Saeen) and Annual Urs Mubarak proceedings.',
        ur: 'حضرت سجن سائیں کے ایمان افروز بصری خطابات اور سالانہ عرس مبارک کی روحانی مجالس۔',
        ar: 'تسجيلات مرئية لخطب وتوجيهات فضيلة الشيخ خواجه محمد طاهر محبوب سجن سائیں.',
      },
      icon: <Video className="w-6 h-6 text-[#002FA7]" />,
      path: '/media/video',
      count: `${VERIFIED_YOUTUBE_VIDEOS.length} Video Discourses`,
      countUr: `${VERIFIED_YOUTUBE_VIDEOS.length} ویڈیو بیانات`,
      cta: { en: 'Watch Video Lectures', ur: 'ویڈیو بیانات دیکھیں', ar: 'مشاهدة المحاضرات' },
    },
    {
      id: 'live',
      title: {
        en: 'Live Stream & Broadcasts',
        ur: 'براہِ راست نشریات و شیڈول',
        ar: 'البث المباشر والمواعيد',
      },
      description: {
        en: 'Live transmission schedule for monthly spiritual congregations (Mahana Ijtima) and the Annual Urs Mubarak.',
        ur: 'ماہانہ روحانی اجتماعات اور سالانہ عرسِ مبارک کی براہ راست نشریاتی کوریج کا باضابطہ شیڈول۔',
        ar: 'البث المباشر للفعاليات والمؤتمرات ومجالس الذكر من دركاه الله آباد شريف.',
      },
      icon: <Radio className="w-6 h-6 text-[#002FA7]" />,
      path: '/media/live',
      count: 'Scheduled Transmission',
      countUr: 'باضابطہ شیڈول',
      cta: { en: 'Check Broadcast Schedule', ur: 'نشریات کا شیڈول دیکھیں', ar: 'جدول البث المباشر' },
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'مرکزی میڈیا' : language === 'ar' ? 'المركز الإعلامي' : 'Official Media Center'}
        title={
          language === 'ur'
            ? 'آڈیو، ویڈیو اور براہِ راست نشریات'
            : language === 'ar'
            ? 'الصوتيات والمرئيات والبث المباشر'
            : 'Islamic Media & Audio-Visual Archive'
        }
        subtitle={
          language === 'ur'
            ? 'درگاہ اللہ آباد شریف اور فیضِ سجن سائیں چینل سے مصدقہ نعتیں، ایمان افروز خطابات اور نشریات۔'
            : 'Authoritative audiovisual gallery offering authenticated recitations, remastered sermons, and gathering broadcasts.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'میڈیا' : 'Media',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Media Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <Link
              key={sec.id}
              to={sec.path}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 hover:border-[#002FA7]/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3.5 rounded-xl bg-[#002FA7]/5 group-hover:bg-[#002FA7]/10 transition-colors">
                    {sec.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-1 rounded-md">
                    {language === 'ur' ? sec.countUr : sec.count}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                    language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic' : ''
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
