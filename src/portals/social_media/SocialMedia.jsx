import React, { useState, useEffect, useRef } from "react";
import ImagesPost from "./images__post/ImagesPost";
import "./socialMedia.css";
import VideoPost from "./video__posts/VideoPost";
import Button from "@mui/material/Button";
import axios from "axios";
import config from "../../ApiConfig/Config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SocialMedia = () => {
  const toastId = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [imgFile, setImgFile] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [imagesOrVideos, setImagesOrVideos] = useState(
    <ImagesPost refresh={refresh} setRefresh={setRefresh} />
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpload = async () => {
    let formData = new FormData();
    formData.append("file", imgFile.data);
    console.log("file uploading");
    try {
      const res = await axios.post(
        config.server.path + config.api.uploadMedia,
        formData,
        {
          onUploadProgress: (p) => {
            const progress = p.loaded / p.total;
            if (toastId.current === null) {
              toastId.current = toast("Upload in Progress", { progress });
            } else {
              toast.update(toastId.current, {
                progress,
                type: toast.TYPE.INFO,
              });
            }
          },
          headers: { "User-Id": user.userId },
        }
      );

      toast.done(toastId.current);
      toast.update(toastId.current, {
        render: "Upload Done",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
      const res2 = await axios.post(
        config.server.path + config.api.handlePost,
        {
          userId: user.userId,
          mediaIdArray: res.data.mediaIdArray,
        },
        {
          headers: { "User-Id": user.userId },
        }
      );

      setRefresh(() => {
        console.log("refresh true");
        return true;
      });
      const approvedRes = await axios.get(
        config.server.path + config.api.getApprovedPhotos
      );
      dispatch({
        type: "approvedPhotos",
        payload: approvedRes.data.approvedPhotosArray,
      });
    } catch (error) {
      console.log(error);
    }
    setImgFile(null);
    toastId.current = null;
    console.log("file uploaded");
  };
  console.log("refresh", refresh);
  const notify = (msg) => {
    toast.error(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {msg}
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>,
      {
        toastId: "id",
      }
    );
  };

  const handleChange = (e) => {
    console.log("file change");
    const img = {
      data: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    };
    setImgFile(img);
  };

  useEffect(() => {
    if (imgFile) {
      // console.log("not null");
      handleUpload();
    } else {
      // console.log("file null");
    }
  }, [imgFile]);
  useEffect(() => {
    console.log(refresh);
    setRefresh(false);
  }, [refresh]);
  return (
    <>
      <div className="socialMedia">
        <div className="socialMedia__container">
          <div className="social__media__buttons">
            <Button
              variant="contained"
              style={{
                width: "10%",
                height: "100%",
                backgroundColor: "white",
                color: "#1976d2",
                fontWeight: "800",
                fontSize: ".8rem",
              }}
              onClick={() => {
                setImagesOrVideos(
                  <ImagesPost refresh={refresh} setRefresh={setRefresh} />
                );
              }}
            >
              Images
            </Button>

            {
              // userFromSession && userFromSession.userId &&

              <div className="App">
                <div>
                  <Button
                    variant="contained"
                    style={{
                      color: "#1976d2",
                      backgroundColor: "white",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                    component="label"
                  >
                    Upload
                    <input
                      hidden
                      accept="image/* video/*"
                      type="file"
                      onChangeCapture={(e) => handleChange(e)}
                      onClick={(e) => {
                        if (user === null) {
                          e.preventDefault();
                          notify("Login before Uploading");
                        } else {
                          e.target.value = null;
                          console.log(e.target.value);
                        }
                      }}
                    />
                  </Button>
                </div>
              </div>
            }
            <Button
              variant="contained"
              style={{
                width: "10%",
                height: "100%",
                backgroundColor: "white",
                color: "#1976d2",
                fontWeight: "800",
                fontSize: ".8rem",
              }}
              onClick={() => {
                setImagesOrVideos(<VideoPost />);
              }}
            >
              Videos
            </Button>
          </div>
          {/* {loading ? (
            <div style={{ width: "80%", margin: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    style={{ backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    style={{ color: "white" }}
                  >{`${Math.round(progress)}%`}</Typography>
                </Box>
              </Box>
            </div>
          ) : (
            <></>
          )} */}
          <div className="social__media__rendering">{imagesOrVideos}</div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
// style={{ backgroundColor: "white" }}
