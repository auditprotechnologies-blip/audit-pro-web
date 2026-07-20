import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://euykwxmksgkxvbhedltj.supabase.co";
const supabaseAnonKey = "sb_publishable_NXeDY34Q_uWi5kGNrcsc8g_eEQ91nGI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);