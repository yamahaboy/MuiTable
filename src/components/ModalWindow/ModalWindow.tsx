import { Modal, Stack, Typography } from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import React from "react";
import { ModalStyles, ModalTextStyles } from "./styles";
export type ModalWindowProps = {
  open: boolean;
  onClose: () => void;
  name: string;
  website: string;
};

const ModalWindow: React.FC<ModalWindowProps> = (props) => {
  const { open, onClose, name, website } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack>
        <Sheet variant="outlined" sx={ModalStyles}>
          <Typography sx={ModalTextStyles}>{name}</Typography>
          <Typography sx={ModalTextStyles}>{website}</Typography>
        </Sheet>
      </Stack>
    </Modal>
  );
};

export default ModalWindow;
