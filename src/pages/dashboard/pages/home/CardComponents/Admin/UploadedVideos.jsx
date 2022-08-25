import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import config from "../../../../../../ApiConfig/Config";
import VideoCard from "./VideoCard";

const UploadedVideos = () => {
  const [videos, setVideos] = useState([]);

  const getApprovedVideos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getApprovedVideos
    );
    setVideos(res.data.approvedVideosArray);
    console.log(res);
  };

  useEffect(() => {
    getApprovedVideos();
  }, []);

  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Approved Videos
          </Typography>
        </div>
        <div className="uploaded__videos__card">
          <Grid container spacing={3}>
            {videos &&
              videos.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.mediaId}>
                  <VideoCard
                    post={post}
                    getApprovedVideos={getApprovedVideos}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default UploadedVideos;
