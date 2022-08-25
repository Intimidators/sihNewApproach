import React, { useState,useEffect } from "react";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "../../../AppWidgetSummary";
import "../../../DashboardHome.css";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../../../../../ApiConfig/Config";
import axios from "axios";
const RegisteredUserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [regularTotalPhotosCount, setRegularTotalPhotosCount] = useState(0);
  const [regularTotalVideosCount, setRegularTotalVideosCount] = useState(0);

  const [regularTotalResearchCount, setRegularTotalResearchCount] = useState(0);
  const getUserPhotos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getPhotosForUserId + `?userId=${userId}`
    );
    console.log(res);
    setRegularTotalPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
  };

  const getUserVideos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getVideosForUserId + `?userId=${userId}`
    );
    console.log(res);
    setRegularTotalVideosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
  };

  const getUserResearchWork = async () => {
    const res = await axios.get(
      config.server.path +
        config.api.getResearchWorkForUserId +
        `?userId=${userId}`
    );
    console.log(res);
    setRegularTotalResearchCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
  };

  useEffect(() => {
    getUserPhotos();
    getUserVideos();
    getUserResearchWork();
  }, []);

  return (
    <Container maxWidth="xl">
      <div className="dashboard__home__container__admin">
        <div className="dashboard__home--heading">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome {userId}
          </Typography>
        </div>
        <div className="dashboard__home__card__container">
          <div className="dashboard__home__card__list">
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Images Uploaded"
                  total={regularTotalPhotosCount}
                  color="info"
                  icon={"ant-design:user-filled"}
                  onClick={() =>
                    navigate(
                      `/dashboard/home/registerdUsers/${userId}/uploadedImages`
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="videos uploaded"
                  total={regularTotalVideosCount}
                  color="warning"
                  icon={"ant-design:video-filled"}
                  onClick={() =>
                    navigate(
                      `/dashboard/home/registerdUsers/${userId}/uploadedVideos`
                    )
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
                    navigate(
                      `/dashboard/home/registerdUsers/${userId}/uploadedResearch`
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Registered Webinar"
                  total={1352831}
                  color="info"
                  icon={"ant-design:apple-filled"}
                  onClick={() =>
                    navigate(
                      `/dashboard/home/registerdUsers/${userId}/registeredWebinars`
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Scheduled Webinars"
                  total={1723315}
                  color="warning"
                  icon={"ant-design:windows-filled"}
                  onClick={() =>
                    navigate(
                      `/dashboard/home/registerdUsers/${userId}/scheduledWebinars`
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisteredUserDetails;
