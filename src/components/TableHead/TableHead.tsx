import {
  TableHeadContentStyles,
  TableHeadStyles,
} from "../../containers/UsersTable/styles";
import { TableCell, TableHead, TableRow } from "@mui/material";

const Head = () => {
  return (
    <TableHead sx={TableHeadStyles}>
      <TableRow>
        <TableCell sx={TableHeadContentStyles}>Id</TableCell>
        <TableCell sx={TableHeadContentStyles}>Name</TableCell>
        <TableCell sx={TableHeadContentStyles}>UserName</TableCell>
        <TableCell sx={TableHeadContentStyles}>WebSite</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
