import styled from 'styled-components';

export const Body = styled.div`
  height: 80vh;
  width: 100%;
  @media (max-width: 720px) {
    height: 70vh;
    width: 100%;
  }
`;

export const Controller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const SearchContainer = styled.div`
  padding-right: 12px;
  align-items: center;
  @media (max-width: 720px) {
    padding: 5px 1px;
  }
`;

export const SearchSpan = styled.span`
  padding-right: 12px;
`;

export const Input = styled.input`
  line-height: 28px;
  border: 2px solid transparent;
  border-bottom-color: #2580ab;
  padding: 0.2rem;
  outline: none;
  width: 12rem;
  background-color: transparent;
  color: #0d0c22;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  :hover {
    outline: none;
    border-radius: 1rem;
    border-color: #62c3d2;
  }

  &::placeholder {
    color: #1d1d1b;
    margin: 1px 3px;
  }

  &:focus ::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  padding-left: 12px;
  align-items: center;
  @media (max-width: 720px) {
    padding: 5px 1px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`;

export const Button = styled.button`
  margin-left: 10px;
  position: relative;
  text-decoration: none;
  padding: 0.7em 1em;
  display: inline-block;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-weight: 500;
  background-color: #2580ab;
  color: white;
  & ::hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  &::after {
    background-color: #62c3d2;
    opacity: 0.2;
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;
