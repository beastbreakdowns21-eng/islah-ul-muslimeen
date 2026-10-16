import React from 'react';
import { Compass, CheckCircle2, Heart, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { MISSION_DATA } from '../../data/aboutData';

export const MissionPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'منشور و مقاصد' : language === 'ar' ? 'رسالتنا' : 'Mission & Vision'}
        title={t(MISSION_DATA.title)}
        subtitle={t(MISSION_DATA.subtitle || { en: '', ur: '', ar: '' })}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'مقصد و منشور' : 'Mission',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-4">
            {MISSION_DATA.content.map((p, i) => (
              <p
                key={i}
                className={`text-sm sm:text-base text-[#1A1F2B] leading-relaxed ${
                  language === 'ur' ? 'font-urdu text-base sm:text-lg leading-relaxed' : ''
                }`}
              >
                {t(p)}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#EEF2F7]">
            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12247A]">
                {language === 'ur' ? '1۔ انفرادی اصلاح' : '1. Individual Reformation'}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {language === 'ur'
                  ? 'ذکرِ قلبی کے ذریعے قلب و باطن کی پاکیزگی اور گناہوں سے سچی توبہ۔'
                  : 'Purifying personal intention through silent heart remembrance and sincere repentance.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12247A]">
                {language === 'ur' ? '2۔ خاندانی تربیت' : '2. Family & Domestic Sunnah'}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {language === 'ur'
                  ? 'گھرانوں کو سنتِ نبویہ ﷺ کا گہوارہ بنانا اور نسلِ نو کی صحیح تربیت۔'
                  : 'Establishing households grounded in the Sunnah, raising children with moral integrity.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12247A]">
                {language === 'ur' ? '3۔ اجتماعی ہم آہنگی' : '3. Social Harmony & Service'}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {language === 'ur'
                  ? 'فرقہ واریت کا خاتمہ، باہمی محبت اور تمام انسانوں کے ساتھ ہمدردی۔'
                  : 'Eradicating sectarian prejudice through sincere universal benevolence and mutual compassion.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
