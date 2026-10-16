import React, { useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Download,
  Calendar,
  Building,
  Languages,
  Clock,
  FileText,
  Tag,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { getAtTahirBySlug } from '../../data/atTahirData';
import { AtTahirCoverPlaceholder } from '../../components/library/AtTahirCoverPlaceholder';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/common/SEO';

const LazyPDFViewer = React.lazy(() =>
  import('../../components/common/PDFViewer').then((mod) => ({ default: mod.PDFViewer }))
);

export const AtTahirDetailPage: React.FC = () => {
  const { issueSlug } = useParams<{ issueSlug: string }>();
  const { language, isRTL } = useLanguage();

  const issue = issueSlug ? getAtTahirBySlug(issueSlug) : undefined;

  useEffect(() => {
    if (window.location.hash === '#read-online-viewer') {
      const timer = setTimeout(() => {
        const el = document.getElementById('read-online-viewer');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [issueSlug]);

  if (!issue) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <SEO
          title="Publication Not Found | At-Tahir Archive"
          description="The requested publication could not be found in the At-Tahir archive catalog."
          canonicalPath="/library/at-tahir"
        />
        <div className="max-w-md w-full text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F4F7FF] text-[#002FA7] mx-auto flex items-center justify-center">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-[#12247A]">Publication Not Found</h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            The requested publication could not be found in the At-Tahir archive catalog.
          </p>
          <div className="pt-2">
            <Link
              to="/library/at-tahir"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#002FA7] text-white text-xs font-bold hover:bg-[#002277] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to At-Tahir Archive</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isUnavailable = issue.status === 'unavailable';
  const hasPdf = Boolean((issue.pdfUrl || issue.pdf) && issue.status === 'available');
  const directPdfPath = issue.pdfUrl || issue.pdf;
  const displayCover = issue.coverImage || issue.cover || issue.localCoverUrl;

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

  const localizedPublisher =
    language === 'ur'
      ? issue.publisher.ur
      : language === 'ar'
      ? issue.publisher.ar
      : issue.publisher.en;

  const issueSchema = {
    '@context': 'https://schema.org',
    '@type': 'PublicationIssue',
    'name': `${issue.title} - At-Tahir Magazine`,
    'issueNumber': issue.issueNumber ? String(issue.issueNumber) : issue.seriesOrIssueNumber,
    'datePublished': issue.date,
    'inLanguage': issue.language,
    'description': localizedDescription || `${issue.title} official verified historical publication from Rohani Tulba Jamaat Pakistan.`,
    'image': displayCover ? `https://islahulmuslimeen.org${displayCover}` : undefined,
    'publisher': {
      '@type': 'Organization',
      'name': 'Rohani Tulba Jamaat Pakistan / Jamaat Islah-ul-Muslimeen',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Nawabshah',
        'addressRegion': 'Sindh',
        'addressCountry': 'Pakistan',
      },
    },
  };

  return (
    <div className="pb-20 pt-6 sm:pt-8">
      <SEO
        title={`${issue.title} (${issue.date || 'Historical Archive'}) | At-Tahir Magazine`}
        description={`${issue.title} (${issue.date || 'Historical Archive'}) - verified official publication from Rohani Tulba Jamaat Pakistan, Jamaat Islah-ul-Muslimeen. Read or download verified PDF scan.`}
        canonicalPath={`/library/at-tahir/${issue.slug}`}
        ogType="article"
        ogImage={displayCover || '/assets/logo/logo.png'}
        keywords={[
          issue.title,
          'At-Tahir',
          'Al-Tahir',
          'Attahir magazine',
          'Rohani Tulba Jamaat',
          'Islah-ul-Muslimeen',
          'Islamic archive',
          ...(issue.topics || []),
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'At-Tahir Magazine', item: '/library/at-tahir' },
          { name: issue.title, item: `/library/at-tahir/${issue.slug}` },
        ]}
        structuredData={issueSchema}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#64748B]">
          <ol className="flex items-center flex-wrap gap-1.5">
            <li>
              <Link
                to="/library"
                className="hover:text-[#002FA7] transition-colors focus:outline-none"
              >
                {language === 'ur' ? 'کتب خانہ' : language === 'ar' ? 'المكتبة' : 'Library'}
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
            <li>
              <Link
                to="/library/at-tahir"
                className="hover:text-[#002FA7] transition-colors focus:outline-none"
              >
                {language === 'ur' ? 'ماہنامہ الطاہر' : language === 'ar' ? 'مجلة الطاهر' : 'At-Tahir'}
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
            <li className="font-semibold text-[#12247A]" aria-current="page">
              {issue.title}
            </li>
          </ol>
        </nav>

        {/* Back navigation button */}
        <div>
          <Link
            to="/library/at-tahir"
            aria-label="Back to At-Tahir Publications Archive"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#002FA7] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] rounded-lg px-1.5 py-1"
          >
            <ArrowLeft
              className={`w-3.5 h-3.5 transition-transform ${
                isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'
              }`}
            />
            <span>
              {language === 'ur'
                ? '← ماہنامہ الطاہر پر واپس جائیں'
                : language === 'ar'
                ? '← العودة إلى مجلة الطاهر'
                : '← Back to At-Tahir Archive'}
            </span>
          </Link>
        </div>

        {/* Main Content Layout: 2 Columns on Desktop */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left/Cover Column (5 Cols) */}
            <div className="md:col-span-5 max-w-[320px] mx-auto w-full">
              <AtTahirCoverPlaceholder
                issue={issue.seriesOrIssueNumber || issue.issue}
                date={issue.date || 'Historical Archive'}
                coverImage={displayCover || undefined}
                localCoverImage={issue.localCoverUrl || undefined}
                pdfUrl={directPdfPath}
                localPdfUrl={issue.localPdfUrl || undefined}
                storageKey={issue.filename || issue.id}
                variant="detail"
                isUnavailable={isUnavailable}
              />
            </div>

            {/* Right/Information Column (7 Cols) */}
            <div className="md:col-span-7 space-y-6 text-start">
              {/* Header Title & Date */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#F4F7FF] text-[#002FA7] text-xs font-bold border border-[#E2E8F0]">
                    {issue.category}
                  </div>
                  {issue.verified && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Historical Source</span>
                    </div>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12247A] tracking-tight">
                  {issue.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#64748B]">
                  {localizedDate && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#002FA7]" aria-hidden="true" />
                      <span>{localizedDate}</span>
                    </span>
                  )}
                  {issue.pageCount && (
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-[#002FA7]" aria-hidden="true" />
                      <span>{issue.pageCount} {language === 'ur' ? 'صفحات' : 'Pages'}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Verified Short Description */}
              {localizedDescription && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#EEF2F7] space-y-2">
                  <h2 className="text-xs font-bold text-[#12247A] uppercase tracking-wider">
                    {language === 'ur' ? 'تفصیلِ اشاعت' : language === 'ar' ? 'نبذة عن العدد' : 'Publication Overview'}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {localizedDescription}
                  </p>
                </div>
              )}

              {/* Topics / Contents List */}
              {issue.topics && issue.topics.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-[#12247A] uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#002FA7]" />
                    <span>{language === 'ur' ? 'اہم مضامین و مندرجات' : 'Verified Contents & Topics'}</span>
                  </h3>
                  <ul className="space-y-1.5">
                    {issue.topics.map((topic, i) => (
                      <li key={i} className="text-xs text-[#475569] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#002FA7] mt-1.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publication Information Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl border border-[#EEF2F7] bg-white space-y-1">
                  <div className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
                    <span>{language === 'ur' ? 'ناشر' : 'Publisher'}</span>
                  </div>
                  <div className="text-xs font-bold text-[#12247A]">
                    {localizedPublisher}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#EEF2F7] bg-white space-y-1">
                  <div className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
                    <span>{language === 'ur' ? 'زبان' : 'Language'}</span>
                  </div>
                  <div className="text-xs font-bold text-[#12247A]">
                    {issue.language}
                  </div>
                </div>
              </div>

              {/* Actions Area */}
              <div className="pt-4 border-t border-[#EEF2F7] space-y-3">
                {hasPdf && directPdfPath ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('read-online-viewer');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      aria-label={`Read ${issue.title} online`}
                      className="min-h-[46px] px-6 py-2.5 rounded-xl bg-[#002FA7] hover:bg-[#002277] text-white text-sm font-bold transition-colors shadow-xs flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      <span>
                        {language === 'ur' ? 'آن لائن پڑھیں' : language === 'ar' ? 'قراءة أونلاين' : 'Read Online'}
                      </span>
                    </button>

                    <a
                      href={directPdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${issue.title} PDF in a new tab`}
                      className="min-h-[46px] px-5 py-2.5 rounded-xl bg-[#F4F7FF] hover:bg-[#E2E8F0] border border-[#CBD5E1] text-[#12247A] text-sm font-bold transition-colors shadow-xs flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
                    >
                      <ExternalLink className="w-4 h-4 text-[#002FA7]" />
                      <span>
                        {language === 'ur' ? 'نئے ٹیب میں پڑھیں' : language === 'ar' ? 'قراءة في علامة تبويب جديدة' : 'Read in New Tab'}
                      </span>
                    </a>

                    <a
                      href={directPdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={issue.filename}
                      aria-label={`Download ${issue.title} PDF`}
                      className="min-h-[46px] px-5 py-2.5 rounded-xl bg-white border border-[#002FA7] text-[#002FA7] hover:bg-[#002FA7] hover:text-white text-sm font-bold transition-colors shadow-xs flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      <span>
                        {language === 'ur' ? 'ڈاؤنلوڈ پی ڈی ایف' : language === 'ar' ? 'تحميل PDF' : 'Download PDF'}
                      </span>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded PDF.js Reader for At-Tahir */}
        {hasPdf && directPdfPath && (
          <div id="read-online-viewer" className="space-y-4 pt-6 scroll-mt-20">
            <div className="flex items-center justify-between pb-3 border-b border-[#EEF2F7]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F4F7FF] flex items-center justify-center text-[#002FA7]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#12247A]">
                    {language === 'ur' ? 'آن لائن ڈیجیٹل مطالعہ' : language === 'ar' ? 'المطالعة الرقمية أونلاين' : 'Read Online (Digital Viewer)'}
                  </h2>
                  <p className="text-xs text-[#64748B]">
                    {language === 'ur' ? 'مسلسل سکرولنگ اور زوم کنٹرولز کے ساتھ مطالعہ فرمائیں' : 'Continuous vertical scrolling with progressive loading and zoom controls'}
                  </p>
                </div>
              </div>
            </div>
            <Suspense
              fallback={
                <div className="w-full h-[600px] flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl gap-3 text-slate-500">
                  <Loader2 className="w-8 h-8 animate-spin text-[#002FA7]" />
                  <p className="text-sm font-medium">Loading digital reader...</p>
                </div>
              }
            >
              <LazyPDFViewer
                pdfUrl={directPdfPath}
                localPdfUrl={issue.localPdfUrl || undefined}
                title={issue.title}
                fileName={issue.filename}
                expectedPageCount={issue.pageCount}
                height="800px"
              />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};
