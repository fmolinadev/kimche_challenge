import styled from 'styled-components';

export const Default = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 11%;
  justify-content: center;
  @media (max-width: 720px) {
    padding-top: 20%;
  }
`;

export const Text = styled.h2`
  font-size: 20px;
  @media (max-width: 720px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 55px;
  padding: 12px;
`;
