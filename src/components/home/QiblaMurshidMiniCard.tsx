import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Quote, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const QiblaMurshidMiniCard: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div
      id="qibla-murshid-mini-card"
      className="relative overflow-hidden rounded-2xl bg-[#0F1D4A] text-white p-6 sm:p-7 shadow-sm border border-[#1E3A8A]"
    >
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-start">
        {/* Official Sheikh Photograph Frame */}
        <div className="relative shrink-0">
          <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/30 shadow-md">
            <img
              src="/sajjan-sain.png"
              alt="Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen) - Official Photograph"
              width={128}
              height={160}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
          {/* Official Seal Badge Icon */}
          <div
            className="absolute -bottom-2 -right-2 bg-[#002FA7] text-amber-300 p-1.5 rounded-full shadow-md border border-white/40"
            title="Qibla & Murshid"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1 space-y-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {language === 'ur'
                  ? 'قبلہ و مرشد'
                  : language === 'ar'
                  ? 'الشيخ والمرشد'
                  : 'Qibla & Murshid'}
              </span>
            </div>

            <h3
              className={`text-lg sm:text-xl font-black text-white tracking-tight ${
                language === 'ur' ? 'font-urdu leading-snug' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {language === 'ur'
                ? 'حضرت خواجہ محمد طاہر بخشی نقشبندی'
                : 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi'}
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-blue-200">
              {language === 'ur' ? 'محبوب سجن سائیں' : 'Sajjan Saeen'}
            </p>
          </div>

          <p
            className={`text-xs sm:text-sm text-blue-100/90 leading-relaxed ${
              language === 'ur' ? 'font-urdu text-sm leading-relaxed' : ''
            }`}
          >
            {language === 'ur'
              ? 'حضرت خواجہ محمد طاہر بخشی نقشبندی، معروف بہ سجن سائیں، نقشبندی مجددی سلسلے سے وابستہ دورِ حاضر کے عظیم روحانی رہنما اور اسلامی داعی ہیں۔'
              : language === 'ar'
              ? 'الخواجه محمد طاهر البخشي النقشبندي المعروف بسجن سائیں، مرشد روحي وعالم إسلامي جليل من كبار رجالات الطريقة النقشبندية المجددية.'
              : 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi, known as Sajjan Saeen, is a spiritual guide and Islamic teacher associated with the Naqshbandi Mujaddidi tradition.'}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <Link
              to="/about/sheikh"
              id="mini-card-view-profile-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[#12247A] hover:bg-blue-50 text-xs font-bold transition-colors shadow-xs"
            >
              <span>{language === 'ur' ? 'مکمل سوانح دیکھیں' : 'View Full Profile'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>

            <Link
              to="/about/sheikh#sheikh-sayings-section"
              id="mini-card-his-sayings-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors"
            >
              <Quote className="w-3.5 h-3.5 text-blue-200" />
              <span>{language === 'ur' ? 'ارشاداتِ عالیہ' : 'His Sayings'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
