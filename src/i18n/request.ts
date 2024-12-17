import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
    const cookieStore = await cookies()
    const locale = cookieStore.get('language')?.value || 'en'
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  //const locale = 'en';
 
  return {
    locale,
    messages: (await import(`../../languages/${locale}.json`)).default
  };
});