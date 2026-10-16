import React from 'react';
import { Radio, Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { LIVE_STREAM_INFO } from '../../data/mediaData';

export const LiveStreamPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'لائیو نشریات' : language === 'ar' ? 'البث المباشر' : 'Live Stream'}
        title={t(LIVE_STREAM_INFO.title)}
        subtitle={t(LIVE_STREAM_INFO.event)}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'میڈیا' : 'Media',
            path: '/media',
          },
          {
            label: language === 'ur' ? 'لائیو نشریات' : 'Live Programs',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Live Broadcast Feed Container */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] overflow-hidden shadow-xs">
          <div className="relative aspect-video bg-[#12247A] flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Radio className="w-8 h-8 text-white" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{language === 'ur' ? 'نشریاتی شیڈول فعال ہے' : 'Transmission Scheduled'}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold max-w-xl mb-2">
              {t(LIVE_STREAM_INFO.event)}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              {t(LIVE_STREAM_INFO.timing)}
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[#F7F9FC] border-t border-[#EEF2F7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#1A1F2B]">
                {t(LIVE_STREAM_INFO.announcement)}
              </p>
            </div>
            <span className="text-xs font-semibold text-[#64748B] shrink-0 bg-white px-3 py-1.5 rounded-lg border border-[#EEF2F7]">
              Source: Dargah Allahabad Sharif
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
