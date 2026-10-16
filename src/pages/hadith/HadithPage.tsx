import React, { useState } from 'react';
import { Scroll, Copy, Check, Search, Filter, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { HADITH_ITEMS } from '../../data/hadithData';
import { SEO } from '../../components/common/SEO';

export const HadithPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = Array.from(
    new Map(HADITH_ITEMS.map((h) => [h.category.en, h.category])).values()
  );

  const filteredHadiths = HADITH_ITEMS.filter((hadith) => {
    const matchesCategory = selectedCategory === 'all' || hadith.category.en === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      hadith.arabicText.includes(searchQuery) ||
      hadith.urduTranslation.toLowerCase().includes(q) ||
      hadith.englishTranslation.toLowerCase().includes(q) ||
      hadith.narrator.en.toLowerCase().includes(q) ||
      hadith.narrator.ur.includes(q) ||
      hadith.collection.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (hadith: (typeof HADITH_ITEMS)[0]) => {
    const textToCopy = `${hadith.arabicText}\n\nNarrator: ${t(hadith.narrator)}\n\nUrdu: ${hadith.urduTranslation}\n\nEnglish: ${hadith.englishTranslation}\nReference: ${hadith.reference}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(hadith.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pb-20 space-y-8">
      <SEO
        title="Authentic Hadith on Heart Purification & Zikr | Islah-ul-Muslimeen"
        description="Authentic Prophetic traditions from Sahih al-Bukhari and Sahih Muslim on heart purification (Tazkiyah), remembrance of Allah, and inward sincerity."
        canonicalPath="/hadith"
        keywords={[
          'Hadith',
          'Authentic Hadith',
          'Sahih Bukhari',
          'Sahih Muslim',
          'Heart purification',
          'Islamic Zikr',
          'Tazkiyah',
          'Islah-ul-Muslimeen',
          'الحديث الشريف',
          'احادیث مبارکہ',
        ]}
        breadcrumbs={[
          { name: 'Hadith', item: '/hadith' },
        ]}
      />
      <PageHeader
        badge={language === 'ur' ? 'سنت و حدیث' : language === 'ar' ? 'الحديث الشريف' : 'Prophetic Traditions'}
        title={
          language === 'ur'
            ? 'احادیثِ مبارکہ: تزکیۂ قلب و آدابِ ذکر'
            : language === 'ar'
            ? 'الأحاديث النبوية الصحيحة في تزكية القلوب والذكر'
            : 'Authentic Hadith Collections on the Heart & Zikr'
        }
        subtitle={
          language === 'ur'
            ? 'صحیح بخاری، صحیح مسلم اور سنن کے مستند متون مع عربی متن، رواۃ، اور اردو و انگریزی تراجم۔'
            : 'Verified traditions from Sahih al-Bukhari, Sahih Muslim, and canonical compendiums with authentic Arabic texts, narrators, and translations.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'احادیثِ مبارکہ' : language === 'ar' ? 'الأحاديث' : 'Hadith',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filters and Search Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-[#EEF2F7] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#64748B] absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ur' ? 'حدیث یا موضوع تلاش کریں...' : 'Search Hadith text or narrator...'}
              className="w-full ps-9 pe-3 py-2 text-xs sm:text-sm rounded-xl border border-[#EEF2F7] focus:outline-none focus:border-[#002FA7] bg-[#F7F9FC]"
            />
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-semibold text-[#64748B] shrink-0">
              {language === 'ur' ? 'موضوع:' : 'Category:'}
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F7F9FC] text-[#1A1F2B] hover:bg-[#EEF2F7]'
              }`}
            >
              {language === 'ur' ? 'تمام موضوعات' : 'All Categories'}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.en}
                type="button"
                onClick={() => setSelectedCategory(cat.en)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                  selectedCategory === cat.en
                    ? 'bg-[#002FA7] text-white'
                    : 'bg-[#F7F9FC] text-[#1A1F2B] hover:bg-[#EEF2F7]'
                }`}
              >
                {t(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Hadith Cards */}
        <div className="space-y-6">
          {filteredHadiths.map((hadith) => (
            <div
              key={hadith.id}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs hover:border-[#002FA7]/30 transition-all text-start"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EEF2F7]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{hadith.collection} #{hadith.hadithNumber}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#64748B] bg-[#F7F9FC] px-2.5 py-1 rounded-md">
                    {hadith.reference}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#64748B]">
                    <strong>Narrator:</strong> {t(hadith.narrator)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(hadith)}
                    title="Copy Hadith & Translation"
                    className="p-2 rounded-lg text-[#64748B] hover:text-[#002FA7] hover:bg-[#F7F9FC] transition-colors"
                  >
                    {copiedId === hadith.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Arabic Matn */}
              <div className="my-6 p-5 sm:p-6 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]" dir="rtl">
                <p className="font-arabic text-xl sm:text-2xl text-[#12247A] leading-[2.2] sm:leading-[2.4] text-right font-medium">
                  {hadith.arabicText}
                </p>
              </div>

              {/* Dual Translations */}
              <div className="space-y-3">
                {/* Urdu Translation */}
                <div className="p-4 rounded-xl bg-white border border-[#EEF2F7]" dir="rtl">
                  <div className="text-xs text-[#002FA7] font-semibold mb-1 font-sans">
                    اردو ترجمہ و مفہوم
                  </div>
                  <p className="font-urdu text-base sm:text-lg text-[#1A1F2B] leading-relaxed text-right">
                    {hadith.urduTranslation}
                  </p>
                </div>

                {/* English Translation */}
                <div className="p-4 rounded-xl bg-white border border-[#EEF2F7]" dir="ltr">
                  <div className="text-xs text-[#002FA7] font-semibold mb-1">
                    English Translation
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A1F2B] leading-relaxed">
                    {hadith.englishTranslation}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {filteredHadiths.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-12 text-center">
              <Scroll className="w-8 h-8 text-[#64748B] mx-auto mb-2" />
              <p className="text-sm font-bold text-[#12247A]">No Hadith records found</p>
              <p className="text-xs text-[#64748B] mt-1">Try another search keyword or reset the category filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
