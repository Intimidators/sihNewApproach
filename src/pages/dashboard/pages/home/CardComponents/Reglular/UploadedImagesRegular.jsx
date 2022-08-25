import React, { useEffect, useState } from "react";
// import ImageCard from "../ImageCard";
import axios from "axios";
import RegularImageCard from "./RegularImageCard";
import AppWidgetSummary from "../../AppWidgetSummary";
import "../Admin/uploadedImages.css";
import config from "../../../../../../ApiConfig/Config";
import { useParams } from "react-router-dom";

const UploadedImagesRegular = () => {
  const [photos, setPhotos] = useState([]);
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  const [regularTotalPhotosCount, setRegularTotalPhotosCount] = useState(0);
  const [regularTotalApprovedPhotosCount, setRegularTotalApprovedPhotosCount] =
    useState(0);
  const [regularTotalPendingPhotosCount, setRegularTotalPendingPhotosCount] =
    useState(0);
  const getUserPhotos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getPhotosForUserId + `?userId=${userId}`
    );
    console.log(res);
    setRegularTotalPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia +
        res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    setPhotos(res.data.photosArray);
    setRegularTotalApprovedPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfApprovedMedia
    );
    setPhotos(res.data.photosArray);
    setRegularTotalPendingPhotosCount(
      res.data.countOfApprovedAndPendingMedia.countOfPendingMedia
    );
    setPhotos(res.data.photosArray);
  };

  useEffect(() => {
    getUserPhotos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__home--heading dashboard__research__heading">
          <h1>{`User ${userId} Images`}</h1>
        </div>
        <div className="uploaded__images__count">
          <div className="dashboard__home__card__list">
            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Total Images Uploaded"
                  total={regularTotalPhotosCount}
                  icon={"ant-design:UserAddOutLined"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Approved Images"
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
                  title="Pending Images"
                  total={regularTotalPendingPhotosCount}
                  color="warning"
                  icon={"ant-design:video-filled"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="uploaded__images__card__container">
          {photos &&
            photos.map((post, id) => (
              <div className="uploaded__images__card">
                <RegularImageCard post={post} key={id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UploadedImagesRegular;
