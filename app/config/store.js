import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "../reducers";
import rootSaga from "./sagas";

const sageMiddleware = createSagaMiddleware();
const middleware = [sageMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));
sageMiddleware.run(rootSaga);

export default store;
