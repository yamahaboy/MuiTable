import { Users } from "../../models/Users";
import { UserReducerEnum } from "./ActionsType";

export const setUser = (userData: Users[]) => {
  return { type: UserReducerEnum.SETUSER, userData };
};
export const clearUser = () => {
  return { type: UserReducerEnum.CLEARUSER };
};
