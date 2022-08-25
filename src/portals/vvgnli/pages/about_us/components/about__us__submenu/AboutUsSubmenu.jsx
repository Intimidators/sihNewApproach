import React, { useContext } from "react";

import "./aboutUsSubmenu.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { gData } from "../../../../../../App";

const AboutUSSubmenu = () => {
  let my__data__from__vvgnli__about_us__submenu = useContext(gData);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "block" } }}>
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
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "block" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "about_us"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    About US
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "director_general"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Director General
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "vision_and_mission"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Vision & mission
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "history"
                    );
                  }}
                >
                  <Typography textAlign="center">History</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "governing_bodies"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Governing Bodies
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "infrastructure"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Infrastructure
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "networking"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Networking
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state(
                      "whos_who"
                    );
                  }}
                >
                  <Typography textAlign="center">Who's who</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AboutUSSubmenu;



