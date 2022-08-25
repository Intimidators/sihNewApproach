import React, { useState } from "react";

import "./themeLanguageSwitcher.css";
import i18next from "i18next";

import { FaSitemap } from "react-icons/fa";
import { Button, Menu, MenuItem } from "@mui/material";
import WorldIcon from "../../images/world-wide-web.png";

const ThemeLanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <div className="theme__language__switcher">
        <div className="theme__language__switcher__container">
          <div className="languages">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              // variant="contained"
              sx={{ padding: "4px" }}
            >
              <img
                src={WorldIcon}
                style={{
                  height: "20px",
                }}
                alt=""
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={open}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  i18next.changeLanguage("en");
                }}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  i18next.changeLanguage("hi");
                }}
              >
                Hindi
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  // i18next.changeLanguage("pn");
                }}
              >
                Punjabi
              </MenuItem>
            </Menu>
          </div>
          <div className="font__sizes increase__font__size">
            A <sup>+</sup>{" "}
          </div>
          <div className="theme__change">A</div>
          <div className="font__sizes bold__font__size">
            {" "}
            A <sup></sup>{" "}
          </div>
          <div className="font__sizes decrease__font__size">
            A <sup>-</sup>{" "}
          </div>

          <FaSitemap color="white" />
        </div>
      </div>
    </>
  );
};

export default ThemeLanguageSwitcher;
