import { Users } from "../../models/Users";
import { UserReducerEnum } from "./ActionsType";

export const setUser = (userData: Users[]) => {
  return { type: UserReducerEnum.SETUSER, userData };
};
export const clearUser = () => {
  return { type: UserReducerEnum.CLEARUSER };
};

export const setFilterName = (name: string | null) => {
  return { type: UserReducerEnum.SETFILTERNAME, name };
};
