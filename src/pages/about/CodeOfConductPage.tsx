import React from 'react';
import { ShieldCheck, CheckCircle2, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { CODE_OF_CONDUCT_DATA } from '../../data/aboutData';

export const CodeOfConductPage: React.FC = () => {
  const { t, language } = useLanguage();

  const rules = [
    {
      title: { en: '5 Congregational Prayers', ur: 'پنج وقتہ نماز باجماعت', ar: 'المحافظة على الصلوات الخمس' },
      desc: {
        en: 'Performing all five daily prayers in the masjid with the first Takbeer (Takbeer-e-Oola).',
        ur: 'پنج وقتہ نماز کی تکبیرِ اولیٰ کے ساتھ پہلی صف میں باجماعت پابندی۔',
        ar: 'أداء الصلوات الخمس في جماعة مع تكبيرة الإحرام.',
      },
    },
    {
      title: { en: 'Daily Zikr-e-Qalbi Muraqabah', ur: 'روزانہ ذکرِ قلبی و مراقبہ', ar: 'المراقبة والذكر القلبي' },
      desc: {
        en: 'Allocating 15 to 30 minutes daily in solitude for heart remembrance.',
        ur: 'روزانہ کم از کم 15 سے 30 منٹ تنہائی میں ذکرِ قلبی و مراقبہ کرنا۔',
        ar: 'تخصيص وقت يومي للمراقبة والذكر القلبي الخفي.',
      },
    },
    {
      title: { en: 'Truthfulness & Halal Earnings', ur: 'صدقِ مقال و رزقِ حلال', ar: 'الصدق والكسب الحلال' },
      desc: {
        en: 'Earn strictly through legitimate, ethical, and halal avenues, shunning usury and fraud.',
        ur: 'سود، رشوت، دھوکہ دہی سے قطعی اجتناب اور رزقِ حلال کی کمائی۔',
        ar: 'تحري الكسب الحلال الخالص واجتناب الربا والغش.',
      },
    },
    {
      title: { en: 'Guarding the Tongue', ur: 'حفظِ لسان و اخلاقِ حسنہ', ar: 'حفظ اللسان وحسن الخلق' },
      desc: {
        en: 'Refraining from backbiting, slandering, vain arguments, and sectarian discord.',
        ur: 'غیبت، چغلی، جھوٹ، الزام تراشی اور فرقہ وارانہ منافرت سے مکمل پرہیز۔',
        ar: 'كف اللسان عن الغيبة والنميمة والمراء والنزاعات الطائفية.',
      },
    },
    {
      title: { en: 'Fulfilling Rights (Huquq-ul-Ibad)', ur: 'حقوق العباد کی ادائیگی', ar: 'أداء حقوق العباد' },
      desc: {
        en: 'Exemplary service and dutifulness to parents, spouse, children, neighbors, and fellow humans.',
        ur: 'والدین، زوجہ، اولاد، پڑوسیوں اور تمام خلقِ خدا کے حقوق کی احسن ادائیگی۔',
        ar: 'بر الوالدين، والإحسان إلى الأهل والجيران وعموم خلق الله.',
      },
    },
  ];

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'ضابطۂ اخلاق' : language === 'ar' ? 'ميثاق السلوك' : 'Spiritual Ethics'}
        title={t(CODE_OF_CONDUCT_DATA.title)}
        subtitle={t(CODE_OF_CONDUCT_DATA.subtitle || { en: '', ur: '', ar: '' })}
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'دستور العمل' : 'Code of Conduct',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs space-y-6">
          <h2
            className={`text-xl sm:text-2xl font-extrabold text-[#12247A] ${
              language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur'
              ? 'ہر کارکن اور سالک کے لیے لازمی شرعی و اخلاقی اصول'
              : 'Essential Code of Conduct for Every Member & Seeker'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl border border-[#EEF2F7] p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-[#002FA7]/10 text-[#002FA7] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3
                    className={`text-base font-bold text-[#12247A] mb-1 ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(rule.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {t(rule.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
