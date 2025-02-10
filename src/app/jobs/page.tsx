/* eslint-disable @typescript-eslint/no-unused-vars */
// // src/app/jobs/page.tsx
// import React from 'react';

// const CurriculoPage: React.FC = () => {
//   return (
        // <div className="min-h-screen bg-base-200 p-4 sm:p-8 rounded-lg">
    //   <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
    //     Meu Currículo
    //   </h1>

    //   <div className="grid gap-6">
    //     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    //       <div className="card-body">
    //         <h2 className="card-title text-xl text-accent">
    //           Experiência Profissional
    //         </h2>
    //         <p className="text-sm text-neutral-content">
    //           Aqui estão alguns dos meus principais cargos e responsabilidades.
    //         </p>
    //         <ul className="list-disc list-inside mt-4 text-sm">
    //           <li>Desenvolvedor Front-end na Empresa A (2019 - 2021)</li>
    //           <li>Desenvolvedor Full-stack na Empresa B (2021 - Presente)</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    //       <div className="card-body">
    //         <h2 className="card-title text-xl text-accent">Educação</h2>
    //         <p className="text-sm text-neutral-content">
    //           Aqui está minha formação acadêmica.
    //         </p>
    //         <ul className="list-disc list-inside mt-4 text-sm">
    //           <li>
    //             Bacharelado em Ciência da Computação, Universidade X (2015 -
    //             2019)
    //           </li>
    //           <li>Certificação em Desenvolvimento Web, Curso Y (2020)</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col p-5 border-l-2 border-primary ml-4 sm:ml-10">
        
    //     {experiencias.map((exp, index) => (
    //       <div key={index} className="mb-8 ml-6">
    //         <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-primary rounded-full ring-4 ring-base-200">
    //           <svg className="w-4 h-4 text-base-100" fill="currentColor" viewBox="0 0 20 20">
    //             <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
    //           </svg>
    //         </span>
    //         <div className="bg-base-100 shadow-md p-4 rounded-lg">
    //           <h3 className="text-lg font-semibold text-accent">{exp.titulo}</h3>
    //           <time className="block mb-2 text-sm text-neutral-content">{exp.ano}</time>
    //           <p className="text-sm text-neutral-content">{exp.descricao}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
//   );
// };

// export default CurriculoPage;
// src/app/curriculo/page.tsx
'use client';
import experiencias from '@/app/jobs/experiencias';
import React from 'react';

const CurriculoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
        Minha Trajetória Profissional
      </h1>

      <div className="relative border-l-2 border-primary ml-4 sm:ml-10">
        {experiencias.map((exp, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-primary rounded-full ring-4 ring-base-200">
              <svg className="w-4 h-4 text-base-100" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
            </span>
            <div className="bg-base-100 shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary">{exp.titulo}</h3>
              <time className="block mb-2 text-sm text-neutral-content">{exp.ano}</time>
              <p className="text-sm text-neutral-content">{exp.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculoPage;
