/**
 * Supabase Configuration for At-Tahir Remote Repository Verification
 */

const DEFAULT_URL = 'https://qeofyuwnpzvyvbwsxluf.supabase.co';
const DEFAULT_ANON_KEY =
  'sb_publishable_i0sVWKhVEZDCMza1m19hqg_CMFkZbbq';
const DEFAULT_BUCKET = 'at-tahir-pdfs';

let rawUrl = (import.meta.env.VITE_SUPABASE_URL || DEFAULT_URL).trim();
if (rawUrl && !rawUrl.startsWith('http://') && !rawUrl.startsWith('https://')) {
  rawUrl = `https://${rawUrl}.supabase.co`;
}

export const SUPABASE_URL: string = rawUrl;
export const SUPABASE_ANON_KEY: string = (
  import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_ANON_KEY
).trim();
export const SUPABASE_STORAGE_BUCKET: string = (
  import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || DEFAULT_BUCKET
).trim();

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    SUPABASE_URL &&
    SUPABASE_URL.startsWith('http') &&
    SUPABASE_ANON_KEY &&
    SUPABASE_ANON_KEY.length > 10 &&
    SUPABASE_STORAGE_BUCKET
  );
};
