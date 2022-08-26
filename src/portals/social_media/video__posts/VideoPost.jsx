import React, { useState, useEffect } from "react";

import "./videoPost.css";

import Videos from "./videoPostComponent/Videos";
import config from "../../../ApiConfig/Config";
import axios from "axios";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";

const VideoPost = () => {
  // const [ytVideo, setYtVideo] = useState([]);
  const [approvedVideos, setApprovedVideos] = useState([]);
  const { state } = useSelector((state) => state.vvgnli);
  const [loading, setLoading] = useState(true);

  const getAllApprovedVideos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        config.server.path + config.api.getApprovedVideos,
        {
          headers: { state: state },
        }
      );
      setApprovedVideos(res.data.approvedVideosArray);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllApprovedVideos();
  }, [state]);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <CircularProgress style={{ color: "white" }} />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default VideoPost;
