import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center footer">
        <p>&copy; 2025 Foto&Moda. Todos os direitos reservados.</p>
        <p>
          Siga-nos: 
          <a href="#" className="text-white mx-2">Instagram</a> | 
          <a href="#" className="text-white mx-2">Facebook</a> | 
          <a href="#" className="text-white mx-2">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;