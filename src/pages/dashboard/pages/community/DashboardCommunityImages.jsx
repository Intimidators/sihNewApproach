import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import Paper from "@mui/material/Paper";

import TableHead from "@mui/material/TableHead";

import CancelIcon from "@mui/icons-material/Cancel";
import { Typography, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

import { tableCellClasses } from "@mui/material/TableCell";
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DashboardCommunityImages = ({ isAdmin }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  var isAdmin = false;
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  console.log(userRoleFromSession.role);
  if (userRoleFromSession.role === 1) {
    isAdmin = true;
  } else if (userRoleFromSession.role === 2) {
    isAdmin = false;
  }
  console.log(isAdmin);

  const getPhotos = async () => {
    setLoading(true);
    const res = await axios.get(
      config.server.path + config.api.getPendingPhotos + `?userId=${userId}`
    );
    setPhotos(res.data.pendingPhotos);
    console.log(res);
    setLoading(false);
  };

  const handleCancelClick = async (id) => {
    console.log("Cancel", id);
    const obj = {
      mediaId: id,
      postStatus: "2",
    };
    const res = await axios.post(
      config.server.path + config.api.updatePostStatus + `?userId=${userId}`,
      {
        ...obj,
      }
    );
    await getPhotos()
  };

  const handleDoneClick = async (id) => {
    console.log("Done");
    const obj = {
      mediaId: id,
      postStatus: "1",
    };
    const res = await axios.post(
      config.server.path + config.api.updatePostStatus + `?userId=${userId}`,
      {
        ...obj,
      }
    );
    await getPhotos()
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h5" gutterBottom component="div">
            Pending For Approval Images Section
          </Typography>
        </div>
        <div className="dashboard__community__list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">User Id</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Media Id</StyledTableCell>
                  <StyledTableCell align="left">Post Link</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <CircularProgress />
                ) : (
                  photos &&
                  photos.map((photo, id) => (
                    <StyledTableRow key={photo.mediaId}>
                        <StyledTableCell align="left">{photo.userId}</StyledTableCell>
                      <StyledTableCell align="left">
                        {moment(photo.currentTimeStamp).format(
                          "dddd DD MMMM YYYY"
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {photo.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a href={photo.mediaURL} target="_blank">
                          See Post
                        </a>
                      </StyledTableCell>
                      {isAdmin && (
                        <StyledTableCell align="right">
                          <Box component="div" sx={{ display: "inline" }}>
                            <CancelIcon
                              color="action"
                              onClick={() => {
                                handleCancelClick(photo.mediaId);
                              }}
                            />
                          </Box>
                          <Box component="div" sx={{ display: "inline" }}>
                            <DoneIcon
                              color="primary"
                              onClick={() => {
                                handleDoneClick(photo.mediaId);
                              }}
                            />
                          </Box>
                        </StyledTableCell>
                      )}
                      {!isAdmin && (
                        <StyledTableCell align="left">
                          <Button>Delete</Button>
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCommunityImages;
