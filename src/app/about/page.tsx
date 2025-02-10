// src/app/about/page.tsx
'use client';
import React from 'react';

const habilidades = [
    {
      titulo: 'Assistente Administrativo',
      resumo: 'Experiência sólida ao setor Industrial e Comércial.',
      skills: [
        'Gestão de documentos e arquivos',
        'Organização de processos administrativos',
        'Controle de agendas e prazos',
        'Suporte em rotinas financeiras e logísticas',
        'Suporte em rotinas em Recursos Humanos',
        'Comunicação eficaz e trabalho em equipe',
      ],
    },
    {
      titulo: 'Setor Gráfico',
      resumo: 'Atuação em arte final, design gráfico e impressão, unindo criatividade e técnica.',
      skills: [
        'Criação de layouts para impressão e digital',
        'Arte final e preparação de arquivos para gráfica',
        'Edição de imagens e tratamento profissional',
        'Domínio de softwares como Photoshop, Illustrator e CorelDRAW',
        'Gestão de processos de impressão e acabamento',
        'Criação de Identidade Visual',
      ],
    },
    {
      titulo: 'Suporte Técnico (TI)',
      resumo: 'Experiência em suporte técnico de nível 1 ao suporte de campo, resolvendo problemas e otimizando infraestruturas.',
      skills: [
        'Suporte Help Desk (Atendimento ao cliente e apoio presencial)',
        'Diagnóstico e solução de problemas de hardware e software',
        'Configuração de redes e infraestrutura de TI',
        'Manutenção preventiva e corretiva',
        'Atendimento ao usuário com foco em eficiência',
        'Consultoria, Implantação e Remodelagem de Infraestrutura física e operacional dos ativos de TI',
      ],
    },
    {
      titulo: 'Desenvolvimento Web Full Stack',
      resumo: 'Criação de sites e aplicações web com foco em performance, usabilidade e design responsivo.',
      skills: [
        'Desenvolvimento Web-FullStack - PHP, Javascript e Python',
        'Criação de interfaces responsivas e intuitivas',
        'Implementação conforme necessidade do cliente',
        'Integração de APIs e bancos de dados',
        'Otimização de performance e SEO',
      ],
    },
    {
      titulo: 'Marketing Digital',
      resumo: 'Implantação, configuração e gestão de estratégias digitais para aumentar a presença online de marcas.',
      skills: [
        'Planejamento e execução de campanhas digitais',
        'Gestão de redes sociais e criação de conteúdo',
        'Análise de métricas e otimização de resultados',
        'SEO e estratégias de marketing de performance',
        'Automação de marketing e CRM',
      ],
    },
    {
      titulo: 'Consultoria em Sistemas Empresariais e PDV',
      resumo: 'Consultoria especializada para otimização de sistemas empresariais e pontos de venda.',
      skills: [
        'Análise e implementação de sistemas empresariais',
        'Integração de soluções para pontos de venda (PDV)',
        'Treinamento de equipes e suporte técnico especializado',
        'Otimização de processos com foco em tecnologia',
        'Acompanhamento de performance e melhorias contínuas',
      ],
    },
  ];

const SobrePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-8 rounded-lg">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
        Transformando Experiência em Soluções Personalizadas
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {habilidades.map((habilidade, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h2 className="card-title text-xl text-primary">{habilidade.titulo}</h2>
              <p className="text-sm text-neutral-content">{habilidade.resumo}</p>
              <ul className="list-disc list-inside mt-4 text-sm">
                {habilidade.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobrePage;
