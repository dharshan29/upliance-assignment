// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const counterPersistConfig = {
    key: "counter",
    storage,
};

const userPersistConfig = {
    key: "user",
    storage,
};

const rootReducer = combineReducers({
    counter: persistReducer(counterPersistConfig, counterReducer),
    user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
