import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Download,
  ExternalLink,
  ArrowLeft,
  User,
  Languages,
  BookOpen,
  Calendar,
  ShieldCheck,
  Clock,
  Share2,
  Check,
  AlertTriangle,
  Loader2,
} from 'lucide-react';
import { OFFICIAL_ARTICLES, OfficialArticle } from '../../data/articlesData';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/common/SEO';

const LazyPDFViewer = React.lazy(() =>
  import('../../components/common/PDFViewer').then((mod) => ({ default: mod.PDFViewer }))
);

export const ArticleDetailPage: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [copiedLink, setCopiedLink] = useState(false);
  const readerRef = useRef<HTMLDivElement>(null);

  const scrollToReader = () => {
    readerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Find the article by slug or id
  const article = OFFICIAL_ARTICLES.find(
    (a) => a.slug === articleSlug || a.id === articleSlug
  );

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <SEO
          title="Article Not Found | Islah-ul-Muslimeen"
          description="The requested scholarly article could not be found or has been moved."
          canonicalPath="/articles"
        />
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12247A]">
          {language === 'ur' ? 'مقالہ دستیاب نہیں ہے' : 'Article Not Found'}
        </h1>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          {language === 'ur'
            ? 'مطلوبہ مقالہ لائبریری میں موجود نہیں ہے یا اس کا ربط تبدیل ہو چکا ہے۔'
            : 'The requested scholarly article could not be found or has been moved.'}
        </p>
        <div>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002FA7] text-white text-sm font-bold shadow-md hover:bg-[#12247A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>
    );
  }

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

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.description,
    'inLanguage': article.language,
    'articleSection': article.category,
    'author': {
      '@type': 'Person',
      'name': article.author,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Jamaat Islah-ul-Muslimeen',
      'url': 'https://islahulmuslimeen.org/',
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://islahulmuslimeen.org/articles/${article.slug}`,
    },
  };

  return (
    <div className="pb-20 space-y-10 text-start">
      <SEO
        title={`${article.title} | Islamic Articles`}
        description={article.description}
        canonicalPath={`/articles/${article.slug}`}
        ogType="article"
        keywords={[
          article.title,
          article.category,
          'Islah-ul-Muslimeen',
          'Islamic articles',
          'Zikr',
          'Tasawwuf',
          ...article.searchKeywords,
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'Articles', item: '/articles' },
          { name: article.title, item: `/articles/${article.slug}` },
        ]}
        structuredData={articleSchema}
      />
      {/* Breadcrumb Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#EEF2F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#64748B] flex-wrap">
            <Link to="/" className="hover:text-[#002FA7] transition-colors">
              {language === 'ur' ? 'مرکزی صفحہ' : language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/articles" className="hover:text-[#002FA7] transition-colors font-semibold">
              {language === 'ur' ? 'مقالات' : language === 'ar' ? 'المقالات' : 'Articles'}
            </Link>
            <span>/</span>
            <span className="text-[#12247A] font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {article.title}
            </span>
          </nav>

          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] hover:text-[#12247A] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Article Header Card */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm p-6 sm:p-10 space-y-6">
          {/* Format and Action Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#002FA7]/10 text-[#002FA7]">
                <FileText className="w-4 h-4 text-[#002FA7]" />
                <span>Format: {article.format}</span>
                <span className="text-[#002FA7]/40">•</span>
                <span>{article.pageCount} Pages</span>
              </span>

              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">
                {category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share article link"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#002FA7]" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Header Layout with Actual Cover Image and Details */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-44 sm:w-48 shrink-0 mx-auto md:mx-0">
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open PDF: ${article.title}`}
                className="block aspect-[1/1.414] rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-all group/cover"
              >
                <img
                  src={article.coverImage}
                  alt={`First page cover of ${article.title}`}
                  className="w-full h-full object-cover object-top group-hover/cover:scale-105 transition-transform duration-300"
                />
              </a>
              <p className="mt-2 text-center text-[11px] text-slate-500 font-medium truncate">
                {article.fileName}
              </p>
            </div>

            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12247A] tracking-tight leading-tight ${
                    language === 'ur' ? 'font-urdu text-3xl sm:text-4xl' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {title}
                </h1>

                {article.subtitle && (
                  <p className="text-sm sm:text-base font-semibold text-[#002FA7] italic">
                    {article.subtitle}
                  </p>
                )}
              </div>

              {/* Description Excerpt */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7]">
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Metadata Grid (Truthful, non-fabricated) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7] text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#64748B] flex items-center gap-1 uppercase tracking-wider text-[10px]">
                    <User className="w-3.5 h-3.5 text-[#002FA7]" />
                    <span>Author</span>
                  </span>
                  <p className="font-bold text-[#12247A]">{author}</p>
                </div>

                <div className="space-y-0.5">
                  <span className="font-bold text-[#64748B] flex items-center gap-1 uppercase tracking-wider text-[10px]">
                    <Languages className="w-3.5 h-3.5 text-[#002FA7]" />
                    <span>Translator</span>
                  </span>
                  <p className="font-medium text-[#475569]">{article.translator || 'Not specified'}</p>
                </div>

                <div className="space-y-0.5">
                  <span className="font-bold text-[#64748B] flex items-center gap-1 uppercase tracking-wider text-[10px]">
                    <BookOpen className="w-3.5 h-3.5 text-[#002FA7]" />
                    <span>Language</span>
                  </span>
                  <p className="font-semibold text-[#12247A]">{article.language}</p>
                </div>

                <div className="space-y-0.5">
                  <span className="font-bold text-[#64748B] flex items-center gap-1 uppercase tracking-wider text-[10px]">
                    <Calendar className="w-3.5 h-3.5 text-[#002FA7]" />
                    <span>Format</span>
                  </span>
                  <p className="font-semibold text-[#12247A]">PDF ({article.pageCount} Pages)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons (Prominent, Visible Labels) */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            {/* Read Online (Scrolls to Reader) */}
            <button
              type="button"
              onClick={scrollToReader}
              aria-label={`Read ${article.title} online`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#002FA7] hover:bg-[#12247A] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002FA7] focus:ring-offset-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Online</span>
            </button>

            {/* Read in New Tab Button (Direct window.open) */}
            <button
              type="button"
              onClick={() => window.open(article.pdfUrl, '_blank', 'noopener,noreferrer')}
              aria-label={`Read PDF in new tab: ${article.title}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-[#12247A] text-sm font-bold border border-slate-300 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002FA7] focus:ring-offset-2"
            >
              <ExternalLink className="w-4 h-4 text-[#002FA7]" />
              <span>Read in New Tab</span>
            </button>

            {/* Download PDF Button */}
            <a
              href={article.pdfUrl}
              download={article.fileName}
              aria-label={`Download PDF file: ${article.fileName}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#002FA7] text-[#002FA7] hover:bg-blue-50/70 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#002FA7] focus:ring-offset-2"
            >
              <Download className="w-4 h-4 text-[#002FA7]" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Client-Side PDF.js Online Reader Section (Chrome-Safe & Mobile Optimized, Lazily Loaded) */}
        <div ref={readerRef} id="pdf-reader" className="space-y-4 pt-2">
          <Suspense
            fallback={
              <div className="w-full h-[600px] flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl gap-3 text-slate-500">
                <Loader2 className="w-8 h-8 animate-spin text-[#002FA7]" />
                <p className="text-sm font-medium">Loading document reader...</p>
              </div>
            }
          >
            <LazyPDFViewer
              pdfUrl={article.pdfUrl}
              localPdfUrl={article.pdfUrl}
              title={article.title}
              fileName={article.fileName}
              expectedPageCount={article.pageCount}
              height="760px"
              isArticle={true}
            />
          </Suspense>
        </div>

        {/* Full Text & Detailed Content Sections from the PDF */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm p-6 sm:p-10 space-y-8">
          <div className="border-b border-[#EEF2F7] pb-4 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#12247A]">
              {language === 'ur' ? 'مقالہ کا مکمل متن و مباحث' : 'Article Text & Excerpts'}
            </h2>
            <span className="text-xs text-[#64748B]">
              From official publication
            </span>
          </div>

          <div className="space-y-8">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4 text-start">
                {sec.heading && (
                  <h3 className="text-base sm:text-lg font-bold text-[#002FA7] border-l-3 border-[#002FA7] pl-3">
                    {sec.heading}
                  </h3>
                )}

                {sec.arabicText && (
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-center font-arabic text-lg sm:text-xl text-[#12247A] leading-loose">
                    {sec.arabicText}
                  </div>
                )}

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-[#1A1F2B] leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#334155]">
                    {sec.bulletPoints.map((item, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Document Source & Copyright Notice */}
          <div className="pt-6 border-t border-[#EEF2F7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#64748B]">
            <div>
              <p className="font-semibold text-[#1A1F2B]">
                {article.copyright || 'Copyright © Jamaat Islah-ul-Muslimeen'}
              </p>
              {article.originalSourceOrBook && (
                <p className="mt-0.5 text-slate-500">
                  <span className="font-semibold text-slate-700">Source:</span> {article.originalSourceOrBook}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/articles"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-100 text-[#12247A] hover:bg-gray-200 text-xs font-bold transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                <span>Back to Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
