import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { isRTL, language } = useLanguage();

  return (
    <nav aria-label={language === 'ur' ? 'روابط' : 'Breadcrumb'} className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#64748B]">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#002FA7] transition-colors p-1 rounded-md"
            aria-label={language === 'ur' ? 'ہوم' : 'Home'}
          >
            <Home className="w-3.5 h-3.5" />
            <span className={language === 'ur' ? 'font-urdu' : ''}>
              {language === 'ur' ? 'ہوم' : language === 'ar' ? 'الرئيسية' : 'Home'}
            </span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight
                className={`w-3.5 h-3.5 text-[#64748B]/60 ${isRTL ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
              {isLast || !item.path ? (
                <span
                  className={`font-semibold text-[#12247A] ${
                    language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`hover:text-[#002FA7] transition-colors ${
                    language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
