// src/app/(dashboard)/layout.tsx
import React from 'react';
import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" data-theme="corporate">
      <body className="flex min-h-screen bg-base-200">
        {/* Sidebar */}
        <Sidebar />

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Conteúdo da página */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
