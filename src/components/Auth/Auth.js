import React from "react";
import { SectionInner } from "../../App.js";
import {
  AuthBorder,
  AuthSection,
  AuthWrapper,
  Center,
  Flex,
  Input,
  Label,
  Submit,
  Title,
} from "./styles.js";

const Auth = () => {
  return (
    <AuthSection>
      <AuthWrapper>
        <SectionInner>
          <AuthBorder>
            <Title>Authorization</Title>
            <Flex>
              <Label>login</Label>
              <Input />
            </Flex>
            <Flex>
              <Label>password</Label>
              <Input />
            </Flex>
            <Center>
              <Submit>Submit</Submit>
            </Center>
          </AuthBorder>
        </SectionInner>
      </AuthWrapper>
    </AuthSection>
  );
};

export default Auth;
