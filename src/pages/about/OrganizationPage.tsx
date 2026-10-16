import React from 'react';
import { Building2, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { ORGANIZATION_DATA } from '../../data/aboutData';

export const OrganizationPage: React.FC = () => {
  const { t, language } = useLanguage();

  const tiers = [
    {
      level: { en: 'Supreme Guidance & Ameer', ur: 'امیرِ جماعت و سرپرستِ اعلیٰ', ar: 'إمارة الجمعية' },
      role: {
        en: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen) provides spiritual and executive direction.',
        ur: 'حضرت خواجہ محمد طاہر بخشی (محبوب سجن سائیں) کی روحانی و انتظامی سرپرستی۔',
        ar: 'الرعاية الروحية والإشراف العام لفضيلة الشيخ سجن سائیں.',
      },
    },
    {
      level: { en: 'Central Consultative Council (Shura)', ur: 'مرکزی مجلسِ شوریٰ', ar: 'مجلس الشورى المركزي' },
      role: {
        en: 'Senior scholars, administrators, and provincial delegates formulating organizational policies.',
        ur: 'ملک بھر سے جید علماء کرام اور تجربہ کار تنظیمی اراکین پر مشتمل مشاورتی ادارہ۔',
        ar: 'هيئة تضم كبار العلماء وممثلي المحافظات لوضع السياسات العامة.',
      },
    },
    {
      level: { en: 'Provincial & Regional Councils', ur: 'صوبائی و ڈویژنل مجالس', ar: 'اللجان الإقليمية' },
      role: {
        en: 'Executing central programs across Sindh, Punjab, Balochistan, Khyber Pakhtunkhwa, and overseas.',
        ur: 'تمام صوبوں، ڈویژنوں اور بیرونِ ملک میں جماعتی پروگرامات کی نگرانی اور نفاذ۔',
        ar: 'متابعة تنفيذ البرامج في عموم الأقاليم والفرعيات الدولية.',
      },
    },
    {
      level: { en: 'District & Local Halqas', ur: 'ضلعی و مقامی حلقہ ہائے ذکر', ar: 'حلقات الذكر المحلية' },
      role: {
        en: 'Grassroots weekly Zikr circles, educational centers, and neighborhood social welfare.',
        ur: 'مقامی مساجد اور مراکز میں ہفتہ وار ذکر کی محافل اور بنیادی عوامی فلاحی خدمات۔',
        ar: 'تنظيم الحلقات الأسبوعية للذكر والمراقبة في الأحياء والقرى.',
      },
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'تنظیم و نظام' : language === 'ar' ? 'الهيكل الإداري' : 'Organizational System'}
        title={t(ORGANIZATION_DATA.title)}
        subtitle={t(ORGANIZATION_DATA.subtitle || { en: '', ur: '', ar: '' })}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'تنظیمی ڈھانچہ' : 'Organization',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-4">
            {ORGANIZATION_DATA.content.map((p, i) => (
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

          {/* Tiers List */}
          <div className="space-y-4 pt-6 border-t border-[#EEF2F7]">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#002FA7]/10 text-[#002FA7] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <h3
                    className={`text-base font-bold text-[#12247A] ${
                      language === 'ur' ? 'font-urdu text-lg' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(tier.level)}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] sm:max-w-md">
                  {t(tier.role)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
