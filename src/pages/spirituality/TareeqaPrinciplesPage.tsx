import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { SEO } from '../../components/common/SEO';
import { NAQSHBANDI_PRINCIPLES, NaqshbandiPrinciple } from '../../data/spiritualityData';
import { PrincipleDetailModal } from '../../components/spirituality/PrincipleDetailModal';

export const TareeqaPrinciplesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedPrinciple, setSelectedPrinciple] = useState<NaqshbandiPrinciple | null>(null);

  return (
    <div className="pb-20 space-y-12">
      <SEO
        title={
          language === 'ur'
            ? 'طریقہ نقشبندیہ کے گیارہ بنیادی کلمات و اصول | سلسلہ طاہریہ'
            : language === 'ar'
            ? 'الأصول الإحدى عشرة للطريقة النقشبندية | جماعة إصلاح المسلمين'
            : 'The 11 Principles of the Naqshbandi Way | Islah-ul-Muslimeen'
        }
        description={
          language === 'ur'
            ? 'سلسلہ عالیہ نقشبندیہ کے گیارہ کلماتِ قدسیہ: ہوش در دم، نظر بر قدم، سفر در وطن، خلوت در انجمن اور وقوف کے مستند اصول۔'
            : 'Authentic guide to the 11 foundational principles (Kalimat-i Qudsiyya) of the Naqshbandi spiritual tradition: Hosh dar Dam, Nazar bar Qadam, Khalwat dar Anjuman, and the stations of Wuquf.'
        }
        canonicalPath="/spirituality/principles"
        keywords={[
          '11 principles of Naqshbandi',
          'Kalimat-i Qudsiyya',
          'Hosh dar Dam',
          'Nazar bar Qadam',
          'Khalwat dar Anjuman',
          'Safar dar Watan',
          'Naqshbandi principles',
          'Wuquf-e Qalbi',
          'Wuquf-e Zamani',
          'Wuquf-e Adadi',
        ]}
      />

      <PageHeader
        badge={language === 'ur' ? 'کلماتِ قدسیہ' : language === 'ar' ? 'الكلمات القدسية' : 'Spiritual Axioms'}
        title={
          language === 'ur'
            ? 'طریقہ نقشبندیہ کے گیارہ بنیادی کلمات و اصول'
            : language === 'ar'
            ? 'الأصول الإحدى عشرة للطريقة النقشبندية'
            : 'The 11 Principles of the Naqshbandi Way'
        }
        subtitle={
          language === 'ur'
            ? 'حضرت خواجہ عبد الخالق غجدوانی اور حضرت خواجہ بہاؤالدین نقشبند کے وضع کردہ روحانی کلمات و آداب۔'
            : language === 'ar'
            ? 'الأصول الإحدى عشرة المأثورة عن الخواجة عبد الخالق الغجدواني والخواجة بهاء الدين نقشبند لدوام الحضور ومراقبة الباطن.'
            : 'The foundational spiritual principles (Kalimat-i Qudsiyya) formulated by Khwaja Abdul Khaliq Ghujdawani and Khwaja Bahauddin Naqshband to preserve inner vigilance and continuous presence.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'روحانیات' : language === 'ar' ? 'الروحانيات' : 'Spirituality',
            path: '/spirituality',
          },
          {
            label: language === 'ur' ? 'اصولِ طریقت' : language === 'ar' ? 'أصول الطريقة' : 'Naqshbandi Principles',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Intro Banner */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs text-start">
          <h2
            className={`text-xl sm:text-2xl font-extrabold text-[#12247A] mb-3 ${
              language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur'
              ? 'کلماتِ قدسیہ: طریقہ نقشبندیہ کے گیارہ بنیادی اصول'
              : language === 'ar'
              ? 'الكلمات القدسية: الأصول الإحدى عشرة للطريقة النقشبندية'
              : `The ${NAQSHBANDI_PRINCIPLES.length} Principles of the Naqshbandi Way`}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {language === 'ur'
              ? 'سلسلہ عالیہ نقشبندیہ میں کلماتِ قدسیہ کو بنیادی رہنمائی کی حیثیت حاصل ہے۔ پہلے آٹھ کلمات حضرت خواجہ عبد الخالق غجدوانی رحمۃ اللہ علیہ نے وضع فرمائے اور آخری تین کلمات کی مزید تاکید حضرت خواجہ بہاؤالدین نقشبند رحمۃ اللہ علیہ نے فرمائی۔ یہ اصول ہر سانس، قدم اور کیفیت میں دوامِ حضور اور نگہداشتِ قلب کی رہنمائی کرتے ہیں۔'
              : language === 'ar'
              ? 'تحتل الكلمات القدسية مكانة مركزية في الطريقة النقشبندية؛ فقد أرسى الخواجة عبد الخالق الغجدواني الأصول الثمانية الأولى، وأكد الخواجة بهاء الدين نقشبند الأصول الثلاثة الأخيرة، لترسيخ دوام الحضور مع الله تعالى وصيانة القلب في جميع الأحوال.'
              : 'The eleven spiritual principles (Kalimat-i Qudsiyya) form the core methodology of the Naqshbandi path. The first eight principles were established by Khwaja Abdul Khaliq Ghujdawani (RA), and the final three were emphasized by Khwaja Bahauddin Naqshband (RA). Together, they guide the seeker in maintaining inner vigilance, guarding the breath, and persevering in divine remembrance while fulfilling everyday responsibilities.'}
          </p>
        </div>

        {/* 11 Principles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {NAQSHBANDI_PRINCIPLES.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 shadow-xs hover:border-[#002FA7]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#002FA7]/10 text-[#002FA7] font-bold text-xs flex items-center justify-center">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#002FA7] bg-[#002FA7]/5 px-2 py-0.5 rounded-md">
                    {item.transliteration}
                  </span>
                </div>

                <h3
                  className={`text-lg font-extrabold text-[#12247A] mb-1 ${
                    language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {item.term}
                </h3>

                <div className="text-xs font-semibold text-emerald-800 mb-3">
                  {t(item.meaning)}
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {t(item.preview || item.explanation)}
                </p>

                <div className="pt-3 flex items-center justify-between gap-2">
                  <Link
                    to={`/spirituality/principles/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] hover:text-[#12247A] group transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] rounded py-1"
                  >
                    <span>
                      {language === 'ur'
                        ? 'مکمل اصل پڑھیں'
                        : language === 'ar'
                        ? 'قراءة الأصل كاملاً'
                        : 'Read Full Principle'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedPrinciple(item)}
                    className="text-[11px] font-medium text-[#64748B] hover:text-[#002FA7] transition-colors py-1 px-1.5 rounded hover:bg-[#F8FAFC]"
                    title={language === 'ur' ? 'فوری جھلک' : 'Quick preview'}
                  >
                    {language === 'ur' ? 'جھلک' : language === 'ar' ? 'معاينة' : 'Preview'}
                  </button>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EEF2F7] flex items-center gap-1.5 text-[11px] text-[#64748B]">
                <CheckCircle className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
                <span>
                  {item.source ? (
                    t(item.source)
                  ) : item.number <= 8 ? (
                    language === 'ur'
                      ? 'خواجہ عبد الخالق غجدوانی ؒ'
                      : language === 'ar'
                      ? 'الخواجة عبد الخالق الغجدواني رحمه الله'
                      : 'Khwaja Abdul Khaliq Ghujdawani (RA)'
                  ) : (
                    language === 'ur'
                      ? 'خواجہ بہاؤالدین نقشبند ؒ'
                      : language === 'ar'
                      ? 'الخواجة بهاء الدين نقشبند رحمه الله'
                      : 'Khwaja Bahauddin Naqshband (RA)'
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Principle Modal */}
      <PrincipleDetailModal
        principle={selectedPrinciple}
        onClose={() => setSelectedPrinciple(null)}
      />
    </div>
  );
};
