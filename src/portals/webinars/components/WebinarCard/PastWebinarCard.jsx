import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import moment from "moment";
const PastWebinarCard = ({ webinar }) => {
  return (
    <div className="webinar__card">
      <div className="webinar__card__container">
        <Card sx={{ maxWidth: 345 }}>
          <div className="webinar__card__image">
            <CardMedia
              component="img"
              height="125"
              image={webinar.coverPhoto}
              alt="Paella dish"
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
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<YouTubeIcon />}
                >
                  <a href={webinar.recordingUrl} target="_blank">View Recorded Event</a>
                </Button>
              </div>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default PastWebinarCard;
