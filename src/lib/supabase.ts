import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_STORAGE_BUCKET,
  isSupabaseConfigured,
} from '../config/supabase';

let supabaseInstance: SupabaseClient | null = null;
let isSupabaseServiceAvailable = true;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      });
    } catch (e) {
      console.error('Failed to initialize Supabase client:', e);
      return null;
    }
  }
  return supabaseInstance;
}

export function isSupabaseOnline(): boolean {
  return isSupabaseConfigured() && isSupabaseServiceAvailable;
}

export function markSupabaseUnavailable(): void {
  isSupabaseServiceAvailable = false;
}

export function getStoragePdfUrl(
  filePath: string,
  bucketName: string = SUPABASE_STORAGE_BUCKET
): string {
  const client = getSupabaseClient();
  if (!client) return '';
  const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
  const { data } = client.storage.from(bucketName).getPublicUrl(cleanPath);
  return data?.publicUrl || '';
}

export {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_STORAGE_BUCKET,
  isSupabaseConfigured,
};
