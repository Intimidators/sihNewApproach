import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import moment from "moment";
import axios from "axios";
import config from "../../../../ApiConfig/Config";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FutureWebinarCard = ({ webinar }) => {
  const userFromSession = JSON.parse(sessionStorage.getItem("user"));
  const { state } = useSelector((state) => state.vvgnli);
  const userId = userFromSession.userId;
  const [loading, setLoading] = React.useState(false)
  const handleRegisterWebinarSubmit = async () => {
    try {
         const res = await axios.post(
           config.server.path +
             config.role.admin +
             config.api.registerParticipant,
           {
             webinarId: webinar.webinarId,
             userId: userId,
           },
           { headers: { "User-Id": userId, state: state } }
         );
      console.log(res);
      toast.success('Registration successful')
    } catch (error) {
      console.log(error)
      toast.error(error.response.message)
    }
 
  };
  return (
    <div className="webinar__card">
      <div className="webinar__card__container">
        <Card sx={{ maxWidth: 345 }}>
          <div className="webinar__card__image">
            <CardMedia
              component="img"
              height="125"
              image={webinar.coverPhoto}
              alt="org image"
            />
          </div>
          <div className="webinar__card__webinar_info">
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Typography gutterBottom variant="p" component="div">
                Name : {webinar.topic} <br />
                Dept : {webinar.department}
                <br />
                When :{" "}
                {moment(webinar.startTime).format(
                  "dddd DD MMMM yyyy hh:mm:ss A"
                )}
                <br />
                Host : {webinar.host}
              </Typography>
            </CardContent>
          </div>
          <div className="webinar__card__button__container">
            <CardActions style={{ justifyContent: "center" }}>
              <div className="webinar__viewRecoding__button">
                {webinar.registered ? (
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<HowToRegIcon />}
                  >
                    Registered
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PersonAddAltIcon />}
                    onClick={handleRegisterWebinarSubmit}
                  >
                    Register Here
                  </Button>
                )}
              </div>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default FutureWebinarCard;
