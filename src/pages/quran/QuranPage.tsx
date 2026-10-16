import React, { useState } from 'react';
import { BookOpen, Copy, Check, Search, Filter, Volume2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { AudioPlayer } from '../../components/common/AudioPlayer';
import { QURAN_VERSES } from '../../data/quranData';
import { SEO } from '../../components/common/SEO';

export const QuranPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedSurah, setSelectedSurah] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const surahs = Array.from(new Set(QURAN_VERSES.map((v) => v.surahNameEnglish)));

  const filteredVerses = QURAN_VERSES.filter((verse) => {
    const matchesSurah = selectedSurah === 'all' || verse.surahNameEnglish === selectedSurah;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      verse.arabicText.includes(searchQuery) ||
      verse.urduTranslation.toLowerCase().includes(q) ||
      verse.englishTranslation.toLowerCase().includes(q) ||
      verse.surahNameEnglish.toLowerCase().includes(q);
    return matchesSurah && matchesSearch;
  });

  const handleCopy = (verse: (typeof QURAN_VERSES)[0]) => {
    const textToCopy = `${verse.arabicText}\n\nUrdu: ${verse.urduTranslation}\n\nEnglish: ${verse.englishTranslation}\n(Surah ${verse.surahNameEnglish} ${verse.surahNumber}:${verse.ayahNumber})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(verse.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pb-20 space-y-8">
      <SEO
        title="Holy Quran Verses on Zikr & Peace of Heart | Islah-ul-Muslimeen"
        description="Read Quranic verses on Zikr (remembrance of Allah), peace of heart, and spiritual purification with authentic Arabic text, diacritics, Urdu and English translations."
        canonicalPath="/quran"
        keywords={[
          'Quran',
          'Holy Quran',
          'Islamic Zikr',
          'Quranic verses on Zikr',
          'Peace of heart',
          'Tazkiyah',
          'Islah-ul-Muslimeen',
          'القرآن الكريم',
          'قرآن کریم',
        ]}
        breadcrumbs={[
          { name: 'Quran', item: '/quran' },
        ]}
      />
      <PageHeader
        badge={language === 'ur' ? 'کلامِ الٰہی' : language === 'ar' ? 'القرآن الكريم' : 'The Noble Quran'}
        title={
          language === 'ur'
            ? 'قرآنِ کریم: آیاتِ مبارکہ مع تراجم'
            : language === 'ar'
            ? 'القرآن الكريم: آيات بينات مع الترجمة'
            : 'The Holy Quran: Verses on Remembrance & Hearts'
        }
        subtitle={
          language === 'ur'
            ? 'مستند عربی متن مع اعراب، اردو ترجمہ اور انگریزی تفہیم۔'
            : 'Verified Arabic text with complete diacritics (Tashkeel), authentic Urdu and English translations.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'قرآنِ پاک' : language === 'ar' ? 'القرآن' : 'Quran',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Verified Audio Recitation Banner */}
        <div className="bg-gradient-to-r from-[#002FA7]/5 to-[#12247A]/5 border border-[#002FA7]/20 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Volume2 className="w-4 h-4 text-[#002FA7]" />
            <span className="text-xs font-bold text-[#002FA7] uppercase tracking-wider">
              {language === 'ur' ? 'تلاوتِ قرآنِ پاک (مستند آڈیو)' : 'Verified Quranic Recitation'}
            </span>
          </div>
          <AudioPlayer
            src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
            title="Surah Al-Fatiha (The Opening)"
            speaker="Qari Mishary Rashid Alafasy"
            isVerified={true}
          />
        </div>

        {/* Filters and Search Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-[#EEF2F7] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#64748B] absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ur' ? 'آیت یا ترجمہ میں تلاش کریں...' : 'Search verses or translations...'}
              className="w-full ps-9 pe-3 py-2 text-xs sm:text-sm rounded-xl border border-[#EEF2F7] focus:outline-none focus:border-[#002FA7] bg-[#F7F9FC]"
            />
          </div>

          {/* Surah Selector */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-semibold text-[#64748B] shrink-0">
              {language === 'ur' ? 'سورۃ:' : 'Surah:'}
            </span>
            <button
              type="button"
              onClick={() => setSelectedSurah('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                selectedSurah === 'all'
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F7F9FC] text-[#1A1F2B] hover:bg-[#EEF2F7]'
              }`}
            >
              {language === 'ur' ? 'تمام سورتیں' : 'All Surahs'}
            </button>
            {surahs.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSurah(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                  selectedSurah === s
                    ? 'bg-[#002FA7] text-white'
                    : 'bg-[#F7F9FC] text-[#1A1F2B] hover:bg-[#EEF2F7]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Verses List */}
        <div className="space-y-6">
          {filteredVerses.map((verse) => (
            <div
              key={verse.id}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs hover:border-[#002FA7]/30 transition-all text-start"
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#EEF2F7]">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#002FA7]/10 text-[#002FA7] text-xs font-bold flex items-center justify-center">
                    {verse.ayahNumber}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#12247A]">
                      Surah {verse.surahNameEnglish}
                    </h3>
                    <span className="text-xs text-[#64748B]">
                      {verse.surahNumber}:{verse.ayahNumber}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-arabic text-sm text-[#002FA7] font-bold">
                    سورة {verse.surahNameArabic}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(verse)}
                    title="Copy Verse & Translations"
                    className="p-2 rounded-lg text-[#64748B] hover:text-[#002FA7] hover:bg-[#F7F9FC] transition-colors"
                  >
                    {copiedId === verse.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Arabic Text with Tashkeel */}
              <div className="my-6 p-5 sm:p-6 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7]" dir="rtl">
                <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#12247A] leading-[2.2] sm:leading-[2.4] text-right font-medium">
                  {verse.arabicText}
                </p>
              </div>

              {/* Dual Translations */}
              <div className="space-y-3">
                {/* Urdu Translation */}
                <div className="p-4 rounded-xl bg-white border border-[#EEF2F7]" dir="rtl">
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-1 font-sans">
                    <span className="font-semibold text-[#002FA7]">اردو ترجمہ</span>
                  </div>
                  <p className="font-urdu text-base sm:text-lg text-[#1A1F2B] leading-relaxed text-right">
                    {verse.urduTranslation}
                  </p>
                </div>

                {/* English Translation */}
                <div className="p-4 rounded-xl bg-white border border-[#EEF2F7]" dir="ltr">
                  <div className="text-xs text-[#64748B] mb-1 font-semibold text-[#002FA7]">
                    English Translation (Sahih International)
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A1F2B] leading-relaxed">
                    {verse.englishTranslation}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {filteredVerses.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#EEF2F7] p-12 text-center">
              <BookOpen className="w-8 h-8 text-[#64748B] mx-auto mb-2" />
              <p className="text-sm font-bold text-[#12247A]">No Quranic verses found</p>
              <p className="text-xs text-[#64748B] mt-1">Try another search keyword or reset the filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
