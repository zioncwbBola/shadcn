// src/app/(store)/product/page.tsx
import React from 'react';

export default function ProductPage() {
  return (
    <section className="space-y-4">
      {/* Imagem do Produto */}
      <div className="w-full h-64 bg-base-200 rounded-lg shadow">
        {/* Componente: ImagemProduto */}
      </div>

      {/* Informações do Produto */}
      <div className="bg-base-100 p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold">Nome do Produto</h1>
        <p className="text-lg text-green-600 mt-2">R$ 199,99</p>
        <p className="text-sm text-gray-600 mt-4">Descrição detalhada do produto.</p>
      </div>

      {/* Botão de Compra */}
      <button className="btn btn-primary w-full">Adicionar ao Carrinho</button>

      {/* Avaliações */}
      <div className="bg-base-100 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Avaliações</h2>
        <div className="space-y-2">
          {/* Componente: AvaliacoesProduto */}
        </div>
      </div>
    </section>
  );
}
