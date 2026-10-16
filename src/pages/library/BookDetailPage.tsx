import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Building,
  Languages,
  FileText,
  CheckCircle2,
  Sparkles,
  Loader2,
  UserCheck,
} from 'lucide-react';
import { getBookBySlug } from '../../data/libraryData';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/common/SEO';

const LazyPDFViewer = React.lazy(() =>
  import('../../components/common/PDFViewer').then((mod) => ({ default: mod.PDFViewer }))
);

interface SavedReadingProgress {
  bookId: string;
  page: number;
  totalPages: number;
  percent: number;
  updatedAt: number;
}

const getStoredProgress = (bookId: string): SavedReadingProgress | null => {
  try {
    const raw = localStorage.getItem(`book-reading-progress:${bookId}`);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (
      typeof data === 'object' &&
      data !== null &&
      typeof data.page === 'number' &&
      typeof data.percent === 'number'
    ) {
      return data;
    }
  } catch {
    // Ignore JSON parse or storage access exceptions
  }
  return null;
};

export const BookDetailPage: React.FC = () => {
  const { bookSlug } = useParams<{ bookSlug: string }>();
  const { t, language, isRTL } = useLanguage();
  const navigate = useNavigate();

  // If no slug param (e.g. direct /malfuzat-e-tahiriya or /jalwah-gah-e-dost route), detect from path
  const location = useLocation();
  const pathSegment = location.pathname.split('/').filter(Boolean).pop();
  const detectedSlug =
    pathSegment && (pathSegment === 'jalwah-gah-e-dost' || pathSegment === 'jalwah-gah-e-dost-english')
      ? 'jalwah-gah-e-dost-english'
      : pathSegment === 'malfuzat-e-tahiriya'
      ? 'malfuzat-e-tahiriya'
      : undefined;
  const activeSlug = bookSlug || detectedSlug || 'malfuzat-e-tahiriya';
  const book = getBookBySlug(activeSlug);

  // Reading progress state
  const savedInitial = book ? getStoredProgress(book.id) : null;
  const initialPage = savedInitial && savedInitial.page > 0 ? savedInitial.page : 1;

  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(savedInitial?.totalPages || book?.pages || 0);
  const [progressPercent, setProgressPercent] = useState<number>(savedInitial?.percent || 0);
  const [isPdfLoaded, setIsPdfLoaded] = useState<boolean>(false);
  const [isPdfError, setIsPdfError] = useState<boolean>(false);

  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync state whenever the book identity changes
  useEffect(() => {
    if (!book) return;
    const saved = getStoredProgress(book.id);
    if (saved) {
      setCurrentPage(saved.page);
      setTotalPages(saved.totalPages || book.pages || 0);
      setProgressPercent(saved.percent);
    } else {
      setCurrentPage(1);
      setTotalPages(book.pages || 0);
      setProgressPercent(0);
    }
    setIsPdfLoaded(false);
    setIsPdfError(false);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [book?.id, book?.pages]);

  // Handle successful PDF document load
  const handleLoadSuccess = useCallback(
    (loadedTotalPages: number) => {
      if (!book) return;
      setIsPdfLoaded(true);
      setIsPdfError(false);
      setTotalPages(loadedTotalPages);

      // Verify or adjust saved progress against actual page count
      const saved = getStoredProgress(book.id);
      if (saved && saved.page > 0) {
        const page = Math.min(saved.page, loadedTotalPages);
        let percent = saved.percent;
        if (loadedTotalPages <= 1 || page >= loadedTotalPages) {
          percent = 100;
        } else if (page <= 1) {
          percent = 0;
        } else {
          percent = Math.min(99, Math.max(1, Math.round(((page - 1) / (loadedTotalPages - 1)) * 100)));
        }
        setCurrentPage(page);
        setProgressPercent(percent);
      }
    },
    [book]
  );

  // Handle PDF load failure (prevents invalid progress display/save)
  const handlePdfError = useCallback(() => {
    setIsPdfError(true);
    setIsPdfLoaded(false);
  }, []);

  // Update progress smoothly on page changes, and debounce saving to localStorage
  const handleProgressUpdate = useCallback(
    (page: number, total: number) => {
      if (!book || total <= 0 || page <= 0) return;

      let percent = 0;
      if (total <= 1 || page >= total) {
        percent = 100;
      } else if (page <= 1) {
        percent = 0;
      } else {
        percent = Math.min(99, Math.max(1, Math.round(((page - 1) / (total - 1)) * 100)));
      }

      setCurrentPage(page);
      setTotalPages(total);
      setProgressPercent(percent);

      // Debounce writes to localStorage (500ms)
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      saveTimeoutRef.current = setTimeout(() => {
        try {
          const payload: SavedReadingProgress = {
            bookId: book.id,
            page,
            totalPages: total,
            percent,
            updatedAt: Date.now(),
          };
          localStorage.setItem(`book-reading-progress:${book.id}`, JSON.stringify(payload));
        } catch (err) {
          console.warn('Could not save reading progress:', err);
        }
      }, 500);
    },
    [book]
  );

  if (!book) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
        <SEO
          title="Book Not Found | Library"
          description="The requested book could not be found in the Maktaba Tahiriya catalog."
          canonicalPath="/library/books"
        />
        <div className="max-w-md w-full space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F4F7FF] text-[#002FA7] mx-auto flex items-center justify-center">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-[#12247A]">Book Not Found</h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            The requested book could not be found in the catalog.
          </p>
          <div className="pt-2">
            <Link
              to="/library/books"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#002FA7] text-white text-xs font-bold hover:bg-[#002277] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Library Books</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const bookTitle = t(book.title);
  const bookAuthor = t(book.author);
  const bookTranslator = book.translator ? t(book.translator) : null;
  const bookDescription = t(book.description);
  const publisherName = book.publisher ? t(book.publisher) : null;

  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    'name': book.title.en,
    'alternateName': [book.title.ur, book.title.ar],
    'author': {
      '@type': 'Person',
      'name': book.author.en,
    },
    'inLanguage': book.language === 'Urdu' ? 'ur' : book.language === 'English' ? 'en' : 'ar',
    'numberOfPages': book.pages,
    ...(book.year ? { 'datePublished': book.year } : {}),
    'bookFormat': 'https://schema.org/EBook',
    ...(publisherName
      ? {
          'publisher': {
            '@type': 'Organization',
            'name': publisherName,
          },
        }
      : {}),
    'description': book.description.en,
    'image': book.coverImage
      ? `https://islahulmuslimeen.org${book.coverImage}`
      : 'https://islahulmuslimeen.org/assets/cover.png',
    'url': `https://islahulmuslimeen.org/library/books/${book.slug || book.id}`,
  };

  return (
    <div className="pb-24 pt-6 sm:pt-8 bg-[#F8FAFC]/50">
      <SEO
        title={`${bookTitle} | ${bookAuthor} | Maktaba Tahiriya`}
        description={bookDescription}
        canonicalPath={`/library/books/${book.slug || book.id}`}
        ogType="book"
        ogImage={book.coverImage || '/assets/cover.png'}
        keywords={[
          bookTitle,
          book.title.en,
          book.title.ur,
          bookAuthor,
          'Islamic Books',
          'Maktaba Tahiriya',
          'Islah-ul-Muslimeen',
          'Naqshbandi Books',
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'Books', item: '/library/books' },
          { name: bookTitle, item: `/library/books/${book.slug || book.id}` },
        ]}
        structuredData={bookSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb Navigation */}
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
                to="/library/books"
                className="hover:text-[#002FA7] transition-colors focus:outline-none"
              >
                {language === 'ur' ? 'کتب' : language === 'ar' ? 'الكتب' : 'Books'}
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
            <li className="font-semibold text-[#12247A]" aria-current="page">
              {bookTitle}
            </li>
          </ol>
        </nav>

        {/* Back to Library Navigation */}
        <div>
          <Link
            to="/library/books"
            aria-label="Back to Library Books"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#002FA7] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] rounded-lg px-2 py-1 bg-white border border-[#E2E8F0] shadow-2xs"
          >
            <ArrowLeft
              className={`w-3.5 h-3.5 transition-transform ${
                isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'
              }`}
            />
            <span>
              {language === 'ur'
                ? '← تمام کتب پر واپس جائیں'
                : language === 'ar'
                ? '← العودة إلى قائمة الكتب'
                : '← Back to Library'}
            </span>
          </Link>
        </div>

        {/* Book Overview Card */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* 1. Original PDF Cover (5 Columns) */}
            <div className="md:col-span-5 max-w-[340px] mx-auto w-full">
              <div className="relative group rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-[#F8FAFC]">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={`${bookTitle} - Original Book Cover`}
                    className="w-full h-auto object-cover block select-none"
                    loading="eager"
                  />
                ) : (
                  <div className="aspect-3/4 flex flex-col items-center justify-center p-8 text-center text-[#64748B]">
                    <FileText className="w-16 h-16 text-[#CBD5E1] mx-auto mb-2" />
                    <span className="text-sm font-semibold">{bookTitle}</span>
                  </div>
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
              </div>
            </div>

            {/* 2-6. Book Details & Actions (7 Columns) */}
            <div className="md:col-span-7 space-y-6 text-start">
              {/* Category Badge & Verification */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#F4F7FF] text-[#002FA7] text-xs font-bold border border-[#E2E8F0]">
                    {t(book.category)}
                  </span>
                  {book.hasPdf && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Original PDF</span>
                    </span>
                  )}
                </div>

                {/* Book Title */}
                <div>
                  <h1
                    className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12247A] tracking-tight ${
                      language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {bookTitle}
                  </h1>
                  {language !== 'ur' && book.title.ur && (
                    <p className="text-lg font-urdu text-[#002FA7] mt-1">{book.title.ur}</p>
                  )}
                </div>

                {/* Author & Translator Information */}
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-semibold text-[#475569]">
                    <span className="text-[#64748B] font-normal">{language === 'ur' ? 'مؤلف:' : 'Author:'} </span>
                    <span className="text-[#002FA7] font-bold">{bookAuthor}</span>
                  </p>
                  {bookTranslator && (
                    <p className="text-xs sm:text-sm font-semibold text-[#475569] flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#002FA7]" />
                      <span className="text-[#64748B] font-normal">{language === 'ur' ? 'مترجم:' : 'Translator:'} </span>
                      <span className="text-[#12247A] font-semibold">{bookTranslator}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Verified Book Information Metadata Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {book.language && (
                  <div className="p-3.5 rounded-xl border border-[#EEF2F7] bg-[#F8FAFC] space-y-1">
                    <div className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
                      <span>{language === 'ur' ? 'زبان' : 'Language'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#12247A]">
                      {book.language}
                    </div>
                  </div>
                )}

                {book.pages && (
                  <div className="p-3.5 rounded-xl border border-[#EEF2F7] bg-[#F8FAFC] space-y-1">
                    <div className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
                      <span>{language === 'ur' ? 'صفحات' : 'Total Pages'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#12247A]">
                      {book.pages} {language === 'ur' ? 'صفحات' : 'Pages'}
                    </div>
                  </div>
                )}

                {book.year && (
                  <div className="p-3.5 rounded-xl border border-[#EEF2F7] bg-[#F8FAFC] space-y-1">
                    <div className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
                      <span>{language === 'ur' ? 'سالِ اشاعت' : 'Publication'}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#12247A]">
                      {book.year}
                    </div>
                  </div>
                )}
              </div>

              {/* Publisher Information if available */}
              {publisherName && (
                <div className="p-3.5 rounded-xl border border-[#EEF2F7] bg-white flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-[#002FA7] shrink-0" aria-hidden="true" />
                  <div className="text-xs text-[#475569]">
                    <span className="font-semibold text-[#64748B]">{language === 'ur' ? 'ناشر:' : 'Publisher:'} </span>
                    <span className="font-bold text-[#12247A]">{publisherName}</span>
                  </div>
                </div>
              )}

              {/* Authentic Description */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#EEF2F7] space-y-2">
                <h2 className="text-xs font-bold text-[#12247A] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#002FA7]" />
                  <span>{language === 'ur' ? 'کتاب کا تعارف' : 'About this Publication'}</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {bookDescription}
                </p>
              </div>

              {/* Excerpt Section */}
              {book.sampleChapterExcerpt && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/40 border border-amber-200/60 space-y-2">
                  <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    {language === 'ur' ? 'کتاب سے اقتباس' : 'Authentic Excerpt'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic">
                    "{t(book.sampleChapterExcerpt)}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ONE Active PDF Reader instance with Complete Working Controls & Reading Progress */}
        {book.pdfUrl && (
          <div id="reader" className="space-y-3 pt-2">
            {/* Visual Reading Progress Bar */}
            {isPdfLoaded && !isPdfError && (
              <div
                className="bg-white rounded-xl border border-[#EEF2F7] px-4 py-2.5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-opacity duration-300"
                role="region"
                aria-label="Book reading progress"
              >
                <div className="flex items-center flex-wrap gap-2 text-xs font-semibold text-[#12247A]">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      progressPercent === 100 ? 'bg-emerald-500' : 'bg-[#002FA7]'
                    }`}
                  />
                  <span>
                    {language === 'ur'
                      ? `مطالعہ کی پیشرفت: ${progressPercent}%`
                      : language === 'ar'
                      ? `نسبة القراءة: ${progressPercent}%`
                      : `Reading progress: ${progressPercent}%`}
                  </span>
                  {totalPages > 0 && (
                    <span className="text-[11px] text-[#64748B] font-mono font-normal">
                      ({language === 'ur' ? `صفحہ ${currentPage} از ${totalPages}` : `Page ${currentPage} of ${totalPages}`})
                    </span>
                  )}
                  {progressPercent === 100 && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{language === 'ur' ? 'مکمل' : language === 'ar' ? 'مكتمل' : 'Completed'}</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 sm:w-64">
                  <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden border border-[#E2E8F0]">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ease-out ${
                        progressPercent === 100 ? 'bg-emerald-600' : 'bg-[#002FA7]'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                      role="progressbar"
                      aria-valuenow={progressPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#12247A] min-w-[34px] text-end">
                    {progressPercent}%
                  </span>
                </div>
              </div>
            )}

            <Suspense
              fallback={
                <div className="w-full h-[600px] flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl gap-3 text-slate-500">
                  <Loader2 className="w-8 h-8 animate-spin text-[#002FA7]" />
                  <p className="text-sm font-medium">Loading book reader...</p>
                </div>
              }
            >
              <LazyPDFViewer
                pdfUrl={book.pdfUrl}
                title={bookTitle}
                fileName={book.pdfFileName || `${activeSlug}.pdf`}
                initialPage={initialPage}
                expectedPageCount={book.pages}
                height="800px"
                onClose={() => navigate('/library/books')}
                onLoadSuccess={handleLoadSuccess}
                onError={handlePdfError}
                onPageChange={handleProgressUpdate}
              />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};
