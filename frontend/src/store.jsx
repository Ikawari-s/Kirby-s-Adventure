import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

// import {
//   productListReducer,
//   productDetailsReducer,
// } from "./reducers/productReducers";

import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";

// import favoriteReducer from "./reducers/favoriteReducer";
// import webcomicsReducer from "./reducers/webcomicsReducer";

const reducer = combineReducers({
  // Add your reducers here
  // productList: productListReducer,
  // productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // favorite: favoriteReducer,
  // webcomics: webcomicsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userLogin", "userRegister"], // Add the reducer slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  // Add your initial states here
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);

export default store;
