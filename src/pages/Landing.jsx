import React from 'react';
import { Link } from 'react-router-dom';
import { cleanDecoration } from '../utils/helpers';
import * as Style from '../styles/LandingStyles';
const Landing = () => {
  return (
    <Style.Landing>
      <Style.LeftSide>
        <Style.TextContainer>
          <Style.Brand>Challenge Dev</Style.Brand>
          <Style.Title>Kimche Countries</Style.Title>
          <Style.Subtitle>
            Para conocer más sobre <br />
            los paises que te interesan.
          </Style.Subtitle>
          <Style.Describe>
            Vos decis el nombre <br />
            ¡y del resto nos encargamos nosotros!
          </Style.Describe>
        </Style.TextContainer>
        <Style.Button>
          <Link to="/home" style={cleanDecoration}>
            Comenzar
          </Link>
        </Style.Button>
      </Style.LeftSide>
      <Style.RightSide></Style.RightSide>
    </Style.Landing>
  );
};

export default Landing;
