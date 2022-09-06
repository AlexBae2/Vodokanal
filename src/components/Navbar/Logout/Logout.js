import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logoutSVG from "../../../assets/img/icons/logout.svg";
import { unAuthorization } from "../../../store/reducers/auth/authReducer.js";
import { LogoutWrapper, UserName } from "./styles.js";

const Logout = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.login);
  const navigate = useNavigate();

  const setLogout = () => {
    dispatch(unAuthorization());
    navigate("/");
  };

  return (
    <LogoutWrapper>
      <UserName>{login}</UserName>
      <button onClick={() => setLogout()}>
        <img src={logoutSVG} alt={"logout"} />
      </button>
    </LogoutWrapper>
  );
};

export default Logout;
