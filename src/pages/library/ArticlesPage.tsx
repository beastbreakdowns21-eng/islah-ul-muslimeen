import React, { useState, useMemo, useEffect } from 'react';
import {
  FileText,
  Search,
  BookOpen,
  Filter,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { OFFICIAL_ARTICLES, OfficialArticle } from '../../data/articlesData';
import { ArticleCard } from '../../components/articles/ArticleCard';
import { SEO } from '../../components/common/SEO';

export const ArticlesPage: React.FC = () => {
  const { language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Meaningful categories derived strictly from the actual PDFs
  const categories = useMemo(() => {
    const cats = Array.from(new Set(OFFICIAL_ARTICLES.map((a) => a.category)));
    return ['All', ...cats];
  }, []);

  const articlesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Islamic Articles & Scholarly Papers | Islah-ul-Muslimeen',
    'description':
      'Collection of official Islamic articles, scholarly papers, and reformative essays on Tasawwuf, Zikr-e-Qalbi, Shariah, and Sunnah by Jamaat Islah-ul-Muslimeen scholars.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': OFFICIAL_ARTICLES.map((art, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://islahulmuslimeen.org/articles/${art.slug}`,
        'name': art.title,
      })),
    },
  };

  // Filter and Search
  const filteredArticles = useMemo(() => {
    return OFFICIAL_ARTICLES.filter((article) => {
      // Category filter
      if (selectedCategory !== 'All' && article.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchTitle =
        (article.title || '').toLowerCase().includes(q) ||
        (article.titleUrdu || '').toLowerCase().includes(q) ||
        (article.titleArabic || '').toLowerCase().includes(q);
      const matchAuthor =
        (article.author || '').toLowerCase().includes(q) ||
        (article.authorUrdu ? article.authorUrdu.toLowerCase().includes(q) : false);
      const matchDesc =
        (article.description || '').toLowerCase().includes(q) ||
        (article.descriptionUrdu || '').toLowerCase().includes(q) ||
        (article.descriptionArabic || '').toLowerCase().includes(q);
      const matchCategory =
        (article.category || '').toLowerCase().includes(q) ||
        (article.categoryUrdu || '').toLowerCase().includes(q);
      const matchKeywords = Array.isArray(article.searchKeywords)
        ? article.searchKeywords.some((k) => k && k.toLowerCase().includes(q))
        : false;

      return matchTitle || matchAuthor || matchDesc || matchCategory || matchKeywords;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pb-20 space-y-10 text-start">
      <SEO
        title="Islamic Articles & Publications | Islah-ul-Muslimeen"
        description="Explore verified Islamic articles, translations, spiritual guidance, and educational writings on Tasawwuf, Zikr-e-Qalbi, and Sunnah from Jamaat Islah-ul-Muslimeen."
        canonicalPath="/articles"
        keywords={[
          'Islamic articles',
          'Islamic publications',
          'Islah-ul-Muslimeen',
          'Zikr-e-Qalbi',
          'Tasawwuf',
          'Sajjan Sain',
          'Islamic lectures',
          'مقالات إسلامية',
          'اسلامی مضامین',
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'Articles', item: '/articles' },
        ]}
        structuredData={articlesSchema}
      />
      {/* Page Header */}
      <PageHeader
        badge={
          language === 'ur'
            ? 'علمی مقالات و تحقیقی کتب'
            : language === 'ar'
            ? 'المكتبة الرقمية والمقالات'
            : 'Islamic Digital Library'
        }
        title={
          language === 'ur'
            ? 'مقالات'
            : language === 'ar'
            ? 'المقالات'
            : 'Articles'
        }
        subtitle={
          language === 'ur'
            ? 'اصلاح المسلمین کے مستند علمی مضامین، تراجم، روحانی رہنمائی اور تربیتی تحریروں کا باضابطہ مجموعہ۔'
            : language === 'ar'
            ? 'استكشف المقالات الإسلامية، والتراجم، والتوجيهات الروحية، والكتابات التربوية من جماعة إصلاح المسلمين.'
            : 'Explore Islamic articles, translations, spiritual guidance, and educational writings from Islah-ul-Muslimeen.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : language === 'ar' ? 'المكتبة' : 'Library',
            path: '/library',
          },
          {
            label: language === 'ur' ? 'مقالات' : language === 'ar' ? 'المقالات' : 'Articles',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search and Category Filter Toolbar */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input supporting English, Urdu, and Arabic */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ur'
                    ? 'عنوان، مصنف، موضوع (تصوف، ذکر، مراقبہ) تلاش کریں...'
                    : language === 'ar'
                    ? 'ابحث بالاسم، الموضوع، أو الكاتب (تصوف، ذكر، مراقبة)...'
                    : 'Search articles by title, author, or topic (Tasawwuf, Zikr, Muraqaba)...'
                }
                className="w-full pl-10 pr-10 rtl:pl-10 rtl:pr-10 py-2.5 rounded-xl border border-gray-200 focus:border-[#002FA7] focus:outline-none text-xs sm:text-sm transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rtl:right-auto rtl:left-3 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Document Count Badge */}
            <div className="flex items-center gap-2 shrink-0 text-xs font-semibold text-[#12247A] bg-blue-50/70 border border-blue-100 px-3.5 py-2.5 rounded-xl self-start md:self-center">
              <BookOpen className="w-4 h-4 text-[#002FA7]" />
              <span>
                {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'} Found
              </span>
            </div>
          </div>

          {/* Category Filter Pills (Derived exclusively from PDF data) */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#EEF2F7]">
            <span className="text-xs font-bold text-[#64748B] flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#002FA7]" />
              <span>Category:</span>
            </span>

            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#002FA7] text-white shadow-xs'
                      : 'bg-[#F8FAFC] text-[#475569] hover:bg-gray-100 border border-[#E2E8F0]'
                  }`}
                >
                  {cat === 'All' ? 'All Articles' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Desktop Grid for the 4 PDF Articles */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#EEF2F7] space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#12247A]">
              No articles match your search criteria
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Try searching with terms like "Tasawwuf", "Zikr", "Muraqaba", "Naqshbandia", or clear your filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#002FA7] text-white text-xs font-bold shadow-xs hover:bg-[#12247A] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
