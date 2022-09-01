import React from 'react';

const Card = ({ name, capital, emoji, lenguages }) => {
  return (
    <article>
      <header>
        <div>
          <h3>Nombre: {name}</h3>
          <span>{emoji}</span>
        </div>
      </header>
      <div>
        <h6>Capital: {capital}</h6>
      </div>
    </article>
  );
};

export default Card;
