// src/app/(login)/layout.tsx
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Login - ZionCWB',
  description: 'Área de login para acesso ao painel administrativo e loja',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="corporate">
      <body className="min-h-screen bg-base-200">
        <div className="w-full max-w-md flex  p-6 bg-base-100 rounded-lg shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
