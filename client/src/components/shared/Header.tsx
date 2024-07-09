import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { orange } from "../../constants/colors";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Search as SearchIcon,
  Notifications,
} from "@mui/icons-material";
import IconBtn from "./IconButton";
import { useState } from "react";

const Header = () => {


  const handleMobile = () => {};
  const openSearchDialog = () => {};
  const openNewGroup = () => {};
  const navigateToGroup = () => {};
  const handleLogout = () => {};
  const openNotification = () => {};
  return (
    <Box
      sx={{ flexGrow: 1 }}
      height={"4rem"}
      position={"static"}
      bgcolor={orange}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          ChatMe
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <IconButton color="inherit" onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box flexGrow={1} />
        <Box>
          <IconBtn
            title={"Search"}
            icon={SearchIcon}
            onClick={openSearchDialog}
          />
          <IconBtn title={"New Group"} icon={AddIcon} onClick={openNewGroup} />
          <IconBtn
            title={"Notifications"}
            icon={Notifications}
            onClick={openNotification}
          />
          <IconBtn
            title={"Manage Group"}
            icon={GroupIcon}
            onClick={navigateToGroup}
          />
          <IconBtn title={"Logout"} icon={LogoutIcon} onClick={handleLogout} />
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
