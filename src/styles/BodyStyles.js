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
  position: relative;
  margin-left: 15px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  border: none;
  background: linear-gradient(to right, #62c3d2, #f5ae16);
  overflow: hidden;
  @media (max-width: 720px) {
    margin-left: 9px;
  }
  & span {
    position: relative;
    color: white;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.6em 1.2em 0.6em 1.05em;
    @media (max-width: 720px) {
      padding: 0.5em 1em 0.5em 1.03em;
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  &::before {
    content: '';
    background-color: #2580ab;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  &:active {
    transform: scale(0.95);
  }
`;
