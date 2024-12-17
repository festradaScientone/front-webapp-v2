'use server'
 
import { cookies } from 'next/headers'
 
export async function createLanguaje(lang) {
  const cookieStore = await cookies() 
  cookieStore.set('language', lang)
  
  /* cookieStore.set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  }) */
}