import React, { useState } from 'react';
import { Users, MapPin, Calendar, Award, ChevronRight, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { BIOGRAPHIES_DATA } from '../../data/libraryData';

export const BiographiesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeBioId, setActiveBioId] = useState<string>(BIOGRAPHIES_DATA[0]?.id || '');

  const activeBio = BIOGRAPHIES_DATA.find((b) => b.id === activeBioId) || BIOGRAPHIES_DATA[0];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'سوانح و تذکرہ' : language === 'ar' ? 'سير وأعلام' : 'Spiritual Biographies'}
        title={
          language === 'ur'
            ? 'اکابرینِ طریقت کے حالاتِ زندگی'
            : language === 'ar'
            ? 'تراجم وسير مشايخ الطريقة النقشبندية'
            : 'Biographies of Founding Spiritual Masters'
        }
        subtitle={
          language === 'ur'
            ? 'حضرت پیر مٹھا، حضرت خواجہ سوہنا سائیں اور مشائخِ سلسلہ نقشبندیہ مجددیہ طاہریہ کی مقدس سیرت و علمی و دینی خدمات۔'
            : 'Authentic biographical accounts chronicling the lives, devotions, and enduring legacies of the founding masters of Islah-ul-Muslimeen.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : 'Library',
            path: '/library',
          },
          {
            label: language === 'ur' ? 'سوانح' : 'Biographies',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Master selector tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BIOGRAPHIES_DATA.map((bio) => {
            const isSelected = bio.id === activeBio.id;
            return (
              <button
                key={bio.id}
                type="button"
                onClick={() => setActiveBioId(bio.id)}
                className={`p-4 rounded-2xl border text-start transition-all ${
                  isSelected
                    ? 'bg-[#002FA7] text-white border-[#002FA7] shadow-md'
                    : 'bg-white text-[#1A1F2B] border-[#EEF2F7] hover:border-[#002FA7]/40 hover:bg-[#F7F9FC]'
                }`}
              >
                <span className={`text-[11px] font-bold block mb-1 ${isSelected ? 'text-white/80' : 'text-[#002FA7]'}`}>
                  {bio.lifespan}
                </span>
                <h4
                  className={`text-sm sm:text-base font-bold line-clamp-2 ${
                    language === 'ur' ? 'font-urdu text-base' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t(bio.name)}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Detailed Profile View */}
        {activeBio && (
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EEF2F7]">
              <div>
                <span className="text-xs font-bold text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {t(activeBio.title)}
                </span>
                <h2
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold text-[#12247A] mt-3 ${
                    language === 'ur' ? 'font-urdu text-2xl sm:text-3xl leading-relaxed' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t(activeBio.name)}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-xs text-[#64748B] shrink-0">
                <div className="flex items-center gap-1.5 bg-[#F7F9FC] px-3.5 py-2 rounded-xl border border-[#EEF2F7]">
                  <Calendar className="w-4 h-4 text-[#002FA7]" />
                  <span>{activeBio.lifespan}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F7F9FC] px-3.5 py-2 rounded-xl border border-[#EEF2F7]">
                  <MapPin className="w-4 h-4 text-[#002FA7]" />
                  <span>{t(activeBio.restingPlace)}</span>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-base font-bold text-[#12247A] flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#002FA7]" />
                  <span>{language === 'ur' ? 'حیات و خدمات' : 'Life & Sacred Mission'}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#1A1F2B] leading-relaxed">
                  {t(activeBio.summary)}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-[#12247A] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#002FA7]" />
                  <span>{language === 'ur' ? 'دینی و روحانی اثرات' : 'Spiritual & Institutional Legacy'}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {t(activeBio.legacy)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
