import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

function Card({ product }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={product.image} alt={`${product.title} `} className="card-img-top" />
      </div>
      <div className=" ">
        <h4 className="card-title">{product.title}</h4>

        <p className='card-price'> $1000  </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // Agrega otras propiedades según sea necesario
  }).isRequired,
};

export default Card;
