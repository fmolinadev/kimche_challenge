import React from 'react';
import { cleanDecoration } from '../../utils/helpers';
import * as Styles from '../../styles/FooterStyles';
const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.MiPortfolio>
        <a
          href="https://www.franciscomolina.com.ar/"
          rel="noopener noreferrer"
          target="_blank"
          style={cleanDecoration}
        >
          Code by: Francisco D. Molina | www.franciscomolina.com.ar
        </a>
      </Styles.MiPortfolio>
    </Styles.Footer>
  );
};

export default Footer;
