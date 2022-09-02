import React from 'react';
import * as Styled from '../../../styles/DefaultMessageStyles';
import Brujula from '../../../assets/brujula.gif';
const Default = () => {
  return (
    <Styled.Default>
      <Styled.Image
        src={Brujula}
        alt="imagen de brujula"
        aria-label="brujula"
      />
      <Styled.Text>No has ingresado un nombre</Styled.Text>
    </Styled.Default>
  );
};

export default Default;
