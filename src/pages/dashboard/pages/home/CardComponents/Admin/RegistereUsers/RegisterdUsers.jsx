import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "antd/dist/antd.css";
import { Switch } from "antd";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./registeredUser.css";
import config from "../../../../../../../ApiConfig/Config";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import RegisteredUsersCardTable from "./RegisteredUsersCardTable";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




const RegisterdUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [allUsers, setAllUsers] = useState([]);
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAllUsersBasicInfo = async () => {
    const res = await axios.get(
      config.server.path +
        config.role.admin +
        config.api.getUserDetails +
        `?userId=${userId}`
    );
    setAllUsers(res.data.userDetails);
    console.log(res.data.userDetails);
  };

  const handleClickMoreInfo = (id) => {
    handleClose();
    // navigate(`dasboard/home/registerdUsers/:userId`)
    console.log(id);
  };

  useEffect(() => {
    getAllUsersBasicInfo();
  }, []);
  return (
    <div className="dashboard__community__registered__users">
      <div className="dashboard__community__list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">User Id</StyledTableCell>
                <StyledTableCell align="left">User Email</StyledTableCell>
                <StyledTableCell align="left">User Name</StyledTableCell>
                <StyledTableCell align="left">User Role</StyledTableCell>
                <StyledTableCell align="left">More</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers &&
                allUsers.map((user) => (
                  <RegisteredUsersCardTable key={user.userId} user={user} getAllUsersBasicInfo={getAllUsersBasicInfo} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RegisterdUsers;
