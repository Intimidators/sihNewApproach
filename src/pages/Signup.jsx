import React, { useState, Component } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  FormControl,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  FormGroup,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import AddressInput from "material-ui-address-input";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import "./authentication.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import config from "../ApiConfig/Config";

// address class component srart

export class ControlledAddressInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      addresses: [],
    };
  }

  handleAddAddress = (address) => {
    this.setState({
      addresses: [...this.state.addresses, address],
    });
  };

  handleChangeAddress = (addressIndex) => {
    this.setState({
      address: addressIndex,
    });
  };
  componentDidMount() {
    this.props.setAddress(this.state);
  }
  componentDidUpdate() {
    this.props.setAddress(this.state);
    // this.props.setAddressError({ state: false, message: "" });
  }

  render() {
    return (
      <AddressInput
        className="ph-no__input"
        onAdd={this.handleAddAddress}
        onChange={this.handleChangeAddress}
        value={this.state.address}
        allAddresses={this.state.addresses}
        error={this.props.addressError.state}
        // helperText={
        //   this.props.addressError.state ? this.props.address.message : ""
        // }
      />
    );
  }
}
// address class component ends

const Signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    console.log("hello");
    if (isValidAddress() && isTermsValid()) {
      const userAddress = address.addresses[0];
      const userSignIn = {
        name: data.firstName + " " + data.lastName,
        fatherName: data.fathersName,
        gender: data.gender,
        dateOfBirth: data.dob,
        religion: data.religion,
        phoneNumber: phoneNumber,
        userName: data.userName,
        emailAddress: data.email,
        password: data.password,
        addressL1: userAddress.addressLine1,
        addressL2: userAddress.addressLine2,
        city: userAddress.city,
        state: userAddress.region,
        country: userAddress.country,
        zipCode: userAddress.zip,
      };
      console.log(userSignIn);
      try {
        const response = await axios.post(
          config.server.path + config.api.signUp,
          {
            ...userSignIn,
          }
        );
        if (response.data.success) {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
          navigate("/login");
        }
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        console.log("error", error);
      }
    }
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phone, setPhone] = useState("+91");
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [date, setDate] = useState("");
  const [phoneError, setPhoneError] = useState({ state: false, message: "" });
  const [address, setAddress] = useState({
    address: "",
    addresses: [],
  });
  const [addressError, setAddressError] = useState({
    state: false,
    message: "",
  });
  const [countryCode, setCountryCode] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [countryName, setCountryName] = useState("");

  const handlePhnChange = (e, value) => {
    console.log(value, e);
    setPhone(value);
  };
  const isTermsValid = () => {
    setTermsError(false);
    if (terms === false) {
      setTermsError(true);
      return false;
    }
    return true;
  };
  const isValidDate = (val) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let userDate = new Date(val);
    let userYear = userDate.getFullYear();
    let userMonth = userDate.getMonth();
    let userDay = userDate.getDate();

    let age = currentYear - userYear;
    let age_month = currentMonth - userMonth;
    let age_day = currentDay - userDay;

    if (age > 100) {
      return "Age cannot be more than 100 Years.Please enter correct age";
    }
    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
      age = parseInt(age) - 1;
    }
    if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
      return "Age should be more than 18 years.Please enter a valid Date of Birth";
    }
    return true;
  };
  const isValidPhoneNumber = () => {
    setPhoneError({ state: false, message: "" });
    if (phone === "+91") {
      setPhoneError({ state: true, message: "This field is required" });
      return false;
    }
    return true;
  };
  const isValidAddress = () => {
    setAddressError({
      state: false,
      message: "",
    });
    if (address.addresses.length === 0) {
      setAddressError({
        state: true,
        message: "This field is required",
      });
      return false;
    }
    return true;
  };
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div className="signup">
        <div className="overlay"></div>
        <div className="signup__container">
          <div className="signup__form">
            <div className="icon__container">
              <div className="icon__class">
                <PersonAddIcon fontsize="large" />
              </div>
              <div className="text">Sign up</div>
            </div>

            <div className="name__input__container">
              <div className="firstname">
                <TextField
                  id="firstname"
                  type="text"
                  variant="outlined"
                  label="Enter first name"
                  fullWidth
                  required
                  error={errors.firstName}
                  {...register("firstName", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Atleast 3 character" },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Invalid Name",
                    },
                  })}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              </div>
              <div className="lastname">
                <TextField
                  id="lastname"
                  type="text"
                  variant="outlined"
                  label="Enter last name"
                  fullWidth
                  required
                  error={errors.lastName}
                  {...register("lastName", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Atleast 3 character" },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Invalid Name",
                    },
                  })}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              </div>
              <div className="father__name">
                <TextField
                  id="father__name"
                  type="text"
                  variant="outlined"
                  label="Enter father's name"
                  fullWidth
                  required
                  error={errors.fathersName}
                  {...register("fathersName", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Atleast 3 character" },
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Invalid Name",
                    },
                  })}
                  helperText={
                    errors.fathersName ? errors.fathersName.message : ""
                  }
                />
              </div>
            </div>

            <div className="personal__information__container">
              <div className="gender__selection__container">
                <FormControl
                  sx={{ m: 3 }}
                  error={errors.gender}
                  variant="standard"
                >
                  <FormLabel id="demo-error-radios">Genders</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    {...register("gender", {
                      required: "This field is required",
                    })}
                  >
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          {...register("gender", {
                            required: "Choose your gender",
                          })}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          {...register("gender", {
                            required: "Choose your gender",
                          })}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Radio
                          {...register("gender", {
                            required: "Choose your gender",
                          })}
                        />
                      }
                      label="Other"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {errors.gender ? errors.gender.message : ""}
                  </FormHelperText>
                </FormControl>
              </div>

              <div className="dob__container">
                <TextField
                  id="date"
                  label="Date of Birth"
                  type="date"
                  onChange={(event) => setDate(event.target.value)}
                  defaultValue={date}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={errors.dob}
                  {...register("dob", {
                    required: true,
                    validate: isValidDate,
                  })}
                  helperText={errors.dob ? errors.dob.message : ""}
                />
              </div>

              <div className="religion__container">
                <FormControl
                  className="religion__selection"
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Religion
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Religion"
                    error={errors.religion}
                    {...register("religion", {
                      required: "Religion is required",
                    })}
                    helperText={errors.religion ? errors.religion.message : ""}
                  >
                    <MenuItem value={"Hindu"}>Hindu</MenuItem>
                    <MenuItem value={"Muslim"}>Muslim</MenuItem>
                    <MenuItem value={"Sikh"}>Sikh</MenuItem>
                    <MenuItem value={"Christian"}>Christian</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="userename__ph-no__email__password__container">
              <div className="username__phone__container">
                <div className="username__container">
                  <TextField
                    id="username"
                    type="text"
                    variant="outlined"
                    label="Enter user name"
                    fullWidth
                    required
                    error={errors.userName}
                    {...register("userName", {
                      required: "This field is required",
                      minLength: { value: 3, message: "Atleast 3 character" },
                      pattern: {
                        value: /^[A-Za-z0-9]*$/i,
                        message:
                          "Username should consist of number and characters only",
                      },
                    })}
                    helperText={errors.userName ? errors.userName.message : ""}
                  />
                </div>
                <div className="ph-no__container">
                  {/* <div> */}
                    <PhoneInput
                      style={{ width: "90%", height: "100%"}}
                      id="phonenumber"
                      country={"in"}
                      value={phoneNumber}
                      onChange={(value, country) => {
                        setPhoneNumber(value);
                        console.log("values::", value);
                        console.log("country ====>", country);
                        setDialCode(country.dialCode);
                        setCountryName(country.name);
                        setCountryCode(country.countryCode);
                      }}
                    />
                  {/* </div> */}
                </div>
              </div>
              <div className="email__password__conatiner">
                <div className="email">
                  <TextField
                    id="email"
                    type="email"
                    variant="outlined"
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : ""}
                    label="Enter Email"
                    fullWidth
                    required
                    {...register("email", {
                      required: "Required field",
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                </div>
                <div className="password__confirm-password__container">
                  <div className="signup__password">
                    <TextField
                      id="password"
                      type="password"
                      variant="outlined"
                      label="Enter password"
                      fullWidth
                      required
                      error={errors.password}
                      {...register("password", {
                        required: "This field is required",
                        minLength: { value: 8, message: "Atleast 8 character" },
                        maxLength: {
                          value: 16,
                          message: "Atmost 16 character",
                        },
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@','#','$','&','%']).{8,15}$/,
                          message:
                            "Password should consist of atleast one number, one uppercase ,one lowercase and one special character",
                        },
                      })}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                    />
                  </div>
                  <div className="confirm__password">
                    <TextField
                      id="confirm__password"
                      type="password"
                      required
                      variant="outlined"
                      label="Confirm password"
                      fullWidth
                      error={errors.confirm__password}
                      {...register("confirm__password", {
                        required: true,
                        validate: (val) => {
                          if (watch("password") !== val) {
                            return "Your passwords do no match";
                          }
                        },
                      })}
                      helperText={
                        errors.confirm__password
                          ? errors.confirm__password.message
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="address__container">
              <ControlledAddressInput
                setAddress={setAddress}
                addressError={addressError}
                setAddressError={setAddressError}
              />
            </div>

            <div className="terms__and__button__container__signup">
              <div className="terms__checkbox">
                <FormControl error={termsError}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkboxicon={<CheckBoxIcon />}
                          name="checkedI"
                          value={terms}
                          onChange={(e) => {
                            setTerms(e.target.checked);
                          }}
                          helperText={"hi"}
                        />
                      }
                      label="I agree terms and conditions"
                    />
                  </FormGroup>
                  <FormHelperText>
                    {termsError ? `Check the terms and conditions` : ""}
                  </FormHelperText>
                </FormControl>
              </div>
              <div
                className="create__account__button button"
                style={{ marginTop: "10px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                >
                  {t("Create_Account_Button")}
                </Button>
              </div>
            </div>

            <div className="authentication__links__signup">
              <p className="links">
                <Link to="/login">Already have an account ?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Signup;
