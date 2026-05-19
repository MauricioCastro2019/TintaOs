import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

function buildClient() {
  if (!supabaseUrl?.trim() || !supabaseAnonKey?.trim()) return null
  try {
    return createClient(supabaseUrl.trim(), supabaseAnonKey.trim())
  } catch (e) {
    console.warn('[TintaOS] Supabase init failed — using localStorage fallback.', e)
    return null
  }
}

export const supabase = buildClient()
