import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

if (!supabaseURL || !supabaseKey) throw new Error ("Missing API keys for Supabase")

export const supabase = createClient(
    supabaseURL,
    supabaseKey
)
