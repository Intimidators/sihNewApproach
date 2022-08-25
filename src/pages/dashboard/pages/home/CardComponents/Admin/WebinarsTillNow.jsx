import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./DashboardHomeAdmin.css";
import { Button, Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const WEBINARLIST = [
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "completed",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "completed",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
];
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
const WebinarsTillNow = () => {
  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Webinars Till Now Section
          </Typography>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Webinar Name</StyledTableCell>
                  <StyledTableCell align="left">Department</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Host</StyledTableCell>
                  <StyledTableCell align="left">
                    Registered Users
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    No of Participants
                  </StyledTableCell>
                  <StyledTableCell align="left">Recording Link</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {WEBINARLIST.map((row, id) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.department}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                    <StyledTableCell align="left">{row.host}</StyledTableCell>
                    <StyledTableCell align="left">105</StyledTableCell>
                    <StyledTableCell align="left">75</StyledTableCell>
                    <StyledTableCell align="left">
                      <a href={row.webinarLink}>See Recording</a>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default WebinarsTillNow;
