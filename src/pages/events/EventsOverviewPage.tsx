import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Archive, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { EVENTS_DATA } from '../../data/eventsData';
import { SEO } from '../../components/common/SEO';

export const EventsOverviewPage: React.FC = () => {
  const { t, language } = useLanguage();

  const categories = [
    {
      id: 'urs',
      title: { en: 'Salana Urs Mubarak (Annual Urs)', ur: 'سالانہ عرسِ مبارک حضرت سوہنا سائیں', ar: 'العرس السنوي المبارك' },
      description: {
        en: 'The grand annual spiritual gathering at Dargah Allahabad Sharif attended by pilgrims and scholars from across Pakistan and overseas.',
        ur: 'درگاہ اللہ آباد شریف پر منعقد ہونے والا سال کا سب سے بڑا روحانی و تعلیمی اجتماع۔',
        ar: 'التجمع الإيماني الأكبر سنوياً في دركاه الله آباد شريف بحضور العلماء والزائرين.',
      },
      icon: <Users className="w-6 h-6 text-[#002FA7]" />,
      path: '/events/urs',
      badge: { en: 'Central Annual Event', ur: 'مرکزی سالانہ عرس', ar: 'المناسبة المركزية' },
    },
    {
      id: 'monthly',
      title: { en: 'Monthly Gatherings (Mahana Ijtima)', ur: 'ماہانہ روحانی اجتماعات', ar: 'اللقاءات الروحية الشهرية' },
      description: {
        en: 'Regular gatherings dedicated to group Zikr-e-Qalbi, moral introspection, and sermons by Hazrat Sajjan Saeen.',
        ur: 'ہر ماہ پہلے اور تیسرے اتوار کو منعقد ہونے والی تربیتی مجالس اور ذکرِ قلبی کی نشستیں۔',
        ar: 'لقاءات دورية للتزكية، مجالس الذكر، والاستماع إلى مواعظ مشايخ الطريقة.',
      },
      icon: <Calendar className="w-6 h-6 text-[#002FA7]" />,
      path: '/events/monthly',
      badge: { en: 'Monthly Schedule', ur: 'ماہانہ تربیتی پروگرام', ar: 'برنامج شهري' },
    },
    {
      id: 'archives',
      title: { en: 'Historical Events Archive', ur: 'سابقہ اجتماعات کا تاریخی آرکائیو', ar: 'أرشيف المناسبات والفعاليات' },
      description: {
        en: 'Documented records, attendance numbers, and historic communiqués of past national and international conferences.',
        ur: 'ماضی کے تاریخی دینی اجتماعات، تربیتی کیمپوں اور سالانہ کانفرنسوں کے دستاویزی کوائف۔',
        ar: 'سجل موثق لأهم المؤتمرات والندوات الإسلامية والتربوية المقامة على مدار العقود.',
      },
      icon: <Archive className="w-6 h-6 text-[#002FA7]" />,
      path: '/events/archive',
      badge: { en: 'Historical Records', ur: 'تاریخی دستاویزات', ar: 'توثيق تاريخي' },
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <SEO
        title="Spiritual Gatherings & Events Calendar | Islah-ul-Muslimeen"
        description="Official schedule of annual spiritual conventions (Salana Urs Mubarak) and monthly Zikr gatherings (Mahana Ijtima) organized by Jamaat Islah-ul-Muslimeen."
        canonicalPath="/events"
        keywords={[
          'Islah-ul-Muslimeen events',
          'Urs Mubarak',
          'Mahana Ijtima',
          'Zikr gatherings',
          'Dargah Allahabad Sharif',
          'Sajjan Sain',
        ]}
        breadcrumbs={[
          { name: 'Events', item: '/events' },
        ]}
      />
      <PageHeader
        badge={language === 'ur' ? 'پروگرامات و اجتماعات' : language === 'ar' ? 'الفعاليات والمناسبات' : 'Gatherings & Events'}
        title={
          language === 'ur'
            ? 'روحانی اجتماعات اور پروگرامات کا شیڈول'
            : language === 'ar'
            ? 'جدول المؤتمرات والاجتماعات الروحية'
            : 'Spiritual Congregations & Events Calendar'
        }
        subtitle={
          language === 'ur'
            ? 'درگاہ اللہ آباد شریف پر منعقد ہونے والے سالانہ عرس مبارک اور ماہانہ اصلاحی اجتماعات کی مصدقہ تواریخ۔'
            : 'Authoritative itinerary for the Annual Urs Mubarak, monthly Zikr gatherings, and institutional conferences.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'پروگرامات' : 'Events',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 hover:border-[#002FA7]/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3.5 rounded-xl bg-[#002FA7]/5 group-hover:bg-[#002FA7]/10 transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md uppercase">
                    {language === 'ur' ? cat.badge.ur : language === 'ar' ? cat.badge.ar : cat.badge.en}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                    language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {language === 'ur' ? cat.title.ur : language === 'ar' ? cat.title.ar : cat.title.en}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                  {language === 'ur' ? cat.description.ur : language === 'ar' ? cat.description.ar : cat.description.en}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF2F7] flex items-center justify-between text-xs font-semibold text-[#002FA7]">
                <span>{language === 'ur' ? 'تفصیلات دیکھیں' : 'View Schedule'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Upcoming Events Snippet */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-[#12247A]">
            {language === 'ur' ? 'اہم سالانہ و ماہانہ تاریخیں' : 'Important Schedule Highlights'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EVENTS_DATA.map((ev) => (
              <div
                key={ev.id}
                className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7] flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-white border border-[#EEF2F7] text-[#002FA7] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#12247A]">
                    {t(ev.title)}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1 font-semibold text-[#002FA7]">
                      <Clock className="w-3 h-3" />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {t(ev.location)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
