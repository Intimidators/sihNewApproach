import React from "react";

import "./imagesPost.css";

import img1 from "../../../assets/slider_02.JPG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import SearchPhotos from "./components/searchPhotos/searchPhotos";

const ImagesPost = ({ refresh, setRefresh }) => {
  return (
    <>
      <div className="images__posts">
        <div className="images__posts__container">
          <SearchPhotos refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </>
  );
};
export default ImagesPost;
