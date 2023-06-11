import lodash_set from "lodash/set";
import { combineReducers } from "redux";

const injectReducer = (name, reducer, store) => {
  lodash_set(store, `asyncReducers.${name}`, reducer);

  const reducers = combineReducers({
    ...store["asyncReducers"],
  });

  store.replaceReducer(reducers);
};

const injectSagas = (sagas) => {
  sagaMiddleware.run(function* rootSaga() {
    yield all(sagas);
  });
};

const action = (type, payload = {}) => {
  return { type, payload };
};

export { injectReducer, injectSagas, action };
