import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, LocalizedString } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  language: Language;
  dir: 'ltr' | 'rtl';
  setLanguage: (lang: Language) => void;
  t: (val: LocalizedString | string | undefined) => string;
  isRTL: boolean;
  isBiographyRoute: boolean;
  activeBioSlug: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'islah_language';
const EXPLICIT_LANG_KEY = 'islah_explicit_lang';

export const KHALIFA_SLUGS = [
  'bedar-morai',
  'nasiruddin-shah',
  'jan-muhammad-solangi',
  'muhammad-hussain-shaikh',
  'haji-khair-muhammad-abbasi',
  'jamil-asghar-tahiri',
  'noor-hussain-bakhshi',
];

export const getKhalifaSlugFromPath = (pathname: string): string | null => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  for (const slug of KHALIFA_SLUGS) {
    if (
      clean.endsWith(`/about/khulafa/${slug}`) ||
      clean.endsWith(`/khulafa/${slug}`) ||
      clean.endsWith(`/shaikh/khulafa/${slug}`) ||
      clean === `/about/khulafa/${slug}` ||
      clean === `/khulafa/${slug}` ||
      clean === `/shaikh/khulafa/${slug}`
    ) {
      return slug;
    }
  }
  return null;
};

export const isKhalifaBiographyPath = (pathname: string): boolean => {
  return getKhalifaSlugFromPath(pathname) !== null;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const activeBioSlug = getKhalifaSlugFromPath(location.pathname);
  const isBiographyRoute = activeBioSlug !== null;

  // Track explicit language selection made by the visitor (via the language switcher).
  // If set, this explicit preference persists across the entire browsing session,
  // including Next / Previous navigation between all biography pages!
  const [explicitLanguage, setExplicitLanguage] = useState<Language | null>(() => {
    try {
      const sessionVal = sessionStorage.getItem(EXPLICIT_LANG_KEY) as Language | null;
      if (sessionVal === 'en' || sessionVal === 'ur' || sessionVal === 'ar') {
        return sessionVal;
      }
    } catch {
      // ignore
    }
    return null;
  });

  // Stored language for general pages across the website
  const [generalLanguage, setGeneralLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === 'en' || saved === 'ur' || saved === 'ar') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'ur'; // Default to authentic Urdu
  });

  // Determine active effective language:
  // 1. If visitor explicitly chose a language (via language switcher), respect that choice everywhere!
  //    Navigating between biographies via Next/Previous retains this explicit choice stably.
  // 2. If NO explicit choice has been made yet:
  //    - Any biography route defaults to 'ur' (Urdu UI mode with full Urdu interface by default).
  //    - General site routes follow generalLanguage ('ur' or saved).
  const language: Language = explicitLanguage
    ? explicitLanguage
    : isBiographyRoute
    ? 'ur'
    : generalLanguage;

  const dir: 'ltr' | 'rtl' = language === 'en' ? 'ltr' : 'rtl';
  const isRTL = dir === 'rtl';

  useEffect(() => {
    // Keep document attributes and body typography classes synchronized
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    if (language === 'ur') {
      document.body.classList.add('font-urdu');
      document.body.classList.remove('font-arabic');
    } else if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-urdu');
    } else {
      document.body.classList.remove('font-urdu', 'font-arabic');
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    // Visitor manually clicked the language switcher
    setExplicitLanguage(lang);
    try {
      sessionStorage.setItem(EXPLICIT_LANG_KEY, lang);
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    setGeneralLanguage(lang);
  };

  const t = (val: LocalizedString | string | undefined): string => {
    if (!val) return '';
    if (typeof val === 'string') {
      if (val in TRANSLATIONS) {
        const entry = (TRANSLATIONS as any)[val];
        return entry[language] || entry.ur || entry.en || entry.ar || '';
      }
      return val;
    }
    if (val[language]) return val[language];
    return val.ur || val.en || val.ar || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        setLanguage,
        t,
        isRTL,
        isBiographyRoute,
        activeBioSlug,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
