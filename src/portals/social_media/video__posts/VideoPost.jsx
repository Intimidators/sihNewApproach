import React, { useState, useEffect } from "react";

import "./videoPost.css";

import Videos from "./videoPostComponent/Videos";
import config from "../../../ApiConfig/Config";
import axios from "axios";
import {useSelector} from 'react-redux'

const VideoPost = () => {
  // const [ytVideo, setYtVideo] = useState([]);
  const [approvedVideos, setApprovedVideos] = useState([]);
  const { state } = useSelector((state) => state.vvgnli);


  const getAllApprovedVideos = async () => {
    try {
      const res = await axios.get(
        config.server.path + config.api.getApprovedVideos,
        {
          headers:{state:state}
        }
      );
      setApprovedVideos(res.data.approvedVideosArray);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllApprovedVideos();
  }, [state]);

  return (
    <>
      <div className="video__posts">
        <div className="video__posts__container">
          {approvedVideos.map((video) => (
            <Videos
              id={video.mediaId}
              src={video.mediaURL}
              // channel={vid.channel}
              // description={vid.description}
              // like={vid.likes}
              // dislike={vid.dislike}
              // share={vid.shares}
              // comment={vid.comment}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPost;
