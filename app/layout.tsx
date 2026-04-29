import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar';

// Using Inter for that sharp, modern, SaaS/startup aesthetic
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Vinay | Technical Product Manager',
  description: 'Bridging enterprise engineering execution with product strategy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#FAFAFA] text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white`}>
        <Navbar />
        {/* Pages manage their own layout and padding */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
