const PortfolioPage = () => {
  const projetos = [
    { titulo: 'Projeto 1', imagem: '/images/projeto1.jpg' },
    { titulo: 'Projeto 2', imagem: '/images/projeto2.jpg' },
    { titulo: 'Projeto 3', imagem: '/images/projeto3.jpg' },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Meu Portfólio</h1>
      <div className="carousel w-full">
        {projetos.map((projeto, index) => (
          <div key={index} id={`item${index + 1}`} className="carousel-item w-full">
            <img src={projeto.imagem} className="w-full object-cover rounded-lg" alt={projeto.titulo} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {projetos.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
