import React from 'react';

// 'children' é uma propriedade especial do React que representa o conteúdo aninhado
const Main = ({ children }) => {
  return (
    // Você pode adicionar classes de padding e margem comuns a todas as páginas aqui
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
  );
};

export default Main;