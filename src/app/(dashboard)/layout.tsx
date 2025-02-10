// src/app/(dashboard)/layout.tsx
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Dashboard - ZionCWB',
  description: 'Painel administrativo para gestão de conteúdos e loja',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="business">
      <body className="min-h-screen bg-base-200">
        {/* Sidebar do Dashboard */}
        <aside className="w-64 bg-base-100 p-4 shadow-lg min-h-screen">
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-6 bg-base-300 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
