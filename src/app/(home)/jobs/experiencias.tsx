/* eslint-disable @typescript-eslint/no-unused-vars */
// // src/app/jobs/page.tsx
// import React from 'react';
// const CurriculoPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-base-200 p-4 sm:p-8">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
//         Minha Trajetória Profissional
//       </h1>
//       <div className="relative border-l-2 border-primary ml-4 sm:ml-10">
//         {experiencias.map((exp, index) => (
//           <div key={index} className="mb-8 ml-6">
//             <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-primary rounded-full ring-4 ring-base-200">
//               <svg className="w-4 h-4 text-base-100" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
//               </svg>
//             </span>
//             <div className="bg-base-100 shadow-md p-4 rounded-lg">
//               <h3 className="text-lg font-semibold text-accent">{exp.titulo}</h3>
//               <time className="block mb-2 text-sm text-neutral-content">{exp.ano}</time>
//               <p className="text-sm text-neutral-content">{exp.descricao}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CurriculoPage;
// src/app/curriculo/page.tsx
'use client';
const experiencias = [
  {
    ano: 'Atual',
    titulo: 'Consultor de Sistemas Empresariais e PDV',
    descricao:
      'Consultoria especializada na implementação e otimização de sistemas empresariais e soluções para pontos de venda, com foco em eficiência e personalização.',
  },
  {
    ano: '2022 - 2023',
    titulo: 'Desenvolvedor Web Full Stack',
    descricao:
      'Criação de aplicações web com Next.js, TypeScript e Tailwind CSS. Foco em design responsivo, integração de APIs e otimização de performance.',
  },
  {
    ano: '2020 - 2022',
    titulo: 'Especialista em Marketing Digital',
    descricao:
      'Implantação e gestão de estratégias digitais, incluindo SEO, campanhas pagas e automação de marketing para diversas marcas.',
  },
  {
    ano: '2017 - 2020',
    titulo: 'Suporte Técnico (Help Desk e Campo)',
    descricao:
      'Atuação no suporte técnico de nível 1 até suporte de campo, solucionando problemas de hardware, software e infraestrutura de TI.',
  },
  {
    ano: '2015 - 2017',
    titulo: 'Designer Gráfico e Arte Finalista',
    descricao:
      'Criação de materiais gráficos para impressão e digital, incluindo arte final e processos de impressão.',
  },
  {
    ano: '2013 - 2015',
    titulo: 'Assistente Administrativo',
    descricao:
      'Organização de processos administrativos, gestão de documentos e suporte operacional para equipes e setores diversos.',
  },
];
export default experiencias;
