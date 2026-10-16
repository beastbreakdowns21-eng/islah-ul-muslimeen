import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, BookOpen, Heart, Calendar, PhoneCall, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();

  const internalLinks = [
    { to: '/about', label: { en: 'About Movement', ur: 'تعارف و تاریخ', ar: 'عن الجمعية' }, icon: Compass },
    { to: '/quran', label: { en: 'Holy Quran', ur: 'قرآن کریم', ar: 'القرآن الكريم' }, icon: BookOpen },
    { to: '/spirituality', label: { en: 'Spirituality & Zikr', ur: 'روحانیت و ذکر', ar: 'الروحانية والذكر' }, icon: Heart },
    { to: '/articles', label: { en: 'Scholarly Articles', ur: 'تحقیقی مقالات', ar: 'الأبحاث والمقالات' }, icon: BookOpen },
    { to: '/library', label: { en: 'Islamic Library', ur: 'کتب خانہ', ar: 'المكتبة الإسلامية' }, icon: BookOpen },
    { to: '/events', label: { en: 'Events & Urs', ur: 'پروگرامز و عرس', ar: 'الفعاليات والمناسبات' }, icon: Calendar },
    { to: '/contact', label: { en: 'Contact Centers', ur: 'رابطہ و مراکز', ar: 'الاتصال والمراكز' }, icon: PhoneCall },
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-xl w-full space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002FA7]/10 text-[#002FA7] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>جلد دستیاب ہوگا • Coming Soon • سيكون متاحًا قريبًا</span>
        </div>

        <div className="w-20 h-20 rounded-2xl bg-[#002FA7]/10 text-[#002FA7] font-black text-3xl flex items-center justify-center mx-auto shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1
            className={`text-2xl sm:text-3xl font-extrabold text-[#12247A] ${
              language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur'
              ? 'مطلوبہ صفحہ نئے پورٹل پر جلد دستیاب ہوگا'
              : language === 'ar'
              ? 'الصفحة المطلوبة ستكون متاحة قريباً'
              : 'Content Coming Soon to New Portal'}
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
            {language === 'ur'
              ? 'جماعت اصلاح المسلمین کی نئی خود مختار ویب سائٹ پر تمام مواد کی منتقلی اور تدوین کا عمل جاری ہے۔ براۂ کرم مرکزی پورٹل کے دستیاب شعبہ جات ملاحظہ فرمائیں:'
              : language === 'ar'
              ? 'يجري تحديث وإعداد كامل المحتويات في المنصة الرقمية الجديدة المستقلة لجماعة إصلاح المسلمين.'
              : 'Jamaat Islah-ul-Muslimeen’s new standalone portal is consolidating and updating all archival content. Explore the active sections below:'}
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-bold text-start">
            {internalLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#EEF2F7] hover:border-[#002FA7]/40 hover:bg-[#002FA7]/5 text-[#12247A] hover:text-[#002FA7] transition-all shadow-2xs"
                >
                  <Icon className="w-4 h-4 text-[#002FA7] shrink-0" />
                  <span className="truncate">
                    {language === 'ur' ? item.label.ur : language === 'ar' ? item.label.ar : item.label.en}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002FA7] hover:bg-[#12247A] text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>{language === 'ur' ? 'مرکزی صفحہ پر واپسی' : language === 'ar' ? 'العودة للمنصة الرئيسية' : 'Return to Home'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
