import React, { useState } from "react";

import "./authentication.css";

import { Button, TextField } from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";

import "./authentication.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../ApiConfig/Config";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log("sumbit", data);
    setLoading(true);
    try {
      const res = await axios.post(
        config.server.path + config.api.forgotpassword,
        {
          ...data,
        }
      );
      console.log(res);
      toast.success(
        <div>
          {res.data.message}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>,
        { toastId: "id", autoClose: false }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };
  return (
    <div className="signin">
      <div className="overlay"></div>
      <div className="signin__container">
        <div className="signin__form">
          <div className="icon__container">
            <div className="icon__class">
              <PersonIcon />
            </div>
            <div className="text">Forgot Password</div>
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              id="email"
              type="email"
              variant="outlined"
              label="Email"
              fullWidth
              required
              error={!!errors?.email}
              helperText={
                errors?.email ? errors.email.message : "Enter Your Email"
              }
              {...register("email", {
                required: "Requird field",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid Email",
                },
              })}
            />
          </div>
          <div className="create__account__button button">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
