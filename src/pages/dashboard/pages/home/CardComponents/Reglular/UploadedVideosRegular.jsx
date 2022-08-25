import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../Admin/VideoCard";
import AppWidgetSummary from "../../AppWidgetSummary";
import "../Admin/uploadedImages.css";
import config from "../../../../../../ApiConfig/Config";
import RegularVideoCard from "./RegularVideoCard";

const UploadedVideosRegular = () => {
  const [videos, setVideos] = useState([]);
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  const [regularTotalVideosCount, setRegularTotalVideosCount] = useState(0);
  const [regularTotalApprovedVideosCount, setRegularTotalApprovedVideosCount] =
    useState(0);
  const [regularTotalPendingVideosCount, setRegularTotalPendingVideosCount] =
    useState(0);
  const getUserVideos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getVideosForUserId + `?userId=${userId}`
    );
    console.log(res);
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
  };

  useEffect(() => {
    getUserVideos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__home--heading dashboard__research__heading">
          <h1>{`User ${userId} Videos`}</h1>
        </div>
        <div className="uploaded__images__count">
          <div className="dashboard__home__card__list">
            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Total Total Uploaded"
                  total={regularTotalVideosCount}
                  icon={"ant-design:UserAddOutLined"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Approved Videos"
                  total={regularTotalApprovedVideosCount}
                  color="info"
                  icon={"ant-design:user-filled"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Pending Videos"
                  total={regularTotalPendingVideosCount}
                  color="warning"
                  icon={"ant-design:video-filled"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="uploaded__images__card__container">
          {videos &&
            videos.map((post, id) => (
              <div className="uploaded__images__card" key={post.mediaId}>
                <RegularVideoCard post={post} setVideos={setVideos}  />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};



export default UploadedVideosRegular;
