import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./DashboardResearch.css";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import axios from "axios";
import config from "../../../../ApiConfig/Config";
import moment from "moment";

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

const DashboardResearch = () => {
  var userFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userFromSession.userId;

  const [pendingResearchPapers, setPendingResearchPapers] = useState([]);

  const getPendingResearchPapers = async () => {
    try {
      const res = await axios.get(
        config.server.path +
          config.api.getPendingResearchWork +
          `?userId=${userId}`
      );
      setPendingResearchPapers(res.data.pendingResearchWork);
      console.log("Research", res.data.pendingResearchWork);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = async (id) => {
    console.log("Cancel", id);
    const obj = {
      mediaId: id,
      postStatus: "2",
    };
    try {
      const res = await axios.post(
        config.server.path +
        config.api.updatePostStatus,
        {
          ...obj,
        },
        { headers: { "User-Id": userId } }
      );
      getPendingResearchPapers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoneClick = async (id) => {
    console.log("Done");
    const obj = {
      mediaId: id,
      postStatus: "1",
    };
    const res = await axios.post(
      config.server.path +
      config.api.updatePostStatus,
      {
        ...obj,
      },
      { headers: { "User-Id": userId } }
    );
    getPendingResearchPapers();
  };

  useEffect(() => {
    getPendingResearchPapers();
  }, []);

  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
           Pending For Approval Research Section
          </Typography>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">User Id</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Media ID</StyledTableCell>
                  <StyledTableCell align="left">Paper Link</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingResearchPapers &&
                  pendingResearchPapers.map((pendingResearchPaper) => (
                    <StyledTableRow key={pendingResearchPaper.mediaId}>
                      <StyledTableCell align="left">
                        {pendingResearchPaper.userId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {moment(pendingResearchPaper.currentTimeStamp).format("dddd DD MMMM YYYY")}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {pendingResearchPaper.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a
                          href={pendingResearchPaper.mediaURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          See Paper
                        </a>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Box component="div" sx={{ display: "inline" }}>
                          <CancelIcon
                            color="action"
                            onClick={()=>handleCancelClick(
                              pendingResearchPaper.mediaId
                            )}
                          />
                        </Box>
                        <Box component="div" sx={{ display: "inline" }}>
                          <DoneIcon
                            color="primary"
                            onClick={()=>handleDoneClick(
                              pendingResearchPaper.mediaId
                            )}
                          />
                        </Box>
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

export default DashboardResearch;
