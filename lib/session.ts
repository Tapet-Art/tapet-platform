import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';

// import { authOptions } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await getSession()

  return session?.user
}
