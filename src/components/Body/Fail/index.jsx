import React from 'react';
import { goBack } from '../../../utils/helpers';
const Fail = ({ msg }) => {
  return (
    <div>
      <div>
        <h2>Error</h2>
        <p>Algo salio mal al cargar los datos</p>
        <button onClick={goBack}></button>
      </div>
      <span>Más detalles:</span>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Fail;
