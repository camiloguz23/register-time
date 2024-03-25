import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--montserrat'
});

export const metadata: Metadata = {
  title: 'Register Time',
  description: 'Pagina donde se puede registrar el tiempo mensualmente',
  manifest: '/manifest.json',
  icons: {
    apple: '/.icon.png'
  },
  themeColor: '#3569f6'
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='es' className={montserrat.className}>
      <body>
        {children}
        {modal}
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
