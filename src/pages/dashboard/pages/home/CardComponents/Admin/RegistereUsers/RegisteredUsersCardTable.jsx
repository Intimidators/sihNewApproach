import React from "react";
import { Button, Switch } from "antd";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import TableCell from "@mui/material/TableCell";
import { useNavigate } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import config from "../../../../../../../ApiConfig/Config";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
const ITEM_HEIGHT = 25;

const RegisteredUsersCardTable = ({ user, getAllUsersBasicInfo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMoreInfo = () => {
    handleClose();
    navigate(`${user.userId}`);
    console.log(user.userId);
  };

  const handleChangeRole = async (checked) => {
    console.log(checked);
    let obj;
    if (checked) {
      obj = {
        userId: user.userId,
        userRole: "1",
      }
    } else {
      obj = {
        userId: user.userId,
        userRole: "2",
      }
    }

    const res = await axios.patch(
      config.server.path +
        config.role.admin +
        config.api.changeUserRole +
        `?userId=${userId}`,
      {
        ...obj,
      }
    );
    console.log(res);
    getAllUsersBasicInfo();
  };

  return (
    <StyledTableRow key={user.userId}>
      <StyledTableCell align="left">{user.userId}</StyledTableCell>
      <StyledTableCell align="left">{user.emailAddress}</StyledTableCell>
      <StyledTableCell align="left">{user.userName}</StyledTableCell>
      <StyledTableCell align="left">
        {/* <Switch
          style={{ width: "80px" }}
          checkedChildren="Admin"
          unCheckedChildren="Regular"
          onChange={handleChangeRoleToAdmin}
          checked={user.userRole === 1}
        /> */}

        {user.userRole === 2 && <Button onClick={()=>handleChangeRole(true)}>Make Admin</Button>}
        {user.userRole === 1 && <Button onClick={()=>handleChangeRole(false)}>Make Regular</Button>}
      </StyledTableCell>
      <StyledTableCell align="left">
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon style={{ color: "#000" }} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleClickMoreInfo}>More Info</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default RegisteredUsersCardTable;
