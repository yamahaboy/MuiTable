import React, { BaseSyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setFilterName } from "../../store/reducers/Actions";
import { AutoCompleteStyles } from "./styles";
import { Users } from "../../models/Users";

interface UsersAutoCompleteProps {
  selectedName: string | null;
  setSelectedName: React.Dispatch<React.SetStateAction<string | null>>;
}

const UsersAutoComplete: React.FC<UsersAutoCompleteProps> = (props) => {
  const { selectedName, setSelectedName } = props;
  const dispatch = useAppDispatch();
  const users: Users[] | null = useAppSelector(
    (state) => state.userReducer.user
  );
  const userNames: string[] = users ? users.map((user) => user.name) : [];

  const handleNameChange = (
    event: BaseSyntheticEvent,
    newValue: string | null
  ) => {
    setSelectedName(newValue);
    dispatch(setFilterName(newValue));
  };

  return (
    <Autocomplete
      options={userNames}
      value={selectedName}
      onChange={handleNameChange}
      renderInput={(params) => (
        <TextField {...params} label="User" sx={AutoCompleteStyles} />
      )}
    />
  );
};

export default UsersAutoComplete;
