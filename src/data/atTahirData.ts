import { AT_TAHIR_STATIC_ARCHIVE, AtTahirArchiveRecord } from "./atTahirArchive";

export interface AtTahirIssue {
  id: string;
  slug: string;
  filename: string;
  storagePath?: string;
  title: string;
  titleUrdu?: string;
  titleArabic?: string;
  seriesOrIssueNumber: string;
  issue: string; // for backward compatibility with existing card components
  issueNumber?: number | null;
  date: string | null;
  dateUrdu?: string | null;
  dateArabic?: string | null;
  year?: number | null;
  month?: string | null;
  cover?: string | null; // legacy prop
  coverImage?: string | null;
  localCoverUrl?: string | null;
  pdf?: string | null; // legacy prop
  pdfUrl?: string | null; // Primary PDF URL (Cloudflare R2 verified URL)
  localPdfUrl?: string | null; // Local authentic static PDF asset (kept as fallback/migration backup)
  pageCount?: number | null;
  status: "available" | "coming-soon" | "unavailable";
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

/**
 * Cloudflare R2 Public Development URL and Storage Constants.
 * The R2 folder is strictly "at tahiri" (with a space) and must always be URL-encoded as "at%20tahiri".
 */
export const R2_PUBLIC_BASE_URL = "https://pub-1575b9daa1264e2a947279fb12a97a64.r2.dev";
export const R2_AT_TAHIR_FOLDER = "at tahiri";

/**
 * Single centralized helper to construct the properly encoded Cloudflare R2 URL for an At-Tahir publication.
 * Encodes the folder "at tahiri" -> "at%20tahiri" and encodes the filename safely.
 *
 * Example:
 * getAtTahirPdfUrl("Attahir_29.pdf")
 * => "https://pub-1575b9daa1264e2a947279fb12a97a64.r2.dev/at%20tahiri/Attahir_29.pdf"
 */
export function getAtTahirPdfUrl(filename?: string | null): string | null {
  if (!filename) return null;
  let cleanFilename = filename.trim().split("/").pop() || "";
  if (!cleanFilename) return null;
  // Handle alias mapping for series 4-7 to actual R2 object names
  if (/^Attahir_s0([4-7])\.pdf$/i.test(cleanFilename)) {
    cleanFilename = cleanFilename.replace(/^Attahir_s0([4-7])\.pdf$/i, 'Attahir_s$1.pdf');
  }
  const encodedFolder = encodeURIComponent(R2_AT_TAHIR_FOLDER);
  const encodedFile = encodeURIComponent(cleanFilename);
  return `${R2_PUBLIC_BASE_URL}/${encodedFolder}/${encodedFile}`;
}

/**
 * Raw publication records loaded from the local archive data store.
 * Preserves authentic historical metadata locally without any external or Supabase dependency.
 */
export const AT_TAHIR_ARCHIVE_METADATA: AtTahirArchiveRecord[] = AT_TAHIR_STATIC_ARCHIVE;
const RAW_AT_TAHIR_PUBLICATIONS = AT_TAHIR_ARCHIVE_METADATA;

/**
 * Verified At-Tahir PDF filenames confirmed to exist on Cloudflare R2 and tested for HTTP 200/206 byte streaming.
 * Exactly 51 authentic publications (27 series + 24 issues) are verified on R2.
 */
export const VERIFIED_R2_AT_TAHIR_PDFS = new Set([
  // Series 1 to 13 and 15 (Series 14 is historically missing)
  "Attahir_s01.pdf",
  "Attahir_s02.pdf",
  "Attahir_s03.pdf",
  "Attahir_s4.pdf",
  "Attahir_s5.pdf",
  "Attahir_s6.pdf",
  "Attahir_s7.pdf",
  "Attahir_s08.pdf",
  "Attahir_s09.pdf",
  "Attahir_s10.pdf",
  "Attahir_s11.pdf",
  "Attahir_s12.pdf",
  "Attahir_s13.pdf",
  "Attahir_s15.pdf",
  // Series 16 to 28
  "Attahir_s16.pdf",
  "Attahir_s17.pdf",
  "Attahir_s18.pdf",
  "Attahir_s19.pdf",
  "Attahir_s20.pdf",
  "Attahir_s21.pdf",
  "Attahir_s22.pdf",
  "Attahir_s23.pdf",
  "Attahir_s24.pdf",
  "Attahir_s25.pdf",
  "Attahir_s26.pdf",
  "Attahir_s27.pdf",
  "Attahir_s28.pdf",
  // Issues 29 to 42
  "Attahir_29.pdf",
  "Attahir_30.pdf",
  "Attahir_31.pdf",
  "Attahir_32.pdf",
  "Attahir_33.pdf",
  "Attahir_34.pdf",
  "Attahir_35.pdf",
  "Attahir_36.pdf",
  "Attahir_37.pdf",
  "Attahir_38.pdf",
  "Attahir_39.pdf",
  "Attahir_40.pdf",
  "Attahir_41.pdf",
  "Attahir_42.pdf",
  // Issues 57 to 64, 76, 77
  "Attahir_57.pdf",
  "Attahir_58.pdf",
  "Attahir_59.pdf",
  "Attahir_60.pdf",
  "Attahir_61.pdf",
  "Attahir_62.pdf",
  "Attahir_63.pdf",
  "Attahir_64.pdf",
  "Attahir_76.pdf",
  "Attahir_77.pdf",
]);

/**
 * Returns true if an authentic scanned copy of the given PDF exists and is verified on Cloudflare R2.
 */
export function isR2Available(filename?: string | null): boolean {
  if (!filename) return false;
  const clean = filename.trim().split("/").pop() || "";
  if (VERIFIED_R2_AT_TAHIR_PDFS.has(clean)) return true;
  // Handle alias matching (e.g. Attahir_s04.pdf <-> Attahir_s4.pdf)
  const normalized = clean.replace(/_s0([4-7])\.pdf$/i, "_s$1.pdf");
  return VERIFIED_R2_AT_TAHIR_PDFS.has(normalized);
}

/**
 * Maps an authentic PDF filename to its guaranteed static local file path on disk.
 * Kept as an archival backup helper; runtime loading now uses Cloudflare R2.
 */
export function getLocalPdfPath(filename?: string | null): string | null {
  if (!filename) return null;
  const clean = filename.trim().split("/").pop() || "";
  return `/at-tahir/pdfs/${clean}`;
}

/**
 * Maps an authentic PDF filename to its authentic first-page scanned cover thumbnail path
 */
const STATIC_AVAILABLE_SERIES_COVERS = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
]);
const STATIC_AVAILABLE_ISSUE_COVERS = new Set([
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 57, 58, 59, 60, 61, 62, 63, 64, 76, 77,
]);

export function getAuthenticCoverPathForFilename(filename?: string | null): string | null {
  if (!filename) return null;
  const clean = filename.replace(/\.pdf$/i, "");
  const seriesMatch = clean.match(/^Attahir_s0?(\d+)$/i);
  if (seriesMatch) {
    const num = parseInt(seriesMatch[1], 10);
    if (STATIC_AVAILABLE_SERIES_COVERS.has(num)) {
      return `/assets/at-tahir/covers/attahir-s${num}-cover.jpg`;
    }
    return null;
  }
  const issueMatch = clean.match(/^Attahir_(\d+)$/i);
  if (issueMatch) {
    const num = parseInt(issueMatch[1], 10);
    if (STATIC_AVAILABLE_ISSUE_COVERS.has(num)) {
      return `/assets/at-tahir/covers/attahir-${num}-cover.jpg`;
    }
    return null;
  }
  return null;
}

/**
 * Maps publication items to build URLs using Cloudflare R2 as the primary PDF source.
 * Metadata and covers remain 100% local. Zero Supabase dependencies.
 */
export function resolvePublicationUrls(item: AtTahirArchiveRecord): AtTahirIssue {
  const isAvailableOnR2 = isR2Available(item.filename);
  const r2PdfUrl = isAvailableOnR2 ? getAtTahirPdfUrl(item.filename) : null;

  const localCoverPath =
    getAuthenticCoverPathForFilename(item.filename) ||
    item.localCoverUrl ||
    item.coverImage ||
    item.cover ||
    null;

  return {
    ...item,
    status: isAvailableOnR2 ? "available" : "unavailable",
    verified: isAvailableOnR2,
    cover: localCoverPath,
    coverImage: localCoverPath,
    localCoverUrl: localCoverPath,
    pdf: r2PdfUrl,
    pdfUrl: r2PdfUrl,
    localPdfUrl: null, // Runtime decoupled from local PDF files
  };
}

export const AT_TAHIR_PUBLICATIONS: AtTahirIssue[] = RAW_AT_TAHIR_PUBLICATIONS.map(resolvePublicationUrls);

/**
 * Retrieve all At-Tahir publications synchronously (initial catalog)
 */
export function getAtTahirPublications(): AtTahirIssue[] {
  return AT_TAHIR_PUBLICATIONS;
}

/**
 * Returns all At-Tahir publications.
 * Zero Supabase or remote network requests; returns instantly from local project data.
 */
export async function fetchDynamicAtTahirPublications(): Promise<AtTahirIssue[]> {
  return AT_TAHIR_PUBLICATIONS;
}

/**
 * Retrieve a specific publication by its URL slug or issue identifier
 */
export function getAtTahirBySlug(slug: string, publicationList: AtTahirIssue[] = AT_TAHIR_PUBLICATIONS): AtTahirIssue | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return publicationList.find(
    (item) =>
      (item.slug && item.slug.toLowerCase() === normalized) ||
      (item.id && item.id.toLowerCase() === normalized) ||
      (item.filename && item.filename.toLowerCase() === normalized) ||
      (item.filename && item.filename.toLowerCase().replace(".pdf", "") === normalized) ||
      (item.id && item.id.toLowerCase() === `altahir-${normalized}`) ||
      (item.id && item.id.toLowerCase() === `at-tahir-${normalized}`) ||
      (item.slug && item.slug.toLowerCase() === `series-${normalized}`) ||
      (item.slug && item.slug.toLowerCase() === `issue-${normalized}`) ||
      (item.issueNumber !== null && item.issueNumber !== undefined && String(item.issueNumber) === normalized)
  );
}
