import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { EVENTS_DATA } from '../../data/eventsData';

export const MonthlyGatheringsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const gathering = EVENTS_DATA[1];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'ماہانہ اجتماعات' : language === 'ar' ? 'اللقاءات الشهرية' : 'Monthly Gatherings'}
        title={t(gathering.title)}
        subtitle={
          language === 'ur'
            ? 'ہر اسلامی مہینے کے پہلے اتوار کو ملک بھر کے ضلعی و مقامی مراکز پر ذکرِ قلبی کی محافل۔'
            : 'Coordinated nationwide and international monthly spiritual assemblies for group Muraqabah.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'پروگرامات' : 'Events',
            path: '/events',
          },
          {
            label: language === 'ur' ? 'ماہانہ اجتماعات' : 'Monthly Gatherings',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6">
          <p className="text-sm sm:text-base text-[#1A1F2B] leading-relaxed">
            {t(gathering.description)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#EEF2F7]">
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
              <div className="text-xs font-bold text-[#002FA7] flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? 'اوقات' : 'Timing & Recurrence'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#12247A] font-medium">{gathering.date}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
              <div className="text-xs font-bold text-[#002FA7] flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? 'مراکز' : 'Centers'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#12247A] font-medium">{t(gathering.location)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
