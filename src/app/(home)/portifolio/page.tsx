// // src\app\portifolio\page.tsx
// const PortfolioPage = () => {
//   const projetos = [
//     { titulo: 'Projeto 1', imagem: '/images/projeto1.jpg' },
//     { titulo: 'Projeto 2', imagem: '/images/projeto2.jpg' },
//     { titulo: 'Projeto 3', imagem: '/images/projeto3.jpg' },
//   ];

//   return (
//     <div className="min-h-screen bg-base-200 p-4">
//       <h1 className="text-4xl font-bold text-center text-primary mb-8">Meu Portfólio</h1>
//       <div className="carousel w-full">
//         {projetos.map((projeto, index) => (
//           <div key={index} id={`item${index + 1}`} className="carousel-item w-full">
//             <img src={projeto.imagem} className="w-full object-cover rounded-lg" alt={projeto.titulo} />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4 space-x-2">
//         {projetos.map((_, index) => (
//           <a key={index} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PortfolioPage;
// src/app/portfolio/page.tsx
'use client';
import React from 'react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-8 rounded-lg">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
        Meu Portfólio
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-xl text-accent">Projeto A</h2>
            <p className="text-sm text-neutral-content">Um projeto de desenvolvimento de aplicativo para gerenciamento de tarefas.</p>
            <a href="#" className="btn btn-primary text-white">Ver Projeto</a>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-xl text-accent">Projeto B</h2>
            <p className="text-sm text-neutral-content">Criação de site para uma empresa de e-commerce, com integração de pagamento.</p>
            <a href="#" className="btn btn-primary text-white">Ver Projeto</a>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-xl text-accent">Projeto C</h2>
            <p className="text-sm text-neutral-content">Desenvolvimento de sistema de gestão para pequenas empresas com integração de estoque.</p>
            <a href="#" className="btn btn-primary text-white">Ver Projeto</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
