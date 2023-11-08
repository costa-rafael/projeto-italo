import { createClient } from '@supabase/supabase-js';
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://ifxjjtpwuuobwmboqxnr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeGpqdHB3dXVvYndtYm9xeG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyODg5NzgsImV4cCI6MjAxNDg2NDk3OH0.FYHVVCgnbAkei0Jc6wleQoIZ6OoOU2-MEtFnD3swdiE'
const supabase = createClient ( supabaseUrl , supabaseKey )
supabase.auth.onAuthStateChange((event, session) =>{

  const{use} =useAuthUser()
  user.value = session?.user || null
})

//console.log('init supabase:', supabase)

export default function useSupabase (){
  return {supabase}
}
