import styled from 'styled-components';
import { mediaDevice } from '../../utils/styledComponent/breakpoints.js';

export const NavbarSection = styled.header`
  padding: 27px 35px 28px 41px;
  background-color: #e4b062;
  margin-bottom: 20px;
  @media ${mediaDevice.mobileM} {
    margin-bottom: 8px;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
