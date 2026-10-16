import React, { useState, useMemo } from 'react';
import { Search, Mic, Music, Heart, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { NaatManqabatCard } from '../../components/media/NaatManqabatCard';
import { MediaModalPlayer } from '../../components/media/MediaModalPlayer';
import {
  NAAT_MANQABAT_ITEMS,
  NaatManqabatItem,
  MediaCategory,
  FAIZ_E_SAJJAN_SAIN_CHANNEL_URL,
  FAIZ_E_SAJJAN_SAIN_CHANNEL_NAME,
} from '../../data/naatManqabatData';

export const AudioPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MediaCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<NaatManqabatItem | null>(null);

  const categories: { id: MediaCategory; label: { en: string; ur: string; ar: string }; count: number }[] = [
    {
      id: 'all',
      label: { en: 'All Media', ur: 'تمام کلام', ar: 'الكل' },
      count: NAAT_MANQABAT_ITEMS.length,
    },
    {
      id: 'naat',
      label: { en: 'Naat Sharif', ur: 'نعت شریف', ar: 'مدائح نبوية' },
      count: NAAT_MANQABAT_ITEMS.filter((i) => i.category === 'naat').length,
    },
    {
      id: 'manqabat',
      label: { en: 'Manqabat', ur: 'منقبت', ar: 'مناقب مباركة' },
      count: NAAT_MANQABAT_ITEMS.filter((i) => i.category === 'manqabat').length,
    },
    {
      id: 'devotional',
      label: { en: 'Sajjan Sain Devotional', ur: 'سجن سائیں کلام', ar: 'أشعار صوفية' },
      count: NAAT_MANQABAT_ITEMS.filter((i) => i.category === 'devotional').length,
    },
  ];

  const filteredItems = useMemo(() => {
    return NAAT_MANQABAT_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reciter.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleTogglePlay = (id: string) => {
    setActivePlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pb-20 space-y-8 sm:space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'نعت و منقبت' : language === 'ar' ? 'المدائح والمناقب' : 'Naat & Manqabat'}
        title={
          language === 'ur'
            ? 'نعت و منقبت و کلامِ سجن سائیں'
            : language === 'ar'
            ? 'مكتبة المدائح النبوية والمناقب الشريفة'
            : 'Naat, Manqabat & Devotional Media'
        }
        subtitle={
          language === 'ur'
            ? 'فیضِ سجن سائیں آفیشل یوٹیوب چینل سے براہِ راست مستند نعتیں، مناقب اور صوفیانہ کلام۔'
            : language === 'ar'
            ? 'مجموعة مختارة من المدائح النبوية والمناقب المسجلة رسمياً من قناة فيض سجن سائیں.'
            : 'Authentic Naat Sharif, Manqabat, and Sufiana devotional poetry sourced directly from the official Faiz e Sajjan Sain channel.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'میڈیا' : 'Media',
            path: '/media',
          },
          {
            label: language === 'ur' ? 'نعت و منقبت' : 'Naat & Manqabat',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 text-start">
        {/* Source Channel Banner */}
        <div className="bg-gradient-to-r from-[#12247A] to-[#002FA7] rounded-2xl p-4 sm:p-6 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-200">
                Official YouTube Source
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold">
              {FAIZ_E_SAJJAN_SAIN_CHANNEL_NAME}
            </h2>
            <p className="text-xs text-slate-200 max-w-xl">
              {language === 'ur'
                ? 'تمام کلام تصدیق شدہ یوٹیوب ریکارڈنگز کے ذریعے یہاں اندرونی طور پر چلایا جا سکتا ہے اور آفیشل چینل پر بھی دیکھا جا سکتا ہے۔'
                : 'All devotional media is playable inside the website player or viewable on the official YouTube channel.'}
            </p>
          </div>

          <a
            href={FAIZ_E_SAJJAN_SAIN_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#12247A] font-bold text-xs transition-colors shadow-sm shrink-0"
          >
            <span>{language === 'ur' ? 'آفیشل یوٹیوب چینل وزٹ کریں' : 'Visit Official Channel'}</span>
            <ExternalLink className="w-4 h-4 text-red-600" />
          </a>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#002FA7] text-white shadow-xs'
                    : 'bg-white text-[#1A1F2B] border border-[#EEF2F7] hover:bg-[#F8FAFC]'
                }`}
              >
                <span>
                  {language === 'ur' ? cat.label.ur : language === 'ar' ? cat.label.ar : cat.label.en}
                </span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-semibold ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ur'
                  ? 'کلام یا نعت خواں تلاش کریں...'
                  : language === 'ar'
                  ? 'بحث في المدائح...'
                  : 'Search by title or reciter...'
              }
              className="w-full ps-10 pe-4 py-2 text-xs bg-white rounded-xl border border-[#EEF2F7] focus:outline-none focus:ring-2 focus:ring-[#002FA7]/30 text-[#12247A] placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Media Grid: 3 cards desktop, 2 tablet, 1 mobile */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <NaatManqabatCard
                key={item.id}
                item={item}
                isPlaying={activePlayingId === item.id}
                onTogglePlay={() => handleTogglePlay(item.id)}
                onOpenModal={(selected) => setModalItem(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#EEF2F7] space-y-3">
            <Search className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold text-[#12247A]">
              {language === 'ur' ? 'کوئی کلام نہیں ملا' : 'No items match your search'}
            </p>
            <p className="text-xs text-[#64748B]">
              {language === 'ur'
                ? 'براہ کرم دوسرا لفظ تلاش کریں یا فلٹر تبدیل کریں۔'
                : 'Try clearing your search query or selecting a different category.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#002FA7] text-white text-xs font-bold"
            >
              {language === 'ur' ? 'فلٹرز ری سیٹ کریں' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>

      {/* Theater Mode Modal Video Player */}
      <MediaModalPlayer item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  );
};

