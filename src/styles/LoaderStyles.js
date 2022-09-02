import styled from 'styled-components';

export const Loader = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 14%;
  justify-content: center;
  @media (max-width: 720px) {
    padding-top: 18%;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

export const Gif = styled.img`
  width: 85px;
  padding: 12px;
  @media (max-width: 720px) {
    width: 65px;
  }
`;
