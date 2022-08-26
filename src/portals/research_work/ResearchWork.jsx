import React, { useRef, useState } from "react";

import SplitPane from "react-split-pane";

// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import config from "../../ApiConfig/Config";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ResearchWork = () => {
  const toastId = useRef(null);
  const dispatch = useDispatch();
  const [url, setUrl] = useState();
  // "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020134"
  const [refresh, setRefresh] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const { state } = useSelector((state) => state.vvgnli);
  const { approvedResearchWork } = useSelector((state) => state.research);

  const user = JSON.parse(sessionStorage.getItem("user"));

  const [loading, setLoading] = useState(true);
  const [pdfList, setPdfList] = useState([]);

  const handleChange = (e) => {
    console.log("file change");
    const data = { pdf: e.target.files[0] };
    setPdfFile(data);
  };
  useEffect(() => {
    if (pdfFile) {
      console.log("not null");
      handleUpload();
    } else {
      console.log("file null");
    }
  }, [pdfFile]);

  const handleUpload = async () => {
    // setLoading(true);
    let formData = new FormData();
    formData.append("file", pdfFile.pdf);
    console.log("file uploading");

    try {
      const res = await axios.post(
        config.server.path + config.api.uploadResearchWork,
        // `/?userId=${user.userId}`,
        formData,
        {
          onUploadProgress: (p) => {
            const progress = p.loaded / p.total;
            // check if we already displayed a toast
            if (toastId.current === null) {
              toastId.current = toast("Upload in Progress", { progress });
            } else {
              toast.update(toastId.current, {
                progress,
                type: toast.TYPE.INFO,
              });
            }
          },
          headers: { "User-Id": user.userId, state: state },
        }
      );

      console.log(res);

      toast.done(toastId.current);
      toast.update(toastId.current, {
        render: "Upload Done",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
      // console.log("res", res);
      // setApprovedResearchWork(res.data.mediaIdArray);
      const res2 = await axios.post(
        config.server.path + config.api.handlePost,
        {
          userId: user.userId,
          mediaIdArray: res.data.mediaIdArray,
        },
        { headers: { "User-Id": user.userId, state: state } }
      );
      // console.log("res2", res2);
      setRefresh(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }

    console.log("upload function done");
    setPdfFile(null);
    toastId.current = null;
  };

  useEffect(() => {
    const getApprovedResearchWork = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          config.server.path + config.api.getApprovedResearchWork,
          {
            headers: { state: state },
          }
        );
        // dispatch({
        //   type: "approvedResearchWork",
        //   payload: res.data.getApprovedResearchWork,
        // });
        // console.log(res.data.approvedResearchWork);
        // researchPdfs.push(...res.data.approvedResearchWork);
        // console.log(researchPdfs);
        // setPdfList(res.data.approvedResearchWork);
        console.log(res.data.approvedResearchWork);
        setPdfList(res.data.approvedResearchWork);
        setRefresh(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        setLoading(false);
      }
    };

    getApprovedResearchWork();
    getLikedMediaArray();
  }, [refresh, state]);
  const navigate = useNavigate();
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
  const [likedPosts, setLikedPosts] = useState([]);

  const handleClickLike = async (mediaId) => {
    try {
      const res = await axios.post(
        config.server.path + config.api.like,
        {
          mediaId: mediaId,
          likeStatus: "1",
          userId: user.userId,
        },
        {
          headers: { "User-Id": user.userId, state: state },
        }
      );
      setRefresh(true);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getLikedMediaArray = async () => {
    try {
      const res = await axios.get(
        config.server.path +
          config.api.getLikedPosts +
          `?userId=${user.userId}`,
        {
          headers: { state: state, "User-Id": user.userId },
        }
      );
      console.log(res);
      setLikedPosts(res.data.likedPostsArray);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickDislike = async (mediaId) => {
    try {
      const res = await axios.post(
        config.server.path + config.api.like,
        {
          mediaId: mediaId,
          likeStatus: "2",
          userId: user.userId,
        },
        {
          headers: { "User-Id": user.userId, state: state },
        }
      );
      setRefresh(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="research__work">
        <div className="research__work__container">
          <SplitPane
            split="vertical"
            minSize={250}
            defaultSize={200}
            maxSize={400}
            style={{ height: "87%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                paddingBottom: "10%",
              }}
            >
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress sx={{ color: "white" }} />
                </div>
              ) : (
                <ul style={{ overflow: "scroll" }}>
                  {pdfList?.map((data, key) => (
                    <li
                      key={data.mediaId}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100px",
                        justifyContent: "space-around",
                      }}
                    >
                      {console.log("data", data)}
                      <Button
                        style={{
                          color: "#1976d2",
                          backgroundColor: "white",
                          fontWeight: "700",
                          cursor: "pointer",
                        }}
                        onClick={() => setUrl(data.mediaURL)}
                      >
                        {`Document ${key + 1}`}
                      </Button>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "100%",
                        }}
                      >
                        <ThumbUpOffAltIcon />
                        <CommentIcon />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
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
                    accept="application/pdf"
                    type="file"
                    onChangeCapture={(e) => handleChange(e)}
                    onClick={(e) => {
                      if (user === null) {
                        e.preventDefault();
                        notify("Login before Uploading");
                      } else {
                        e.target.value = null;
                      }
                    }}
                  />
                </Button>
              </div>
            </div>
            <div className="webviewer" style={{ height: "100%" }}>
              <object
                width="100%"
                height="100%"
                data={url}
                type="application/pdf"
              />
            </div>
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default ResearchWork;
