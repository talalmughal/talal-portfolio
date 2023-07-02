import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice, { initialThemeState } from "./themeSlice";

const persistConfig = {
  key: "root",
  storage,
  migrate: (state) => {
    const { _persist = {} } = state || {};
    const theme = { ...initialThemeState, ...(state?.theme || {}) };
    return Promise.resolve({ _persist, theme });
  },
};

const rootReducer = combineReducers({ theme: themeSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const generateMiddleware = (def: any) => {
  return [...def({ serializableCheck: false })];
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: generateMiddleware,
});

export const persistor = persistStore(store);
