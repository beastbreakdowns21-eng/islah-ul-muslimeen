import React, { useState } from 'react';
import { Heart, Sparkles, CheckCircle2, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { LATAIF_DATA, MURAQABAH_GUIDE } from '../../data/spiritualityData';
import { SEO } from '../../components/common/SEO';

export const ZikrQalbiPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeLatifaId, setActiveLatifaId] = useState<string>(LATAIF_DATA[0].id);

  const activeLatifa = LATAIF_DATA.find((l) => l.id === activeLatifaId) || LATAIF_DATA[0];

  const zikrSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Zikr-e-Qalbi & The Six Subtle Faculties (Lataif-e-Sitta)',
    'description':
      'Comprehensive spiritual guide to Zikr-e-Qalbi (silent heart remembrance), Muraqaba, and the purification of the six subtle faculties in the Naqshbandi Mujaddidi Tahiri tradition.',
    'inLanguage': ['en', 'ur', 'ar'],
    'author': {
      '@type': 'Organization',
      'name': 'Jamaat Islah-ul-Muslimeen',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Jamaat Islah-ul-Muslimeen',
      'url': 'https://islahulmuslimeen.org/',
    },
  };

  return (
    <div className="pb-20 space-y-12">
      <SEO
        title="Zikr-e-Qalbi (Islamic Zikr) & Six Lataif Guide | Islah-ul-Muslimeen"
        description="Authentic guide to Zikr-e-Qalbi (silent heart remembrance of Allah), Muraqaba, and the purification of Lataif in Silsila Naqshbandia Tahiriya under Hazrat Sajjan Saeen."
        canonicalPath="/spirituality/zikr-qalbi"
        keywords={[
          'Zikr',
          'Islamic Zikr',
          'Zikr-e-Qalbi',
          'Zikr qalbi',
          'Zikr Allah',
          'Lataif',
          'Lataif-e-Sitta',
          'Muraqaba',
          'Naqshbandi Tahiri',
          'Islah-ul-Muslimeen',
          'Sajjan Sain',
          'ذکر قلبی',
        ]}
        breadcrumbs={[
          { name: 'Spirituality', item: '/spirituality' },
          { name: 'Zikr-e-Qalbi', item: '/spirituality/zikr-qalbi' },
        ]}
        structuredData={zikrSchema}
      />
      <PageHeader
        badge={language === 'ur' ? 'روحانی تربیت' : language === 'ar' ? 'التزكية الروحية' : 'Spiritual Awakening'}
        title={
          language === 'ur'
            ? 'ذکرِ قلبی اور لطائفِ ستہ کا تعارف'
            : language === 'ar'
            ? 'منهج الذكر القلبي واللطائف الست'
            : 'Zikr-e-Qalbi & The Six Subtle Faculties (Lataif)'
        }
        subtitle={
          language === 'ur'
            ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ کا وہ باطنی نظامِ ذکر جس کے ذریعے دل کی دھڑکنیں ہمہ وقت ذکرِ الٰہی سے معمور ہو جاتی ہیں۔'
            : 'The inner method of silent heart remembrance in the Naqshbandi Order that purifies the core human faculties and instills enduring tranquility.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'روحانیات' : 'Spirituality',
            path: '/spirituality',
          },
          {
            label: language === 'ur' ? 'ذکرِ قلبی' : 'Zikr-e-Qalbi',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Core Concept Overview Box */}
        <section className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 shadow-xs text-start">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full">
              {language === 'ur' ? 'حقیقتِ ذکرِ قلبی' : 'The Essence of Heart Remembrance'}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold text-[#12247A] ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur'
                ? 'زبان کے بغیر، دل کی دھڑکنوں سے ذکرِ الٰہی'
                : 'Silent Vigilance: Remembering Allah with Every Heartbeat'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {language === 'ur'
                ? 'ذکرِ قلبی سے مراد وہ باطنی توجہ اور التفات ہے جس میں زبان حرکت نہیں کرتی، بلکہ دل کے لطیفے میں اللہ تعالیٰ کے اسمِ ذات "اللہ، اللہ" کی تاثیر پیدا کی جاتی ہے۔ امام ربانی مجدد الف ثانی رحمتہ اللہ علیہ فرماتے ہیں کہ قلبی ذکر تمام باطنی بیماریوں (کبر، حسد، ریاکاری، اور حبِ دنیا) کا قطعی علاج ہے۔'
                : 'Zikr-e-Qalbi refers to the inward remembrance wherein the tongue rests silent while the spiritual center of the chest is activated with the divine name "Allah, Allah". According to Imam Rabbani Mujaddid Alf-e-Sani, heart remembrance cleanses the root spiritual diseases: arrogance, envy, insincerity, and worldly obsession.'}
            </p>
          </div>
        </section>

        {/* Interactive Lataif Explorer */}
        <section className="space-y-6 text-start">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#002FA7] bg-[#002FA7]/10 px-3 py-1 rounded-full">
              {language === 'ur' ? 'لطائفِ ستہ کا نظام' : 'The Six Spiritual Chambers'}
            </span>
            <h3
              className={`text-xl sm:text-2xl font-extrabold text-[#12247A] mt-2 ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur' ? 'لطائفِ ستہ (ششگانہ باطنی مراکز)' : 'The Six Subtle Faculties (Lataif-e-Sitta)'}
            </h3>
          </div>

          {/* Latifa Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LATAIF_DATA.map((latifa) => {
              const isSelected = latifa.id === activeLatifaId;
              return (
                <button
                  key={latifa.id}
                  type="button"
                  onClick={() => setActiveLatifaId(latifa.id)}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-[#002FA7] text-white border-[#002FA7] shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-[#F7F9FC] text-[#12247A] border-[#EEF2F7]'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full mx-auto mb-2`}
                    style={{ backgroundColor: latifa.colorHex }}
                  />
                  <div
                    className={`text-sm font-bold ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(latifa.name)}
                  </div>
                  <div
                    className={`text-[11px] mt-1 ${
                      isSelected ? 'text-white/80' : 'text-[#64748B]'
                    }`}
                  >
                    {t(latifa.location)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Latifa Deep-Dive Card */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EEF2F7]">
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border border-black/10"
                    style={{ backgroundColor: activeLatifa.colorHex }}
                  />
                  <span className="text-xs font-bold text-[#002FA7] uppercase tracking-wider">
                    {t(activeLatifa.name)}
                  </span>
                </div>
                <h4
                  className={`text-xl sm:text-2xl font-extrabold text-[#12247A] mt-1 ${
                    language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t(activeLatifa.location)}
                </h4>
              </div>
              <div className="text-xs font-semibold text-[#64748B] bg-[#F7F9FC] px-4 py-2 rounded-xl border border-[#EEF2F7]">
                {language === 'ur' ? 'نورانی رنگ:' : 'Spiritual Light / Noor:'}{' '}
                <strong className="text-[#12247A]">{t(activeLatifa.color)}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  {language === 'ur' ? 'باطنی کارکردگی و تاثر' : 'Spiritual Function & Impact'}
                </h5>
                <p className="text-sm text-[#1A1F2B] leading-relaxed">
                  {t(activeLatifa.spiritualFunction)}
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  {language === 'ur' ? 'طریقۂ مشق و توجہ' : 'Method of Concentration'}
                </h5>
                <p className="text-sm text-[#1A1F2B] leading-relaxed">
                  {language === 'ur'
                    ? `اس مقام پر دل کو متوجہ کر کے تصور کریں کہ عرشِ الٰہی سے فیض و رحمت کا دریا اتر رہا ہے اور ${t(
                        activeLatifa.name
                      )} میں جذب ہو رہا ہے، اور وہ نورانی ہو کر پکار رہا ہے: اللہ، اللہ۔`
                    : `Focus the spiritual gaze at this precise location with eyes closed. Conceive the divine grace descending from the celestial realm directly into this faculty, dissolving heedlessness with the pulse: Allah, Allah.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Daily Muraqabah Guide */}
        <section className="bg-[#F7F9FC] rounded-2xl border border-[#EEF2F7] p-6 sm:p-10 text-start">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold tracking-wider uppercase text-[#002FA7] bg-white px-3 py-1 rounded-full border border-[#EEF2F7]">
              {language === 'ur' ? 'عملی طریقہ' : 'Daily Practice'}
            </span>
            <h3
              className={`text-2xl font-extrabold text-[#12247A] mt-2 ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t(MURAQABAH_GUIDE.title)}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {language === 'ur'
                ? 'روزانہ 15 سے 30 منٹ خاموشی سے مراقبہ کرنے کے بنیادی شرعی و سلوکی اصول۔'
                : 'Recommended etiquette for daily 15-30 minute silent meditation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MURAQABAH_GUIDE.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EEF2F7] p-5 flex items-start gap-4 shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-[#002FA7]/10 text-[#002FA7] font-extrabold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4
                    className={`text-sm sm:text-base font-bold text-[#12247A] mb-1 ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {t(step.title)}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
