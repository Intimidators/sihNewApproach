import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import config from "../../../../../../ApiConfig/Config";
import "../Admin/Imagecard.css";
import axios from "axios";
import { Button } from "antd";
import moment from "moment";
const RegularVideoCard = ({ post, setVideos }) => {
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  const handleDeletePost = async () => {
    try {
      const res = await axios.post(
        config.server.path +
          config.role.admin +
          config.api.deletePost +
          `?userId=${userId}`,
        {
          mediaId: post.mediaId,
        }
      );
      await setVideos();
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="post__card">
      <div className="post__card__container">
        <div className="post__card__image">
          <CardMedia
            component="img"
            height="115"
            video={post.mediaURL}
            alt="org image"
            className="img"
          />
          {/* <div className="vedio__player">
            <Player
              fluid={false}
              height={50}
              width={20}
              playsInline
              src={post.mediaURL}
            />
          </div> */}
        </div>
        <div className="post__card__post_info">
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <Typography gutterBottom variant="p" component="div">
              When : {moment(post.currentTimeStamp).format(
                "dddd DD MMMM YYYY"
              )}{" "}
              <br />
              Likes : {post.totalLikeCount} <br />
              Comment : {post.totalCommentCount} <br />
            </Typography>
            <div className="post__card__delete__button">
                <Button onClick={handleDeletePost} type="danger">Delete Post</Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default RegularVideoCard;
