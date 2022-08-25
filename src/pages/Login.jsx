import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./authentication.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import config from "../ApiConfig/Config";



const Login = () => {
  const [loginButtonDisable, setLoginButtonDisable] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("data", data);
    const loginData = {
      email: data.email,
      password: data.password,
    };
    console.log(loginData);

    try {
      const response = await axios.post(config.server.path + config.api.login, {
        ...loginData,
      });
      console.log(response);
      console.log("data", response.data);
      if (response.data.success) {
        if (response.data.user.isTempPassword === 1) {
          navigate("/PasswordReset", {
            state: {
              userId: response.data.user.userId,
              email: response.data.user.email,
            },
          });
        }
        if (response.data.user.isTempPassword === 0) {
          const user = {
            ...response.data.user,
            profilePicURL: response.data.profilePicURL,
          };
          console.log(user);
          sessionStorage.setItem("user", JSON.stringify(user));
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
          navigate("/");
        }
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="signin">
        <div className="overlay"></div>
        <div className="signin__container">
          <div className="signin__form">
            <div className="icon__container">
              <div className="icon__class">
                <PersonIcon />
              </div>
              <div className="text">{t("Log_in_main_heading")}</div>
            </div>

            <div className="mailid__and__password__conatiner signin__mailid__and__password__conatiner">
              <div className="email" style={{ marginTop: "1rem" }}>
                <TextField
                  id="email"
                  type="email"
                  variant="outlined"
                  label={t("Log_in_Enter_email")}
                  fullWidth
                  required
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : ""}
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
              <div className="password" style={{ marginTop: "1rem" }}>
                <TextField
                  id="password"
                  type="password"
                  variant="outlined"
                  label={t("Log_in_Enter_password")}
                  fullWidth
                  error={errors.password}
                  {...register("password", {
                    required: "This field is required",
                  })}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </div>
            </div>
            <div className="terms__and__button__container">
              <div className="terms__checkbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkboxicon={<CheckBoxIcon />}
                      name="checkedI"
                    />
                  }
                  label={t("Log_in_Remember_me")}
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
                  {t("Log_in_Button")}
                </Button>
              </div>
              <div className="authentication__links__signup">
                <p className="links">
                  <Link to="/signup">{t("Log_in_Do_not_have_accnt")} ?</Link>
                </p>
              </div>
              <div className="authentication__links__signup">
                <p className="links">
                  <Link to="/forgotPassword">{"Forgot Password"} ?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
