import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
// Importa a página Home como exemplo
import HomePage from './pages/HomePage'; // Supondo que você criou HomePage.jsx

// Função para simular o estado de qual página deve ser mostrada
const getCurrentPage = (path) => {
  // Em um projeto real, isso usaria o React Router (ex: <BrowserRouter>)
  switch (path) {
    // case '/sobre': return <SobrePage />;
    // case '/contato': return <ContatoPage />;
    case '/': 
    default: 
      return <HomePage />;
  }
};

const App = () => {
  // Em React, você usaria o React Router para gerenciar as rotas
  const currentPage = getCurrentPage(window.location.pathname);

  return (
    <>
      {/* 1. Componente de Navegação */}
      <Navbar /> 
      
      {/* 2. Área de Conteúdo Principal */}
      <Main>
        {currentPage} {/* Renderiza o conteúdo da página atual (ex: HomePage) */}
      </Main>
      
      {/* 3. Componente de Rodapé */}
      <Footer />
    </>
  );
};

export default App;