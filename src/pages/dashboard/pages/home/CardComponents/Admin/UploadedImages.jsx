import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import ImageCard from "./ImageCard";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import AppWidgetSummary from "../../AppWidgetSummary";
import config from "../../../../../../ApiConfig/Config";
import './uploadedImages.css'


const UploadedImages = () => {
  const [photos, setPhotos] = useState([]);

  const getApprovedPhotos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getApprovedPhotos
    );
    setPhotos(res.data.approvedPhotosArray);
    console.log(res);
  };

  useEffect(() => {
    getApprovedPhotos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__home--heading dashboard__research__heading">
          <h1>Approved Images Section</h1>
        </div>
        <div className="uploaded__images__card__container">
            {photos &&
              photos.map((post) => (
                <div className="uploaded__images__card">
                  <ImageCard post={post} key={post.mediaId} getApprovedPhotos={getApprovedPhotos}/>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default UploadedImages;
