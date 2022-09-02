import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const CardDetail = styled.article`
  width: 480px;
  position: relative;
  margin: auto;
  margin-top: 8%;
  margin-bottom: 2em;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px -1px rgba(107, 107, 107, 0.8);
  -moz-box-shadow: 0px 0px 16px -1px rgba(107, 107, 107, 0.8);
  box-shadow: 0px 0px 16px -1px rgba(107, 107, 107, 0.8);
  padding: 15px;
  @media (max-width: 720px) {
    margin-top: 25%;
    width: 255px;
  }
`;

export const HeaderDetail = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

export const Emoji = styled.span`
  margin-right: 20px;
  font-size: 30px;
  @media (max-width: 720px) {
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const Name = styled.h1`
  font-size: 28px;
  @media (max-width: 720px) {
    font-size: 22px;
  }
`;

export const Data = styled.div`
  align-items: center;
  text-align: center;
`;
export const Info = styled.h5`
  font-size: 20px;
  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

export const Detail = styled.p`
  font-size: 20px;
  padding-left: 12px;
  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
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
