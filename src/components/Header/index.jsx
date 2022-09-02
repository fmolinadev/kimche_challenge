import React from 'react';
import Brand from '../../assets/brand.png';
import * as Style from '../../styles/HeaderStyles';

const Header = () => {
  return (
    <Style.Header>
      <Style.Logo src={Brand} alt="logo kimche" aria-label="logo" />
      <Style.Name>Kimche Challenge</Style.Name>
    </Style.Header>
  );
};

export default Header;
