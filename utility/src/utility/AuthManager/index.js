import { injectReducer, injectSagas } from "../../store";
import { authReducer } from "./store/reducer";
import AuthManager from "./AuthManager";
import AuthSaga from "./store/sagas";

injectReducer("auth", authReducer);
injectSagas(AuthSaga);

export default { AuthManager };
