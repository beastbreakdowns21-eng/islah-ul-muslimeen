/**
 * Authentic At-Tahir Historical Publication Archive
 * 100% Local Project Static Data Store
 * Zero external or Supabase dependencies.
 */
import ARCHIVE_METADATA_JSON from './atTahirArchiveMetadata.json';

export interface AtTahirArchiveRecord {
  id: string;
  slug: string;
  filename: string;
  title: string;
  titleUrdu?: string;
  titleArabic?: string;
  seriesOrIssueNumber: string;
  issue: string;
  issueNumber?: number | null;
  date: string | null;
  dateUrdu?: string | null;
  dateArabic?: string | null;
  year?: number | null;
  month?: string | null;
  pageCount?: number | null;
  cover?: string | null;
  coverImage?: string | null;
  localCoverUrl?: string | null;
  pdfPath?: string | null;
  status: 'available' | 'coming-soon' | 'unavailable';
  verified: boolean;
  topics?: string[] | null;
  description: {
    en: string | null;
    ur?: string | null;
    ar?: string | null;
  };
  publisher: {
    en: string;
    ur?: string;
    ar?: string;
  };
  language: string;
  category: string;
}

export const AT_TAHIR_STATIC_ARCHIVE: AtTahirArchiveRecord[] = ARCHIVE_METADATA_JSON as AtTahirArchiveRecord[];
