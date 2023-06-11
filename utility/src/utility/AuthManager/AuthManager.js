import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as constantTime from "./constants";
import { useAuthManager } from "./useAuthManager";

const AuthManagerHOC = ({ children, bounceCockiesTime }) => {
  const bounce = bounceCockiesTime ?? constantTime.FIFTENN_IN_MILLISECONDS;
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthConditionSelector);

  const callback = () => dispatch(refreshAccessTokenAction());

  useAuthManager(isAuth, bounce, callback);

  return children;
};

export default AuthManagerHOC;
