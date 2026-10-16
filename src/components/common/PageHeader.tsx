import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import { useLanguage } from '../../context/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
}) => {
  const { language } = useLanguage();

  return (
    <section className="bg-[#F8FAFC] border-b border-[#EEF2F7] pt-6 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-4 max-w-3xl text-start">
          {badge && (
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] tracking-wider uppercase mb-2">
              <span>{badge}</span>
            </div>
          )}
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12247A] tracking-tight ${
              language === 'ur' ? 'font-urdu leading-tight sm:leading-snug' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-2 text-sm sm:text-base text-[#64748B] leading-relaxed ${
                language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
