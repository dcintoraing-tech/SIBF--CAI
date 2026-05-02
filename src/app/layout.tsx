import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'SIBF-CAI | Presentación Ejecutiva',
  description: 'Sistema inteligente de control de asistencia para la gestión institucional avanzada.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
