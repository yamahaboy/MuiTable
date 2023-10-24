import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./reducers/index";

const appReducer = combineReducers({ userReducer });

export const store = configureStore({
  reducer: appReducer,
});

export type AppStateType = ReturnType<typeof appReducer>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
