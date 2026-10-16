import React from 'react';
import { Languages, Globe, BookOpen, CheckCircle, Clock, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { ComingSoonBadge } from '../../components/common/ComingSoonBadge';
import { TRANSLATIONS_DATA } from '../../data/libraryData';

export const TranslationsPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'شعبۂ تراجم' : language === 'ar' ? 'قسم الترجمة' : 'Translation Wing'}
        title={
          language === 'ur'
            ? 'کتب و مضامین کے بین الاقوامی تراجم'
            : language === 'ar'
            ? 'ترجمات الكتب والمؤلفات الإسلامية'
            : 'Multilingual Publications & Translations'
        }
        subtitle={
          language === 'ur'
            ? 'سندھی، اردو، عربی اور انگریزی زبانوں میں طریقتِ نقشبندیہ طاہریہ کے علمی مآخذ اور تزکیۂ نفس کے اصول۔'
            : 'Authoritative translations making Islamic Tazkiyah and Naqshbandi literature accessible across global linguistic borders.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : 'Library',
            path: '/library',
          },
          {
            label: language === 'ur' ? 'تراجم' : 'Translations',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Translation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRANSLATIONS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 shadow-xs hover:border-[#002FA7]/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-1 rounded-md">
                      {item.originalLanguage}
                    </span>
                    <span className="text-xs text-[#64748B]">→</span>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.targetLanguages.join(', ')}
                    </span>
                  </div>

                  {item.status === 'published' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      <span>{language === 'ur' ? 'شائع شدہ' : 'Published'}</span>
                    </span>
                  ) : (
                    <ComingSoonBadge size="sm" />
                  )}
                </div>

                <div>
                  <h3
                    className={`text-lg font-bold text-[#12247A] ${
                      language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic text-lg' : ''
                    }`}
                  >
                    {t(item.title)}
                  </h3>
                  <p className="text-xs text-[#002FA7] font-semibold mt-1">
                    {t(item.author)}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {t(item.description)}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EEF2F7] mt-6 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">
                  {item.status === 'published'
                    ? (language === 'ur' ? 'مطبوعہ نسخہ دستیاب ہے' : 'Hardcopy & digital release')
                    : (language === 'ur' ? 'زیرِ تدوین و نظرثانی' : 'Under scholarly editorial review')}
                </span>

                {item.status === 'published' ? (
                  <span className="text-xs font-bold text-[#002FA7] bg-[#002FA7]/5 px-3 py-1.5 rounded-lg border border-[#002FA7]/20">
                    {language === 'ur' ? 'مکتبہ پر دستیاب' : 'Available at Maktaba'}
                  </span>
                ) : (
                  <ComingSoonBadge size="sm" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
