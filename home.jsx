import React from 'react';

const HomePage = () => {
  return (
    <>
      {/* Navbar (Conceitualmente um componente <Navbar />) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">Foto&Moda</a>
          {/* O caminho da imagem deve ser ajustado em um projeto React */}
          <img src="imagens/slogan.jpg" alt="slogan" className="navbar-slogan" /> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="sobre.html">Sobre</a></li>
              <li className="nav-item"><a className="nav-link" href="editorial.html">Editorial</a></li>
              <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfólio</a></li>
              <li className="nav-item"><a className="nav-link" href="servicos.html">Serviços</a></li>
              <li className="nav-item"><a className="nav-link" href="contato.html">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header / Banner Principal */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Bem-vindo ao Foto&Moda</h1>
          <p className="lead">Transformando momentos em arte e estilo</p>
          <p>Fotografando Moda...</p>
          <p>Capturando a essência da moda através de lentes criativas.</p>
          <p>Porque o seu estilo é a nossa inspiração.</p>
          <a href="portfolio.html" className="btn btn-primary mt-3">Veja o Portfólio</a>
        </div>
      </header>

      {/* Seção Destaques do Mundo da Moda (Carrossel 1) */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Destaques do Mundo da Moda</h2>
        <p className="text-center">Explore Tendências, Editoriais, Estilos e Ensaios Exclusivos do Mundo da Moda</p>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Array de imagens mapeado para JSX */}
            <div className="carousel-item active">
              <img src="img/foto5.jpeg" className="d-block w-100" alt="foto5" />
            </div>
            <div className="carousel-item">
              <img src="img/foto6.jpg" className="d-block w-100" alt="foto6" />
            </div>
            {/* ... Outros 10 slides aqui ... */}
            <div className="carousel-item">
              <img src="img/foto15.jpg" className="d-block w-100" alt="foto15" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </section>

      {/* Banner Secundário */}
      <header className="banner d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <h1><strong>Capturando a Beleza da Moda</strong></h1>
          <p>Fotografias que contam histórias e traz inspiração de tendências e estilos.</p>
          <a href="contato.html" className="btn btn-light btn-lg mt-3">Agende sua Sessão</a>
        </div>
      </header>

      {/* Carrossel de Imagens (Carrossel 2) */}
      <section className="container mt-5">
        <div id="carouselImagens" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Array de imagens mapeado para JSX */}
            <div className="carousel-item active">
              <img src="img/foto1.jpeg" className="d-block w-100" alt="Editorial da Moda" />
            </div>
            <div className="carousel-item">
              <img src="img/foto2.jpeg" className="d-block w-100" alt="Lookbook Fotografico" />
            </div>
            {/* ... Outros slides aqui ... */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselImagens" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselImagens" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </section>

      {/* Footer (Conceitualmente um componente <Footer />) */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 Foto&Moda. Todos os direitos reservados.</p>
          <p>
            Siga-nos: 
            <a href="#" className="text-white">Instagram</a> | 
            <a href="#" className="text-white">Facebook</a> | 
            <a href="#" className="text-white">LinkedIn</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;