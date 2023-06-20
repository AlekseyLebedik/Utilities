import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useAuthManager = (isAuth, bounce, callback) => {
  const dispatch = useDispatch();
  const [conditionManager, setConditionManager] = useState("start-manager");

  const cleanReducer = useCallback(() => {
    // dispatch({ type: AuthActionTypes.cleanUser });
    // dispatch({ type: BeautyActionTypes.importPhotosClean });
    // dispatch({ type: ProfessionalActionTypes.importPhotosClean });
    // dispatch({ type: SimpleActionTypes.importPhotosClean });
    // dispatch({ type: PresetsActionTypes.importPhotosClean });
    // dispatch({ type: EventActionTypes.importPhotosClean });
    // dispatch({ type: CommercialActionTypes.importPhotosClean });
  }, [dispatch]);

  const cleanStoreData = useCallback(() => {
    // Clear storage
    localStorage.clear();
    // So this optional and we need clean user
    // dispatch({ type: AuthActionTypes.cleanUser });
    // // and we gonna to logout
    // dispatch({ type: AuthActionTypes.logout });
  }, [dispatch]);

  useEffect(() => {
    console.log(`Manager debugging: \n \t \t \t \t${conditionManager}`);
  }, [conditionManager]);

  useEffect(() => {
    // This we need for check authorificate when we start our web site we check last session time
    const currentTime = new Date().valueOf();
    // CHECK time inside localstorage
    const localStorageOutTime = localStorage.getItem("outTime");

    // If bigest than BOUNCE REFRESH TOKEN you need clean user data
    if (currentTime - bounce > localStorageOutTime) {
      cleanStoreData();
    }

    if (isAuth) {
      setConditionManager("start-timer");
      var interval = setInterval(() => {
        callback();
      }, bounce);
    } else {
      cleanReducer();
    }

    return function cleanUp() {
      //This we need to put time in localstorage when we leave web site
      const outTime = new Date().valueOf();

      localStorage.setItem("outTime", outTime);
      clearInterval(interval);
    };
  }, [
    isAuth,
    bounce,
    callback,
    setConditionManager,
    dispatch,
    cleanReducer,
    cleanStoreData,
  ]);
};
