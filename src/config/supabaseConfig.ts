import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.SUPABASE_URL!;
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabaseUrl = 'https://wxibsezkqqbfflonpjbm.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4aWJzZXprcXFiZmZsb25wamJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNDcxNjMsImV4cCI6MjA1ODcyMzE2M30.xm8G78qKoPph69wftVDAMvmsN2WePkk0Z8V3DRldUv4';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
