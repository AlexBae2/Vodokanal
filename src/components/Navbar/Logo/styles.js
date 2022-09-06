import styled from "styled-components";
import { mediaDevice } from "../../../utils/styledComponent/brakepoints.js";

export const LogoContainer = styled.div`
  position: relative;
  top: 5px;
  left: 39px;
  @media ${mediaDevice.laptop} {
    top: 0;
    left: 0;
  }
  @media ${mediaDevice.mobileM} {
    top: 2px;
    left: -24px;
  }
`;
