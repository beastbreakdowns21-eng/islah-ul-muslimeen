import React, { useState, useMemo } from 'react';
import { Sparkles, MapPin, Search, Calendar, ShieldCheck, X, Compass, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { GOLDEN_CHAIN_MASTERS, GOLDEN_CHAIN_ERAS } from '../../data/spiritualityData';

export const GoldenChainPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Robust search and era filtering
  const filteredMasters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return GOLDEN_CHAIN_MASTERS.filter((master) => {
      const matchesEra = selectedEra === 'all' || master.eraId === selectedEra;
      if (!matchesEra) return false;
      if (!q) return true;

      const genStr = String(master.generation);
      const nameEn = master.name.en.toLowerCase();
      const nameUr = master.name.ur.toLowerCase();
      const nameAr = master.name.ar.toLowerCase();
      const placeEn = master.restingPlace.en.toLowerCase();
      const placeUr = master.restingPlace.ur.toLowerCase();
      const placeAr = master.restingPlace.ar.toLowerCase();
      const titleEn = master.title?.en ? master.title.en.toLowerCase() : '';
      const titleUr = master.title?.ur ? master.title.ur.toLowerCase() : '';

      return (
        genStr === q ||
        `station ${genStr}`.includes(q) ||
        `station #${genStr}`.includes(q) ||
        `#${genStr}`.includes(q) ||
        nameEn.includes(q) ||
        nameUr.includes(q) ||
        nameAr.includes(q) ||
        placeEn.includes(q) ||
        placeUr.includes(q) ||
        placeAr.includes(q) ||
        titleEn.includes(q) ||
        titleUr.includes(q)
      );
    });
  }, [selectedEra, searchQuery]);

  // Era counts
  const eraCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GOLDEN_CHAIN_MASTERS.length };
    GOLDEN_CHAIN_ERAS.forEach((era) => {
      counts[era.eraId] = era.masters.length;
    });
    return counts;
  }, []);

  return (
    <div className="pb-24 space-y-10">
      {/* Scholarly Page Header */}
      <PageHeader
        badge={
          language === 'ur'
            ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ'
            : language === 'ar'
            ? 'السلسلة الذهبية الصديقية النقشبندية'
            : 'Unbroken Spiritual Lineage (1–41)'
        }
        title={
          language === 'ur'
            ? 'شجرہ عالیہ مبارکہ'
            : language === 'ar'
            ? 'الشجرة الشريفة (السلسلة الذهبية)'
            : 'Shajra Shareef — The Golden Chain'
        }
        subtitle={
          language === 'ur'
            ? 'رسولِ اکرم ﷺ اور سیدنا ابوبکر صدیق ؓ سے لے کر درگاہ اللہ آباد شریف تک چودہ صدیوں پر محیط برگزیدہ اولیاء اللہ و مشائخِ کرام (۱ تا ۴۱) کی متصل و مستند روحانی لڑی۔'
            : language === 'ar'
            ? 'السند المتصل المتواتر لطريقة السادة النقشبندية المجددية الطاهرية من النبي المصطفى ﷺ والصديق ؓ إلى دركاه الله آباد شريف عبر ٤١ محطة ومقاماً روحياً.'
            : 'The authentic, unbroken historical lineage of the Naqshbandi Mujaddidi Tahiri Tariqah, connecting the Prophet Muhammad ﷺ and Sayyiduna Abu Bakr As-Siddiq (R.A) across 41 continuous spiritual stations to Hazrat Khwaja Muhammad Tahir Abbasi Bakhshi (Sajjan Saeen) at Dargah Allahabad Sharif.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'روحانیات' : language === 'ar' ? 'الروحانيات' : 'Spirituality',
            path: '/spirituality',
          },
          {
            label: language === 'ur' ? 'شجرہ شریف' : language === 'ar' ? 'الشجرة الشريفة' : 'Shajra Shareef',
          },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Heritage Authentication & Scope Ribbon */}
        <div className="bg-gradient-to-r from-[#0A194E] via-[#12247A] to-[#0A194E] text-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#B48C36]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-start">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#B48C36]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <span>
                  {language === 'ur'
                    ? 'مستند و متصل شجرۂ طریقت'
                    : language === 'ar'
                    ? 'السند المتصل المعتمد'
                    : 'Authentic Continuous Silsila (Stations #1 – #41)'}
                </span>
                <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#B48C36]/30 text-[#FAF8F2] border border-[#B48C36]/40">
                  {language === 'ur' ? '۴۱ روحانی مقامات' : '41 Stations'}
                </span>
              </h2>
              <p className="text-xs text-white/80 mt-0.5 leading-normal">
                {language === 'ur'
                  ? 'سید الانبیاء ﷺ سے حضرت محبوب سجن سائیں مدظلہ العالی تک قلب بہ قلب باطنی فیضان'
                  : language === 'ar'
                  ? 'من النبي المصطفى ﷺ إلى حضرة الشيخ محمد طاهر (سجن سائیں) بفيض باطني متصل'
                  : 'Direct heart-to-heart transmission from the Holy Prophet ﷺ to present spiritual head Hazrat Sajjan Saeen.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs text-white/90">
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 text-center">
              <span className="block text-xs font-bold text-[#C5A059]">41</span>
              <span className="text-[10px] text-white/70">{language === 'ur' ? 'مشائخ' : 'Masters'}</span>
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 text-center">
              <span className="block text-xs font-bold text-[#C5A059]">1400+</span>
              <span className="text-[10px] text-white/70">{language === 'ur' ? 'سال' : 'Years'}</span>
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 text-center">
              <span className="block text-xs font-bold text-[#C5A059]">100%</span>
              <span className="text-[10px] text-white/70">{language === 'ur' ? 'متصل' : 'Unbroken'}</span>
            </div>
          </div>
        </div>

        {/* Search & Historical Era Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#64748B] absolute start-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="shajra-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ur'
                    ? 'نام، مقام نمبر یا مزار شریف سے تلاش کریں...'
                    : language === 'ar'
                    ? 'ابحث بالاسم أو المحطة أو الضريح...'
                    : 'Search master, station #, or location...'
                }
                className="w-full ps-10 pe-9 py-2.5 text-xs sm:text-sm rounded-xl border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#002FA7]/20 focus:border-[#002FA7] bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] p-0.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Status / Reset */}
            <div className="text-xs text-[#64748B] flex items-center justify-between w-full md:w-auto gap-3">
              <span>
                {language === 'ur'
                  ? `${filteredMasters.length} برگزیدہ مشائخ ظاہر ہیں`
                  : language === 'ar'
                  ? `عرض ${filteredMasters.length} من أصل ٤١ مقاماً`
                  : `Displaying ${filteredMasters.length} of 41 Stations`}
              </span>
              {(selectedEra !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEra('all');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-[#002FA7] hover:underline"
                >
                  {language === 'ur' ? 'سب دکھائیں' : language === 'ar' ? 'عرض الكل' : 'Reset Filters'}
                </button>
              )}
            </div>
          </div>

          {/* Era Pills — Exact 4 Historical Groupings requested */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            {/* All Masters (1–41) */}
            <button
              type="button"
              onClick={() => setSelectedEra('all')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                selectedEra === 'all'
                  ? 'bg-[#12247A] text-white shadow-xs'
                  : 'bg-[#F1F5F9] text-[#334155] hover:bg-[#E2E8F0]'
              }`}
            >
              <span>{language === 'ur' ? 'تمام مشائخ (۱ تا ۴۱)' : language === 'ar' ? 'جميع السلسلة (١-٤١)' : 'All Masters (1–41)'}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedEra === 'all' ? 'bg-white/20 text-white' : 'bg-white text-[#475569] border border-[#CBD5E1]'
                }`}
              >
                {eraCounts.all}
              </span>
            </button>

            {/* Era 1: Early Companions (1–5) */}
            {/* Era 2: Central Asia & Bukhara (6–23) */}
            {/* Era 3: Mujaddidi Revival (24–38) */}
            {/* Era 4: Dargah Allahabad Sharif (39–41) */}
            {GOLDEN_CHAIN_ERAS.map((era) => {
              const isSelected = selectedEra === era.eraId;
              const count = eraCounts[era.eraId] || era.masters.length;
              return (
                <button
                  key={era.eraId}
                  type="button"
                  onClick={() => setSelectedEra(era.eraId)}
                  className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#12247A] text-white shadow-xs'
                      : 'bg-[#F1F5F9] text-[#334155] hover:bg-[#E2E8F0]'
                  }`}
                >
                  <span>{t(era.eraTitle)}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#475569] border border-[#CBD5E1]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Vertical Timeline & Alternating Cards */}
        <div className="relative pt-4 pb-8">
          {/* Continuous Desktop Central Line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#B48C36]/50 via-[#002FA7]/30 to-[#B48C36]/60 pointer-events-none"
          />

          {/* Continuous Mobile Timeline Line */}
          <div
            aria-hidden="true"
            className="md:hidden absolute start-5 sm:start-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#B48C36]/50 via-[#002FA7]/30 to-[#B48C36]/60 pointer-events-none"
          />

          {/* Master Nodes & Cards List */}
          <div className="space-y-8 sm:space-y-10">
            {filteredMasters.map((master, index) => {
              const isLast = master.generation === 41;
              const isFirst = master.generation === 1;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={master.generation}
                  id={`station-${master.generation}`}
                  className="relative md:flex md:items-center md:justify-between group"
                >
                  {/* MOBILE NODE MARKER */}
                  <div
                    className="md:hidden absolute start-5 sm:start-7 -translate-x-1/2 top-6 z-10"
                    aria-label={`Station ${master.generation}`}
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-xs transition-transform ${
                        isLast
                          ? 'bg-[#12247A] text-white border-2 border-[#B48C36] ring-4 ring-[#B48C36]/30 font-extrabold text-sm'
                          : isFirst
                          ? 'bg-white text-[#002FA7] border-2 border-[#B48C36] ring-4 ring-[#F8FAFC]'
                          : 'bg-white text-[#002FA7] border-2 border-[#002FA7] ring-4 ring-[#F8FAFC]'
                      }`}
                    >
                      {master.generation}
                    </div>
                  </div>

                  {/* DESKTOP ALTERNATING STRUCTURE */}
                  {/* Left Column (Card for Even, Spacer for Odd) */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)] order-1">
                    {isEven && (
                      <StationCard
                        master={master}
                        isLast={isLast}
                        isFirst={isFirst}
                        language={language}
                        t={t}
                        cardPosition="left"
                      />
                    )}
                  </div>

                  {/* DESKTOP CENTER NODE MARKER */}
                  <div className="hidden md:flex order-2 shrink-0 items-center justify-center relative z-10">
                    <div
                      className={`rounded-full flex items-center justify-center font-bold shadow-xs transition-all duration-300 group-hover:scale-105 ${
                        isLast
                          ? 'w-12 h-12 bg-gradient-to-br from-[#0A194E] via-[#12247A] to-[#002FA7] text-[#FAF8F2] border-2 border-[#B48C36] ring-4 ring-[#B48C36]/30 shadow-md font-extrabold text-sm sm:text-base'
                          : isFirst
                          ? 'w-10 h-10 bg-white text-[#002FA7] border-2 border-[#B48C36] ring-4 ring-[#F8FAFC] text-sm'
                          : 'w-10 h-10 bg-white text-[#002FA7] border-2 border-[#002FA7] ring-4 ring-[#F8FAFC] group-hover:border-[#B48C36] group-hover:text-[#B48C36] text-xs sm:text-sm'
                      }`}
                      title={`Station #${master.generation}`}
                    >
                      {master.generation}
                    </div>
                  </div>

                  {/* Right Column (Spacer for Even, Card for Odd) */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)] order-3">
                    {!isEven && (
                      <StationCard
                        master={master}
                        isLast={isLast}
                        isFirst={isFirst}
                        language={language}
                        t={t}
                        cardPosition="right"
                      />
                    )}
                  </div>

                  {/* MOBILE VIEW CARD (Full width offset from mobile timeline) */}
                  <div className="md:hidden ms-11 sm:ms-15">
                    <StationCard
                      master={master}
                      isLast={isLast}
                      isFirst={isFirst}
                      language={language}
                      t={t}
                      cardPosition="mobile"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state when query matches zero */}
          {filteredMasters.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-10 text-center max-w-md mx-auto space-y-3">
              <Compass className="w-10 h-10 text-[#B48C36] mx-auto opacity-75" />
              <h3 className="text-base font-bold text-[#12247A]">
                {language === 'ur'
                  ? 'کوئی روحانی مقام نہیں ملا'
                  : language === 'ar'
                  ? 'لم يتم العثور على أي مقام'
                  : 'No spiritual station found'}
              </h3>
              <p className="text-xs text-[#64748B]">
                {language === 'ur'
                  ? 'برائے مہربانی اپنا سرچ لفظ یا دورِ تاریخ کا فلٹر تبدیل کر کے دیکھیں۔'
                  : language === 'ar'
                  ? 'يرجى تغيير كلمة البحث أو إعادة تعيين الفلتر.'
                  : 'Please check your spelling or reset the era filter to see all 41 stations.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedEra('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#002FA7] text-white hover:bg-[#12247A] transition-colors"
              >
                {language === 'ur' ? 'تمام ۴۱ مشائخ دیکھیں' : language === 'ar' ? 'عرض جميع المقامات' : 'View All 41 Stations'}
              </button>
            </div>
          )}
        </div>

        {/* Concluding Theological Note on Continuous Transmission */}
        <div className="bg-[#FAF8F2] border border-[#B48C36]/30 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-xs">
          <Sparkles className="w-6 h-6 text-[#B48C36] mx-auto" />
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#12247A]">
            {language === 'ur'
              ? 'متصل باطنی فیضان — درگاہ اللہ آباد شریف'
              : language === 'ar'
              ? 'سلسلة الذهب المتصلة — دركاه الله آباد شريف'
              : 'The Perpetual Stream of Divine Gnosis — Dargah Allahabad Sharif'}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] max-w-3xl mx-auto leading-relaxed">
            {language === 'ur'
              ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ میں ہر شیخِ کامل نے اپنے شیخ سے اور انہوں نے اپنے شیخ سے قلب بہ قلب فیض حاصل کیا، جو بلا انقطاع سید الاولین والآخرین حضرت محمد مصطفیٰ ﷺ کے قلبِ انور تک پہنچتا ہے۔'
              : language === 'ar'
              ? 'تنتقل أنوار هذه السلسلة الشريفة قلباً عن قلب، من شيخ كامل إلى شيخ كامل، متصلة السند دون انقطاع إلى القلب النبوي الأنور لسيدنا محمد ﷺ.'
              : 'In the Naqshbandi Mujaddidi Tahiri Tariqah, each spiritual master receives inward illumination directly heart-to-heart from his preceptor, tracing without interruption back to the radiant heart of the Prophet Muhammad ﷺ.'}
          </p>
          <div className="pt-2 text-xs font-semibold text-[#B48C36]">
            {language === 'ur'
              ? 'اللهم صلِّ على سيدنا محمد وعلى آل سيدنا محمد وبارك وسلم'
              : 'Allāhumma Salli ‘alā Sayyidinā Muhammadin wa ‘alā Āli Sayyidinā Muhammadin wa Bārik wa Sallim'}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// INDIVIDUAL STATION PROFILE CARD COMPONENT
// ==========================================
interface StationCardProps {
  master: (typeof GOLDEN_CHAIN_MASTERS)[0];
  isLast: boolean;
  isFirst: boolean;
  language: string;
  t: (val: any) => string;
  cardPosition: 'left' | 'right' | 'mobile';
}

const StationCard: React.FC<StationCardProps> = ({
  master,
  isLast,
  isFirst,
  language,
  t,
  cardPosition,
}) => {
  return (
    <article
      className={`relative rounded-2xl transition-all duration-200 text-start ${
        isLast
          ? 'bg-gradient-to-br from-white via-[#FCFBF8] to-[#FAF7EE] border-2 border-[#B48C36]/60 shadow-md ring-1 ring-[#B48C36]/25 p-5 sm:p-6 sm:p-7'
          : 'bg-white border border-[#E2E8F0] hover:border-[#B48C36]/40 shadow-xs hover:shadow-sm p-5 sm:p-6'
      }`}
    >
      {/* Desktop Horizontal Connecting Connector */}
      {cardPosition === 'left' && (
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-1/2 -translate-y-1/2 -end-5 w-5 h-[2px] bg-[#B48C36]/50 pointer-events-none"
        />
      )}
      {cardPosition === 'right' && (
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-1/2 -translate-y-1/2 -start-5 w-5 h-[2px] bg-[#B48C36]/50 pointer-events-none"
        />
      )}

      {/* Top Bar: Lineage Station Label & Status Badge */}
      <div className="flex items-center justify-between gap-2 border-b border-[#F1F5F9] pb-3 mb-3">
        {/* Small Lineage Label */}
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#B48C36]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8C6B1B]">
            {language === 'ur'
              ? `مقام نمبر ${master.generation}`
              : language === 'ar'
              ? `المحطة رقم ${master.generation}`
              : `STATION #${master.generation}`}
          </span>
        </div>

        {/* Present Master Badge (Only for Station #41) */}
        {isLast && (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#B48C36]/15 text-[#7A5B10] px-2.5 py-1 rounded-full border border-[#B48C36]/30">
            <Sparkles className="w-3 h-3 text-[#B48C36]" />
            <span>
              {language === 'ur'
                ? 'موجودہ شیخِ طریقت'
                : language === 'ar'
                ? 'شيخ الطريقة الحالي'
                : 'Present Spiritual Guide'}
            </span>
          </span>
        )}
      </div>

      {/* Arabic Name & Calligraphy Area (Authentic Arabic text) */}
      {master.name.ar && (
        <div
          dir="rtl"
          lang="ar"
          className="text-end font-arabic text-lg sm:text-xl font-semibold text-[#0A194E] leading-relaxed select-text py-1"
        >
          {master.name.ar}
        </div>
      )}

      {/* Main English / Romanized Heading in Serif-style */}
      <div className="mt-1">
        <h3
          className={`font-serif text-lg sm:text-xl font-bold text-[#12247A] tracking-tight leading-snug ${
            language === 'ur' ? 'font-urdu text-xl sm:text-2xl text-[#0A194E]' : ''
          }`}
        >
          {t(master.name)}
        </h3>

        {/* If viewing in English, show authentic Urdu sub-name for historical completeness */}
        {language === 'en' && master.name.ur && (
          <p dir="rtl" className="text-xs font-urdu text-[#64748B] mt-0.5 select-text">
            {master.name.ur}
          </p>
        )}
      </div>

      {/* Honorifics & Lineage Wording (only if authentic title exists) */}
      {master.title && (
        <div className="text-xs sm:text-sm font-medium text-[#002FA7] mt-2 flex items-start gap-1.5">
          <span className="text-[#B48C36] font-bold">›</span>
          <span>{t(master.title)}</span>
        </div>
      )}

      {/* Historical Metadata: Location & Explicit Year/Date */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#475569] mt-3 pt-2.5 border-t border-[#F1F5F9]">
        {/* Resting Place / Location */}
        {master.restingPlace && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B48C36] shrink-0" />
            <span className="font-medium text-[#334155]">{t(master.restingPlace)}</span>
          </div>
        )}

        {/* Historical Year/Date: ONLY rendered when explicitly supported in source data */}
        {master.era && (
          <div className="inline-flex items-center gap-1.5 font-medium text-[#1E293B] bg-[#F1F5F9] px-2.5 py-0.5 rounded-md border border-[#CBD5E1]">
            <Calendar className="w-3 h-3 text-[#B48C36] shrink-0" />
            <span>{master.era}</span>
          </div>
        )}
      </div>

      {/* Short Biographical Description (ONLY if authentic description exists in project data) */}
      {master.description && (
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-2.5 mt-2.5 border-t border-[#F1F5F9]">
          {t(master.description)}
        </p>
      )}

      {/* Key Legacy / Contribution (if present in authoritative dataset) */}
      {master.keyContribution && (
        <div className="mt-3 p-2.5 rounded-xl bg-[#002FA7]/5 border border-[#002FA7]/10 text-xs text-[#12247A] flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B48C36] shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-[#002FA7]">
              {language === 'ur' ? 'خصوصی فیضان: ' : language === 'ar' ? 'الفيض البارز: ' : 'Key Legacy: '}
            </strong>
            <span className="text-[#334155]">{t(master.keyContribution)}</span>
          </div>
        </div>
      )}
    </article>
  );
};
