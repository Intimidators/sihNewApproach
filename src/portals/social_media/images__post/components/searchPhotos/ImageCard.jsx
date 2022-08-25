import React, { useState } from "react";
import { Modal, Space, Typography, Input, Button } from "antd";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import axios from "axios";
import config from "../../../../../ApiConfig/Config";

import "./imageCard.css";
const { Text } = Typography;

const ImageCardCommunity = ({ image, getApprovedPhotos }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);
  var userFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userFromSession.userId;
  const showModal = async () => {
   await getLikedMediaArray();
    setIsModalVisible(true);
  };

  const getPostComments = async () => {
    try {
      const res = await axios.get(
        config.server.path +
          config.api.getCommentsOnPost +
          `?mediaId=${image.mediaId}`,
        {
          headers: { "User-Id": userId },
        }
      );
      setComments(res.data.commentsOnPostArray);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClickLike = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.api.like,
        {
          mediaId: image.mediaId,
          likeStatus: "1",
          userId: userId,
        },
        {
          headers: { "User-Id": userId },
        }
      );
      await getApprovedPhotos();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickDislike = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.api.like,
        {
          mediaId: image.mediaId,
          likeStatus: "2",
          userId: userId,
        },
        {
          headers: { "User-Id": userId },
        }
      );
      await getApprovedPhotos();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitComment = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.api.comment,
        {
          mediaId: image.mediaId,
          userId: userId,
          commentData: comment,
        },
        {
          headers: { "User-Id": userId },
        }
      );
      await getApprovedPhotos();
    } catch (error) {
      console.log(error);
    }
  };

  const getLikedMediaArray = async () => {
    try {
      const res = await axios.get(
        config.server.path + config.api.getLikedPosts + `?userId=${userId}`
      );
      console.log(res);
      setLikedPosts(res.data.likedPostsArray);
      // console.log(
      //   res.data.likedPostsArray.find((x) => x.mediaId === image.mediaId)
      // );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="image__card__community">
      <div className="image__card__community__image">
        <div className="card">
          <img
            src={image.mediaURL}
            alt="images"
            onClick={() => {
              showModal();
            }}
          />
        </div>
      </div>
      <div className="image__card__community__modal">
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{
            height: "90vh",
            position: "absolute",
            top: "5vh",
            left: "35%",
          }}
        >
          <div className="modal__image">
            <img
              src={image.mediaURL}
              alt="images"
              onClick={() => {
                console.log("hey", image.mediaURL);
                showModal();
              }}
              style={{
                width: "100%",
                height: "60%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            />
          </div>
          <div style={{ marginTop: "90%" }}>
            <div className="modal__image__detail__count">
              <Space>
                <Text>{image.totalLikeCount} Likes</Text>
                <Text>{image.totalCommentCount} Comments</Text>
              </Space>
            </div>
            <div className="modal__image__action">
              <div className="modal__image__action__like modal__image__action__icon">
                {likedPosts.find((x) => x.mediaId === image.mediaId) ===
                  undefined && (
                  <ThumbUpOutlinedIcon
                    style={{
                      color: "0072ea",
                    }}
                    onClick={handleClickLike}
                  />
                )}
                {likedPosts.find((x) => x.mediaId === image.mediaId) && (
                  <ThumbUpIcon
                    style={{
                      color: "0072ea",
                    }}
                    onClick={handleClickDislike}
                  />
                )}
              </div>
            </div>

            <div className="modal__image__comment">
              <div className="modal__image__comment__input">
                <Input
                  placeholder="Add a comment"
                  style={{ width: "80%" }}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="modal__image__comment__submit">
                <Button onClick={handleSubmitComment}>Add Comment</Button>
              </div>
            </div>

            <div className="modal__images__comments">
              <div className="get__comments">
                <Button onClick={getPostComments}>Show Comments</Button>
              </div>
              {comments &&
                comments.map((comment) => (
                  <div
                    className="modal__images__comments__byUser"
                    key={comment.mediaId}
                  >
                    Name : {comment.fullName}
                    <br />
                    Date : HardCoded date <br />
                    Comment: {comment.commentData}
                  </div>
                ))}
            </div>
          </div>
          {/* </div> */}
        </Modal>
      </div>
    </div>
  );
};

export default ImageCardCommunity;
