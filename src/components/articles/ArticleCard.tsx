import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ArrowRight, ExternalLink, User, BookOpen } from 'lucide-react';
import { OfficialArticle } from '../../data/articlesData';
import { useLanguage } from '../../context/LanguageContext';

interface ArticleCardProps {
  article: OfficialArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { language } = useLanguage();

  const title =
    language === 'ur' && article.titleUrdu
      ? article.titleUrdu
      : language === 'ar' && article.titleArabic
      ? article.titleArabic
      : article.title;

  const category =
    language === 'ur' && article.categoryUrdu
      ? article.categoryUrdu
      : language === 'ar' && article.categoryArabic
      ? article.categoryArabic
      : article.category;

  const description =
    language === 'ur' && article.descriptionUrdu
      ? article.descriptionUrdu
      : language === 'ar' && article.descriptionArabic
      ? article.descriptionArabic
      : article.description;

  const author =
    language === 'ur' && article.authorUrdu
      ? article.authorUrdu
      : language === 'ar' && article.authorArabic
      ? article.authorArabic
      : article.author;

  return (
    <div
      id={`article-card-${article.slug}`}
      className="bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden text-start group"
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Actual Cover Thumbnail (Extracted from 1st page of PDF) */}
        <div className="sm:w-44 md:w-48 shrink-0 bg-slate-50 p-4 sm:p-5 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#EEF2F7]">
          <a
            href={article.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Read PDF: ${article.title}`}
            onClick={(e) => {
              e.preventDefault();
              window.open(article.pdfUrl, '_blank', 'noopener,noreferrer');
            }}
            className="block relative w-full max-w-[140px] sm:max-w-none aspect-[1/1.414] rounded-lg shadow-sm border border-slate-200 overflow-hidden group/cover hover:shadow-md transition-all cursor-pointer"
          >
            <img
              src={article.coverImage}
              alt={`Cover of ${article.title}`}
              className="w-full h-full object-cover object-top group-hover/cover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/cover:bg-black/20 flex items-center justify-center transition-colors">
              <span className="opacity-0 group-hover/cover:opacity-100 bg-white/95 text-[#002FA7] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm transition-opacity flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                <span>Read PDF</span>
              </span>
            </div>
          </a>

          {/* Actual Page Count & Language under cover */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <FileText className="w-3 h-3 text-[#002FA7]" />
            <span>{article.pageCount} {language === 'ur' ? 'صفحات' : language === 'ar' ? 'صفحات' : 'Pages'}</span>
            <span>•</span>
            <span>{article.language}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            {/* Category & Format Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#F1F5F9] text-[#475569]">
                {category}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#002FA7]/10 text-[#002FA7]">
                PDF
              </span>
            </div>

            {/* Exact Title */}
            <h2
              className={`text-base sm:text-lg font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors leading-snug ${
                language === 'ur' ? 'font-urdu text-xl' : language === 'ar' ? 'font-arabic text-lg' : ''
              }`}
            >
              <Link to={`/articles/${article.slug}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#002FA7] rounded">
                {title}
              </Link>
            </h2>

            {/* Subtitle if available */}
            {article.subtitle && (
              <p className="text-xs text-[#002FA7] font-medium italic">
                {article.subtitle}
              </p>
            )}

            {/* Author / Editor */}
            <div className="flex items-center gap-1.5 text-xs text-[#334155] pt-0.5">
              <User className="w-3.5 h-3.5 text-[#002FA7] shrink-0" />
              <span className="font-semibold text-slate-600">Author:</span>
              <span className="text-[#1A1F2B] font-medium truncate">{author}</span>
            </div>

            {/* Real Excerpt Description */}
            <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Clean Professional Action Buttons */}
          <div className="pt-3 border-t border-[#EEF2F7] flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              {/* Read PDF Button */}
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read PDF: ${article.title} in new tab`}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(article.pdfUrl, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#002FA7] hover:bg-[#12247A] text-white text-xs font-bold shadow-xs hover:shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#002FA7] focus:ring-offset-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read PDF</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              {/* Download PDF Button */}
              <a
                href={article.pdfUrl}
                download={article.fileName}
                aria-label={`Download PDF: ${article.fileName}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#002FA7] text-[#002FA7] hover:bg-blue-50/60 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#002FA7] focus:ring-offset-1"
              >
                <Download className="w-3.5 h-3.5 text-[#002FA7]" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Subtle Link to Article Details */}
            <Link
              to={`/articles/${article.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#002FA7] transition-colors py-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
