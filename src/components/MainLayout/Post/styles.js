import styled from "styled-components";
import { mediaDevice } from "../../../utils/styledComponent/brakepoints.js";

export const Box = styled.div`
  min-height: 150px;
  min-width: 150px;
  max-height: 150px;
  max-width: 150px;
  background: crimson;
  margin-right: 31px;
  @media ${mediaDevice.tabletL} {
    margin-right: 0;
    margin-bottom: 21px;
  }
`;
export const Flex = styled.div`
  display: flex;
  margin-bottom: 25px;
  @media ${mediaDevice.tabletL} {
    flex-direction: column;
    margin-bottom: 16px;
  }
  @media ${mediaDevice.mobileL} {
    margin-bottom: 0px;
  }
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  @media ${mediaDevice.mobileL} {
    margin-bottom: 22px;
  }
`;

export const Title = styled.div`
  margin-bottom: 43px;
  @media ${mediaDevice.tabletL} {
    margin-bottom: 10px;
    max-width: 241px;
  }
  @media ${mediaDevice.mobileL} {
    margin-bottom: 0px;
  }
`;

export const Author = styled.div`
  margin-bottom: 20px;
  @media ${mediaDevice.mobileL} {
    margin-bottom: 29px;
  }
`;

export const SubTitle = styled.div`
  margin-bottom: 8px;
  @media ${mediaDevice.tabletS} {
    display: none;
    max-width: 267px;
  } ;
`;

export const Border = styled.div`
  border-radius: 5px;
  border: 5px solid #27569c;
  padding: 20px 15px;
  max-width: 467px;
  max-height: 388px;
  @media ${mediaDevice.tabletL} {
    padding: 25px 20px;
    max-width: 325px;
    max-height: 410px;
  }
  @media ${mediaDevice.tabletM} {
    max-height: 500px;
  }
  @media ${mediaDevice.mobileL} {
    padding: 12px 10px 34px 8px;
  }
`;
