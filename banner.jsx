import React from 'react';

// Props esperadas: title, text, buttonText, buttonLink
const Banner = ({ title, text, buttonText, buttonLink }) => {
  return (
    <header className="banner d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h1><strong>{title}</strong></h1>
        <p>{text}</p>
        {buttonText && ( // Renderiza o botão apenas se houver texto
          <a href={buttonLink || '#'} className="btn btn-custom mt-3">
            <b>{buttonText}</b>
          </a>
        )}
      </div>
    </header>
  );
};

export default Banner;