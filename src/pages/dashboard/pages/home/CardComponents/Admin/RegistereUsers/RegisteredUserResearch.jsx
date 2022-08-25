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
import { useParams } from "react-router-dom";
import config from "../../../../../../../ApiConfig/Config";
import moment from "moment";
import AppWidgetSummary from "../../../AppWidgetSummary";

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

const RegisteredUserUploadedResearch = () => {
  const [researchWorks, setResearchWorks] = useState([]);
  const { userId } = useParams();
  const [regularTotalPhotosCount, setRegularTotalPhotosCount] = useState(0);
  const [regularTotalApprovedPhotosCount, setRegularTotalApprovedPhotosCount] =
    useState(0);
  const [regularTotalPendingPhotosCount, setRegularTotalPendingPhotosCount] =
    useState(0);
  const getUserResearchWork = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getResearchWorkForUserId +
        `?userId=${userId}`
    );
    console.log(res.data);
    setRegularTotalPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    setRegularTotalApprovedPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia
    );
    setRegularTotalPendingPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    setResearchWorks(res.data.researchWorkArray);
  };

  useEffect(() => {
    getUserResearchWork();
  }, []);

  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Research Section for User {userId}
          </Typography>
        </div>
        <div className="uploaded__images__count">
          <div className="dashboard__home__card__list">
            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Total Research Uploaded"
                  total={regularTotalPhotosCount}
                  icon={"ant-design:UserAddOutLined"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Approved Research"
                  total={regularTotalApprovedPhotosCount}
                  color="info"
                  icon={"ant-design:user-filled"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Pending Research"
                  total={regularTotalPendingPhotosCount}
                  color="warning"
                  icon={"ant-design:video-filled"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Media ID</StyledTableCell>
                  <StyledTableCell align="left">Paper Link</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {researchWorks &&
                  researchWorks.map((researchWork, id) => (
                    <StyledTableRow key={id}>
                      <StyledTableCell align="left">
                        {moment(researchWork.currentTimeStamp).format(
                          "dddd DD MMMM YYYY"
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {researchWork.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a
                          href={researchWork.mediaURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          See Paper
                        </a>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {researchWork.status === 1 ? (
                          <Button>Delete</Button>
                        ) : (
                          <Button>Pending For Approval</Button>
                        )}
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

export default RegisteredUserUploadedResearch;
