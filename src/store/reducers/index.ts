import { Reducer } from "@reduxjs/toolkit";
import { Users } from "../../models/Users";
import { UserReducerEnum } from "./ActionsType";

type UserReducerType = {
  user: Users[] | null;
  filterName: Users[] | null;
};

const defaultState: UserReducerType = {
  user: null,
  filterName: null,
};

const userReducer: Reducer<UserReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case UserReducerEnum.SETUSER:
      return { ...state, user: action.userData };
    case UserReducerEnum.CLEARUSER:
      return { ...state, user: null };
    case UserReducerEnum.SETFILTERNAME:
      return { ...state, filterName: action.name };
    default:
      return { ...state };
  }
};

export default userReducer;
