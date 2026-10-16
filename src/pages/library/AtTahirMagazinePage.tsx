import React, { useState, useMemo, useEffect } from 'react';
import { Search, BookOpen, Clock, ShieldCheck, FileText, ArrowUpDown, Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { AT_TAHIR_PUBLICATIONS, AtTahirIssue, fetchDynamicAtTahirPublications } from '../../data/atTahirData';
import { AtTahirIssueCard } from '../../components/library/AtTahirIssueCard';
import { AtTahirCoverPlaceholder } from '../../components/library/AtTahirCoverPlaceholder';
import { SEO } from '../../components/common/SEO';

export const AtTahirMagazinePage: React.FC = () => {
  const { t, language } = useLanguage();
  const [publications, setPublications] = useState<AtTahirIssue[]>(AT_TAHIR_PUBLICATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'available' | 'coming-soon' | 'unavailable'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // chronological default (Series 1 -> Series 16)

  // Initialize publications from local static archive
  useEffect(() => {
    let isMounted = true;
    fetchDynamicAtTahirPublications().then((dynamicPubs) => {
      if (isMounted && dynamicPubs && dynamicPubs.length > 0) {
        setPublications(dynamicPubs);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Available unique years
  const availableYears = useMemo(() => {
    const years = new Set<number>();
    publications.forEach((p) => {
      if (p.year) years.add(p.year);
    });
    return Array.from(years).sort((a, b) => a - b);
  }, [publications]);

  const periodicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'Periodical',
    'name': 'At-Tahir Magazine',
    'alternateName': ['Altahir', 'Attahir', 'ماہنامہ الطاہر', 'سلسلہ الطاہر'],
    'description':
      'Official verified publication archive of Jamaat Islah-ul-Muslimeen and Rohani Tulba Jamaat Pakistan, featuring spiritual essays, reformative guidance, and historical discourses.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Rohani Tulba Jamaat Pakistan / Jamaat Islah-ul-Muslimeen',
      'url': 'https://islahulmuslimeen.org/',
    },
    'hasPart': publications.map((pub) => ({
      '@type': 'PublicationIssue',
      'name': pub.title,
      'issueNumber': pub.issueNumber || pub.seriesOrIssueNumber,
      'datePublished': pub.date,
      'url': `https://islahulmuslimeen.org/library/at-tahir/${pub.slug}`,
    })),
  };

  // Filter & sort issues
  const filteredIssues = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list = publications.filter((issue) => {
      // Status filter
      if (selectedStatus !== 'all' && issue.status !== selectedStatus) {
        return false;
      }

      // Year filter
      if (selectedYear !== 'all') {
        if (!issue.year || String(issue.year) !== selectedYear) {
          return false;
        }
      }

      // Search query filter
      if (q) {
        const matchTitle = (issue.title || '').toLowerCase().includes(q);
        const matchSeries = (issue.seriesOrIssueNumber || issue.issue || '').toLowerCase().includes(q);
        const matchDate = issue.date ? issue.date.toLowerCase().includes(q) : false;
        const matchUrdu = issue.titleUrdu ? issue.titleUrdu.includes(q) : false;
        const matchArabic = issue.titleArabic ? issue.titleArabic.includes(q) : false;
        const matchTopics = issue.topics ? issue.topics.some((t) => t && t.toLowerCase().includes(q)) : false;

        return matchTitle || matchSeries || matchDate || matchUrdu || matchArabic || matchTopics;
      }

      return true;
    });

    // Sort order (chronological by issueNumber or id)
    return list.sort((a, b) => {
      const numA = a.issueNumber ?? 0;
      const numB = b.issueNumber ?? 0;
      return sortOrder === 'asc' ? numA - numB : numB - numA;
    });
  }, [publications, searchQuery, selectedYear, selectedStatus, sortOrder]);

  const availableCount = useMemo(
    () => publications.filter((p) => p.status === 'available').length,
    [publications]
  );

  return (
    <div className="pb-16 space-y-6 sm:space-y-8">
      <SEO
        title="At-Tahir Magazine Archive | Islah-ul-Muslimeen"
        description="Explore the official verified At-Tahir magazine publications and digital archive from Rohani Tulba Jamaat Pakistan, Jamaat Islah-ul-Muslimeen. Read and download authentic historical issues."
        canonicalPath="/library/at-tahir"
        keywords={[
          'At-Tahir',
          'Al-Tahir',
          'Attahir',
          'At Tahir magazine',
          'At Tahir publications',
          'Attahir magazine',
          'Rohani Tulba Jamaat',
          'Islah-ul-Muslimeen',
          'Islamic archive',
          'Sajjan Sain',
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'At-Tahir Magazine', item: '/library/at-tahir' },
        ]}
        structuredData={periodicalSchema}
      />

      {/* Editorial Compact Hero Section */}
      <section
        className="relative bg-gradient-to-b from-[#F4F7FF] via-[#FFFFFF] to-[#FFFFFF] border-b border-[#EEF2F7] pt-5 pb-6 sm:pt-7 sm:pb-8"
        aria-labelledby="at-tahir-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Side: Editorial Typography & Verified Description */}
            <div className="lg:col-span-8 space-y-3 text-start">
              {/* Category / Sub-badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002FA7]/8 text-[#002FA7] text-xs font-bold tracking-wide uppercase">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {language === 'ur' ? 'تاریخی سلسلہ اشاعت' : language === 'ar' ? 'السلسلة التاريخية' : 'Historical Publication Series'}
                </span>
              </div>

              {/* Hero Heading */}
              <h1
                id="at-tahir-hero-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12247A] tracking-tight"
              >
                At-Tahir
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-semibold text-[#002FA7] leading-relaxed">
                {language === 'ur'
                  ? 'سلسلہ الطاہر کا مستند تاریخی ڈیجیٹل کتب خانہ — اصل اور تصدیق شدہ شمارہ جات'
                  : language === 'ar'
                  ? 'الأرشيف الرقمي المعتمد لسلسلة مجلة الطاهر — أعداد موثقة من المصادر الأصلية'
                  : 'Verified Historical Digital Archive — Authentic original scanned editions'}
              </p>

              {/* Short Verified Description */}
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl">
                {language === 'ur'
                  ? 'روحانی طلبہ جماعت پاکستان (لطیف آباد، نواب شاہ) کے زیرِ اہتمام شائع ہونے والے تاریخی سلسلہ الطاہر کے اصل مسودات۔ تزکیۂ نفس، اتباعِ سنت، سیرتِ طیبہ اور سلسلہ عالیہ نقشبندیہ کی روحانی تعلیمات پر مشتمل گراں قدر ذخیرہ۔'
                  : language === 'ar'
                  ? 'الأعداد الأصلية من سلسلة الطاهر الصادرة عن جمعية الطلاب الروحانيين في باكستان برعاية مشايخ الطريقة النقشبندية، وتشتمل على مقالات في التزكية والسنة النبوية والتصوف الإسلامي.'
                  : 'Published under the patronage of Hazrat Khwaja Muhammad Tahir (Sajjan Saeen) by Rohani Tulba Jamaat Pakistan. A spiritual and educational archive containing discourses on Islamic purification, Sunnah, character building, and the Naqshbandi spiritual tradition.'}
              </p>

              {/* Quick Institutional Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#002FA7]" aria-hidden="true" />
                  <span>Rohani Tulba Jamaat Pakistan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#002FA7]" aria-hidden="true" />
                  <span>{publications.length} Cataloged Publications • {availableCount} Verified PDFs</span>
                </div>
              </div>
            </div>

            {/* Right Side: Real First Cover Visual */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-[150px] sm:max-w-[175px]">
                <AtTahirCoverPlaceholder
                  issue="Altahir Series 1"
                  date="October 1985"
                  coverImage="/assets/at-tahir/covers/attahir-s1-cover.jpg"
                  variant="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Archive Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-start"
        aria-labelledby="archive-heading"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EEF2F7]">
          <div>
            <h2 id="archive-heading" className="text-xl sm:text-2xl font-bold text-[#12247A]">
              {language === 'ur' ? 'سلسلہ الطاہر کتب خانہ' : language === 'ar' ? 'أرشيف سلسلة الطاهر' : 'At-Tahir Publication Archive'}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              {language === 'ur'
                ? `سلسلہ الطاہر کے مستند شمارہ جات کی مکمل فہرست (${publications.length} شمارے)`
                : `Catalog of verified historical publications (${publications.length} issues)`}
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full sm:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ur'
                    ? 'شمارہ، عنوان یا موضوع تلاش کریں...'
                    : language === 'ar'
                    ? 'ابحث بالعدد أو الموضوع...'
                    : 'Search by title, series, topic...'
                }
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-white border border-[#E2E8F0] text-[#12247A] placeholder-[#94A3B8] focus:outline-none focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7] shadow-xs"
                aria-label="Search At-Tahir publications"
              />
            </div>
          </div>
        </div>

        {/* Filter Controls: Year, Availability Status, and Chronological Sort */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 bg-[#F8FAFC] p-2.5 sm:p-3 rounded-xl border border-[#EEF2F7]">
          {/* Left filters: Status & Year */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] mr-1">
              <Filter className="w-3.5 h-3.5 text-[#002FA7]" />
              <span className="hidden sm:inline">Filter:</span>
            </div>

            {/* Status pills */}
            <button
              type="button"
              onClick={() => setSelectedStatus('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedStatus === 'all'
                  ? 'bg-[#002FA7] text-white shadow-xs'
                  : 'bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#12247A]'
              }`}
            >
              All ({publications.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus('available')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedStatus === 'available'
                  ? 'bg-[#002FA7] text-white shadow-xs'
                  : 'bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#12247A]'
              }`}
            >
              Available PDFs ({availableCount})
            </button>
            {/* Year Selector */}
            <div className="flex items-center gap-1 ml-1 sm:ml-2">
              <label htmlFor="year-select" className="text-xs text-[#64748B] font-medium hidden md:inline">
                Year:
              </label>
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white border border-[#E2E8F0] rounded-lg px-2.5 py-1.5 text-xs text-[#12247A] font-medium focus:outline-none focus:border-[#002FA7]"
              >
                <option value="all">All Years</option>
                {availableYears.map((yr) => (
                  <option key={yr} value={String(yr)}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right: Chronological Sort Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#12247A] hover:border-[#002FA7] transition-colors"
              title="Toggle sort direction"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#002FA7]" />
              <span>
                {sortOrder === 'asc' ? 'Chronological (Series 1 → 16)' : 'Reverse (Series 16 → 1)'}
              </span>
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#64748B] px-0.5">
          <span>
            Showing {filteredIssues.length} of {publications.length} publications
          </span>
          {(searchQuery || selectedYear !== 'all' || selectedStatus !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
                setSelectedStatus('all');
              }}
              className="text-[#002FA7] font-semibold hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Responsive Issues Grid: 4 cols on desktop, 3 on tablet, 2 on mobile, 1 on small mobile */}
        {filteredIssues.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4">
            {filteredIssues.map((issue) => (
              <AtTahirIssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-[#F8FAFC] rounded-2xl border border-[#EEF2F7] space-y-2">
            <p className="text-sm font-semibold text-[#12247A]">No publications matched your search.</p>
            <p className="text-xs text-[#64748B]">Try searching for &quot;Series 1&quot;, &quot;1985&quot;, or &quot;Sajjan Saeen&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
                setSelectedStatus('all');
              }}
              className="mt-2 text-xs text-[#002FA7] font-bold hover:underline"
            >
              Reset search filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
