import React from "react";
import { IconButton, Tooltip } from "@mui/material";

interface IconBtnProps {
  title: string;
  icon: React.ElementType;
  onClick: () => void;
}

const IconBtn: React.FC<IconBtnProps> = ({ title, icon: Icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton sx={{ color: "white" }} size="large" onClick={onClick}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default IconBtn;
