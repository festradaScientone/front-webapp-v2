import { ClientProvider } from "@/providers/clerk-prov";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import "./globals.css";

export const metadata = {
  title: {
    template: '%s | Elli',
    default: 'Elli',
  },
  description: 'The official Elli bot.',
  metadataBase: new URL('https://nextjs-dashboard-Elli.vercel.app'),
  keywords: ['Next.js 14', 'Elli', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'Elli Dashboard',
    description: 'The official Elli bot.',
    url: 'https://nextjs-dashboard-Elli.vercel.app',
    type: 'website',
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sef1nds.css" />
      </head>
      <body>
        <ClientProvider>     
          <NextIntlClientProvider messages={messages}>     
          {children}         
          </NextIntlClientProvider> 
        </ClientProvider>
      </body>
    </html>
  );
}
