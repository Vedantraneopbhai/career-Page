import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mxsjutdmhwivzuxsggmv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14c2p1dGRtaHdpdnp1eHNnZ212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNDQ0NDksImV4cCI6MjA1ODYyMDQ0OX0.j78qfJ_iM7n9SUCWEXapvJo9kvbxgL1f30ad7ROFNv8'

export const supabase = createClient(supabaseUrl, supabaseKey)
