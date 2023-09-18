import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { MainNav } from '@/components/main-nav';
import { FooterNav } from '@/components/footer-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Youssef Ojeil Portfolio',
  description: 'Youssef Ojeil Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav />
          <div className="flex-1">{children}</div>
          <FooterNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
