import React from 'react';
import { goBack, cleanDecoration } from '../../../../utils/helpers';
import * as Styled from '../../../../styles/CardDetails';
const CardDetails = ({ dataCountry }) => {
  return (
    <Styled.Container>
      <Styled.CardDetail>
        <Styled.HeaderDetail>
          <Styled.Emoji>{dataCountry.emoji}</Styled.Emoji>
          <Styled.Name>{dataCountry.name}</Styled.Name>
        </Styled.HeaderDetail>
        <Styled.Data>
          <Styled.DetailContainer>
            <Styled.Info>Capital:</Styled.Info>
            <Styled.Detail>
              {dataCountry.capital ? dataCountry.capital : 'Sin informacion'}
            </Styled.Detail>
          </Styled.DetailContainer>
          <Styled.DetailContainer>
            <Styled.Info>Moneda:</Styled.Info>
            <Styled.Detail>
              {dataCountry.currency ? dataCountry.currency : 'Sin informacion'}
            </Styled.Detail>
          </Styled.DetailContainer>
          <Styled.DetailContainer>
            <Styled.Info>Caract. Tel: </Styled.Info>
            <Styled.Detail>
              {'+'}
              {dataCountry.phone ? dataCountry.phone : 'Sin informacion'}
            </Styled.Detail>
          </Styled.DetailContainer>
          <Styled.DetailContainer>
            <Styled.Info>Nativo: </Styled.Info>
            <Styled.Detail>
              {dataCountry.native ? dataCountry.native : 'Sin informacion'}
            </Styled.Detail>
          </Styled.DetailContainer>
          <Styled.DetailContainer>
            <Styled.Info>Idiomas:</Styled.Info>
            {dataCountry.languages
              ? dataCountry.languages.map((e) => {
                  return <Styled.Detail key={e.name}>{e.name}</Styled.Detail>;
                })
              : 'Sin informacion'}
          </Styled.DetailContainer>
        </Styled.Data>
      </Styled.CardDetail>
      <Styled.Button onClick={goBack}>
        <span>Volver</span>
      </Styled.Button>
    </Styled.Container>
  );
};

export default CardDetails;
