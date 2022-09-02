import React from 'react';
import * as Styled from '../../../../styles/CardStyles';
const Card = ({ name, capital, emoji }) => {
  return (
    <Styled.Card>
      <Styled.CardHeader>
        <Styled.HeaderContainer>
          <Styled.Alias>{emoji}</Styled.Alias>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Capital>
            Capital: {capital ? capital : 'Sin datos'}
          </Styled.Capital>
        </Styled.HeaderContainer>
        <div></div>
      </Styled.CardHeader>
    </Styled.Card>
  );
};

export default Card;
