import React from 'react';

const ServicosPage = () => {
  return (
    <>
      {/* Navbar (Omitida para brevidade, mas seria o mesmo componente <Navbar />) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {/* ... código da navbar com link "Serviços" ativo ... */}
      </nav>

      <header className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Nossos Serviços</h1>
          <p className="lead">Oferecemos soluções completas em fotografia, produção e estilo</p>
        </div>
      </header>

      {/* Banner de Chamada para Serviços */}
      <header className="banner">
        <div className="container text-center">
          <h1><strong>Nossos Serviços</strong></h1>
          <p>
            Temos uma gama completa de serviços para atender todas as suas necessidades
            de fotografia de moda e produção.
          </p>
          <a href="contato.html" className="btn btn-custom">
            <b>Solicitar Orçamento</b>
          </a>
        </div>
      </header>

      {/* Detalhes dos Serviços */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Serviços Oferecidos</h2>
        <p className="text-center">
          Cada serviço é adaptado para garantir a melhor representação visual do seu estilo ou marca.
        </p>

        <div className="row mt-4 g-4">
          {/* Serviço 1: Editorial de Moda */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="img/editorial.jpg" className="card-img-top" alt="Editorial de Moda" />
              <div className="card-body">
                <h5 className="card-title">Editorial de Moda</h5>
                <p className="card-text">
                  Criação de histórias visuais para revistas, blogs e campanhas. 
                  Inclui conceito, produção e pós-produção.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 2: Lookbook e E-commerce */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="img/lookbook.jpg" className="card-img-top" alt="Lookbook e E-commerce" />
              <div className="card-body">
                <h5 className="card-title">Lookbook e E-commerce</h5>
                <p className="card-text">
                  Fotografia de produtos de vestuário em modelos ou *still* para vendas online e catálogos.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 3: Portfólio de Modelo */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="img/portfolio_modelo.jpg" className="card-img-top" alt="Portfólio de Modelo" />
              <div className="card-body">
                <h5 className="card-title">Portfólio de Modelo</h5>
                <p className="card-text">
                  Desenvolvimento de portfólios profissionais, completos e 
                  atualizados para agências e castings.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 4: Styling e Produção */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="img/styling.jpg" className="card-img-top" alt="Styling e Produção" />
              <div className="card-body">
                <h5 className="card-title">Styling e Produção</h5>
                <p className="card-text">
                  Serviços de stylist (criação de looks) e coordenação de produção para ensaios complexos.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 5: Retratos Corporativos Fashion */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="img/retratos.jpg" className="card-img-top" alt="Retratos Corporativos Fashion" />
              <div className="card-body">
                <h5 className="card-title">Retratos Corporativos Fashion</h5>
                <p className="card-text">
                  Retratos profissionais com um toque de moda, ideais para marcas pessoais e LinkedIn.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 6: Eventos de Moda */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="img/eventos.jpg" className="card-img-top" alt="Eventos de Moda" />
              <div className="card-body">
                <h5 className="card-title">Eventos de Moda</h5>
                <p className="card-text">
                  Cobertura fotográfica de desfiles, lançamentos de coleções e eventos do setor.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <a href="index.html" className="btn btn-custom">
            <b>Voltar para Home</b>
          </a>
        </div>
      </section>

      {/* Footer (Omitido para brevidade) */}
    </>
  );
};

export default ServicosPage;