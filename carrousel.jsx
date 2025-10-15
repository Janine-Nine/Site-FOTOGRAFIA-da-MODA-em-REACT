import React from 'react';

// Props esperadas: id, images (array de objetos { src, alt })
const Carrossel = ({ id, images }) => {
  if (!images || images.length === 0) return null; // Não renderiza se não houver imagens

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img 
              src={image.src} 
              className="d-block w-100" 
              alt={image.alt} 
            />
          </div>
        ))}
      </div>
      
      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Carrossel;