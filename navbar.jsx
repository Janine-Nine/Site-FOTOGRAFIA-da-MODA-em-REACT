import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">Foto&Moda</a>
        {/* Assumindo que a imagem do slogan está em um local acessível */}
        <img src="imagens/slogan.jpg" alt="slogan" className="navbar-slogan" />
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Em um projeto React real, você usaria o componente <Link> do React Router */}
            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="sobre.html">Sobre</a></li>
            <li className="nav-item"><a className="nav-link" href="editorial.html">Editorial</a></li>
            <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfólio</a></li>
            <li className="nav-item"><a className="nav-link" href="servicos.html">Serviços</a></li>
            <li className="nav-item"><a className="nav-link" href="contato.html">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;