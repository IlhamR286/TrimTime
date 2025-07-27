import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TrimTime',
  description: 'Booking cukur barbershop online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-50 text-gray-900'}>
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
