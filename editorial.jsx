import React from 'react';

const EditorialPage = () => {
  return (
    <>
      {/* Navbar (Omitida para brevidade) */}

      {/* Banner Principal Editorial */}
      <header className="bg-info text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Editorial de Moda</h1>
          <p className="lead">Inspiração, estilo e criatividade em cada clique</p>
        </div>
      </header>

      {/* Banner de Chamada */}
      <header className="banner">
        <div className="container text-center">
          <h1><strong>Editorial de Moda</strong></h1>
          <p>Veja os editoriais mais recentes e tendências do mundo fashion.</p>
          <p className="card-text">Criação de editoriais para revistas, campanhas e portfólios.</p>
          <a href="portfolio.html" className="btn btn-custom"><b>Ver Portfólio</b></a>
        </div>
      </header>

      {/* Seção de Editoriais Destaque */}
      <section className="container mt-5">
        <h2 className="text-center"><b>Tendências e Ensaios Fotográficos</b></h2>
        <p className="text-center">Confira os editoriais de moda mais recentes do ano.</p>
        <div className="row mt-4 justify-content-center">
          {/* Editorial Verão 2025 */}
          <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card">
              <img src="verao 2025/Verão2025.jpg" className="card-img-top" alt="Editorial de Moda Verão 2025" />
              <div className="card-body">
                <h5 className="card-title"><b>Verão 2025</b></h5>
                <p className="card-text">Explorando tons vibrantes e florais com tecidos leves para a temporada.</p>
              </div>
            </div>
          </div>
          {/* Editorial Inverno 2025 */}
          <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card">
              <img src="inverno 2025/Inverno2025.jpg" className="card-img-top" alt="Editorial de Moda Inverno 2025" />
              <div className="card-body">
                <h5 className="card-title"><b>Inverno 2025</b></h5>
                <p className="card-text">Tons sóbrios e tecidos pesados para a temporada mais fria do ano.</p>
              </div>
            </div>
          </div>
          {/* Editorial Alta Costura */}
          <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card">
              <img src="alta costura/AltaCostura.jpg" className="card-img-top" alt="Alta Costura Elegância" />
              <div className="card-body">
                <h5 className="card-title"><b>Alta Costura</b></h5>
                <p className="card-text">Elegância e sofisticação nos ensaios fotográficos de moda.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carrossel de Imagens de Editorial */}
        <div className="mt-5">
          <div id="carouselImagens" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Slides do Editorial omitidos para brevidade */}
            </div>
            {/* Controles do Carrossel omitidos para brevidade */}
          </div>
        </div>
        
        <div className="text-center mt-4">
          <a href="index.html" className="btn btn-custom"><b>Voltar para Home</b></a>
        </div>
      </section>

      {/* Footer (Omitido para brevidade) */}
    </>
  );
};

export default EditorialPage;