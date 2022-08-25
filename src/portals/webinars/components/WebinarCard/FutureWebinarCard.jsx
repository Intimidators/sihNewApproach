import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const FutureWebinarCard = ({ webinar }) => {
  return (
    <div className="webinar__card">
      <div className="webinar__card__container">
        <Card sx={{ maxWidth: 345 }}>
          <div className="webinar__card__image">
            <CardMedia
              component="img"
              height="125"
              image={webinar.imageUrl}
              alt="org image"
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
