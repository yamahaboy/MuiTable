import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { StyledTitle } from "./styles";

type DialogWindowProps = {
  open: boolean;
  onClose: () => void;
  username: string;
  website: string;
};

export const DialogWindow: React.FC<DialogWindowProps> = (props) => {
  const { open, onClose, username, website } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={StyledTitle}>{username}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: "18px" }}>
          {website}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
