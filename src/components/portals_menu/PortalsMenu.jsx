import React, { useContext, useEffect } from "react";
import { gData } from "../../App";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

import "./portalsMenu.css";

const settings = [
  {
    settingName: "Profile",
    RoutingLink: "/profile",
  },
  {
    settingName: "Dashboard",
    RoutingLink: "/dashboard",
  },
  {
    settingName: "Logout",
    RoutingLink: "/login",
  },
];

const PortalsMenu = () => {
  let myData = useContext(gData);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [disableTillLogin, setDisableTillLogin] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (key) => {
    console.log("key", key);
    if (key == "Logout") {
      console.log(key);
      sessionStorage.removeItem("user");
      localStorage.removeItem("user");
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = JSON.parse(sessionStorage.getItem("user"));

  // useEffect(()=>{

  //   if(user){
  //     setDisableTillLogin(false)
  //   }
  // },[disableTillLogin, user]

  // )
  console.log(user);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/login"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    myData.setState(1);
                  }}
                >
                  <Typography textAlign="center">VVGNLI</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    // myData.setState(2);
                    navigate("community");
                    console.log("community");
                  }}
                >
                  <Typography textAlign="center">Community</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    // myData.setState(3);
                    navigate("webinar");
                    console.log("webinar");
                  }}
                >
                  <Typography textAlign="center">Webinar</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    // myData.setState(4);
                    navigate("research-section");
                    console.log("research-section");
                  }}
                >
                  <Typography textAlign="center">Research Work</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              style={{ justifyContent: "space-evenly" }}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Button
                onClick={() => {
                  myData.setState(1);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                VVGNLI
              </Button>
              <Button
                onClick={() => {
                  // myData.setState(2);
                  navigate("community");
                  console.log("community");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Community
              </Button>
              <Button
                onClick={() => {
                  myData.setState(3);
                  navigate("webinar");
                  console.log("webinar");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Webinar
              </Button>
              <Button
                onClick={() => {
                  myData.setState(4);
                  navigate("research-section");
                  console.log("research-section");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Research Work
              </Button>
            </Box>
            {console.log(myData.state)}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={user?.profilePicURL}>{user?.username[0]}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={setting.settingName}
                    onClick={handleCloseUserMenu}
                    disabled={user === null}
                  >
                    <Typography
                      textAlign="center"
                      onClick={(key) => {
                        myData.setState(index + 5);
                        handleClick(setting.settingName);
                        navigate(setting.RoutingLink);
                      }}
                    >
                      {setting.settingName}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default PortalsMenu;
