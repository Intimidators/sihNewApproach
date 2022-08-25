import React, { useState, Component, useRef } from "react";
import { TextField } from "@material-ui/core";

import AddressInput from "material-ui-address-input";

import "react-phone-input-2/lib/style.css";
import "../authentication.css";

import "react-toastify/dist/ReactToastify.css";

import CreateIcon from "@mui/icons-material/Create";
import DoneIcon from "@mui/icons-material/Done";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@mui/material";

import config from "../../ApiConfig/Config";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const toastId = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user.name,
      userName: user.username,
    },
  });
  const navigate = useNavigate();
  const dobOfUser = new Date(user.DOB);
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
  const [change, setchange] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    pic: false,
  });

  const [imgFile, setImgFile] = useState("");

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log(data, imgFile);
    let formData = new FormData();
    formData.append("file", imgFile.data);
    console.log("file uploading");
    try {
      if (imgFile !== "") {
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
          render: "Profile Photo Changed",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
        });
        const res2 = await axios.post(
          config.server.path + config.api.handlePostPic,
          {
            userId: user.userId,
            mediaId: res.data.mediaIdArray[0],
          },
          {
            headers: { "User-Id": user.userId },
          }
        );

        const newUser = { ...user, profilePicURL: res2.data.mediaURL };
        sessionStorage.setItem("user", JSON.stringify(newUser));
      }
      if (data.firstName !== user.name || data.userName !== user.username) {
        const res = await axios.patch(
          config.server.path + config.api.updateProfile,
          {
            userId: user.userId,
            name: data.firstName,
            userName: data.userName,
          },
          {
            headers: { "User-Id": user.userId },
          }
        );
        console.log(res);

        const newUser = {
          ...user,
          name: data.firstName,
          username: data.userName,
        };
        sessionStorage.setItem("user", JSON.stringify(newUser));
      }
      toast.success("save success", { toastId: "hi" });
      console.log("upload done");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { toastId: "hi" });
    }
  };
  const handleChange = (e) => {
    const img = {
      data: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    };
    setImgFile(img);
  };

  const buttonDisable =
    imgFile === "" &&
    watch().firstName === user.name &&
    watch().userName === user.username;

  console.log("button", buttonDisable);
  return (
    <>
      <div className="signup">
        <div className="overlay"></div>
        <div className="signup__container">
          <div className="signup__form">
            <div
              className="text"
              style={{
                fontSize: "2.5rem",
                color: "blue",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              User
              {imgFile !== "" ? (
                <img
                  src={imgFile?.preview || user.profilePicURL}
                  alt=""
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "200px",
                  }}
                />
              ) : (
                <></>
              )}
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: "1.2rem",
                flexDirection: "column",
                paddingLeft: "5%",
                gap: "3%",
              }}
            >
              <div>
                ProfilePic :
                <Button component="label">
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    // value={imgFile.name}
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
                {/* {imgFile !== null ? `: ${imgFile?.data?.name}` : ""} */}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                Name:{" "}
                {change.firstName ? (
                  <>
                    <TextField
                      type="text"
                      required
                      defaultValue={user.name}
                      error={errors.firstName}
                      {...register("firstName", {
                        required: "This field is required",
                        minLength: { value: 3, message: "Atleast 3 character" },
                        pattern: {
                          value: /^[a-zA-Z ]*$/,
                          message: "Invalid Name",
                        },
                      })}
                      helperText={
                        errors.firstName ? errors.firstName.message : ""
                      }
                    />
                    <DoneIcon
                      style={{ fill: "black" }}
                      fontSize="small"
                      onClick={() => {
                        setchange((prev) => ({
                          firstName: false,
                          lastName: false,
                          userName: false,
                          pic: false,
                        }));
                      }}
                    />
                  </>
                ) : (
                  <>
                    {/* {user.name} */}
                    {watch().firstName}
                    <CreateIcon
                      style={{ fill: "black" }}
                      fontSize="small"
                      onClick={() => {
                        setchange((prev) => ({
                          lastName: false,
                          userName: false,
                          pic: false,
                          firstName: true,
                        }));
                      }}
                    />
                  </>
                )}
              </div>
              <div>{`Father Name: ${user.fatherName}`}</div>
              <div>{`Gender: ${user.gender}`}</div>
              <div>{`Email: ${user.email}`}</div>
              <div>{`Date Of Birth: ${dobOfUser.getDate()}-${
                dobOfUser.getMonth() + 1
              }-${dobOfUser.getFullYear()}`}</div>
              <div>{`Religion: ${user.religion}`}</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                User Name:{" "}
                {change.userName ? (
                  <>
                    <TextField
                      type="text"
                      // value="Name"
                      required
                      defaultValue={user.userName}
                      error={errors.userName}
                      {...register("userName", {
                        required: "This field is required",
                        minLength: { value: 3, message: "Atleast 3 character" },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Invalid Name",
                        },
                      })}
                      helperText={
                        errors.userName ? errors.userName.message : ""
                      }
                    />
                    <DoneIcon
                      style={{ fill: "black" }}
                      fontSize="small"
                      onClick={() => {
                        setchange((prev) => ({
                          firstName: false,
                          lastName: false,
                          userName: false,
                          pic: false,
                        }));
                      }}
                    />
                  </>
                ) : (
                  <>
                    {watch().userName}
                    <CreateIcon
                      style={{ fill: "black" }}
                      fontSize="small"
                      onClick={() => {
                        setchange((prev) => ({
                          firstName: false,
                          lastName: false,

                          pic: false,
                          userName: true,
                        }));
                      }}
                    />
                  </>
                )}
              </div>
              <div>{`Phone Number: ${user.phoneNumber}`}</div>
              <div>{`Address: ${
                user.addressL1 +
                " " +
                user.addressL2 +
                " " +
                user.city +
                " " +
                user.country
              }`}</div>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                disabled={buttonDisable}
              >
                save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
