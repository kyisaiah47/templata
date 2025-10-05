import { createClient } from '@supabase/supabase-js';

// Supabase client for database operations
// Using Supabase instead of Prisma for direct SQL access
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Legacy export for compatibility - maps to Supabase
export const prisma = supabase;

// Helper function (no-op for Supabase)
export const disconnectPrisma = async () => {
  // Supabase doesn't require manual disconnection
};
