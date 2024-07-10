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
import { lazy, Suspense, useState } from "react";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotifiationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  const openSearchDialog = () => {
    setIsSearch(!isSearch);
  };
  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };
  const openNotification = () => {
    setIsNotification(!isNotification);
  };
  const navigateToGroup = () => {};
  const handleLogout = () => {};

  return (
    <>
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
              display: { xs: "none", sm: "block", color: "white" },
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
            <IconBtn
              title={"New Group"}
              icon={AddIcon}
              onClick={openNewGroup}
            />
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
            <IconBtn
              title={"Logout"}
              icon={LogoutIcon}
              onClick={handleLogout}
            />
          </Box>
        </Toolbar>
      </Box>
      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}

      {
        isNewGroup && (
          <Suspense fallback={<div>Loading...</div>}>
            <NewGroupDialog />
          </Suspense>
        )
      }

      {
        isNotification && (
          <Suspense fallback={<div>Loading...</div>}>
            <NotifiationDialog />
          </Suspense>
        )
      }
    </>
  );
};

export default Header;
