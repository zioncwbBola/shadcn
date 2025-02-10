// src/components/login/SignupForm.tsx
'use client';

import React, { useState } from 'react';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    // Lógica para criar uma nova conta aqui
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Nome</span>
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">E-mail</span>
        </label>
        <input
          type="email"
          id="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Senha</span>
        </label>
        <input
          type="password"
          id="password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Cadastrar
      </button>
    </form>
  );
}
