import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./root";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const Store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  serializableCheck: false,
});

export const persistor = persistStore(Store);
