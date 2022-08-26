import React, { useContext } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

import { gData } from "../../../App";

import "./vvgnliMainMenu.css";
import { Modal } from "@mui/material";
import { Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

export default function VvgnliMainMenu() {
  const myGlobalDataForVvgnliMainMenu = useContext(gData);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexWrap: "wrap",
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("home");
          }}
        >
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            handleOpen();
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state(
              "about_us"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            handleOpen();
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state(
              "research"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Research" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            handleOpen();
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state(
              "training"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Training" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            handleOpen();
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state(
              "publication"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Publication" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("library");
          }}
        >
          <ListItemButton>
            <ListItemText primary="Library" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("people");
          }}
        >
          <ListItemButton>
            <ListItemText primary="People" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state(
              "online_training"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Online Training" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state(
              "e_resources"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="E-Resource" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("mou");
          }}
        >
          <ListItemButton>
            <ListItemText primary="MOU" />
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const langList = ["vvgnli", "Gujurat", "kerela", "Odisha"];
  const disptach = useDispatch();
  return (
    <>
      <div
        style={{
          height: "fit-content",
          position: "fixed",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 1rem",
          width: "100%",
        }}
      >
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon style={{ color: "white", alignSelf: "right" }} />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {langList.map((item, key) => {
            return (
              <Paper
                elevation={3}
                key={key}
                style={{
                  height: "100px",
                  width: "40%",
                  margin: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  cursor:"pointer"
                }}
                onClick={() => {
                  disptach({ type: "state", payload: item });
                  handleClose();
                }}
              >
                {item}
              </Paper>
            );
          })}
        </Box>
      </Modal>
    </>
  );
}
