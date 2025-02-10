// src/app/(store)/store/page.tsx
import React from 'react';

export default function StorePage() {
  return (
    <section className="space-y-4">
      {/* Banner ou Carrossel */}
      <div className="carousel w-full bg-base-300 rounded-lg shadow">
        {/* Componente: Banner/Carrossel */}
        <div className="carousel-item w-full h-40"></div>
      </div>

      {/* Produtos em Destaque */}
      <div className="bg-base-100 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Produtos em Destaque</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Componente: CardProduto */}
        </div>
      </div>
    </section>
  );
}
