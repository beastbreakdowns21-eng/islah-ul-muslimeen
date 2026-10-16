import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Clock,
  Globe2,
  ChevronRight,
  ChevronDown,
  Building2,
  BookOpen,
  Filter,
  X,
  HeartHandshake,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { SEO } from '../../components/common/SEO';
import {
  KHULAFA_REGIONS_DATA,
  getAllKhulafaItems,
  getKhulafaStats,
  KhulafaRegion,
} from '../../data/khulafaData';

export const KhulafaPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');

  const stats = useMemo(() => getKhulafaStats(), []);
  const allItems = useMemo(() => getAllKhulafaItems(), []);

  // Filter districts available for the selected region
  const availableDistricts = useMemo(() => {
    if (selectedRegionId === 'all') {
      const list: { urdu: string; en: string }[] = [];
      const seen = new Set<string>();
      KHULAFA_REGIONS_DATA.forEach((r) =>
        r.districts.forEach((d) => {
          if (!seen.has(d.districtUrdu) && d.districtUrdu !== r.regionTitleUrdu) {
            seen.add(d.districtUrdu);
            list.push({ urdu: d.districtUrdu, en: d.districtEn });
          }
        })
      );
      return list;
    }
    const reg = KHULAFA_REGIONS_DATA.find((r) => r.regionId === selectedRegionId);
    if (!reg) return [];
    return reg.districts
      .filter((d) => d.districtUrdu !== reg.regionTitleUrdu)
      .map((d) => ({ urdu: d.districtUrdu, en: d.districtEn }));
  }, [selectedRegionId]);

  // Filtered regions and districts according to selection & search
  const filteredRegions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return KHULAFA_REGIONS_DATA.filter((region) => {
      if (selectedRegionId !== 'all' && region.regionId !== selectedRegionId) {
        return false;
      }
      return true;
    }).map((region) => {
      const filteredDistricts = region.districts.filter((dist) => {
        if (selectedDistrict !== 'all' && dist.districtUrdu !== selectedDistrict) {
          return false;
        }
        return true;
      }).map((dist) => {
        if (!q) return dist;
        const matchingItems = dist.items.filter((item) => {
          return (
            item.rawText.toLowerCase().includes(q) ||
            item.nameUrdu.toLowerCase().includes(q) ||
            item.locationUrdu.toLowerCase().includes(q) ||
            (item.notesUrdu && item.notesUrdu.toLowerCase().includes(q)) ||
            dist.districtUrdu.toLowerCase().includes(q) ||
            dist.districtEn.toLowerCase().includes(q)
          );
        });
        return {
          ...dist,
          items: matchingItems,
        };
      }).filter((dist) => dist.items.length > 0);

      return {
        ...region,
        districts: filteredDistricts,
      };
    }).filter((region) => region.districts.length > 0);
  }, [selectedRegionId, selectedDistrict, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return filteredRegions.reduce(
      (sum, r) => sum + r.districts.reduce((dSum, d) => dSum + d.items.length, 0),
      0
    );
  }, [filteredRegions]);

  const khulafaStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Khulafa-e-Karam Directory | Jamaat Islah-ul-Muslimeen',
      'description':
        'Official directory of authorized deputies and Khulafa-e-Karam of Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen) across Pakistan and overseas.',
      'url': 'https://islahulmuslimeen.org/about/khulafa',
      'publisher': {
        '@type': 'Organization',
        'name': 'Jamaat Islah-ul-Muslimeen',
        'url': 'https://islahulmuslimeen.org/',
      },
    },
  ];

  return (
    <div className="pb-24 space-y-12 sm:space-y-16">
      <SEO
        title="Khulafa-e-Karam Directory | Hazrat Sajjan Saeen | Islah-ul-Muslimeen"
        description="Official directory of 472 verified Khulafa-e-Karam of Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen), covering Sindh, Punjab, Balochistan, KPK, Azad Kashmir, Overseas, and Deceased elders."
        canonicalPath="/about/khulafa"
        keywords={[
          'Khulafa',
          'Khulafa-e-Karam',
          'Khulafa Sajjan Saeen',
          'خلفائے کرام',
          'حضرت سجن سائیں کے خلفاء',
          'Islah-ul-Muslimeen Khulafa',
          'Naqshbandi Tahiri Khulafa',
          'Dargah Allahabad Sharif',
          'Khulafa Sindh',
          'Khulafa Punjab',
        ]}
        structuredData={khulafaStructuredData}
      />

      {/* Header */}
      <PageHeader
        badge={
          language === 'ur'
            ? 'مستند فہرستِ خلفائے کرام'
            : language === 'ar'
            ? 'دليل الخلفاء الكرام المعتمد'
            : 'Authoritative Khulafa Directory'
        }
        title={
          language === 'ur'
            ? 'حضرت خواجہ محبوب سجن سائیں دامت برکاتہم العالیہ کے خلفاء کرام'
            : language === 'ar'
            ? 'الخلفاء الكرام لفضيلة الشيخ خواجه محمد طاهر محبوب سجن سائیں'
            : 'Directory of Khulafa-e-Karam — Hazrat Sajjan Saeen'
        }
        subtitle={
          language === 'ur'
            ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ کے باضابطہ خلفائے کرام کے صوبہ وار اور ضلع وار مصدقہ اسمائے گرامی و تفصیلات۔'
            : language === 'ar'
            ? 'الأسماء المباركة والسجلات الموثقة لخلفاء ونواب الطريقة النقشبندية المجددية الطاهرية في باكستان وخارجها.'
            : 'Authoritative province-wise, district-wise, and overseas directory of authorized spiritual deputies of Silsila Naqshbandia Mujaddidia Tahiriya.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'تعارف' : 'About Us',
            path: '/about',
          },
          {
            label: language === 'ur' ? 'مرشدِ کامل' : 'Our Sheikh',
            path: '/about/sheikh',
          },
          {
            label: language === 'ur' ? 'خلفائے کرام' : 'Khulafa-e-Karam',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-start">
        {/* Source Reference & Authenticity Notice */}
        <div className="bg-[#F8FAFC] border border-[#EEF2F7] rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-2xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#002FA7]/10 flex items-center justify-center text-[#002FA7] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#002FA7] uppercase tracking-wider">
                  {language === 'ur' ? 'مصدقہ دینی و تنظیمی ریکارڈ' : 'Authentic Archival Record'}
                </span>
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {stats.grandTotal} {language === 'ur' ? 'اسمائے گرامی' : 'Entries'}
                </span>
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#002FA7] border border-blue-200">
                  {language === 'ur' ? '57 ضلعی و علاقائی شعبہ جات' : '57 District & Regional Sections'}
                </span>
              </div>
              <p
                className={`text-xs sm:text-sm text-[#475569] leading-relaxed ${
                  language === 'ur' ? 'font-urdu text-sm sm:text-base leading-relaxed' : ''
                }`}
              >
                {language === 'ur'
                  ? 'یہ مبارک فہرست جماعت اصلاح المسلمین کے باضابطہ مآخذ و ریکارڈ کے مطابق مرتب کی گئی ہے، جس میں 57 ضلعی و علاقائی شعبہ جات (پاکستان کے 55 اضلاع و خطہ جات بمع بیرونِ ملک اور وصال فرما جانے والے بزرگوں) کے تمام 472 اسمائے گرامی اور تاریخی روابط محفوظ ہیں۔'
                  : 'Compiled directly from the primary organizational record of Jamaat Islah-ul-Muslimeen, preserving all 472 entries across 57 distinct district and regional sections (55 territorial districts/sections across Pakistan, plus Overseas and Deceased sections).'}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#EEF2F7] text-[#12247A] text-xs font-bold shrink-0 shadow-2xs">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ur' ? 'مصدقہ تنظیمی آرکائیو' : 'Verified Organizational Archive'}</span>
          </div>
        </div>

        {/* Overview Stats Quick-Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {stats.regionsSummary.map((reg) => {
            const isSelected = selectedRegionId === reg.regionId;
            return (
              <button
                key={reg.regionId}
                type="button"
                onClick={() => {
                  setSelectedRegionId(reg.regionId);
                  setSelectedDistrict('all');
                }}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-[#002FA7] text-white border-[#002FA7] shadow-sm'
                    : 'bg-white text-[#1A1F2B] border-[#EEF2F7] hover:border-[#002FA7]/40 hover:bg-[#F8FAFC]'
                }`}
              >
                <div
                  className={`text-lg sm:text-xl font-black ${
                    isSelected ? 'text-white' : 'text-[#12247A]'
                  }`}
                >
                  {reg.totalItems}
                </div>
                <div
                  className={`text-xs font-semibold mt-0.5 truncate ${
                    isSelected
                      ? 'text-white/90'
                      : 'text-[#64748B]'
                  } ${language === 'ur' ? 'font-urdu' : ''}`}
                >
                  {language === 'ur'
                    ? reg.regionTitleUrdu.replace('خلفاء کرام ', '')
                    : reg.regionTitleEn.replace('Khulafa-e-Karam ', '')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#94A3B8] absolute start-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ur'
                    ? 'فہرست میں تلاش کریں...'
                    : 'Search the directory...'
                }
                className="w-full ps-10 pe-9 py-2.5 bg-[#F8FAFC] border border-[#EEF2F7] rounded-xl text-xs sm:text-sm text-[#1A1F2B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#002FA7] focus:bg-white transition-colors"
                dir={language === 'ur' ? 'rtl' : 'ltr'}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label={language === 'ur' ? 'تلاش ختم کریں' : 'Clear search'}
                  title={language === 'ur' ? 'تلاش ختم کریں' : 'Clear search'}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Region Filter Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={selectedRegionId}
                onChange={(e) => {
                  setSelectedRegionId(e.target.value);
                  setSelectedDistrict('all');
                }}
                className="px-3.5 py-2.5 bg-[#F8FAFC] border border-[#EEF2F7] rounded-xl text-xs sm:text-sm font-semibold text-[#12247A] focus:outline-none focus:border-[#002FA7] focus:bg-white"
              >
                <option value="all">
                  {language === 'ur' ? 'تمام خطہ جات' : 'All Regions'} ({stats.grandTotal})
                </option>
                {stats.regionsSummary.map((r) => (
                  <option key={r.regionId} value={r.regionId}>
                    {language === 'ur' ? r.regionTitleUrdu : r.regionTitleEn} ({r.totalItems})
                  </option>
                ))}
              </select>

              {/* District Filter Dropdown (if districts exist) */}
              {availableDistricts.length > 0 && (
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="px-3.5 py-2.5 bg-[#F8FAFC] border border-[#EEF2F7] rounded-xl text-xs sm:text-sm font-semibold text-[#12247A] focus:outline-none focus:border-[#002FA7] focus:bg-white max-w-[200px]"
                >
                  <option value="all">
                    {language === 'ur' ? 'تمام اضلاع' : 'All Districts'}
                  </option>
                  {availableDistricts.map((d) => (
                    <option key={d.urdu} value={d.urdu}>
                      {language === 'ur' ? d.urdu : d.en}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Active Filter Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F1F5F9] text-xs text-[#64748B]">
            <div>
              <span>
                {language === 'ur'
                  ? `ظاہر کردہ نتائج: ${totalFilteredCount} از کل ${stats.grandTotal} خلفائے کرام`
                  : `Showing ${totalFilteredCount} of ${stats.grandTotal} Khulafa-e-Karam`}
              </span>
              {searchQuery && (
                <span className="ms-2 font-medium text-[#002FA7]">
                  "{searchQuery}"
                </span>
              )}
            </div>

            {(selectedRegionId !== 'all' || selectedDistrict !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedRegionId('all');
                  setSelectedDistrict('all');
                  setSearchQuery('');
                }}
                className="text-[#002FA7] hover:underline font-bold text-xs"
              >
                {language === 'ur' ? 'فلٹرز صاف کریں' : 'Reset Filters'}
              </button>
            )}
          </div>
        </div>

        {/* Directory Content Listing */}
        {filteredRegions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-12 text-center space-y-3">
            <Users className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-[#12247A]">
              {language === 'ur' ? 'کوئی نام نہیں ملا' : 'No Results Found'}
            </h3>
            <p className="text-xs text-[#64748B] max-w-sm mx-auto">
              {language === 'ur'
                ? 'تلاش کے معیار کے مطابق کوئی خلیفہ مبارک دستیاب نہیں۔ براہ کرم تلاش کے الفاظ تبدیل کریں۔'
                : 'No Khulafa entries match the specified search or filter criteria. Please adjust your query.'}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredRegions.map((region) => {
              const regTotal = region.districts.reduce((s, d) => s + d.items.length, 0);

              return (
                <section
                  key={region.regionId}
                  id={`region-${region.regionId}`}
                  className="space-y-6"
                >
                  {/* Regional Header */}
                  <div className="border-b-2 border-[#002FA7]/20 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider block">
                        {language === 'ur' ? 'خطۂ خلافت' : 'Regional Territory'}
                      </span>
                      <h2
                        className={`text-xl sm:text-2xl font-extrabold text-[#12247A] ${
                          language === 'ur' ? 'font-urdu' : language === 'ar' ? 'font-arabic' : ''
                        }`}
                      >
                        {language === 'ur' ? region.regionTitleUrdu : region.regionTitleEn}
                      </h2>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#002FA7]/10 text-[#002FA7] border border-[#002FA7]/20 self-start sm:self-auto">
                      <span>
                        {regTotal} {language === 'ur' ? 'خلفائے کرام' : 'Khulafa'}
                      </span>
                    </span>
                  </div>

                  {region.regionId === 'deceased' && (
                    <div className="bg-[#F8FAFC] border border-[#EEF2F7] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-[#475569] flex items-center gap-2.5">
                      <HeartHandshake className="w-4 h-4 text-[#002FA7] shrink-0" />
                      <span className={language === 'ur' ? 'font-urdu text-sm' : ''}>
                        {language === 'ur'
                          ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ کے وصال فرما جانے والے مبارک خلفائے کرام (رحمۃ اللہ علیہم اجمعین)'
                          : 'Memorial records of the revered departed Khulafa-e-Karam of Silsila Naqshbandia Mujaddidia Tahiriya (May Allah have mercy upon them all).'}
                      </span>
                    </div>
                  )}

                  {/* Districts & Items */}
                  <div className="space-y-8">
                    {region.districts.map((district, dIdx) => (
                      <div
                        key={dIdx}
                        className="bg-white rounded-2xl border border-[#EEF2F7] overflow-hidden shadow-2xs space-y-4 p-5 sm:p-7"
                      >
                        {/* District Heading if distinct */}
                        {district.districtUrdu !== region.regionTitleUrdu && (
                          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <MapPin className="w-4 h-4 text-[#002FA7] shrink-0" />
                              <h3
                                className={`text-base sm:text-lg font-bold text-[#12247A] ${
                                  language === 'ur' ? 'font-urdu' : ''
                                }`}
                              >
                                {language === 'ur'
                                  ? district.districtUrdu
                                  : district.districtEn.startsWith('District') ||
                                    district.districtEn.startsWith('Islamabad') ||
                                    district.districtEn.includes('Province')
                                  ? district.districtEn
                                  : `District ${district.districtEn}`}
                              </h3>
                              <span
                                className={`text-xs text-[#64748B] ${
                                  language === 'ur' ? 'font-sans' : 'font-urdu'
                                }`}
                                dir={language === 'ur' ? 'ltr' : 'rtl'}
                              >
                                ({language === 'ur' ? district.districtEn : district.districtUrdu})
                              </span>
                            </div>

                            <span className="text-xs font-semibold text-[#002FA7] bg-[#002FA7]/5 px-2.5 py-0.5 rounded-md border border-[#002FA7]/10">
                              {district.items.length}
                            </span>
                          </div>
                        )}

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {district.items.map((item, idx) => (
                            <div
                              key={item.id}
                              className={`p-4 rounded-xl border transition-all text-start flex flex-col justify-between ${
                                item.isDeceased
                                  ? 'bg-[#FCFDFE] border-[#E2E8F0] hover:border-[#002FA7]/30'
                                  : 'bg-white border-[#EEF2F7] hover:border-[#002FA7]/40 hover:shadow-2xs'
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-start justify-between gap-2">
                                  <span className="text-[11px] font-bold text-[#64748B] w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0">
                                    {idx + 1}
                                  </span>

                                  {item.isDeceased && region.regionId !== 'deceased' && (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                      {language === 'ur' ? 'رحمۃ اللہ علیہ' : 'Deceased'}
                                    </span>
                                  )}
                                </div>

                                {/* Full Verbatim Urdu Name & Honorifics */}
                                <h4
                                  className="text-sm sm:text-base font-bold text-[#12247A] leading-relaxed font-urdu"
                                  dir="rtl"
                                >
                                  {item.rawText}
                                </h4>
                              </div>

                              {/* Footer details: Profile link to internal biography page */}
                              {item.profileLink && (
                                <div className="pt-3 mt-3 border-t border-[#F1F5F9] flex items-center justify-end">
                                  <Link
                                    to={item.profileLink}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002FA7] hover:text-[#12247A] group transition-colors"
                                  >
                                    <span>{language === 'ur' ? 'تفصیلی سوانح حیات' : 'Read Full Biography'}</span>
                                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Bottom Navigation & Coordination Links */}
        <div className="pt-6 border-t border-[#EEF2F7] flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/about/sheikh"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#EEF2F7] text-[#12247A] hover:border-[#002FA7] text-xs sm:text-sm font-bold transition-colors"
          >
            <span>{language === 'ur' ? 'مرشدِ کامل: حضرت سجن سائیں' : 'Our Sheikh: Hazrat Sajjan Saeen'}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002FA7] text-white hover:bg-[#12247A] text-xs sm:text-sm font-bold transition-colors shadow-xs"
          >
            <span>{language === 'ur' ? 'مرکزی رابطہ و خلفائے کرام' : 'Contact Directory & Khulafa'}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};
