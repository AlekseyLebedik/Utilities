import { action } from "../../ReduxUtility";
import { AuthTypes } from "./types";

export const LoginSuccessAction = (data) => action(AuthTypes.loginSuccess);
export const LoginFailureAction = (data) => action(AuthTypes.loginFailure);

export const LogoutSuccessAction = (data) => action(AuthTypes.logoutSuccess);
export const LogoutFailureAction = (data) => action(AuthTypes.logoutFailure);
