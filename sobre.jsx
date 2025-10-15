import React from 'react';

const SobrePage = () => {
  return (
    <>
      {/* Navbar (Omitida para brevidade, mas seria o mesmo componente <Navbar />) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {/* ... código da navbar com link "Sobre" ativo ... */}
      </nav>

      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Sobre Nós</h1>
          <p className="lead">Paixão por moda, fotografia e momentos inesquecíveis em arte e estilo</p>
        </div>
      </header>

      <section className="container my-5">
        <h2 className="mt-4 mb-2" style={{ color: '#ff4ca2' }}><b>Nossa História</b></h2>
        <p>
          O Foto&Moda nasceu da paixão por capturar momentos únicos e transformar em arte. 
          Nossa equipe combina conhecimento de moda, técnica fotográfica e criatividade para criar ensaios e editoriais que refletem personalidade e estilo.
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <h2 className="mt-4 mb-2" style={{ color: '#ff4ca2' }}><b>Visão</b></h2>
            <p>
              Ser referência em fotografia de moda, reconhecida pela qualidade, inovação e atendimento personalizado. 
              Oferecer ensaios fotográficos de alta qualidade, valorizando a autenticidade e a personalidade de cada cliente. 
            </p>
          </div>
          {/* Seu HTML original estava um pouco quebrado aqui, ajustei a estrutura do col/row */}
        </div>

        <h2 className="mt-4 mb-2" style={{ color: '#ff4ca2' }}><b>Missão</b></h2>
        <p>
          Trabalhamos com clientes de todos os estilos, do casual ao fashion editorial, garantindo imagens impactantes, modernas e sofisticadas. 
          Nosso compromisso é tornar cada sessão fotográfica uma experiência única.
        </p>
        
        <h2 className="mt-4 mb-2" style={{ color: '#ff4ca2' }}><b>Valores</b></h2>
        <ul>
          <li>Paixão pela fotografia e moda</li>
          <li>Compromisso com a qualidade e inovação</li>
          <li>Respeito à individualidade de cada cliente</li>
          <li>Ética e profissionalismo em todas as etapas</li>
        </ul>
      </section>

      {/* Seção de Serviços */}
      <section className="container my-5">
        <h2 className="text-center mb-4" style={{ color: '#ff4ca2' }}><b>Nossos Serviços</b></h2>
        <p className="text-center">Oferecemos uma variedade de serviços para atender suas necessidades fotográficas</p>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img src="img/fotografia.jpg" className="card-img-top" alt="Fotografia" />
              <div className="card-body">
                <h5 className="card-title">Fotografia Profissional</h5>
                <p className="card-text">Ensaios, editoriais e portfólios com alta qualidade e estilo único.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img src="img/edicao.jpg" className="card-img-top" alt="Edição" />
              <div className="card-body">
                <h5 className="card-title">Edição e Tratamento</h5>
                <p className="card-text">Tratamento de imagens, retoques e ajustes para resultados impecáveis.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img src="img/consultoria.jpg" className="card-img-top" alt="Consultoria" />
              <div className="card-body">
                <h5 className="card-title">Consultoria de Moda</h5>
                <p className="card-text">Dicas de estilo e orientação para sessões fotográficas e campanhas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container my-5">
        <h2 className="text-center mb-4" style={{ color: '#ff4ca2' }}><b>O que dizem nossos clientes</b></h2>
        <p className="text-center">Veja o que nossos clientes falam sobre nossos serviços</p>
        <div className="row g-4">
          {/* Depoimentos omitidos para brevidade */}
        </div>
        <div className="text-center mt-4">
          <a href="index.html" className="btn btn-custom"><b>Voltar para Home</b></a>
        </div>
      </section>

      {/* Footer (Omitido para brevidade) */}
      <footer className="bg-dark text-white py-4">
        {/* ... código do footer ... */}
      </footer>
    </>
  );
};

export default SobrePage;