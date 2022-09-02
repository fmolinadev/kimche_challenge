import styled from 'styled-components';

export const Card = styled.article`
  height: 70px;
  width: 270px;
  border: 2px solid white;
  align-items: center;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px -1px rgba(107, 107, 107, 0.8);
  -moz-box-shadow: 0px 0px 16px -1px rgba(107, 107, 107, 0.8);
  box-shadow: 0px 0px 16px -1px rgba(107, 107, 107, 0.8);
  padding: 15px;
  margin: 15px;
  &:hover {
    border: 2px solid #62c3d2;
  }
  @media (max-width: 720px) {
    height: 65px;
    width: 180px;
    padding: 17px;
    margin: 10px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  align-items: center;
`;

export const Name = styled.h3`
  font-size: 16px;
`;

export const Alias = styled.span`
  letter-spacing: 2px;
`;

export const Capital = styled.h6`
  font-size: 12px;
  letter-spacing: 0.5px;
`;
