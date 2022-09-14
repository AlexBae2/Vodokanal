import React from 'react';
import { Link } from 'react-router-dom';
import largeLogo from '../../../assets/img/icons/largeLogo.svg';
import miniLogo from '../../../assets/img/icons/miniLogo.svg';
import { useWindowWidth } from '../../../hooks/useWindowWidth.js';
import { LogoContainer } from './styles.js';
import { deviceSize } from '../../../utils/styledComponent/breakpoints.js';

const Logo = () => {
  const width = useWindowWidth();
  return (
    <LogoContainer>
      <Link to={'/posts'}>
        <img
          src={width > deviceSize.tabletS ? largeLogo : miniLogo}
          alt={'Logo'}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
