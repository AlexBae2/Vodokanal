import styled from "styled-components";
import { mediaDevice } from "../../utils/styledComponent/brakepoints.js";

export const MainLayoutSection = styled.section``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 947px;
  margin: 0 auto;
  gap: 20px 13px;
  @media ${mediaDevice.laptop} {
    padding: 0px 15px;
  }
  @media ${mediaDevice.tabletL} {
    gap: 25px 20px;
    padding: 0px 37px;
  }
  @media ${mediaDevice.tabletS} {
    padding: 0px 13px;
  }
  @media ${mediaDevice.mobileL} {
    gap: 10px;
    max-width: 292px;
    grid-template-columns: 1fr;
  }
`;
