import styled from 'styled-components';

export const AllGroups = styled.section`
  height: 75vh;
  justify-content: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const RenderGroup = styled.div`
  padding: 12px 40px;
`;

export const Continent = styled.h4`
  font-size: 25px;
`;

export const AllCardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  height: 50%;
  padding: 30px 20px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
