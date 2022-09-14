import styled from 'styled-components';
import { mediaDevice } from '../../utils/styledComponent/breakpoints.js';

export const AuthWrapper = styled.div`
  margin: 10px;
  letter-spacing: -1px;
  padding-bottom: 120px;
`;

export const AuthSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-weight: 800;
  font-size: 24px;
  margin: 0 auto;
`;
export const AuthBorder = styled.div`
  border: 5px solid #27569c;
  border-radius: 6px;
  padding: 40px 21px;
`;

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media ${mediaDevice.tabletS} {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  line-height: 29px;
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  color: #27569c;
  margin-bottom: 55px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Submit = styled.button`
  border-radius: 10px;
  background-color: #e4b062;
  padding: 10px 60px;
`;

export const Input = styled.input`
  ${(props) =>
    props.type === 'passowrd' &&
    `
      background: #d9d9d9;
      border: 3px solid #27569c;
      border-radius: 10px;
      height: 30px;
      max-width: 260px;
  `}
`;

export const Label = styled.div`
  margin-right: 20px;
  @media ${mediaDevice.tabletS} {
    margin-bottom: 20px;
  }
`;
