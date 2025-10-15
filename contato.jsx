import React from 'react';

const ContatoPage = () => {
  return (
    <>
      {/* Navbar (Omitida para brevidade) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {/* ... código da navbar com link "Contato" ativo ... */}
      </nav>

      <header className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Contato</h1>
          <p className="lead">Fale conosco e comece seu projeto</p>
        </div>
      </header>

      <section className="container my-5">
        <h2 className="text-center mb-4">Entre em Contato</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="text-center mb-4">
              Use o formulário abaixo para solicitar orçamentos, agendar uma reunião ou tirar dúvidas.
              Estamos prontos para atender você!
            </p>

            {/* Início do Formulário (Ação deve ser definida no backend) */}
            <form action="seu_script_de_processamento_aqui.php" method="POST">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome Completo</label>
                <input type="text" className="form-control" id="nome" name="nome" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">Telefone (Opcional)</label>
                <input type="tel" className="form-control" id="telefone" name="telefone" />
              </div>
              <div className="mb-3">
                <label htmlFor="assunto" className="form-label">Assunto</label>
                <select className="form-select" id="assunto" name="assunto" required>
                  <option value="">Selecione um Assunto</option>
                  <option value="orcamento_editorial">Orçamento Editorial de Moda</option>
                  <option value="orcamento_portfolio">Orçamento Portfólio de Modelo</option>
                  <option value="duvidas_gerais">Dúvidas Gerais</option>
                  <option value="parceria">Proposta de Parceria</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem / Detalhes do Projeto</label>
                <textarea className="form-control" id="mensagem" name="mensagem" rows="4" required></textarea>
              </div>
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Enviar Mensagem
                </button>
              </div>
            </form>
            {/* Fim do Formulário */}

            <hr className="my-5" />

            {/* Informações de Contato Adicionais */}
            <div className="text-center">
              <h3>Informações Adicionais</h3>
              <p className="lead mt-3">
                <i className="bi bi-envelope me-2"></i> E-mail: <a href="mailto:contato@fotoemoda.com" className="text-decoration-none text-dark">contato@fotoemoda.com</a>
              </p>
              <p className="lead">
                <i className="bi bi-phone me-2"></i> Telefone: (00) 1234-5678
              </p>
              <p className="lead">
                <i className="bi bi-geo-alt me-2"></i> Localização: [Sua Cidade/Estúdio Principal]
              </p>
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

export default ContatoPage;