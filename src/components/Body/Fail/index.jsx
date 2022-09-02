import React from 'react';
import { Link } from 'react-router-dom';
import FailGif from '../../../assets/error.gif';
import * as Styled from '../../../styles/FailComponentStyles';
import { goBack, cleanDecoration } from '../../../utils/helpers';
const Fail = () => {
  return (
    <Styled.Fail>
      <Styled.Gif src={FailGif} alt="gif error" aria-label="imagen de error" />
      <Styled.Warning>Ups...</Styled.Warning>
      <Styled.Text>Ocurrió un error al cargar la información</Styled.Text>
      <Styled.Button>
        <Link to="/home" style={cleanDecoration}>
          Ir a Home
        </Link>
      </Styled.Button>
    </Styled.Fail>
  );
};

export default Fail;
