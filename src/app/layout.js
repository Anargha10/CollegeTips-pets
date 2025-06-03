// app/layout.js
import './globals.css';
import { Poppins, Pacifico } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
});

export const metadata = {
  title: 'Pet-Friendly City Campaign - Collegetips.in',
  description: 'Join the movement to make cities paw-some!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  );
}