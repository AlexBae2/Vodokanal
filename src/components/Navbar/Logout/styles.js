import styled from 'styled-components';
import { mediaDevice } from '../../../utils/styledComponent/breakpoints.js';

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  position: relative;
  top: 4px;
  right: 40px;
  @media ${mediaDevice.laptop} {
    top: 0;
    left: 0;
  }
  @media ${mediaDevice.mobileM} {
    top: 1px;
    left: 18px;
  }
`;

export const UserName = styled.div`
  margin-right: 27px;
  @media (max-width: 769px) {
    display: none;
  }
`;
