import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Globe,
  Building2,
  Users,
  PhoneCall,
  Mail,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import {
  MAIN_CONTACT_DATA,
  PAKISTAN_CENTERS_DATA,
  INTERNATIONAL_CONTACTS_DATA,
  KHULAFA_KARAM_DATA,
  PakistanCenterItem,
  InternationalContactItem,
  KhalifaContactItem,
} from '../../data/contactData';

type ContactCategory = 'pakistan' | 'international' | 'khulafa';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<ContactCategory>('pakistan');
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>('all');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('all');
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState<string>('all');


  // Safe string resolver to strictly prevent [object Object]
  const safeText = (val: any): string => {
    if (val === null || val === undefined) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return String(val);
    if (typeof val === 'object') {
      if (val[language]) return String(val[language]);
      if (val.en) return String(val.en);
      if (val.ur) return String(val.ur);
      if (val.ar) return String(val.ar);
      return '';
    }
    return '';
  };

  // Helper to sanitize phone for tel: link
  const getTelHref = (phoneStr?: string): string => {
    if (!phoneStr) return '#';
    const primary = phoneStr.split(/[,/]/)[0].trim();
    const sanitized = primary.replace(/[^\d+]/g, '');
    return `tel:${sanitized}`;
  };

  // Helper to safely format mailto: link with subject
  const getMailtoHref = (emailStr?: string, subject?: string): string => {
    if (!emailStr) return '#';
    const cleanEmail = emailStr.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) return '#';
    const encodedEmail = encodeURI(cleanEmail);
    if (subject) {
      return `mailto:${encodedEmail}?subject=${encodeURIComponent(subject)}`;
    }
    return `mailto:${encodedEmail}`;
  };

  // Filtered lists
  const uniqueCities = Array.from(
    new Set(PAKISTAN_CENTERS_DATA.map((c) => safeText(c.cityArea)))
  );

  const filteredPakistanCenters = PAKISTAN_CENTERS_DATA.filter((center) => {
    if (selectedCityFilter === 'all') return true;
    return safeText(center.cityArea) === selectedCityFilter;
  });

  const uniqueCountries = Array.from(
    new Set(INTERNATIONAL_CONTACTS_DATA.map((c) => safeText(c.country)))
  );

  const filteredInternationalContacts = INTERNATIONAL_CONTACTS_DATA.filter((c) => {
    if (selectedCountryFilter === 'all') return true;
    return safeText(c.country) === selectedCountryFilter;
  });

  const filteredKhulafa = KHULAFA_KARAM_DATA.filter((k) => {
    if (selectedProvinceFilter === 'all') return true;
    return k.province === selectedProvinceFilter;
  });


  return (
    <div className="pb-24 space-y-12 sm:space-y-16">
      {/* 1. Page Header */}
      <PageHeader
        badge={language === 'ur' ? 'مرکزی رابطہ' : language === 'ar' ? 'اتصل بنا' : 'Contact Directory'}
        title={
          language === 'ur'
            ? 'رابطہ و معلومات (Contact Us)'
            : language === 'ar'
            ? 'الاتصال بنا ودليل المراكز'
            : 'Contact Directory'
        }
        subtitle={
          language === 'ur'
            ? 'درگاہ اللہ آباد شریف، پاکستان بھر کے باضابطہ مراکز، بین الاقوامی رابطہ اور خلفائے کرام کی مصدقہ فہرست۔'
            : 'Authoritative directory for Dargah Allahabad Sharif headquarters, verified regional centers in Pakistan, international contacts, and Khulafa-e-Karam.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'رابطہ' : 'Contact',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 text-start">
        {/* ========================================================
            1. MAIN CONTACT (FEATURED AT TOP OF PAGE)
            ======================================================== */}
        <section aria-labelledby="main-contact-heading" className="space-y-4">
          <div className="border-b border-[#EEF2F7] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider block">
                {language === 'ur' ? 'مرکزی رابطہ' : language === 'ar' ? 'جهة الاتصال الرئيسية' : 'Primary Contact'}
              </span>
              <h2 id="main-contact-heading" className="text-2xl sm:text-3xl font-extrabold text-[#12247A]">
                {t('mainContact')}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>{language === 'ur' ? 'مرکزی ہیڈ کوارٹر' : 'Central Markaz'}</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#002FA7]/25 p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
            {/* Header info */}
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-md bg-[#002FA7]/10 text-[#002FA7] text-xs font-bold tracking-wide">
                {safeText(MAIN_CONTACT_DATA.headquartersTitle)}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12247A]">
                {safeText(MAIN_CONTACT_DATA.name)}
              </h3>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-4xl">
                {safeText(MAIN_CONTACT_DATA.notes)}
              </p>
            </div>

            {/* Address */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#EEF2F7] flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-[#002FA7] uppercase tracking-wide">
                  {t('address')}
                </span>
                <p className="text-sm sm:text-base font-medium text-[#12247A] mt-0.5">
                  {safeText(MAIN_CONTACT_DATA.address)}
                </p>
              </div>
            </div>

            {/* Contact Persons Grid */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#4A5568] uppercase tracking-wider block">
                {language === 'ur' ? 'مرکزی رابطہ شخصیات و ٹیلی فون:' : 'Central Representatives & Mobile Numbers:'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MAIN_CONTACT_DATA.contacts.map((person, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EEF2F7] hover:border-[#002FA7]/40 shadow-xs transition-all space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wide block">
                        {t('contactPerson')}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#12247A] leading-snug">
                        {person.name}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-[#F1F5F9] space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A1F2B]">
                        <PhoneCall className="w-4 h-4 text-[#002FA7] shrink-0" />
                        <span className="tracking-wide break-all">{person.mobile}</span>
                      </div>
                      <a
                        href={getTelHref(person.mobile)}
                        className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#002FA7] hover:bg-[#00227B] text-white text-xs font-bold transition-colors shadow-xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>{t('callNow')}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: Internal Navigation & Coordination */}
            <div className="pt-4 border-t border-[#EEF2F7] flex flex-wrap items-center justify-end gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#002FA7] text-[#002FA7] hover:bg-[#002FA7] hover:text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
              >
                <span>{language === 'ur' ? 'مرکزی تعارف و تاریخ' : language === 'ar' ? 'عن الجمعية وتاريخها' : 'About Headquarters & Movement'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CATEGORY NAVIGATION / BOX BUTTONS
            ======================================================== */}
        <section aria-labelledby="category-nav-heading" className="space-y-4">
          <div className="border-b border-[#EEF2F7] pb-3">
            <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider block">
              {language === 'ur' ? 'رابطہ زمرہ جات' : language === 'ar' ? 'فئات دليل الاتصال' : 'Directory Sections'}
            </span>
            <h3 id="category-nav-heading" className="text-xl sm:text-2xl font-bold text-[#12247A]">
              {language === 'ur'
                ? 'مطلوبہ رابطہ زمرہ منتخب فرمائیں'
                : language === 'ar'
                ? 'اختر قسم الاتصال المطلوب'
                : 'Select Contact Category'}
            </h3>
          </div>

          {/* 3 Premium Box-Style Category Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Box 1: Pakistan Centers */}
            <button
              type="button"
              onClick={() => setActiveCategory('pakistan')}
              className={`p-6 sm:p-7 rounded-2xl border-2 transition-all duration-200 text-start cursor-pointer flex flex-col justify-between space-y-4 ${
                activeCategory === 'pakistan'
                  ? 'bg-[#002FA7] border-[#002FA7] text-white shadow-lg shadow-[#002FA7]/20 scale-[1.01]'
                  : 'bg-white border-[#002FA7]/30 hover:border-[#002FA7] hover:shadow-md text-[#12247A] shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    activeCategory === 'pakistan'
                      ? 'bg-white/15 text-white'
                      : 'bg-[#002FA7]/10 text-[#002FA7]'
                  }`}
                >
                  <Building2 className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    activeCategory === 'pakistan'
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EEF2F7] text-[#12247A]'
                  }`}
                >
                  {PAKISTAN_CENTERS_DATA.length} {language === 'ur' ? 'مراکز' : 'Centers'}
                </span>
              </div>

              <div>
                <h4
                  className={`text-lg sm:text-xl font-extrabold ${
                    activeCategory === 'pakistan' ? 'text-white' : 'text-[#002FA7]'
                  }`}
                >
                  {t('pakistanCenters')}
                </h4>
                <p
                  className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    activeCategory === 'pakistan' ? 'text-blue-100' : 'text-[#64748B]'
                  }`}
                >
                  {t('pakistanCentersDesc')}
                </p>
              </div>

              <div
                className={`pt-3 border-t text-xs font-bold flex items-center justify-between ${
                  activeCategory === 'pakistan'
                    ? 'border-white/20 text-white'
                    : 'border-[#F1F5F9] text-[#002FA7]'
                }`}
              >
                <span>{activeCategory === 'pakistan' ? '✓ Selected' : 'Click to View'}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            {/* Box 2: International Contacts */}
            <button
              type="button"
              onClick={() => setActiveCategory('international')}
              className={`p-6 sm:p-7 rounded-2xl border-2 transition-all duration-200 text-start cursor-pointer flex flex-col justify-between space-y-4 ${
                activeCategory === 'international'
                  ? 'bg-[#002FA7] border-[#002FA7] text-white shadow-lg shadow-[#002FA7]/20 scale-[1.01]'
                  : 'bg-white border-[#002FA7]/30 hover:border-[#002FA7] hover:shadow-md text-[#12247A] shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    activeCategory === 'international'
                      ? 'bg-white/15 text-white'
                      : 'bg-[#002FA7]/10 text-[#002FA7]'
                  }`}
                >
                  <Globe className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    activeCategory === 'international'
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EEF2F7] text-[#12247A]'
                  }`}
                >
                  {INTERNATIONAL_CONTACTS_DATA.length} {language === 'ur' ? 'رابطے' : 'Contacts'}
                </span>
              </div>

              <div>
                <h4
                  className={`text-lg sm:text-xl font-extrabold ${
                    activeCategory === 'international' ? 'text-white' : 'text-[#002FA7]'
                  }`}
                >
                  {t('internationalContacts')}
                </h4>
                <p
                  className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    activeCategory === 'international' ? 'text-blue-100' : 'text-[#64748B]'
                  }`}
                >
                  {t('internationalContactsDesc')}
                </p>
              </div>

              <div
                className={`pt-3 border-t text-xs font-bold flex items-center justify-between ${
                  activeCategory === 'international'
                    ? 'border-white/20 text-white'
                    : 'border-[#F1F5F9] text-[#002FA7]'
                }`}
              >
                <span>{activeCategory === 'international' ? '✓ Selected' : 'Click to View'}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            {/* Box 3: Khulafa-e-Karam */}
            <button
              type="button"
              onClick={() => setActiveCategory('khulafa')}
              className={`p-6 sm:p-7 rounded-2xl border-2 transition-all duration-200 text-start cursor-pointer flex flex-col justify-between space-y-4 ${
                activeCategory === 'khulafa'
                  ? 'bg-[#002FA7] border-[#002FA7] text-white shadow-lg shadow-[#002FA7]/20 scale-[1.01]'
                  : 'bg-white border-[#002FA7]/30 hover:border-[#002FA7] hover:shadow-md text-[#12247A] shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    activeCategory === 'khulafa'
                      ? 'bg-white/15 text-white'
                      : 'bg-[#002FA7]/10 text-[#002FA7]'
                  }`}
                >
                  <Users className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    activeCategory === 'khulafa'
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EEF2F7] text-[#12247A]'
                  }`}
                >
                  {KHULAFA_KARAM_DATA.length} {language === 'ur' ? 'خلفاء' : 'Khulafa'}
                </span>
              </div>

              <div>
                <h4
                  className={`text-lg sm:text-xl font-extrabold ${
                    activeCategory === 'khulafa' ? 'text-white' : 'text-[#002FA7]'
                  }`}
                >
                  {t('khulafaEKaram')}
                </h4>
                <p
                  className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    activeCategory === 'khulafa' ? 'text-blue-100' : 'text-[#64748B]'
                  }`}
                >
                  {t('khulafaEKaramDesc')}
                </p>
              </div>

              <div
                className={`pt-3 border-t text-xs font-bold flex items-center justify-between ${
                  activeCategory === 'khulafa'
                    ? 'border-white/20 text-white'
                    : 'border-[#F1F5F9] text-[#002FA7]'
                }`}
              >
                <span>{activeCategory === 'khulafa' ? '✓ Selected' : 'Click to View'}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </section>

        {/* ========================================================
            3. SELECTED CATEGORY DETAILS (ONLY ONE SHOWN AT A TIME)
            ======================================================== */}

        {/* ----------------- CATEGORY 1: PAKISTAN CENTERS ----------------- */}
        {activeCategory === 'pakistan' && (
          <section aria-labelledby="pakistan-heading" className="space-y-6">
            <div className="border-b border-[#EEF2F7] pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider block">
                  {language === 'ur' ? 'علاقائی مراکز' : 'Regional Centers'}
                </span>
                <h3 id="pakistan-heading" className="text-2xl sm:text-3xl font-extrabold text-[#12247A]">
                  {t('centersInPakistan')}
                </h3>
              </div>

              {/* City Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCityFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedCityFilter === 'all'
                      ? 'bg-[#002FA7] text-white shadow-xs'
                      : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                  }`}
                >
                  {language === 'ur' ? 'تمام شہر' : 'All Cities'} ({PAKISTAN_CENTERS_DATA.length})
                </button>
                {uniqueCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedCityFilter(city)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      selectedCityFilter === city
                        ? 'bg-[#002FA7] text-white shadow-xs'
                        : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Centers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPakistanCenters.map((center: PakistanCenterItem) => (
                <div
                  key={center.id}
                  className="bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/40 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
                >
                  {/* Top info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#002FA7]/10 text-[#002FA7] text-xs font-bold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{safeText(center.cityArea)}</span>
                      </span>
                    </div>

                    {/* 1. Center Name (Prominent) */}
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#12247A] leading-snug">
                      {center.centerName}
                    </h4>

                    {/* 2. Contact Person (Prominent) */}
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#EEF2F7] space-y-1">
                      <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wide block">
                        {t('contactPerson')}:
                      </span>
                      <p className="text-sm font-bold text-[#12247A] leading-tight">
                        {center.contactPerson}
                      </p>
                    </div>

                    {/* 3. Address */}
                    {center.address && (
                      <div className="space-y-1 text-xs text-[#64748B]">
                        <span className="font-semibold text-[#4A5568]">{t('address')}:</span>
                        <p className="leading-relaxed text-[#1A1F2B] font-medium">{center.address}</p>
                      </div>
                    )}

                    {/* 4. Phone & Mobile Details */}
                    <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9] text-xs">
                      {center.phone && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('phone')}:</span>
                          <span className="font-semibold text-[#1A1F2B] tracking-wide break-all">
                            {center.phone}
                          </span>
                        </div>
                      )}
                      {center.mobile && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('mobile')}:</span>
                          <span className="font-semibold text-[#1A1F2B] tracking-wide break-all">
                            {center.mobile}
                          </span>
                        </div>
                      )}
                      {center.email && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('email')}:</span>
                          <span className="font-semibold text-[#1A1F2B] break-all">{center.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-2">
                    {(center.mobile || center.phone) && (
                      <a
                        href={getTelHref(center.mobile || center.phone)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#002FA7] hover:bg-[#00227B] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>{t('callNow')}</span>
                      </a>
                    )}
                    {center.email && (
                      <a
                        href={getMailtoHref(center.email, `Inquiry: ${safeText(center.cityArea)} - Islah-ul-Muslimeen`)}
                        target="_top"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#002FA7] text-[#002FA7] hover:bg-[#002FA7] hover:text-white text-xs sm:text-sm font-bold transition-colors"
                        aria-label={`Send email to ${center.centerName}`}
                      >
                        <Mail className="w-4 h-4" />
                        <span>{t('sendEmail')}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ----------------- CATEGORY 2: INTERNATIONAL CONTACTS ----------------- */}
        {activeCategory === 'international' && (
          <section aria-labelledby="international-heading" className="space-y-6">
            <div className="border-b border-[#EEF2F7] pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider block">
                  {language === 'ur' ? 'بیرونِ ملک رابطے' : 'Overseas Representatives'}
                </span>
                <h3 id="international-heading" className="text-2xl sm:text-3xl font-extrabold text-[#12247A]">
                  {t('internationalContacts')}
                </h3>
              </div>

              {/* Country Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCountryFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedCountryFilter === 'all'
                      ? 'bg-[#002FA7] text-white shadow-xs'
                      : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                  }`}
                >
                  {language === 'ur' ? 'تمام ممالک' : 'All Countries'} ({INTERNATIONAL_CONTACTS_DATA.length})
                </button>
                {uniqueCountries.map((cName) => (
                  <button
                    key={cName}
                    type="button"
                    onClick={() => setSelectedCountryFilter(cName)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      selectedCountryFilter === cName
                        ? 'bg-[#002FA7] text-white shadow-xs'
                        : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                    }`}
                  >
                    {cName}
                  </button>
                ))}
              </div>
            </div>

            {/* International Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternationalContacts.map((contact: InternationalContactItem) => (
                <div
                  key={contact.id}
                  className="bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/40 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    {/* Country Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#002FA7]/10 text-[#002FA7] text-xs font-bold">
                        <Globe className="w-3.5 h-3.5" />
                        <span>{safeText(contact.country)}</span>
                      </span>
                    </div>

                    {/* Contact Person Name (Prominent) */}
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#12247A] leading-snug">
                      {contact.contactPerson}
                    </h4>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5568]">
                      <MapPin className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#1A1F2B]">{contact.location}</span>
                    </div>

                    {/* Phone / Mobile / Email */}
                    <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9] text-xs">
                      {contact.phone && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('phone')}:</span>
                          <span className="font-semibold text-[#1A1F2B] tracking-wide break-all">
                            {contact.phone}
                          </span>
                        </div>
                      )}
                      {contact.mobile && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('mobile')}:</span>
                          <span className="font-semibold text-[#1A1F2B] tracking-wide break-all">
                            {contact.mobile}
                          </span>
                        </div>
                      )}
                      {contact.email && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('email')}:</span>
                          <span className="font-semibold text-[#1A1F2B] break-all">{contact.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-2">
                    {(contact.phone || contact.mobile) && (
                      <a
                        href={getTelHref(contact.phone || contact.mobile)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#002FA7] hover:bg-[#00227B] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>{t('callNow')}</span>
                      </a>
                    )}
                    {contact.email && (
                      <a
                        href={getMailtoHref(contact.email, `Inquiry: ${safeText(contact.country)} - Islah-ul-Muslimeen`)}
                        target="_top"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#002FA7] text-[#002FA7] hover:bg-[#002FA7] hover:text-white text-xs sm:text-sm font-bold transition-colors"
                        aria-label={`Send email to ${contact.contactPerson}`}
                      >
                        <Mail className="w-4 h-4" />
                        <span>{t('sendEmail')}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ----------------- CATEGORY 3: KHULAFA-E-KARAM ----------------- */}
        {activeCategory === 'khulafa' && (
          <section aria-labelledby="khulafa-heading" className="space-y-6">
            <div className="border-b border-[#EEF2F7] pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#002FA7] uppercase tracking-wider block">
                  {language === 'ur' ? 'علاقائی نمائندگان' : 'Regional Representatives'}
                </span>
                <h3 id="khulafa-heading" className="text-2xl sm:text-3xl font-extrabold text-[#12247A]">
                  {t('khulafaEKaram')}
                </h3>
              </div>

              {/* Province Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProvinceFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedProvinceFilter === 'all'
                      ? 'bg-[#002FA7] text-white shadow-xs'
                      : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                  }`}
                >
                  {language === 'ur' ? 'تمام صوبے' : 'All Regions'} ({KHULAFA_KARAM_DATA.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProvinceFilter('sindh')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedProvinceFilter === 'sindh'
                      ? 'bg-[#002FA7] text-white shadow-xs'
                      : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                  }`}
                >
                  {t('sindhRegion')} (
                  {KHULAFA_KARAM_DATA.filter((k) => k.province === 'sindh').length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProvinceFilter('punjab')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedProvinceFilter === 'punjab'
                      ? 'bg-[#002FA7] text-white shadow-xs'
                      : 'bg-white border border-[#CBD5E1] text-[#4A5568] hover:border-[#002FA7]'
                  }`}
                >
                  {t('punjabRegion')} (
                  {KHULAFA_KARAM_DATA.filter((k) => k.province === 'punjab').length})
                </button>
              </div>
            </div>

            {/* Complete 472 Khulafa Directory Banner */}
            <div className="bg-[#F8FAFC] border border-[#EEF2F7] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#002FA7] uppercase tracking-wider block mb-1">
                  {language === 'ur' ? 'مکمل مصدقہ فہرست' : 'Full Archival Directory'}
                </span>
                <p className="text-xs sm:text-sm text-[#475569]">
                  {language === 'ur'
                    ? 'حضرت سجن سائیں کے تمام 472 خلفائے کرام کی صوبہ وار، ضلع وار اور بیرونِ ملک مستند فہرست ملاحظہ فرمائیں۔'
                    : 'Looking for the complete province-wise and district-wise directory of 472 authorized Khulafa-e-Karam across Pakistan and overseas?'}
                </p>
              </div>
              <Link
                to="/about/khulafa"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#002FA7] hover:bg-[#12247A] text-white text-xs sm:text-sm font-bold transition-colors shrink-0 shadow-xs"
              >
                <span>{language === 'ur' ? 'مکمل 472 خلفاء کی فہرست دیکھیں' : 'View Full 472 Khulafa Directory'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>

            {/* Khulafa Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKhulafa.map((khalifa: KhalifaContactItem) => (
                <div
                  key={khalifa.id}
                  className="bg-white rounded-2xl border border-[#EEF2F7] hover:border-[#002FA7]/40 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    {/* Province Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#002FA7]/10 text-[#002FA7] text-xs font-bold">
                        <Users className="w-3.5 h-3.5" />
                        <span>
                          {khalifa.province === 'sindh'
                            ? language === 'ur'
                              ? 'سندھ'
                              : 'Sindh'
                            : language === 'ur'
                            ? 'پنجاب'
                            : 'Punjab'}
                        </span>
                      </span>
                    </div>

                    {/* Name (Prominent) */}
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#12247A] leading-snug">
                      {khalifa.name}
                    </h4>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5568]">
                      <MapPin className="w-4 h-4 text-[#002FA7] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#1A1F2B] leading-relaxed">
                        {khalifa.location}
                      </span>
                    </div>

                    {/* Contact details */}
                    <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9] text-xs">
                      {khalifa.telephone && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('phone')}:</span>
                          <span className="font-semibold text-[#1A1F2B] tracking-wide break-all">
                            {khalifa.telephone}
                          </span>
                        </div>
                      )}
                      {khalifa.mobile && (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#002FA7]">{t('mobile')}:</span>
                          <span className="font-semibold text-[#1A1F2B] tracking-wide break-all">
                            {khalifa.mobile}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="pt-4 border-t border-[#F1F5F9]">
                    {(khalifa.mobile || khalifa.telephone) && (
                      <a
                        href={getTelHref(khalifa.mobile || khalifa.telephone)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#002FA7] hover:bg-[#00227B] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>{t('callNow')}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
