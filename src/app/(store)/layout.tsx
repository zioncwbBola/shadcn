// src/app/(store)/layout.tsx
import React from 'react';
import type { ReactNode } from 'react';

interface StoreLayoutProps {
  children: ReactNode;
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Componente: Navbar da loja */}
      <header className="p-4 bg-base-200 shadow">
        <h1 className="text-xl font-bold">Minha Loja</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="p-4">{children}</main>

      {/* Componente: Rodapé da loja */}
      <footer className="p-4 bg-base-200 text-center text-sm text-gray-500">
        © 2025 Minha Loja. Todos os direitos reservados.
      </footer>
    </div>
  );
}
