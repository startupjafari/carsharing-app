import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/global.css';

const geistSans = Montserrat({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Carsharing WebApp',
  description: 'Веб-приложение каршеринга в СНГ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}
