import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://wlckzsurjilleglhizaw.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsY2t6c3VyamlsbGVnbGhpemF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMTAyMTAsImV4cCI6MTk4Njg4NjIxMH0.AoRul-x-hIGvn2DOczWVU3fTDz9xMDCOvKRs3YV0bFA"
)
