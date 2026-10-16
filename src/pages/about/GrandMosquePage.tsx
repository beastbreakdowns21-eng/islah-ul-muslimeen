import React from 'react';
import { Building2, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { GRAND_MOSQUE_DATA } from '../../data/aboutData';

export const GrandMosquePage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'مرکز و تعمیرات' : language === 'ar' ? 'العمارة الإسلامية' : 'Sacred Architecture'}
        title={t(GRAND_MOSQUE_DATA.title)}
        subtitle={t(GRAND_MOSQUE_DATA.subtitle || { en: '', ur: '', ar: '' })}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'جامع مسجد اللہ آباد شریف' : 'Grand Mosque',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Main Content Box */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-4">
            {GRAND_MOSQUE_DATA.content.map((p, i) => (
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

          {/* Architectural Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#EEF2F7]">
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
              <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-1">
                {language === 'ur' ? 'مقام' : 'Location'}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12247A]">
                Kandiaro, Naushahro Feroze, Sindh
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
              <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-1">
                {language === 'ur' ? 'گنجائش' : 'Capacity'}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12247A]">
                Tens of thousands of worshippers
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
              <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-1">
                {language === 'ur' ? 'طرزِ تعمیر' : 'Architecture'}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12247A]">
                Classical Islamic White Marble
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]">
              <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-1">
                {language === 'ur' ? 'جامعہ و اقامت گاہ' : 'Seminary & Hostels'}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12247A]">
                Dar-ul-Uloom Tahiriya adjacent
              </p>
            </div>
          </div>
        </div>

        {/* Spiritual & Educational Atmosphere */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#12247A]">
              {language === 'ur' ? 'ہفتہ وار و سالانہ پروگرامات' : 'Weekly & Annual Spiritual Gatherings'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {language === 'ur'
                ? 'جامع مسجد میں ہر جمعرات بعد نمازِ مغرب خصوصی ذکرِ قلبی و مراقبہ منعقد ہوتا ہے۔ اس کے علاوہ ہر سال نومبر کے مہینے میں سالانہ عرس مبارک پر ملک بھر اور بیرونِ ملک سے لاکھوں افراد یہاں تشریف لاتے ہیں۔'
                : 'The Grand Mosque hosts weekly Thursday evening Muraqabah sessions following Maghrib prayer, as well as the grand international annual Urs Mubarak drawing disciples from worldwide.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#12247A]">
              {language === 'ur' ? 'حفظ و درسِ نظامی' : 'Tahiri Islamic Seminary (Dar-ul-Uloom)'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {language === 'ur'
                ? 'مسجد کے متصل عظیم الشان دارالعلوم طاہریہ قائم ہے جہاں سینکڑوں طلبہ حفظِ قرآن کریم، تجوید، اور درسِ نظامی (عالم کورس) کی مکمل مفت تعلیم و رہائش سے مستفید ہو رہے ہیں۔'
                : 'Adjacent to the prayer sanctuary stands Dar-ul-Uloom Tahiriya, providing comprehensive Islamic scholarship, Hifz, and Dars-e-Nizami curricula with residential accommodations for hundreds of students.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
