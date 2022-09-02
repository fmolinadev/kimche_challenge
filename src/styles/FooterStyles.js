import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  width: 100%;
  bottom: 0;
`;

export const MiPortfolio = styled.span`
  font-size: 15px;
  @media (max-width: 720px) {
    font-size: 12px;
    letter-spacing: 0.4px;
  }
`;
