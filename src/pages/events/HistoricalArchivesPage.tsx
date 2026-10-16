import React from 'react';
import { Archive } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { EVENTS_DATA } from '../../data/eventsData';

export const HistoricalArchivesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const archive = EVENTS_DATA[2];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'تاریخی آرکائیو' : language === 'ar' ? 'الأرشيف التاريخي' : 'Historical Archive'}
        title={t(archive.title)}
        subtitle={
          language === 'ur'
            ? 'گزشتہ دہائیوں کے تاریخی اجتماعات، کانفرنسز اور روحانی محافل کا ریکارڈ۔'
            : 'Archived records, landmark Islamic conventions, and historic congregations.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'پروگرامات' : 'Events',
            path: '/events',
          },
          {
            label: language === 'ur' ? 'تاریخی آرکائیو' : 'Archives',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 text-xs font-bold text-[#002FA7]">
            <Archive className="w-4 h-4" />
            <span>Dargah Allahabad Sharif Historical Repository</span>
          </div>

          <p className="text-sm sm:text-base text-[#1A1F2B] leading-relaxed">
            {t(archive.description)}
          </p>
        </div>
      </div>
    </div>
  );
};
