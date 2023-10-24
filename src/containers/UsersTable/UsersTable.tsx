import React, { useEffect, useState } from "react";
import { Users } from "../../models/Users";
import getUsers from "../../api/services/users/service";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setUser } from "../../store/reducers/Actions";
import UsersAutoComplete from "../../components/UsersAutoComplete/UsersAutoComplete";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import DialogWindow from "../../components/DialogWindow/DialogWindow";
import {
  TableHeadContentStyles,
  TableBodyStyles,
  TableHeadStyles,
} from "./styles";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userReducer.user);
  const [selectedUser, setSelectedUser] = useState<Users | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleSelectedUser = (user: Users, isIdCell: boolean) => {
    setSelectedUser(user);
    setIsModalOpen(isIdCell);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      dispatch(setUser(data));
    }

    fetchData();
  }, [dispatch]);

  return (
    <Box>
      <UsersAutoComplete
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />
      <Table sx={{ width: "70%", margin: "3rem auto" }}>
        <TableHead sx={TableHeadStyles}>
          <TableRow>
            <TableCell sx={TableHeadContentStyles}>Id</TableCell>
            <TableCell sx={TableHeadContentStyles}>Name</TableCell>
            <TableCell sx={TableHeadContentStyles}>UserName</TableCell>
            <TableCell sx={TableHeadContentStyles}>WebSite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "#e6e3e3" }}>
          {userData &&
            userData
              .filter((user) =>
                selectedName ? user.name === selectedName : true
              )
              .map(({ id, name, username, website }: Users) => (
                <TableRow key={id}>
                  <TableCell>
                    <Tooltip title={id}>
                      <p
                        style={TableBodyStyles}
                        onClick={() =>
                          handleSelectedUser(
                            { id, name, username, website },
                            true
                          )
                        }
                      >
                        {id}
                      </p>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={name} sx={TableBodyStyles}>
                      <p
                        style={TableBodyStyles}
                        onClick={() =>
                          handleSelectedUser(
                            { id, name, username, website },
                            false
                          )
                        }
                      >
                        {name}
                      </p>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={username} sx={TableBodyStyles}>
                      <p
                        style={TableBodyStyles}
                        onClick={() =>
                          handleSelectedUser(
                            { id, name, username, website },
                            false
                          )
                        }
                      >
                        {username}
                      </p>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={website} sx={TableBodyStyles}>
                      <p
                        style={TableBodyStyles}
                        onClick={() =>
                          handleSelectedUser(
                            { id, name, username, website },
                            false
                          )
                        }
                      >
                        {website}
                      </p>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      {selectedUser &&
        (isModalOpen ? (
          <ModalWindow
            open={true}
            onClose={() => setSelectedUser(undefined)}
            name={selectedUser?.name}
            website={selectedUser?.website}
          />
        ) : (
          <DialogWindow
            open={true}
            onClose={() => setSelectedUser(undefined)}
            username={selectedUser?.username}
            website={selectedUser?.website}
          />
        ))}
    </Box>
  );
};

export default UsersTable;
