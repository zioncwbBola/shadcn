// src/app/(store)/category/page.tsx
import React from 'react';

export default function CategoryPage() {
  return (
    <section className="space-y-4">
      {/* Título da Categoria */}
      <div className="bg-base-200 p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold">Categoria: Nome da Categoria</h1>
      </div>

      {/* Filtros */}
      <div className="bg-base-100 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Filtros</h2>
        <div className="flex space-x-2 overflow-x-auto">
          <button className="btn btn-sm btn-outline">Preço</button>
          <button className="btn btn-sm btn-outline">Marca</button>
          <button className="btn btn-sm btn-outline">Mais Vendidos</button>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Componente: CardProduto */}
      </div>
    </section>
  );
}
