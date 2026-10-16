export type Language = 'en' | 'ur' | 'ar';

export interface LocalizedString {
  en: string;
  ur: string;
  ar: string;
}

export interface NavItem {
  id: string;
  label: LocalizedString;
  path: string;
  children?: {
    id: string;
    label: LocalizedString;
    path: string;
    description?: LocalizedString;
  }[];
}

export interface QuranVerse {
  id: string;
  surahNumber: number;
  surahNameArabic: string;
  surahNameEnglish: string;
  surahNameUrdu: string;
  ayahNumber: number;
  arabicText: string;
  urduTranslation: string;
  englishTranslation: string;
  tafseerSummary?: LocalizedString;
  theme: LocalizedString;
}

export interface HadithItem {
  id: string;
  collection: string;
  bookNumber?: number;
  hadithNumber: string;
  narrator: LocalizedString;
  arabicText: string;
  urduTranslation: string;
  englishTranslation: string;
  reference: string;
  category: LocalizedString;
}

export interface ShijraNode {
  generation: number;
  name: LocalizedString;
  title?: LocalizedString;
  era?: string;
  restingPlace: LocalizedString;
  description: LocalizedString;
  keyContribution?: LocalizedString;
}

export interface SayingItem {
  id: string;
  speaker: LocalizedString;
  source: LocalizedString;
  textArabicOrUrdu: string;
  urdu: string;
  english: string;
  topic: LocalizedString;
}

export interface BookItem {
  id: string;
  slug?: string;
  title: LocalizedString;
  author: LocalizedString;
  translator?: LocalizedString;
  category: LocalizedString;
  pages?: number;
  year?: string;
  language: string;
  description: LocalizedString;
  hasPdf: boolean;
  pdfUrl?: string;
  pdfFileName?: string;
  coverImage?: string;
  publisher?: LocalizedString;
  hasReadOnline: boolean;
  sampleChapterExcerpt?: LocalizedString;
}

export interface ArticleItem {
  id: string;
  title: LocalizedString;
  author: LocalizedString;
  category: LocalizedString;
  date: string;
  excerpt: LocalizedString;
  content?: LocalizedString;
  readTime: string;
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  date: string;
  author: LocalizedString;
  excerpt: LocalizedString;
  url: string;
  category: LocalizedString;
}

export interface AudioItem {
  id: string;
  title: LocalizedString;
  speaker: LocalizedString;
  category: 'bayan' | 'naat' | 'manqabat' | 'zikr';
  duration: string;
  audioUrl?: string;
  date?: string;
  hasVerifiedAudio: boolean;
}

export interface VideoItem {
  id: string;
  title: LocalizedString;
  speaker: LocalizedString;
  duration?: string;
  youtubeId?: string;
  hasVerifiedVideo: boolean;
  description: LocalizedString;
}

export interface EventItem {
  id: string;
  title: LocalizedString;
  location: LocalizedString;
  date: string;
  hijriDate?: string;
  status: 'upcoming' | 'annual' | 'archived';
  description: LocalizedString;
  schedule?: LocalizedString[];
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  path: string;
}
