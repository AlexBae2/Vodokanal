import React from "react";
import logout from "../../../assets/img/icons/logout.svg";
import { LogoutWrapper, UserName } from "./styles.js";

const Logout = () => {
	return (
		<LogoutWrapper>
			<UserName>Username</UserName>
			<button>
				<img src={logout} alt={"logout"} />
			</button>
		</LogoutWrapper>
	);
};

export default Logout;
