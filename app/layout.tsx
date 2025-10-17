import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Redtec',
  description: 'AI Agents That Work While You Think',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        {/* Runs before any interactive code, belongs in <head> */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          `}
        </Script>

        <Script
          id="gtm-script"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-P3XGLPWH"
          strategy="afterInteractive"
        />
      </head>

      <body className={`bg-background text-foreground antialiased ${poppins.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3XGLPWH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
