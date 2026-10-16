import React, { useState, useMemo } from 'react';
import {
  Quote,
  Search,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Share2,
  Copy,
  Check,
  Tag,
  Sparkles,
  BookOpen,
  Filter,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SHEIKH_OFFICIAL_SAYINGS, SheikhSaying } from '../../data/sheikhSayingsData';

const PRIMARY_TOPIC_FILTERS = [
  {
    tag: 'Tawbah & Forgiveness',
    label: {
      en: 'Tawbah & Forgiveness',
      ur: 'توبہ و استغفار',
      ar: 'التوبة والمغفرة',
    },
    relatedTags: ['Tawbah & Forgiveness', 'Daily Prayers', 'Human Nature'],
  },
  {
    tag: 'Zikr-e-Qalbi',
    label: {
      en: 'Zikr-e-Qalbi',
      ur: 'ذکرِ قلبی',
      ar: 'الذكر القلبي',
    },
    relatedTags: ['Inner Eyes', 'Zikr-e-Qalbi', 'Basirah', 'Spiritual Vision'],
  },
  {
    tag: 'Worldly Transience',
    label: {
      en: 'Worldly Transience',
      ur: 'بے ثباتیِ دنیا',
      ar: 'زوال الدنيا',
    },
    relatedTags: ['Worldly Transience', 'Tawakkul', 'Zuhd', 'Remembrance of Death'],
  },
  {
    tag: 'Selfless Service',
    label: {
      en: 'Selfless Service',
      ur: 'بے غرض خدمت',
      ar: 'الخدمة الخالصة',
    },
    relatedTags: ['Selfless Service', 'Admonition', 'Gratitude', 'Nature Contemplation'],
  },
  {
    tag: 'Purpose of Life',
    label: {
      en: 'Purpose of Life',
      ur: 'مقصدِ حیات',
      ar: 'مقصد الوجود',
    },
    relatedTags: ['Purpose of Life', 'Zikr of Allah', 'Divine Love', 'Spiritual Dignity'],
  },
];

export const SheikhSayingsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [expandedSayings, setExpandedSayings] = useState<Record<string, boolean>>({
    'saying-adam-story': true, // default first one expanded
    'saying-four-eyes': true,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered list
  const filteredSayings = useMemo(() => {
    const selectedFilterObj = PRIMARY_TOPIC_FILTERS.find((f) => f.tag === selectedTag);
    return SHEIKH_OFFICIAL_SAYINGS.filter((saying) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        (t(saying.title) || '').toLowerCase().includes(q) ||
        (t(saying.topic) || '').toLowerCase().includes(q) ||
        (t(saying.fullQuote) || '').toLowerCase().includes(q) ||
        (t(saying.sourceDate) || '').toLowerCase().includes(q) ||
        (t(saying.location) || '').toLowerCase().includes(q) ||
        saying.themeTags.some((tag) => tag && tag.toLowerCase().includes(q));

      const matchesTag =
        selectedTag === 'all' ||
        saying.themeTags.includes(selectedTag) ||
        Boolean(selectedFilterObj?.relatedTags?.some((rt) => saying.themeTags.includes(rt)));

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag, t]);

  const toggleExpand = (id: string) => {
    setExpandedSayings((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    SHEIKH_OFFICIAL_SAYINGS.forEach((s) => {
      allExpanded[s.id] = true;
    });
    setExpandedSayings(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSayings({});
  };

  const handleCopyQuote = (saying: SheikhSaying) => {
    const titleText = t(saying.title);
    const quoteText = t(saying.fullQuote);
    const sourceText = t(saying.sourceDate);
    const clip = `"${titleText}"\n\n${quoteText}\n\n— Hazrat Sajjan Saeen (${sourceText})\nOfficial Archive: Jamaat Islah-ul-Muslimeen (https://islahulmuslimeen.org)`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(clip);
      setCopiedId(saying.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="sheikh-sayings-section" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="bg-[#F8FAFC] border border-[#EEF2F7] py-8 px-4 sm:px-8 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#002FA7]">
            <Quote className="w-3.5 h-3.5" />
            <span>
              {language === 'ur'
                ? 'ارشادات و کلماتِ حکمت'
                : language === 'ar'
                ? 'درر الإرشاد والحكمة'
                : 'Spiritual Discourses & Sayings'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-4xl font-extrabold text-[#12247A] tracking-tight ${
              language === 'ur' ? 'font-urdu leading-relaxed' : language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {language === 'ur'
              ? 'ارشاداتِ عالیہ حضرت محبوب سجن سائیں'
              : language === 'ar'
              ? 'من توجيهات وأقوال شيخنا الجليل'
              : 'Our Sheikh — His Sayings'}
          </h2>

          <p
            className={`text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed ${
              language === 'ur' ? 'font-urdu text-base sm:text-lg' : ''
            }`}
          >
            {language === 'ur'
              ? 'مستند اور حکمت سے بھرپور پانچ ارشاداتِ عالیہ جو تزکیۂ نفس، بیداریِ قلب، دنیا کی بے ثباتی اور خدمتِ خلق کے لازوال اسباق سکھاتے ہیں۔'
              : language === 'ar'
              ? 'مختارات نورانية من مواعظ وإرشادات فضيلة الشيخ، تدعو إلى تزكية النفوس والاعتبار بعظائم الأمور.'
              : 'Authentic recorded discourses and timeless words of wisdom highlighting repentance, spiritual vision, worldly transience, and selfless devotion to humanity.'}
          </p>
        </div>
      </div>

      {/* Interactive Controls Bar: Search + Tag Filters + Toggle All */}
      <div className="bg-white rounded-2xl border border-[#EEF2F7] p-3.5 sm:p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" aria-hidden="true" />
            <input
              type="text"
              id="sayings-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ur'
                  ? 'ارشادات میں تلاش کریں (مثلاً: حضرت آدم، چار آنکھیں، ستون، درخت)...'
                  : language === 'ar'
                  ? 'ابحث في الأقوال والمواعظ...'
                  : 'Search sayings by keywords (e.g., Adam, Four Eyes, Pillar, Tree)...'
              }
              className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 text-xs rounded-xl border border-[#E2E8F0] focus:outline-hidden focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7] transition-all bg-[#F8FAFC] text-[#12247A] placeholder-[#94A3B8]"
            />
          </div>

          {/* Quick Expand/Collapse Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={expandAll}
              id="expand-all-sayings-btn"
              className="px-2.5 py-1.5 text-xs font-semibold text-[#002FA7] hover:bg-[#002FA7]/5 rounded-lg border border-[#002FA7]/20 transition-colors"
            >
              {language === 'ur' ? 'سب کھولیں' : 'Expand All'}
            </button>
            <button
              type="button"
              onClick={collapseAll}
              id="collapse-all-sayings-btn"
              className="px-2.5 py-1.5 text-xs font-semibold text-[#64748B] hover:bg-slate-100 rounded-lg border border-[#E2E8F0] transition-colors"
            >
              {language === 'ur' ? 'سب سمیٹیں' : 'Collapse All'}
            </button>
          </div>
        </div>

        {/* Clean Topic Filter Row (Guaranteed no horizontal overflow, compact and premium) */}
        <div className="pt-2 border-t border-[#EEF2F7] flex flex-wrap items-center gap-1.5 sm:gap-2 overflow-x-hidden w-full">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] mr-1 rtl:mr-0 rtl:ml-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
            <span>{language === 'ur' ? 'موضوع:' : language === 'ar' ? 'الموضوع:' : 'Topic:'}</span>
          </div>

          <button
            type="button"
            onClick={() => setSelectedTag('all')}
            title={language === 'ur' ? 'تمام ۵ ارشادات دکھائیں' : 'Showing all 5 recorded sayings'}
            aria-label="Filter: All 5 Sayings"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
              selectedTag === 'all'
                ? 'bg-[#002FA7] text-white shadow-xs'
                : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#EEF2F7] border border-[#E2E8F0]'
            }`}
          >
            {language === 'ur' ? 'تمام ارشادات (۵)' : language === 'ar' ? 'جميع الأقوال (٥)' : 'All Sayings (5)'}
          </button>

          {PRIMARY_TOPIC_FILTERS.map((item) => {
            const isSelected = selectedTag === item.tag;
            const label = language === 'ur' ? item.label.ur : language === 'ar' ? item.label.ar : item.label.en;
            return (
              <button
                key={item.tag}
                type="button"
                onClick={() => setSelectedTag(item.tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                  isSelected
                    ? 'bg-[#002FA7] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#EEF2F7] border border-[#E2E8F0]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter / Search Results Counter */}
      {(searchQuery || selectedTag !== 'all') && (
        <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
          <span>
            {language === 'ur'
              ? `${filteredSayings.length} از ۵ ارشادات دکھائے جا رہے ہیں`
              : `Showing ${filteredSayings.length} of ${SHEIKH_OFFICIAL_SAYINGS.length} sayings`}
          </span>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('all');
            }}
            className="text-[#002FA7] font-semibold hover:underline"
          >
            {language === 'ur' ? 'تمام ارشادات دکھائیں' : 'Show All Sayings'}
          </button>
        </div>
      )}

      {/* Sayings Editorial Cards Grid / Stack */}
      {filteredSayings.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-[#E2E8F0] p-6 space-y-3">
          <Quote className="w-10 h-10 text-[#94A3B8] mx-auto opacity-40" />
          <h3 className="text-base font-bold text-[#12247A]">
            {language === 'ur' ? 'کوئی ارشاد نہیں ملا' : 'No sayings matched your search'}
          </h3>
          <p className="text-xs text-[#64748B]">
            {language === 'ur'
              ? 'برائے مہربانی تلاش کا لفظ بدل کر کوشش کریں۔'
              : 'Try clearing the search bar or selecting another topic filter.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('all');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#002FA7] rounded-xl hover:bg-[#12247A] transition-colors"
          >
            {language === 'ur' ? 'تمام ارشادات دکھائیں' : 'Show All Sayings'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredSayings.map((saying, index) => {
            const isExpanded = !!expandedSayings[saying.id];
            const isCopied = copiedId === saying.id;

            return (
              <article
                key={saying.id}
                id={saying.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#002FA7]/30 transition-all duration-300 shadow-xs hover:shadow-md overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div className="h-1 bg-[#002FA7]" />

                <div className="p-6 sm:p-8 space-y-5">
                  {/* Card Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B]">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#002FA7]/10 text-[#002FA7] font-bold text-[11px]">
                        <span>{language === 'ur' ? `ارشاد مبارک ۰${index + 1}` : `Saying 0${index + 1}`}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-[11px] text-[#475569]">
                        <Calendar className="w-3.5 h-3.5 text-[#002FA7]" />
                        <span>{t(saying.sourceDate)}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyQuote(saying)}
                        title="Copy full text"
                        aria-label="Copy quote text"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#475569] hover:text-[#002FA7] bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] transition-colors"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">{language === 'ur' ? 'کاپی ہوگیا' : 'Copied'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{language === 'ur' ? 'کاپی کریں' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title & Topic */}
                  <div className="space-y-1.5">
                    <h3
                      className={`text-xl sm:text-2xl font-black text-[#12247A] tracking-tight ${
                        language === 'ur' ? 'font-urdu leading-relaxed' : language === 'ar' ? 'font-arabic' : ''
                      }`}
                    >
                      {t(saying.title)}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {/* Main Category / Topic */}
                      <span className="text-xs font-semibold text-[#002FA7] bg-[#002FA7]/8 px-2.5 py-1 rounded-md border border-[#002FA7]/15">
                        {t(saying.topic)}
                      </span>
                      {/* At most 1-2 secondary tags with clean labels (NO # hashtag) */}
                      {saying.themeTags
                        .filter((tag) => tag.replace(/^#/, '').trim() !== t(saying.topic).trim())
                        .slice(0, 2)
                        .map((tag) => {
                          const cleanTag = tag.replace(/^#/, '').trim();
                          return (
                            <span
                              key={cleanTag}
                              className="text-[11px] font-medium text-[#475569] bg-[#F8FAFC] px-2.5 py-0.5 rounded-md border border-[#EEF2F7]"
                            >
                              {cleanTag}
                            </span>
                          );
                        })}
                    </div>
                  </div>

                  {/* Editorial Summary Box */}
                  <div className="bg-[#F8FAFC] border-l-4 border-[#002FA7] p-4 rounded-r-2xl rtl:border-l-0 rtl:border-r-4 rtl:rounded-r-none rtl:rounded-l-2xl">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider mb-1">
                          {language === 'ur' ? 'خلاصۂ کلام و بصیرت' : 'Core Wisdom & Summary'}
                        </div>
                        <p
                          className={`text-xs sm:text-sm text-[#334155] leading-relaxed ${
                            language === 'ur' ? 'font-urdu text-sm sm:text-base leading-relaxed' : ''
                          }`}
                        >
                          {t(saying.summary)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Full Transcript */}
                  <div className="pt-2">
                    {isExpanded ? (
                      <div className="space-y-4">
                        <div className="relative bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-7 shadow-xs">
                          {/* Large subtle quote watermark */}
                          <Quote className="w-16 h-16 text-[#002FA7]/5 absolute top-3 right-4 rtl:right-auto rtl:left-4 pointer-events-none" />

                          <div className="relative z-10 space-y-4">
                            <div className="text-xs font-bold text-[#002FA7] flex items-center gap-1.5 pb-2 border-b border-[#F1F5F9]">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>
                                {language === 'ur'
                                  ? 'مکمل ارشادِ گرامی (تحریری متن)'
                                  : 'Full Authentic Transcript'}
                              </span>
                            </div>

                            <div
                              className={`text-sm sm:text-base text-[#1E293B] leading-relaxed whitespace-pre-line ${
                                language === 'ur'
                                  ? 'font-urdu text-base sm:text-xl leading-loose text-justify'
                                  : language === 'ar'
                                  ? 'font-arabic text-base sm:text-lg leading-loose'
                                  : 'font-serif text-[15px] sm:text-[17px] leading-relaxed'
                              }`}
                            >
                              {t(saying.fullQuote)}
                            </div>
                          </div>
                        </div>

                        {/* Practical Key Takeaway */}
                        <div className="bg-[#002FA7]/5 border border-[#002FA7]/20 rounded-xl p-3.5 sm:p-4 flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#002FA7] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            ★
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-0.5">
                              {language === 'ur' ? 'عملی رہنمائی و نصیحت' : 'Key Spiritual Takeaway'}
                            </div>
                            <p
                              className={`text-xs sm:text-sm text-[#1E293B] leading-relaxed ${
                                language === 'ur' ? 'font-urdu text-sm sm:text-base' : ''
                              }`}
                            >
                              {t(saying.keyTakeaway)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Expand/Collapse Toggle Button */}
                    <div className="pt-3 flex justify-between items-center border-t border-[#F1F5F9] mt-3">
                      <button
                        onClick={() => toggleExpand(saying.id)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002FA7] hover:text-[#12247A] py-1.5 transition-colors group"
                      >
                        <span>
                          {isExpanded
                            ? language === 'ur'
                              ? 'متن سمیٹیں'
                              : 'Show Less'
                            : language === 'ur'
                            ? 'مکمل ارشاد پڑھیں'
                            : 'Read Complete Discourse'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                        )}
                      </button>

                      <span className="text-[11px] text-[#94A3B8]">
                        {isExpanded
                          ? language === 'ur'
                            ? 'مکمل متن کھلا ہے'
                            : 'Full transcript visible'
                          : language === 'ur'
                          ? 'کلک کر کے تفصیلی متن پڑھیں'
                          : 'Click to expand'}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
