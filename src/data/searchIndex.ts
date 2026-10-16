import { SearchResult } from '../types';
import { QURAN_VERSES } from './quranData';
import { HADITH_ITEMS } from './hadithData';
import { BOOKS_DATA, ARTICLES_DATA, OFFICIAL_BLOG_POSTS } from './libraryData';
import { OFFICIAL_ARTICLES } from './articlesData';
import { AT_TAHIR_PUBLICATIONS } from './atTahirData';
import { SAYINGS_DATA, GOLDEN_CHAIN_ERAS, LATAIF_DATA, NAQSHBANDI_PRINCIPLES } from './spiritualityData';
import { ABOUT_OVERVIEW_DATA, SHEIKH_PROFILE_DATA, MISSION_DATA, GRAND_MOSQUE_DATA } from './aboutData';
import { AUDIO_ITEMS, VIDEO_ITEMS } from './mediaData';
import { EVENTS_DATA } from './eventsData';
import { VERIFIED_YOUTUBE_VIDEOS } from './youtubeContent';

export interface IndexEntry {
  id: string;
  titleEn: string;
  titleUr: string;
  titleAr: string;
  categoryEn: string;
  categoryUr: string;
  categoryAr: string;
  excerptEn: string;
  excerptUr: string;
  excerptAr: string;
  path: string;
  tags: string[];
}

// Build pre-compiled search items from all data sources
export const SEARCH_INDEX: IndexEntry[] = [
  // Quran
  ...QURAN_VERSES.map((q) => ({
    id: q.id,
    titleEn: `Surah ${q.surahNameEnglish} (${q.surahNumber}:${q.ayahNumber})`,
    titleUr: `سورۃ ${q.surahNameUrdu} (آیت ${q.ayahNumber})`,
    titleAr: `سورة ${q.surahNameArabic} (الآية ${q.ayahNumber})`,
    categoryEn: 'Quran',
    categoryUr: 'قرآن کریم',
    categoryAr: 'القرآن الكريم',
    excerptEn: q.englishTranslation,
    excerptUr: q.urduTranslation,
    excerptAr: q.arabicText,
    path: '/quran',
    tags: ['quran', 'qur\'an', 'قرآن', 'القرآن', 'ayat', 'آیت', 'zikr', 'ذکر', 'heart', 'قلب', q.surahNameEnglish.toLowerCase()],
  })),

  // Hadith
  ...HADITH_ITEMS.map((h) => ({
    id: h.id,
    titleEn: `${h.collection} #${h.hadithNumber}`,
    titleUr: `${h.collection} - حدیث ${h.hadithNumber}`,
    titleAr: `${h.collection} - حديث ${h.hadithNumber}`,
    categoryEn: 'Hadith',
    categoryUr: 'حدیث شریف',
    categoryAr: 'الحديث الشريف',
    excerptEn: h.englishTranslation,
    excerptUr: h.urduTranslation,
    excerptAr: h.arabicText,
    path: '/hadith',
    tags: ['hadith', 'hadees', 'حدیث', 'الأحاديث', 'bukhari', 'بخاری', 'sunnah', 'سنت', 'zikr', 'ذکر', 'heart', 'قلب'],
  })),

  // Books
  ...BOOKS_DATA.map((b) => ({
    id: b.id,
    titleEn: b.title.en,
    titleUr: b.title.ur,
    titleAr: b.title.ar,
    categoryEn: 'Books',
    categoryUr: 'کتب',
    categoryAr: 'الكتب',
    excerptEn: b.description.en,
    excerptUr: b.description.ur,
    excerptAr: b.description.ar,
    path: '/library/books',
    tags: ['book', 'books', 'کتب', 'کتاب', 'كتب', 'library', 'مکتبہ', 'sohna saeen', 'سوہنا سائیں', 'sajjan saeen'],
  })),

  // Articles (Official PDF Library & Scholarly Publications)
  ...OFFICIAL_ARTICLES.map((a) => ({
    id: a.id,
    titleEn: a.title,
    titleUr: a.titleUrdu,
    titleAr: a.titleArabic,
    categoryEn: `Articles - ${a.category}`,
    categoryUr: `مضامین - ${a.categoryUrdu}`,
    categoryAr: `المقالات - ${a.categoryArabic}`,
    excerptEn: a.description,
    excerptUr: a.descriptionUrdu,
    excerptAr: a.descriptionArabic,
    path: `/articles/${a.slug}`,
    tags: [
      'article',
      'articles',
      'pdf',
      'مضمون',
      'مقالات',
      'تحقیق',
      'tasawwuf',
      'تصوف',
      'zikr',
      'ذکر',
      'muraqaba',
      'مراقبہ',
      'meditation',
      'allah',
      'naqshbandia',
      'نقشبندیہ',
      'tariqa',
      'طریقت',
      a.category.toLowerCase(),
      a.author.toLowerCase(),
      ...a.searchKeywords,
    ],
  })),

  // Blog
  ...OFFICIAL_BLOG_POSTS.map((bp) => ({
    id: bp.id,
    titleEn: bp.title.en,
    titleUr: bp.title.ur,
    titleAr: bp.title.ar,
    categoryEn: 'Official Blog',
    categoryUr: 'آفیشل بلاگ',
    categoryAr: 'المدونة الرسمية',
    excerptEn: bp.excerpt.en,
    excerptUr: bp.excerpt.ur,
    excerptAr: bp.excerpt.ar,
    path: '/library/blog',
    tags: ['blog', 'بلاگ', 'sajjan saeen', 'سجن سائیں', 'blogspot'],
  })),

  // At-Tahir Publications Archive Hub
  {
    id: 'at-tahir-hub',
    titleEn: 'At-Tahir Publications Archive',
    titleUr: 'ماہنامہ الطاہر - اشاعتی آرکائیو',
    titleAr: 'أرشيف منشورات مجلة الطاهر',
    categoryEn: 'Library & Publications',
    categoryUr: 'کتب خانہ و اشاعت',
    categoryAr: 'المكتبة والمنشورات',
    excerptEn: 'Explore the At-Tahir publication archive, Islamic writings, and available publication issues from Islah-ul-Muslimeen.',
    excerptUr: 'ماہنامہ الطاہر آرکائیو دیکھیں اور دستیاب شمارہ جات اور اسلامی تحریروں کا مطالعہ کریں۔',
    excerptAr: 'استكشف أرشيف مجلة الطاهر واطلع على الأعداد المتوفرة والكتابات الإسلامية.',
    path: '/library/at-tahir',
    tags: ['at-tahir', 'al-tahir', 'attahir', 'altahir', 'tahir', 'الطاہر', 'ماہنامہ الطاہر', 'مجلة الطاهر', 'magazine', 'periodical', 'library', 'archive', 'آرکائیو'],
  },

  // At-Tahir Issues
  ...AT_TAHIR_PUBLICATIONS.map((pub) => ({
    id: pub.id,
    titleEn: `${pub.title} — ${pub.issue}${pub.date ? ` (${pub.date})` : ''}`,
    titleUr: `${pub.titleUrdu || 'ماہنامہ الطاہر'} — ${pub.issue}${pub.dateUrdu || pub.date ? ` (${pub.dateUrdu || pub.date})` : ''}`,
    titleAr: `${pub.titleArabic || 'مجلة الطاهر'} — ${pub.issue}${pub.dateArabic || pub.date ? ` (${pub.dateArabic || pub.date})` : ''}`,
    categoryEn: 'At-Tahir Publications',
    categoryUr: 'ماہنامہ الطاہر',
    categoryAr: 'مجلة الطاهر',
    excerptEn: pub.description?.en || '',
    excerptUr: pub.description?.ur || pub.description?.en || '',
    excerptAr: pub.description?.ar || pub.description?.en || '',
    path: `/library/at-tahir/${pub.slug}`,
    tags: [
      'at-tahir',
      'al-tahir',
      'attahir',
      'altahir',
      'tahir',
      'طاہر',
      'الطاہر',
      'ماہنامہ الطاہر',
      'مجلة الطاهر',
      'issue',
      'magazine',
      'publication',
      'archive',
      String(pub.issueNumber || ''),
      `issue ${pub.issueNumber || ''}`,
      `issue no ${pub.issueNumber || ''}`,
      `issue no. ${pub.issueNumber || ''}`,
      `at-tahir ${pub.issueNumber || ''}`,
      `at-tahir ${pub.slug || ''}`,
      `al-tahir ${pub.issueNumber || ''}`,
      pub.date ? pub.date.toLowerCase() : '',
      String(pub.year || ''),
      'october',
      '2018',
    ].filter(Boolean),
  })),

  // Shajra Shareef / Golden Chain (1-41 Naqshbandi Mujaddidi Tahiri Masters)
  ...GOLDEN_CHAIN_ERAS.flatMap((era) =>
    era.masters.map((m) => ({
      id: `shajra-${m.generation}`,
      titleEn: `${m.generation}. ${m.name.en}`,
      titleUr: `${m.generation}۔ ${m.name.ur}`,
      titleAr: `${m.generation}. ${m.name.ar}`,
      categoryEn: 'Shajra Shareef (Golden Chain)',
      categoryUr: 'شجرہ شریف (سلسلہ عالیہ)',
      categoryAr: 'الشجرة الشريفة (السلسلة الذهبية)',
      excerptEn: `${m.restingPlace.en} — ${m.description.en}`,
      excerptUr: `${m.restingPlace.ur} — ${m.description.ur}`,
      excerptAr: `${m.restingPlace.ar} — ${m.description.ar}`,
      path: '/spirituality/golden-chain',
      tags: [
        'shajra',
        'shajrah',
        'shijra',
        'shajra shareef',
        'شجرہ',
        'شجرہ شریف',
        'سلسلہ عالیہ',
        'golden chain',
        'lineage',
        'naqshbandi',
        'mujaddidi',
        'tahiri',
        'نقشبندی',
        'مجددی',
        'طاہری',
        'sajjan saeen',
        'سجن سائیں',
        `generation ${m.generation}`,
        String(m.generation),
        m.name.en.toLowerCase(),
        m.restingPlace.en.toLowerCase(),
      ],
    }))
  ),

  // Lataif
  ...LATAIF_DATA.map((l) => ({
    id: l.id,
    titleEn: l.name.en,
    titleUr: l.name.ur,
    titleAr: l.name.ar,
    categoryEn: 'Zikr-e-Qalbi',
    categoryUr: 'ذکرِ قلبی',
    categoryAr: 'الذكر القلبي',
    excerptEn: l.spiritualFunction.en,
    excerptUr: l.spiritualFunction.ur,
    excerptAr: l.spiritualFunction.ar,
    path: '/spirituality/zikr-e-qalbi',
    tags: ['lataif', 'لطائف', 'zikr', 'ذکر', 'qalb', 'قلب', 'muraqabah', 'مراقبہ'],
  })),

  // Principles
  ...NAQSHBANDI_PRINCIPLES.map((p) => ({
    id: `principle-${p.number}`,
    titleEn: `${p.transliteration} - ${p.meaning.en}`,
    titleUr: `${p.term} (${p.meaning.ur})`,
    titleAr: `${p.term} (${p.meaning.ar})`,
    categoryEn: 'Tareeqa Naqshbandi',
    categoryUr: 'طریقہ نقشبندیہ',
    categoryAr: 'الطريقة النقشبندية',
    excerptEn: p.explanation.en,
    excerptUr: p.explanation.ur,
    excerptAr: p.explanation.ar,
    path: `/spirituality/principles/${p.slug}`,
    tags: ['naqshbandi', 'نقشبندی', 'principles', 'کلمات قدسیہ', 'tariqah', 'طریقت', p.transliteration.toLowerCase()],
  })),

  // Sayings
  ...SAYINGS_DATA.map((s) => ({
    id: s.id,
    titleEn: `Saying on ${s.topic.en}`,
    titleUr: `ارشاد مبارک: ${s.topic.ur}`,
    titleAr: `قول في ${s.topic.ar}`,
    categoryEn: 'His Sayings',
    categoryUr: 'ارشادات و فرمودات',
    categoryAr: 'الأقوال والحكم',
    excerptEn: s.english,
    excerptUr: s.urdu,
    excerptAr: s.textArabicOrUrdu,
    path: '/spirituality/sayings',
    tags: ['sayings', 'ارشادات', 'ملفوظات', 'quotes', 'wisdom', 'حکمت'],
  })),

  // Sheikh & About
  {
    id: 'sheikh-bio',
    titleEn: SHEIKH_PROFILE_DATA.title.en,
    titleUr: SHEIKH_PROFILE_DATA.title.ur,
    titleAr: SHEIKH_PROFILE_DATA.title.ar,
    categoryEn: 'About Us',
    categoryUr: 'تعارف',
    categoryAr: 'من نحن',
    excerptEn: SHEIKH_PROFILE_DATA.content[0].en,
    excerptUr: SHEIKH_PROFILE_DATA.content[0].ur,
    excerptAr: SHEIKH_PROFILE_DATA.content[0].ar,
    path: '/about/sheikh',
    tags: ['sheikh', 'sajjan saeen', 'سجن سائیں', 'خواجہ محمد طاہر', 'مرشد', 'leader', 'about', 'تعارف'],
  },
  {
    id: 'grand-mosque-entry',
    titleEn: GRAND_MOSQUE_DATA.title.en,
    titleUr: GRAND_MOSQUE_DATA.title.ur,
    titleAr: GRAND_MOSQUE_DATA.title.ar,
    categoryEn: 'Grand Mosque',
    categoryUr: 'جامع مسجد',
    categoryAr: 'الجامع الكبير',
    excerptEn: GRAND_MOSQUE_DATA.content[0].en,
    excerptUr: GRAND_MOSQUE_DATA.content[0].ur,
    excerptAr: GRAND_MOSQUE_DATA.content[0].ar,
    path: '/about/grand-mosque',
    tags: ['mosque', 'مسجد', 'allahabad', 'اللہ آباد', 'kandiaro', 'architecture'],
  },

  // Events
  ...EVENTS_DATA.map((e) => ({
    id: e.id,
    titleEn: e.title.en,
    titleUr: e.title.ur,
    titleAr: e.title.ar,
    categoryEn: 'Events',
    categoryUr: 'پروگرامات و عرس',
    categoryAr: 'الفعاليات',
    excerptEn: e.description.en,
    excerptUr: e.description.ur,
    excerptAr: e.description.ar,
    path: '/events/urs',
    tags: ['urs', 'عرس', 'event', 'events', 'اجتماع', 'gathering', 'allahabad'],
  })),

  // Media
  ...AUDIO_ITEMS.map((au) => ({
    id: au.id,
    titleEn: au.title.en,
    titleUr: au.title.ur,
    titleAr: au.title.ar,
    categoryEn: 'Audio Gallery',
    categoryUr: 'آڈیو گیلری',
    categoryAr: 'الصوتيات',
    excerptEn: `Speaker: ${au.speaker.en}`,
    excerptUr: `مقرر / نعت خواں: ${au.speaker.ur}`,
    excerptAr: `المتحدث: ${au.speaker.ar}`,
    path: '/media/audio',
    tags: ['audio', 'آڈیو', 'bayan', 'بیان', 'naat', 'نعت', 'manqabat', 'منقبت', 'speech'],
  })),
  ...VIDEO_ITEMS.map((v) => ({
    id: v.id,
    titleEn: v.title.en,
    titleUr: v.title.ur,
    titleAr: v.title.ar,
    categoryEn: 'Video Gallery',
    categoryUr: 'ویڈیو خطابات',
    categoryAr: 'المرئيات',
    excerptEn: v.description.en,
    excerptUr: v.description.ur,
    excerptAr: v.description.ar,
    path: '/media/video',
    tags: ['video', 'ویڈیو', 'خطاب', 'lecture', 'discourses'],
  })),

  // Khitabat & Bayanat (Official YouTube)
  ...VERIFIED_YOUTUBE_VIDEOS.map((yt) => ({
    id: `yt-${yt.id}`,
    titleEn: yt.title,
    titleUr: yt.title,
    titleAr: yt.title,
    categoryEn: yt.isUrsMubarak ? 'Urs Mubarak Lecture' : 'Khitabat & Bayanat',
    categoryUr: yt.isUrsMubarak ? 'عرس مبارک خطاب' : 'خطب و بیانات',
    categoryAr: yt.isUrsMubarak ? 'محاضرة العرس المبارك' : 'الخطب والبيانات',
    excerptEn: `${yt.speaker ? yt.speaker + ' — ' : ''}${yt.description || yt.title}`,
    excerptUr: `${yt.speaker ? yt.speaker + ' — ' : ''}${yt.description || yt.title}`,
    excerptAr: `${yt.speaker ? yt.speaker + ' — ' : ''}${yt.description || yt.title}`,
    path: '/library/khitabat',
    tags: [
      'khitabat',
      'خطاب',
      'bayan',
      'بیان',
      'youtube',
      'یوٹیوب',
      'urs',
      'عرس',
      'sajjan saeen',
      'سجن سائیں',
      yt.isUrsMubarak ? 'urs mubarak' : '',
    ].filter(Boolean),
  })),
];

// Helper to normalize Arabic/Urdu strings for robust search
function normalizeSearchText(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '') // remove arabic tashkeel (fatha, damma, kasra, etc.)
    .replace(/[إأآاٱ]/g, 'ا') // normalize alif variants
    .replace(/[ةهہھۃ]/g, 'ہ') // normalize ha / ta marbuta / heh
    .replace(/[يىیےئ]/g, 'ی') // normalize ya variants
    .replace(/[كک]/g, 'ک') // normalize Arabic and Urdu kaf
    .replace(/[ؤو]/g, 'و') // normalize waw variants
    .replace(/[ـ]/g, '') // remove kashida / tatweel
    .trim();
}

export function performGlobalSearch(query: string, language: 'en' | 'ur' | 'ar'): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) return [];

  const normQuery = normalizeSearchText(trimmed);
  const words = normQuery.split(/\s+/).filter(Boolean);

  const matched = SEARCH_INDEX.filter((item) => {
    // Collect all text from item
    const combined = [
      item.titleEn, item.titleUr, item.titleAr,
      item.categoryEn, item.categoryUr, item.categoryAr,
      item.excerptEn, item.excerptUr, item.excerptAr,
      ...item.tags,
    ].join(' ');

    const normCombined = normalizeSearchText(combined);

    // Check if every search token matches
    return words.every((w) => normCombined.includes(w));
  });

  return matched.map((item) => {
    let title = item.titleEn;
    let category = item.categoryEn;
    let excerpt = item.excerptEn;

    if (language === 'ur') {
      title = item.titleUr;
      category = item.categoryUr;
      excerpt = item.excerptUr;
    } else if (language === 'ar') {
      title = item.titleAr;
      category = item.categoryAr;
      excerpt = item.excerptAr;
    }

    return {
      id: item.id,
      title,
      category,
      excerpt,
      path: item.path,
    };
  });
}
