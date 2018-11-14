import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import initialState from "./state";
import logger from "redux-logger";
import sagas from "./sagas";

const middlewares = [];

// redux-logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// redux-persist
const persistConfig = { key: "team-lab", storage, whitelist: ["name"] };
const persistedReducer = persistReducer(persistConfig, reducers);

// redux-saga
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
export default store;
