import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import config from "../../../../../../ApiConfig/Config";
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

const UploadedResearchWork = () => {
  const [approvedResearchPapers, setApprovedResearchPapers] = useState([]);
  const userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  const getApprovedResearchPapers = async () => {
    try {
      const res = await axios.get(
        config.server.path +
          config.api.getApprovedResearchWork +
          `?userId=${userId}`
      );
      setApprovedResearchPapers(res.data.approvedResearchWork);
      console.log(" Approved Research Paperd", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteResearch = async (mediaId) => {
    console.log("Delete Research");
    try {
      const res = await axios.post(
        config.server.path +
          config.role.admin +
          config.api.deletePost +
          `?userId=${userId}`,
        {
          mediaId: mediaId,
        }
      );
      await getApprovedResearchPapers();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApprovedResearchPapers();
  }, []);

  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Research Section
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
                {approvedResearchPapers &&
                  approvedResearchPapers.map((approvedResearchPaper) => (
                    <StyledTableRow key={approvedResearchPaper.mediaId}>
                      <StyledTableCell align="left">
                        {/* {approvedResearchPaper.userId} */}
                        Hardcoded userId
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {moment(approvedResearchPaper.currentTimeStamp).format(
                          "dddd DD MMMM YYYY"
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {approvedResearchPaper.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a
                          href={approvedResearchPaper.mediaURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          See Paper
                        </a>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          onClick={() =>
                            handleDeleteResearch(approvedResearchPaper.mediaId)
                          }
                        >
                          Delete
                        </Button>
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

export default UploadedResearchWork;
