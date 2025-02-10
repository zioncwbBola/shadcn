// src/app/(login)/page.tsx
import React from 'react';
import LoginForm from '@/components/login/LoginForm';

export default function LoginPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center mb-4">Bem-vindo de volta!</h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Faça login para acessar o painel administrativo.
      </p>

      {/* Componente de Formulário de Login */}
      <LoginForm />
    </section>
  );
}
