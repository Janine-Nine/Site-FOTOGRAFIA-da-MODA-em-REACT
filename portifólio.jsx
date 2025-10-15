import React from 'react';

const PortfolioPage = () => {
  return (
    <>
      {/* Navbar (Omitida para brevidade) */}

      <header className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Portfólio</h1>
          <p className="lead">Confira nossos melhores trabalhos</p>
        </div>
      </header>

      {/* Portfólio Destaque (Introdução) */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Portfólio</h2>
          <p className="text-center">Explore uma seleção dos nossos melhores trabalhos em fotografia de moda, capturando estilo, elegância e criatividade.</p>
          <div className="text-center mt-4">
            <a href="portfolio.html" className="btn btn-outline-dark">Ver Todos</a>
          </div>
        </div>
      </section>

      {/* Banner de Chamada para Editorial */}
      <header className="banner">
        <div className="container text-center">
          <h1><strong>Meu Portfólio de Fotografia de Moda</strong></h1>
          <p>Conheça alguns dos meus trabalhos em fotografia de moda.</p>
          <a href="editorial.html" className="btn btn-custom"><b>Ver Editorial</b></a>
        </div>
      </header>

      {/* Galeria de Fotos */}
      <section className="container mt-5">
        <div className="row">
          {/* Bloco de Imagens (Apenas os dois primeiros blocos do seu HTML) */}
          <div className="col-md-4 mb-4">
            <img src="imagem/foto de moda 1.png" className="img-fluid portfolio-img" alt="foto 1" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="imagem/foto de moda 2.jpg" className="img-fluid portfolio-img" alt="Foto 2" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="imagem/foto de moda 3.jpg" className="img-fluid portfolio-img" alt="Foto 3" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <img src="imagem/foto de moda 4.jpg" className="img-fluid portfolio-img" alt="Foto 4" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="imagem/foto de moda 5.jpg" className="img-fluid portfolio-img" alt="Foto 5" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="imagem/foto de moda 6.jpg" className="img-fluid portfolio-img" alt="Foto 6" />
          </div>
        </div>
        {/* ... Os blocos restantes de fotos (7, 8, etc.) continuariam aqui ... */}
      </section>

      {/* Footer (Omitido para brevidade) */}
    </>
  );
};

export default PortfolioPage;