import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import lodash_set from "lodash/set";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { all } from "redux-saga/effects";
import subscribeActionMiddleware from "redux-subscribe-action";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const commonReducer = {
  router: routerReducer,
};

export const rootReducer = (state, action) => {
  return combineReducers(commonReducer)(state, action);
};

export function* rootSaga() {
  yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

export const createRootStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware,
        sagaMiddleware,
        subscribeActionMiddleware
      )
    )
  );

  sagaMiddleware.run(rootSaga);
  store["asyncReducers"] = {};

  return store;
};

export const injectReducer = (name, reducer) => {
  lodash_set(store, `asyncReducers.${name}`, reducer);

  const reducers = combineReducers({
    ...commonReducer,
    ...store["asyncReducers"],
  });

  store.replaceReducer(reducers);
};

export const injectSagas = (sagas) => {
  sagaMiddleware.run(function* rootSaga() {
    yield all(sagas);
  });
};

export const store = createRootStore();
export const history = createReduxHistory(store);

export { createReduxHistory };
