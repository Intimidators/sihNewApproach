import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://vvgnli.gov.in/sites/default/files/01_3.jpg"
  },
  {
    label: "Bird",
    imgPath:
      "https://vvgnli.gov.in/sites/default/files/02.png"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://vvgnli.gov.in/sites/default/files/3_0.png"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
    "https://vvgnli.gov.in/sites/default/files/slider-new-04.jpg"
   },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://vvgnli.gov.in/sites/default/files/04.png"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://vvgnli.gov.in/sites/default/files/01_5.jpg"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://vvgnli.gov.in/sites/default/files/GC%20Meeting%20on%20Dec%2010%2C%202021.JPG"
  },
];

const styles = (theme) => ({
  root: {
    // maxWidth: "100vh",
    flexGrow: 1
  },

  img: {
    height: 400,
    display: "block",
    // maxWidth: "100vh",
    overflow: "hidden",
    width: "100%",
    marginTop: "1rem"
  }
});

class  Slider extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents

        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
              {console.log(step)}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft style={{color: "#1976d2"}}/>
              ) : (
                <KeyboardArrowRight style={{color: "#1976d2"}}/>
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight style={{color: "#1976d2"}}/>
              ) : (
                <KeyboardArrowLeft style={{color: "#1976d2"}}/>
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}
 Slider.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
   Slider
);
