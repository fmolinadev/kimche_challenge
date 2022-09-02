import React from 'react';
import LoaderGif from '../../../assets/loader.gif';
import * as Styled from '../../../styles/LoaderStyles';

const Loader = () => {
  return (
    <Styled.Loader>
      <Styled.Gif src={LoaderGif} alt="gif cargando" aria-label="cargando" />
      <Styled.Text>Cargando datos...</Styled.Text>
    </Styled.Loader>
  );
};

export default Loader;
