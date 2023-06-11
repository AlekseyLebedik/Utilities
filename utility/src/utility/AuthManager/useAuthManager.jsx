import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useAuthManager = (isAuth, bounce, callback) => {
  const dispatch = useDispatch();
  const [conditionManager, setConditionManager] = useState("start-manager");

  useEffect(() => {
    console.log(`Manager debugging: \n \t \t \t \t${conditionManager}`);
  }, [conditionManager]);

  useEffect(() => {
    if (isAuth) {
      setConditionManager("start-timer");
      var interval = setInterval(() => {
        callback();
      }, bounce);
    }

    return function cleanUp() {
      clearInterval(interval);
    };
  }, [isAuth, bounce, callback, setConditionManager, dispatch]);
};
