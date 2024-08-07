import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--roboto'
});

export const metadata: Metadata = {
  title: 'Register Time',
  description: 'Pagina donde se puede registrar el tiempo mensualmente o diariamente',
  manifest: '/manifest.json',
  themeColor: '#3569f6',
  authors: [{ name: 'Jeyson Camilo Guzman Rico', url: 'https://www.jeysonguzman.online/' }],
  keywords:
    'time,register,registro,admin,manager,management,time registration, daily time tracking, monthly time management, time management tool, productivity app, time tracking software, time management system, time log, time tracking app, time management for managers, time management for admin',
  creator: 'Jeyson Camilo Guzman Rico',
  openGraph: {
    type: 'website',
    siteName: 'Register Time',
    description: 'Pagina para hacer registro del tiempo',
    images: [
      {
        url: 'https://www.pngfind.com/pngs/m/215-2156263_reloj-png-vector-transparent-png.png', // Asegúrate de reemplazar esto con la URL real de tu imagen
        width: 800,
        height: 600,
        alt: 'Imagen descriptiva de Register Time'
      },
      {
        url: 'https://www.pngfind.com/pngs/m/215-2156263_reloj-png-vector-transparent-png.png', // Asegúrate de reemplazar esto con la URL real de tu imagen grande
        width: 1800,
        height: 1600,
        alt: 'Imagen descriptiva grande de Register Time'
      }
    ],
    locale: 'es_ES', // Ajusta esto según el idioma de tu contenido
    url: 'https://register-time.vercel.app/'
  },
  robots: 'index,follow',
  referrer: 'no-referrer',
  generator: 'Next.js 14',
  colorScheme: 'light dark',
  viewport: 'width=device-width, initial-scale=1.0',
  publisher: 'Jeyson Camilo Guzman Rico'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ViewTransitions>
      <html lang='es' className={robotoMono.variable}>
        <head>
          <link rel='icon' href='/icon-192x192.png' type='image/x-icon' sizes='any' />
        </head>
        <body>
          {children}
          <Toaster position='top-right' />
        </body>
      </html>
    </ViewTransitions>
  );
}
