import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/types_db'


export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  await supabase.auth.getSession()
  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/register"],
}