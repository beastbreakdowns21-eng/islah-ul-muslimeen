import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Clock, ArrowRight, FileText, AlertCircle, ExternalLink } from 'lucide-react';
import { AtTahirIssue } from '../../data/atTahirData';
import { AtTahirCoverPlaceholder } from './AtTahirCoverPlaceholder';
import { useLanguage } from '../../context/LanguageContext';

interface AtTahirIssueCardProps {
  issue: AtTahirIssue;
}

export const AtTahirIssueCard: React.FC<AtTahirIssueCardProps> = ({ issue }) => {
  const { language, isRTL } = useLanguage();
  const isUnavailable = issue.status === 'unavailable';
  const hasPdf = Boolean((issue.pdfUrl || issue.pdf) && issue.status === 'available');

  const localizedDate =
    language === 'ur' && issue.dateUrdu
      ? issue.dateUrdu
      : language === 'ar' && issue.dateArabic
      ? issue.dateArabic
      : issue.date;

  const localizedDescription =
    language === 'ur' && issue.description?.ur
      ? issue.description.ur
      : language === 'ar' && issue.description?.ar
      ? issue.description.ar
      : issue.description?.en;

  const displayCover = issue.coverImage || issue.cover || issue.localCoverUrl;
  const directPdfPath = issue.pdfUrl || issue.pdf;

  return (
    <div className="bg-white rounded-xl border border-[#EEF2F7] shadow-xs hover:shadow-md hover:border-[#002FA7]/30 transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5">
      {/* Cover / Document Thumbnail Area */}
      <div className="p-2 sm:p-2.5 pb-0 flex justify-center bg-gradient-to-b from-[#F8FAFC] to-white">
        <Link
          to={`/library/at-tahir/${issue.slug}`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] rounded-lg overflow-hidden w-full max-w-[115px] sm:max-w-[125px]"
          aria-label={`View details for ${issue.title}`}
        >
          <AtTahirCoverPlaceholder
            issue={issue.seriesOrIssueNumber || issue.issue}
            date={issue.date || 'Historical Archive'}
            coverImage={displayCover || undefined}
            localCoverImage={issue.localCoverUrl || undefined}
            pdfUrl={directPdfPath}
            localPdfUrl={issue.localPdfUrl || undefined}
            storageKey={issue.filename || issue.id}
            variant="card"
            className="rounded-lg shadow-xs"
            isUnavailable={isUnavailable}
          />
        </Link>
      </div>

      {/* Metadata & Content Area */}
      <div className="p-2.5 sm:p-3 pt-2 flex-1 flex flex-col justify-between space-y-2">
        <div className="space-y-1">
          {/* Header: Title */}
          <Link
            to={`/library/at-tahir/${issue.slug}`}
            className="group-hover:text-[#002FA7] transition-colors focus:outline-none block"
          >
            <h3 className="text-xs sm:text-sm font-bold text-[#12247A] tracking-tight leading-snug line-clamp-1">
              {issue.title}
            </h3>
          </Link>

          {/* Series & Date Row */}
          <div className="flex items-center justify-between gap-1 text-[11px]">
            <span className="font-semibold text-[#002FA7] truncate">
              {issue.seriesOrIssueNumber}
            </span>
            {localizedDate && (
              <span className="px-1.5 py-0.5 rounded bg-[#F4F7FF] text-[#12247A] text-[10px] font-medium border border-[#E2E8F0] shrink-0">
                {localizedDate}
              </span>
            )}
          </div>

          {/* Page count & Availability indicator */}
          <div className="flex items-center gap-1.5 text-[10.5px] text-[#64748B]">
            {issue.pageCount && (
              <span className="flex items-center gap-1 font-medium">
                <FileText className="w-3 h-3 text-[#94A3B8]" />
                <span>{issue.pageCount} {language === 'ur' ? 'صفحات' : 'Pages'}</span>
              </span>
            )}
            {isUnavailable && (
              <span className="font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-[10px]">
                {language === 'ur' ? 'پی ڈی ایف دستیاب نہیں' : 'Unavailable'}
              </span>
            )}
          </div>

          {/* Compact 1-line Description */}
          {localizedDescription && (
            <p className="text-[11px] text-[#64748B] line-clamp-1 leading-tight pt-0.5">
              {localizedDescription}
            </p>
          )}
        </div>

        {/* Action Area: Single Clean Row */}
        <div className="pt-2 border-t border-[#EEF2F7]">
          {hasPdf && directPdfPath ? (
            <div className="flex items-center gap-1.5">
              <Link
                to={`/library/at-tahir/${issue.slug}`}
                aria-label={`Read ${issue.title} online`}
                className="flex-1 min-h-[30px] px-2 py-1 rounded-md bg-[#002FA7] hover:bg-[#002277] text-white text-[11px] font-bold transition-colors shadow-xs flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
              >
                <BookOpen className="w-3 h-3 shrink-0" aria-hidden="true" />
                <span className="truncate">
                  {language === 'ur' ? 'آن لائن پڑھیں' : language === 'ar' ? 'قراءة' : 'Read Online'}
                </span>
              </Link>

              <a
                href={directPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${issue.title} PDF in a new tab`}
                title={language === 'ur' ? 'نیا ٹیب' : language === 'ar' ? 'تبويب جديد' : 'New Tab'}
                className="w-[30px] h-[30px] rounded-md bg-[#F4F7FF] hover:bg-[#E2E8F0] border border-[#CBD5E1] text-[#12247A] transition-colors shadow-xs flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] shrink-0"
              >
                <ExternalLink className="w-3 h-3 text-[#002FA7]" aria-hidden="true" />
              </a>

              <a
                href={directPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download={issue.filename}
                aria-label={`Download ${issue.title} PDF`}
                title={language === 'ur' ? 'ڈاؤنلوڈ پی ڈی ایف' : language === 'ar' ? 'تحميل PDF' : 'Download PDF'}
                className="w-[30px] h-[30px] rounded-md bg-white border border-[#002FA7] text-[#002FA7] hover:bg-[#002FA7] hover:text-white transition-colors shadow-xs flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] shrink-0"
              >
                <Download className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          ) : (
            <Link
              to={`/library/at-tahir/${issue.slug}`}
              aria-label={`View details for ${issue.title}`}
              className="w-full min-h-[30px] px-2 py-1 rounded-md bg-white border border-[#E2E8F0] hover:border-[#002FA7] text-[#12247A] hover:text-[#002FA7] hover:bg-[#F4F7FF] text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
            >
              <span>
                {language === 'ur' ? 'تفصیلات' : language === 'ar' ? 'التفاصيل' : 'View Details'}
              </span>
              <ArrowRight
                className={`w-3 h-3 shrink-0 ${isRTL ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
