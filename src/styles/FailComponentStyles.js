import styled from 'styled-components';

export const Fail = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 6%;
  justify-content: center;
  @media (max-width: 720px) {
    padding-top: 18%;
  }
`;

export const Gif = styled.img`
  width: 220px;
  padding: 12px;
  @media (max-width: 720px) {
    width: 155px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  padding: 15px 0px;
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

export const Warning = styled.h2``;

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
