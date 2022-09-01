import React from 'react';
import { goBack } from '../../../../utils/helpers';
const CardDetails = ({ dataCountry }) => {
  return (
    <>
      <article>
        <header>
          <span>{dataCountry.emoji}</span>
          <h1>{dataCountry.name}</h1>
        </header>
        <div>
          <h5>
            Capital:
            {dataCountry.capital ? dataCountry.capital : 'Sin informacion'}
          </h5>
          <h5>
            Moneda:{' '}
            {dataCountry.currency ? dataCountry.currency : 'Sin informacion'}
          </h5>
          <h5>
            Caract. Tel: +
            {dataCountry.phone ? (
              dataCountry.phone
            ) : (
              <span>Sin informacion</span>
            )}
          </h5>
          <h5>
            Nativo:{' '}
            {dataCountry.native ? (
              dataCountry.native
            ) : (
              <span>Sin informacion</span>
            )}
          </h5>
          <div>
            <h5>Idiomas:</h5>
            {dataCountry.languages ? (
              dataCountry.languages.map((e) => {
                return <span key={e.name}>{e.name}</span>;
              })
            ) : (
              <span>Sin informacion</span>
            )}
          </div>
        </div>
      </article>
      <button onClick={goBack}>Volver</button>
    </>
  );
};

export default CardDetails;
