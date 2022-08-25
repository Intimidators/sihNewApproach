import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import AppWidgetSummary from "../../../AppWidgetSummary";
import { useParams } from "react-router-dom";
import config from "../../../../../../../ApiConfig/Config";
import RegisteredVideoCard from "./RegisterdVideoCard";


const RegisteredUserUploadedVideos = () => {
  const [videos, setVideos] = useState([]);
  const { userId } = useParams();
  const [regularTotalVideosCount, setRegularTotalVideosCount] = useState(0);
  const [regularTotalApprovedVideosCount, setRegularTotalApprovedVideosCount] =
    useState(0);
  const [regularTotalPendingVideosCount, setRegularTotalPendingVideosCount] =
    useState(0);
  const getUserVideos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getVideosForUserId + `?userId=${userId}`
    );
    setRegularTotalVideosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    setRegularTotalApprovedVideosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia
    );
    setRegularTotalPendingVideosCount(
      res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    setVideos(res.data.videosArray);
    console.log(res.data);
  };

  useEffect(() => {
    getUserVideos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            User Videos Section
          </Typography>
        </div>
        <div className="uploaded__images__count">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <AppWidgetSummary
                title="Total Videos Uploaded"
                total={regularTotalVideosCount}
                icon={"ant-design:UserAddOutLined"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <AppWidgetSummary
                title="Approved videos"
                total={regularTotalApprovedVideosCount}
                color="info"
                icon={"ant-design:user-filled"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <AppWidgetSummary
                title="Pending videos"
                total={regularTotalPendingVideosCount}
                color="warning"
                icon={"ant-design:video-filled"}
              />
            </Grid>
          </Grid>
        </div>
        <div className="uploaded__videos__card">
          <Grid container spacing={3}>
            {videos &&
              videos.map((post, id) => (
                <Grid item xs={12} sm={6} md={4} key={post.mediaId}>
                  <RegisteredVideoCard post={post} key={id} setVideos={setVideos}/>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUserUploadedVideos;
