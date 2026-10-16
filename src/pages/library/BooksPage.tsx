import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Book,
  Search,
  BookOpen,
  Eye,
  X,
  Download,
  ExternalLink,
  Languages,
  FileText,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { ComingSoonBadge } from '../../components/common/ComingSoonBadge';
import { PDFReaderModal } from '../../components/common/PDFReaderModal';
import { BOOKS_DATA } from '../../data/libraryData';
import { BookItem } from '../../types';
import { SEO } from '../../components/common/SEO';

export const BooksPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBookForExcerpt, setSelectedBookForExcerpt] = useState<BookItem | null>(null);
  const [activePdfBook, setActivePdfBook] = useState<BookItem | null>(null);

  const booksSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Islamic Books & Publications - Maktaba Tahiriya',
    'description':
      'Catalog of classical and contemporary Islamic books published by Jamaat Islah-ul-Muslimeen, authored by Khwaja Sohna Saeen and Hazrat Sajjan Saeen.',
    'itemListElement': BOOKS_DATA.map((b, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Book',
        'name': b.title.en,
        'author': {
          '@type': 'Person',
          'name': b.author.en,
        },
        ...(b.pages ? { 'numberOfPages': b.pages } : {}),
        'inLanguage': b.language,
        'description': b.description.en,
        'publisher': {
          '@type': 'Organization',
          'name': 'Maktaba Tahiriya / Jamaat Islah-ul-Muslimeen',
        },
      },
    })),
  };

  const filteredBooks = BOOKS_DATA.filter((book) => {
    const q = searchQuery.toLowerCase();
    const matchesEnTitle = book.title.en.toLowerCase().includes(q);
    const matchesUrTitle = book.title.ur.includes(searchQuery);
    const matchesArTitle = book.title.ar ? book.title.ar.includes(searchQuery) : false;
    const matchesEnAuthor = book.author.en.toLowerCase().includes(q);
    const matchesUrAuthor = book.author.ur.includes(searchQuery);
    const matchesTranslator = book.translator
      ? book.translator.en.toLowerCase().includes(q) || book.translator.ur.includes(searchQuery)
      : false;

    return (
      !searchQuery ||
      matchesEnTitle ||
      matchesUrTitle ||
      matchesArTitle ||
      matchesEnAuthor ||
      matchesUrAuthor ||
      matchesTranslator
    );
  });

  return (
    <div className="pb-20 space-y-10">
      <SEO
        title="Islamic Books & Publications | Maktaba Tahiriya | Islah-ul-Muslimeen"
        description="Browse authentic Islamic books, Jalwah Gah e Dost (English Version), Malfuzat-e-Tahiriya, Khitabat-e-Sohna Saeen, and reformative literature from Maktaba Tahiriya."
        canonicalPath="/library/books"
        keywords={[
          'Islamic books',
          'Jalwah Gah e Dost',
          'Jalwah Gah e Dost English',
          'Malfuzat-e-Tahiriya',
          'Khitabat-e-Sohna Saeen',
          'Sajjan Saeen',
          'Khwaja Sohna Saeen',
          'Maktaba Tahiriya',
          'Islah-ul-Muslimeen',
          'كتب إسلامية',
          'اسلامی کتب',
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'Islamic Books', item: '/library/books' },
        ]}
        structuredData={booksSchema}
      />

      <PageHeader
        badge={language === 'ur' ? 'کتب و تصانیف' : language === 'ar' ? 'المكتبة الإسلامية' : 'Islamic Library'}
        title={
          language === 'ur'
            ? 'مستند کتب و روحانی ذخیرہ'
            : language === 'ar'
            ? 'مؤلفات وكتب الطريقة النقشبندية'
            : 'Authentic Islamic Books & Literature'
        }
        subtitle={
          language === 'ur'
            ? 'سید العارفین حضرت خواجہ سوہنا سائیں اور حضرت سجن سائیں کی معرکتہ الآراء تصانیف، تراجم و خطابات۔'
            : 'Verified treatises, authorized translations, and discourses of the noble masters of Silsila Naqshbandia Tahiriya.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : 'Library',
            path: '/library',
          },
          {
            label: language === 'ur' ? 'کتب' : 'Books',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-start">
        {/* Search Bar */}
        <div className="bg-white p-3.5 rounded-xl border border-[#EEF2F7] shadow-xs flex items-center gap-3">
          <Search className="w-4 h-4 text-[#64748B] shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'ur'
                ? 'کتاب کا نام، مصنف یا مترجم تلاش کریں...'
                : 'Search book title, author, or translator...'
            }
            className="w-full text-xs sm:text-sm text-[#1A1F2B] placeholder:text-[#64748B] focus:outline-none bg-transparent"
          />
        </div>

        {/* Books Grid - 4 per row on Desktop (At-Tahir compact archive-style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => {
            const hasCover = Boolean(book.coverImage);
            const isDedicatedPage = Boolean(book.slug);
            const bookTitle = t(book.title);
            const bookAuthor = t(book.author);
            const bookTranslator = book.translator ? t(book.translator) : null;
            const excerpt = book.sampleChapterExcerpt
              ? t(book.sampleChapterExcerpt).replace(/^Excerpt:\s*"?/, '').replace(/"?$/, '')
              : t(book.description);

            return (
              <div
                key={book.id}
                className="bg-white rounded-xl border border-[#EEF2F7] shadow-xs hover:shadow-md hover:border-[#002FA7]/30 transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5"
              >
                {/* 1. Compact Cover Area (Lazy image only, Zero PDF rendering during card load) */}
                <div className="p-2.5 pb-0 flex justify-center bg-gradient-to-b from-[#F8FAFC] to-white">
                  {isDedicatedPage ? (
                    <Link
                      to={`/library/books/${book.slug}`}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] rounded-lg overflow-hidden w-full max-w-[125px] sm:max-w-[135px]"
                      aria-label={`View ${bookTitle}`}
                    >
                      {hasCover ? (
                        <div className="aspect-[1/1.38] rounded-lg overflow-hidden border border-[#E2E8F0] shadow-xs bg-[#F8FAFC]">
                          <img
                            src={book.coverImage}
                            alt={`${bookTitle} Cover`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[1/1.38] rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] flex flex-col items-center justify-center p-3 text-center text-[#64748B] shadow-xs">
                          <Book className="w-8 h-8 text-[#002FA7]/40 mb-1" />
                          <span className="text-[10.5px] font-bold text-[#12247A] line-clamp-2">
                            {bookTitle}
                          </span>
                        </div>
                      )}
                    </Link>
                  ) : (
                    <div className="w-full max-w-[125px] sm:max-w-[135px]">
                      {hasCover ? (
                        <div className="aspect-[1/1.38] rounded-lg overflow-hidden border border-[#E2E8F0] shadow-xs bg-[#F8FAFC]">
                          <img
                            src={book.coverImage}
                            alt={`${bookTitle} Cover`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[1/1.38] rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] flex flex-col items-center justify-center p-3 text-center text-[#64748B] shadow-xs">
                          <Book className="w-8 h-8 text-[#002FA7]/40 mb-1" />
                          <span className="text-[10.5px] font-bold text-[#12247A] line-clamp-2">
                            {bookTitle}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 2-4. Content & Metadata Area */}
                <div className="p-3 pt-2 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    {/* Title */}
                    {isDedicatedPage ? (
                      <Link
                        to={`/library/books/${book.slug}`}
                        className="group-hover:text-[#002FA7] transition-colors focus:outline-none block"
                      >
                        <h3 className="text-xs sm:text-sm font-bold text-[#12247A] tracking-tight leading-snug line-clamp-2">
                          {bookTitle}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-xs sm:text-sm font-bold text-[#12247A] tracking-tight leading-snug line-clamp-2">
                        {bookTitle}
                      </h3>
                    )}

                    {/* Author */}
                    <p className="text-[11px] font-semibold text-[#002FA7] truncate">
                      {bookAuthor}
                    </p>

                    {/* Translator (where available) */}
                    {bookTranslator && (
                      <p className="text-[10.5px] text-[#64748B] truncate">
                        <span className="text-[#94A3B8]">{language === 'ur' ? 'مترجم: ' : 'Trans: '}</span>
                        {bookTranslator}
                      </p>
                    )}

                    {/* Format / Pages Spec */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#64748B] font-mono pt-0.5">
                      <span className="px-1.5 py-0.2 rounded bg-[#F4F7FF] text-[#002FA7] font-semibold border border-[#E2E8F0]">
                        {book.language}
                      </span>
                      {book.pages && (
                        <span>
                          {book.pages} {language === 'ur' ? 'صفحات' : 'pp'}
                        </span>
                      )}
                    </div>

                    {/* Authentic Excerpt */}
                    <p className="text-[11px] text-[#475569] line-clamp-2 leading-relaxed pt-1">
                      {excerpt}
                    </p>
                  </div>

                  {/* 5. Compact Action Row */}
                  <div className="pt-2 border-t border-[#EEF2F7]">
                    {book.hasPdf && book.pdfUrl ? (
                      <div className="flex items-center gap-1.5">
                        {/* Read Online button (navigates directly to dedicated reader page or opens viewer) */}
                        {isDedicatedPage ? (
                          <Link
                            to={`/library/books/${book.slug}`}
                            aria-label={`Read ${bookTitle} online`}
                            className="flex-1 min-h-[30px] px-2 py-1 rounded-md bg-[#002FA7] hover:bg-[#002277] text-white text-[11px] font-bold transition-colors shadow-xs flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
                          >
                            <BookOpen className="w-3 h-3 shrink-0" aria-hidden="true" />
                            <span className="truncate">
                              {language === 'ur' ? 'آن لائن مطالعہ' : language === 'ar' ? 'قراءة' : 'Read Online'}
                            </span>
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setActivePdfBook(book)}
                            aria-label={`Read ${bookTitle} online`}
                            className="flex-1 min-h-[30px] px-2 py-1 rounded-md bg-[#002FA7] hover:bg-[#002277] text-white text-[11px] font-bold transition-colors shadow-xs flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] cursor-pointer"
                          >
                            <BookOpen className="w-3 h-3 shrink-0" aria-hidden="true" />
                            <span className="truncate">
                              {language === 'ur' ? 'آن لائن مطالعہ' : language === 'ar' ? 'قراءة' : 'Read Online'}
                            </span>
                          </button>
                        )}

                        {/* Open in New Tab button */}
                        <button
                          type="button"
                          onClick={() => window.open(book.pdfUrl, '_blank', 'noopener,noreferrer')}
                          aria-label={`Open ${bookTitle} PDF in new tab`}
                          title={language === 'ur' ? 'نئے ٹیب میں پی ڈی ایف کھولیں' : 'Open in New Tab'}
                          className="w-[30px] h-[30px] rounded-md bg-[#F4F7FF] hover:bg-[#E2E8F0] border border-[#CBD5E1] text-[#12247A] transition-colors shadow-xs flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] cursor-pointer shrink-0"
                        >
                          <ExternalLink className="w-3 h-3 text-[#002FA7]" aria-hidden="true" />
                        </button>

                        {/* Download PDF button */}
                        <a
                          href={book.pdfUrl}
                          download={book.pdfFileName || true}
                          aria-label={`Download ${bookTitle} PDF`}
                          title={language === 'ur' ? 'ڈاؤنلوڈ پی ڈی ایف' : 'Download PDF'}
                          className="w-[30px] h-[30px] rounded-md bg-white border border-[#002FA7] text-[#002FA7] hover:bg-[#002FA7] hover:text-white transition-colors shadow-xs flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] shrink-0"
                        >
                          <Download className="w-3 h-3" aria-hidden="true" />
                        </a>
                      </div>
                    ) : book.sampleChapterExcerpt ? (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelectedBookForExcerpt(book)}
                          className="flex-1 min-h-[30px] px-2 py-1 rounded-md bg-[#F4F7FF] hover:bg-[#E2E8F0] text-[#002FA7] border border-[#CBD5E1] text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{language === 'ur' ? 'اقتباس پڑھیں' : 'Read Excerpt'}</span>
                        </button>
                        <ComingSoonBadge size="sm" />
                      </div>
                    ) : (
                      <div className="py-0.5 flex justify-center">
                        <ComingSoonBadge size="sm" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Excerpt Modal */}
        {selectedBookForExcerpt && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12247A]/40 backdrop-blur-xs animate-in fade-in"
            onClick={() => setSelectedBookForExcerpt(null)}
          >
            <div
              className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-[#EEF2F7] p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedBookForExcerpt(null)}
                aria-label="Close modal"
                className="absolute top-4 end-4 p-1.5 rounded-lg text-[#64748B] hover:text-[#1A1F2B] hover:bg-[#F7F9FC]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md uppercase">
                  {t(selectedBookForExcerpt.category)}
                </span>
                <span className="text-xs text-[#64748B]">{selectedBookForExcerpt.language}</span>
              </div>

              <h3 className="text-xl font-bold text-[#12247A] mb-1">
                {t(selectedBookForExcerpt.title)}
              </h3>
              <p className="text-xs text-[#002FA7] font-semibold mb-4">
                {t(selectedBookForExcerpt.author)}
              </p>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7] text-sm text-[#1A1F2B] leading-relaxed my-4 whitespace-pre-wrap">
                {selectedBookForExcerpt.sampleChapterExcerpt
                  ? t(selectedBookForExcerpt.sampleChapterExcerpt)
                  : 'Scholarly excerpt being cataloged.'}
              </div>

              <div className="pt-4 border-t border-[#EEF2F7] flex items-center justify-between text-xs text-[#64748B]">
                <span>Maktaba Tahiriya Official Record</span>
                <ComingSoonBadge size="sm" />
              </div>
            </div>
          </div>
        )}

        {/* Read Online PDF Modal (Lazily Loaded, 100% Zoom, Non-Blocking) */}
        {activePdfBook && activePdfBook.pdfUrl && (
          <PDFReaderModal
            isOpen={Boolean(activePdfBook)}
            onClose={() => setActivePdfBook(null)}
            pdfUrl={activePdfBook.pdfUrl}
            fileName={activePdfBook.pdfFileName || `${activePdfBook.slug || activePdfBook.id}.pdf`}
            title={t(activePdfBook.title)}
            expectedPageCount={activePdfBook.pages}
          />
        )}
      </div>
    </div>
  );
};
