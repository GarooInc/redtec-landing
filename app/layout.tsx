import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

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
      <body className={`bg-background text-foreground antialiased ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}