// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';

// Use environment variables (configure these in your hosting environment)
const supabaseUrl = 'https://mxsjutdmhwivzuxsggmv.supabase.co';
const supabaseKey = 'your-anon-key-here'; // Replace with your actual anon key from Supabase dashboard
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };