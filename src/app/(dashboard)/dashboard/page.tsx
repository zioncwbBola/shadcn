// src/app/(dashboard)/page.tsx
import React from 'react';

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      {/* Título do Painel */}
      <div className="bg-base-100 p-4 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <p className="text-sm text-gray-500 mt-1">
          Gerencie seus produtos, pedidos e usuários.
        </p>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Produtos */}
        <div className="bg-primary text-primary-content p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Produtos</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        {/* Card 2: Pedidos */}
        <div className="bg-secondary text-secondary-content p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Pedidos</h2>
          <p className="text-3xl font-bold mt-2">45</p>
        </div>

        {/* Card 3: Usuários */}
        <div className="bg-accent text-accent-content p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Usuários</h2>
          <p className="text-3xl font-bold mt-2">300</p>
        </div>

        {/* Card 4: Vendas do Dia */}
        <div className="bg-neutral text-neutral-content p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Vendas Hoje</h2>
          <p className="text-3xl font-bold mt-2">R$ 1.500,00</p>
        </div>
      </div>

      {/* Seção de Atividades Recentes */}
      <div className="bg-base-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Atividades Recentes</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-sm text-gray-600">
            <span>Pedido #1234 confirmado</span>
            <span>Há 2 horas</span>
          </li>
          <li className="flex justify-between text-sm text-gray-600">
            <span>Novo produto adicionado: Fone Bluetooth</span>
            <span>Ontem</span>
          </li>
          <li className="flex justify-between text-sm text-gray-600">
            <span>Usuário João Silva cadastrado</span>
            <span>Há 3 dias</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
