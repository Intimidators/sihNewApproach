import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const PresentWebinarCard = ({ webinar }) => {
  return (
    <div className="webinar__card">
      <div className="webinar__card__container">
        <Card sx={{ maxWidth: 345 }}>
          <div className="webinar__card__image">
            <CardMedia
              component="img"
              height="125"
              image={webinar.imageUrl}
              alt="Paella dish"
            />
          </div>
          <div className="webinar__card__webinar_info">
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Typography gutterBottom variant="p" component="div">
                Name : {webinar.name} <br />
                Dept : {webinar.department}
                <br />
                When : {webinar.date}
                <br />
                Host : {webinar.host}
              </Typography>
            </CardContent>
          </div>
          <div className="webinar__card__button__container">
            <CardActions style={{ justifyContent: "center" }}>
              <div className="webinar__viewRecoding__button">
                {webinar.started ? (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GroupsIcon />}
                  >
                    Join Session Here
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AccessAlarmIcon />}
                  >
                    Starts in {18} minutes
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

export default PresentWebinarCard;
