import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser/client-side Supabase client. Uses the public anon key only —
 * safe to import anywhere.
 */
let browserClient: SupabaseClient | undefined;

export function getSupabaseClient(): SupabaseClient {
  if (!browserClient) {
    browserClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return browserClient;
}
