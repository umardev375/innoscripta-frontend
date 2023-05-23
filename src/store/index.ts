import {
  configureStore,
  createAction,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/auth";
import { memeReducer } from "./meme/meme";
import { marketplaceReducer } from "./filters/marketplace";

const logger = createLogger({ collapsed: true });
const reducer = combineReducers({
  // here we will be adding reducers
  auth: authReducer,
  meme: memeReducer,
  marketplace: marketplaceReducer,
});
export const resetAction = createAction("reset");

const resettableReducer = (state: any, action: any) => {
  if (resetAction.match(action)) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "message"],
};

const persistedReducer = persistReducer(persistConfig, resettableReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
