import React, { useContext } from "react";

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

// import "./portalsMenu.css";



const ResearchSubmenu = () => {

  let my__data__from__vvgnli__research__submenu = useContext(gData)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                <MenuIcon/>
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
                <MenuItem onClick={() => {
                    my__data__from__vvgnli__research__submenu.set_vvgnli_research_submenu_state(
                      "research"
                    );
                  }}>
                  <Typography textAlign="center">
                    Centre for International Networking
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => {
                    my__data__from__vvgnli__research__submenu.set_vvgnli_research_submenu_state(
                      "research"
                    );
                  }}>
                  <Typography textAlign="center">
                    Centre for Labour Market Studies
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for Employment Relations and
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Regulations</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for Agrarian Relations, Rural and
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Behavioural Studies
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for National Resource Centre on Child
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Labour</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for Integrated Labour History Research
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Programme</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for Labour and Health Studies
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for Gender and Labour Studies
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for North-East India
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    Centre for Climate Change and Labour
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default ResearchSubmenu;
