import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xxnkqekirvdjruvpwjjq.supabase.co'
const supabaseAnonKey = 'sb_publishable_8YQU0zmnqNijynnwAScDsw_Rp8jL42J'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
