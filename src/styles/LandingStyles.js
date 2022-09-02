import styled from 'styled-components';
import imageBack from '../assets/map_background.jpg';

export const Landing = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  height: 93vh;
  width: 100%;
  @media (max-width: 720px) {
    height: 90vh;
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const LeftSide = styled.div`
  padding-left: 40px;
  padding-top: 15%;
  @media (max-width: 720px) {
    padding-top: 35%;
    width: 80%;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  height: 98%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${imageBack});
  -webkit-box-shadow: -13px 13px 3px 0px rgba(173, 173, 173, 0.22);
  -moz-box-shadow: -13px 13px 3px 0px rgba(173, 173, 173, 0.22);
  box-shadow: -13px 13px 3px 0px rgba(173, 173, 173, 0.22);

  @media (max-width: 720px) {
    display: none;
  }
`;

export const TextContainer = styled.div``;

export const Brand = styled.h5`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: lighter;
  font-size: 16px;
  padding: 10px 0px;
`;

export const Title = styled.h1`
  font-size: 52px;
  font-weight: 800;
  padding: 10px 0px;
  @media (max-width: 720px) {
    font-size: 35px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  padding-top: 10px;
`;

export const Describe = styled.p`
  font-size: 20px;
  padding: 20px 0px;
`;

export const Button = styled.button`
  & {
    width: 7em;
    color: white;
    background-color: #2580ab;
    height: 2.4em;
    border-radius: 30em;
    font-size: 16px;
    font-weight: 500;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  & ::before {
    content: '';
    width: 0;
    height: 2.4em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;

    background-image: linear-gradient(to right, #62c3d2 0%, #f5ae16 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }
  &:hover ::before {
    width: 7em;
  }
`;
