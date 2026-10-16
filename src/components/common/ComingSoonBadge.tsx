import React from 'react';
import { Clock, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ComingSoonBadgeProps {
  size?: 'sm' | 'md';
  className?: string;
}

export const ComingSoonBadge: React.FC<ComingSoonBadgeProps> = ({ size = 'sm', className = '' }) => {
  const { language } = useLanguage();

  const label =
    language === 'ur'
      ? 'جلد دستیاب ہوگا'
      : language === 'ar'
      ? 'سيكون متاحًا قريبًا'
      : 'Coming Soon';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 ${
        size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
      } ${language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''} ${className}`}
    >
      <Clock className={size === 'sm' ? 'w-3 h-3 text-amber-600' : 'w-3.5 h-3.5 text-amber-600'} />
      <span>{label}</span>
    </span>
  );
};

export const ComingSoonCard: React.FC<{
  title: string;
  description?: string;
  category?: string;
}> = ({ title, description, category }) => {
  const { language } = useLanguage();

  const defaultDesc =
    language === 'ur'
      ? 'یہ مستند علمی ریکارڈ مرکزی لائبریری میں ڈیجیٹائزیشن اور تدوین کے مراحل میں ہے اور جلد آن لائن مہیا کر دیا جائے گا۔'
      : language === 'ar'
      ? 'هذه المادة الموثقة قيد المراجعة والفهرسة الرقمية من قبل اللجنة العلمية، وستكون متاحة قريباً إن شاء الله.'
      : 'This verified institutional archival record is currently undergoing scholarly cataloging and high-fidelity digitization.';

  return (
    <div className="bg-[#F7F9FC] border border-[#EEF2F7] rounded-2xl p-6 sm:p-8 text-center max-w-xl mx-auto my-6">
      <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
        <Clock className="w-6 h-6" />
      </div>
      {category && (
        <span className="text-[10px] font-bold tracking-wider uppercase text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-1 rounded-md mb-2 inline-block">
          {category}
        </span>
      )}
      <h3 className="text-base sm:text-lg font-bold text-[#12247A] mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-[#64748B] mb-5 leading-relaxed">
        {description || defaultDesc}
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
        <Info className="w-3.5 h-3.5 text-amber-600" />
        <span>
          {language === 'ur'
            ? 'جلد دستیاب ہوگا (مستند ریکارڈ)'
            : language === 'ar'
            ? 'سيكون متاحًا قريبًا (سجل رسمي)'
            : 'Coming Soon (Official Archive)'}
        </span>
      </div>
    </div>
  );
};
