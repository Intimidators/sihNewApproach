import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
const ImageCard = ({ post, isAdmin }) => {
  var isAdmin = false
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
    console.log(userRoleFromSession.role);
    if(userRoleFromSession.role === 1){
      isAdmin = true
    }else if(userRoleFromSession.role ===2){
      isAdmin = false
    }
    console.log(isAdmin);

  return (
    <div className="webinar__card">
      <div className="webinar__card__container">
        <Card sx={{ maxWidth: 345 }}>
          <div className="webinar__card__image">
            <CardMedia
              component="img"
              height="125"
              image={post.postLink}
              alt="org image"
            />
          </div>
          <div className="webinar__card__webinar_info">
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Typography gutterBottom variant="p" component="div">
                {isAdmin ? `User Id : ${post.userId}` : ""}
                {isAdmin ? `User Id : ${post.mediaId}` : ""}
                {isAdmin && <br />}
                When : {post.date} <br />
                <br />
              </Typography>
            </CardContent>
          </div>
          {isAdmin && (
            <div className="webinar__card__button__container">
              <CardActions style={{ justifyContent: "center" }}>
                <div className="webinar__viewRecoding__button">
                  <Box component="div" sx={{ display: "inline" }}>
                    <CancelIcon color="action" />
                  </Box>
                  <Box component="div" sx={{ display: "inline" }}>
                    <DoneIcon color="primary" />
                  </Box>
                </div>
              </CardActions>
            </div>
          )}
          {!isAdmin && (
            <div className="webinar__card__button__delete">
              <Button>Delete</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ImageCard;
