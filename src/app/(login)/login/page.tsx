// src/app/(login)/page.tsx
'use client';

import React, { useState } from 'react';
import LoginForm from '@/components/login/LoginForm';
import SignupForm from '@/components/login/SignupForm';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <section>
      <h1 className="text-2xl font-bold text-center mb-4">
        {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        {isLogin
          ? 'Faça login para acessar o painel administrativo.'
          : 'Preencha o formulário para se cadastrar.'}
      </p>

      {/* Alterna entre os formulários de Login e Signup */}
      {isLogin ? <LoginForm /> : <SignupForm />}

      {/* Link para alternar entre os formulários */}
      <p className="text-center text-sm text-gray-500 mt-4">
        {isLogin ? (
          <>
            Não tem uma conta?{'/login'}
            <button onClick={toggleForm} className="text-primary underline">
              Cadastre-se
            </button>
          </>
        ) : (
          <>
            Já tem uma conta?{'/login'}
            <button onClick={toggleForm} className="text-primary underline">
              Faça login
            </button>
          </>
        )}
      </p>
    </section>
  );
}
