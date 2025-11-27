// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// // export const { auth: middleware } = NextAuth(authConfig); 

/*
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { middleware } from './.next/server/chunks/586';

export default function middleware(request: NextRequest) {
  // Your middleware logic here
  console.log('Request to:', request.url);
  return NextResponse.next();
}
  */

export {auth as middleware } from '@/auth'