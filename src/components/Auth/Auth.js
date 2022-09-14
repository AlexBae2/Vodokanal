import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {authorization} from "../../store/reducers/auth/authReducer.js";
import {ShowError} from "../../utils/react-notifications-component/notifications.js";
import {AuthBorder, AuthContainer, AuthSection, AuthWrapper, Center, Input, Label, Submit, Title,} from "./styles.js";
import {SectionInner} from "../../App.styles.js";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const submitLoginData = () => {
    if (login === "" || password === "") {
      ShowError();
    } else {
      dispatch(authorization({ login, password }));
      navigate("/posts");
    }
  };
  return (
    <AuthSection>
      <AuthWrapper>
        <SectionInner>
          <AuthBorder>
            <Title>Authorization</Title>
            <AuthContainer>
              <Label>login</Label>
              <Input value={login} onChange={(e) => setLogin(e.target.value)} />
            </AuthContainer>
            <AuthContainer>
              <Label>password</Label>
              <Input
                  type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </AuthContainer>
            <Center>
              <Submit onClick={() => submitLoginData()}>Submit</Submit>
            </Center>
          </AuthBorder>
        </SectionInner>
      </AuthWrapper>
    </AuthSection>
  );
};

export default Auth;
