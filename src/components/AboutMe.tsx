// src\components\AboutMe.tsx
const AboutMe = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="w-90">
          <h1 className="text-5xl font-bold">ZionCWB - André Lopes Paiva</h1>
          <h2 className="text-2x1 font-semibold">
            Conectando Tecnologia, Design e Estratégia para Resultados Reais.
          </h2>
          <p className="py-6 text-2x1 text-wrap">
          Bem-vindo ao meu portfólio! <br/>
          Aqui você encontra a interseção entre tecnologia, design gráfico e estratégias de marketing digital.<br/>
          Navegue pelo site para conhecer meus projetos, minha experiência profissional e como posso agregar valor ao seu negócio.
          </p>
          <button className="btn btn-primary">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
