
// src/app/contact/page.tsx
'use client';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-8 rounded-lg">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
        Vamos Conversar!
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-xl text-accent">Entre em Contato</h2>
            <p className="text-sm text-neutral-content">Envie uma mensagem direta e vamos discutir como podemos colaborar.</p>
            <ul className="list-disc list-inside mt-4 text-sm">
              <li>Email: contato@exemplo.com</li>
              <li>Telefone: (11) 98765-4321</li>
              <li>LinkedIn: linkedin.com/in/exemplo</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-xl text-accent">Redes Sociais</h2>
            <p className="text-sm text-neutral-content">Siga-me nas redes sociais para mais atualizações e conteúdos interessantes.</p>
            <ul className="list-disc list-inside mt-4 text-sm">
              <li>Instagram: @exemplo</li>
              <li>Twitter: @exemplo</li>
              <li>Facebook: @exemplo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
