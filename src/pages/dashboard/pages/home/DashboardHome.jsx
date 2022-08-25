import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "./AppWidgetSummary";
import "./DashboardHome.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import config from "../../../../ApiConfig/Config";
import axios from "axios";
import { Button, Space, Modal, Input, DatePicker } from "antd";

// components
const DashboardHome = ({}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const [registeredUsersCount, setRegisteredUsersCount] = useState(0);
  const [approvedPhotosCount, setApprovedPhotosCount] = useState(0);
  const [approvedVideosCount, setApprovedVideosCount] = useState(0);
  const [approvedResearchWorkCount, setApprovedResearchWorkCount] = useState(0);
  const [regularTotalPhotosCount, setRegularTotalPhotosCount] = useState(0);
  const [regularTotalVideosCount, setRegularTotalVideosCount] = useState(0);
  const [regularTotalResearchCount, setRegularTotalResearchCount] = useState(0);
  const [futureWebinarCount, setFutureWebinarCount] = useState(0);
  const [pastWebinarCount, setPastWebinarCount] = useState(0);
  const [onGoingWebinarCount, setOnGoingWebinarCount] = useState(0);

  const getRegisteredUsersCount = async () => {
    const res = await axios.get(
      config.server.path +
        config.role.admin +
        config.api.getUserDetails +
        `?count=true&userId=${userId}`
    );
    if (res.data.userDetails.length === 0) {
      setRegisteredUsersCount(0);
    } else {
      setRegisteredUsersCount(res.data.userDetails[0].totalUsers);
    }
    console.log("Approved users", res.data);
  };
  const getApprovedPhotosCount = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getCountOfApprovedPhotos +
        `?userId=${userId}`
    );

    if (res.data.approvedPhotosCount.length === 0) {
      setApprovedPhotosCount(0);
    } else {
      setApprovedPhotosCount(
        res.data.approvedPhotosCount[0].totalApprovedPhotos
      );
    }
    console.log("Approved Photos", res.data);
  };

  const getApprovedVideosCount = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getCountOfApprovedVideos +
        `?userId=${userId}`
    );
    if (res.data.approvedVideosCount.length === 0) {
      setApprovedVideosCount(0);
    } else {
      setApprovedVideosCount(
        res.data.approvedVideosCount[0].totalApprovedVideos
      );
    }
    console.log("Approved Videos", res.data);
  };

  const getPendingResearchWorkCount = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getPendingResearchWork +
        `?userId=${userId}&count=true`
    );

    // console.log(res.data.pendingResearchWork);
  };

  const getApprovedResearchWorkCount = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getApprovedResearchWork +
        `?userId=${userId}&count=true`
    );
    if (res.data.approvedResearchWork.length === 0) {
      setApprovedResearchWorkCount(0);
    } else {
      console.log("somethig");
      setApprovedResearchWorkCount(
        res.data.approvedResearchWork[0].totalApprovedResearchWork
      );
    }
    console.log("Approved Research Work", res.data);
  };

  const getRegularUserPhotosCount = async () => {
    const res = await axios.get(
      config.server.path + config.api.getPhotosForUserId + `?userId=${userId}`
    );
    setRegularTotalPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );

    console.log("Regular Photos Work", res);
  };
  const getRegularUserVideosCount = async () => {
    const res = await axios.get(
      config.server.path + config.api.getVideosForUserId + `?userId=${userId}`
    );
    setRegularTotalVideosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );

    console.log("Regular Videoss Work", res.data);
  };

  const getRegularUserResearchCount = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getResearchWorkForUserId +
        `?userId=${userId}`
    );
    //  setRegularTotalPhotosCount();
    setRegularTotalResearchCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    console.log("Regular Research Work", res.data);
  };

  const getWebinarsCount = async () => {
    try {
      const future = await axios.get(
        config.server.path + config.role.admin + config.api.getFutureWebinars,
        {
          headers: { "User-Id": userId },
        }
      );
      setFutureWebinarCount(future.data.webinars.length);
      console.log("Future", future);
      const past = await axios.get(
        config.server.path + config.role.admin + config.api.getPastWebinars,
        {
          headers: { "User-Id": userId },
        }
      );
      console.log("past", past);
      setPastWebinarCount(past.data.webinars.length);
      const ongoing = await axios.get(
        config.server.path + config.role.admin + config.api.getOngoingWebinars,
        {
          headers: { "User-Id": userId },
        }
      );
      setOnGoingWebinarCount(ongoing.data.webinars.length);
      console.log("ongoing", ongoing);
    } catch (error) {}
  };
  useEffect(() => {
    if (isAdmin) {
      getRegisteredUsersCount();
      getApprovedPhotosCount();
      getApprovedVideosCount();
      getPendingResearchWorkCount();
      getApprovedResearchWorkCount();
      getWebinarsCount();
    }
    getRegularUserPhotosCount();
    getRegularUserVideosCount();
    getRegularUserResearchCount();
  }, []);

  return (
    <div className="dashboard__home">
      <div className="dashboard__home__container">
        {isAdmin && (
          <div className="dashboard__home__container__admin">
            <div className="dashboard__home--heading">
              {/* <Typography variant="h4" sx={{ mb: 5 }}> */}
              <h1>Hi, Welcome Admin</h1>
              {/* </Typography> */}
            </div>
            <div className="dashboard__home__card__container">
              <div className="dashboard__home__card__list">
                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="Registered users"
                      total={registeredUsersCount}
                      icon={"ant-design:UserAddOutLined"}
                      onClick={() => navigate("/dashboard/home/registerdUsers")}
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>

                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="Images Uploaded"
                      total={approvedPhotosCount}
                      color="info"
                      icon={"ant-design:user-filled"}
                      onClick={() => navigate("/dashboard/home/uploadedImages")}
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>

                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="videos uploaded"
                      total={approvedVideosCount}
                      color="warning"
                      icon={"ant-design:video-filled"}
                      onClick={() => navigate("/dashboard/home/uploadedVideos")}
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>

                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="Research Work Uploaded"
                      total={approvedResearchWorkCount}
                      color="error"
                      icon={"ant-design:bug-filled"}
                      onClick={() =>
                        navigate("/dashboard/home/uploadedResearch")
                      }
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>

                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="Past Webinars"
                      total={pastWebinarCount}
                      icon={"ant-design:android-filled"}
                      onClick={() => navigate("/dashboard/home/webinarTillNow")}
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>

                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="Active Webinar"
                      total={onGoingWebinarCount}
                      color="info"
                      icon={"ant-design:apple-filled"}
                      onClick={() => navigate("/dashboard/home/activeWebinars")}
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>

                <div className="dashboard__card wrapper">
                  <div className="card">
                    <AppWidgetSummary
                      title="Scheduled Webinars"
                      total={futureWebinarCount}
                      color="warning"
                      icon={"ant-design:windows-filled"}
                      onClick={() =>
                        navigate("/dashboard/home/scheduledWebinars")
                      }
                      className="dashboard__card__inner__div"
                      style={{ cursor: "pointer", fontSize: ".5rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isAdmin && (
          <div className="dashboard__home__container__regular">
            <div className="dashboard__home--heading">
              <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, Welcome Regular
              </Typography>
            </div>
            <div className="dashboard__home__card__container">
              <div className="dashboard__home__card__list">
                <Grid container spacing={8}>
                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Images Uploaded"
                      total={regularTotalPhotosCount}
                      icon={"ant-design:UserAddOutLined"}
                      onClick={() =>
                        navigate("/dashboard/home/uploadedImagesRegular")
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Videos Uploaded"
                      total={regularTotalVideosCount}
                      color="info"
                      icon={"ant-design:user-filled"}
                      onClick={() =>
                        navigate("/dashboard/home/uploadedVideosRegular")
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Research Work Uploaded"
                      total={regularTotalResearchCount}
                      color="error"
                      icon={"ant-design:bug-filled"}
                      onClick={() =>
                        navigate("/dashboard/home/uploadedResearchRegular")
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Registerd Webinar"
                      total={1352831}
                      color="info"
                      icon={"ant-design:apple-filled"}
                      onClick={() =>
                        navigate("/dashboard/home/registeredWebinarsRegular")
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Webinars Attended"
                      total={1723315}
                      color="warning"
                      icon={"ant-design:windows-filled"}
                      onClick={() =>
                        navigate("/dashboard/home/webinarsAttendedRegular")
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
