import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapperWrapper: (props: any) => ({
    height: "100vh",
    width: "100vw",
    paddingTop: props.topPadding,
    display: "flex",
    backgroundColor: "black",
    backgroundImage: `url(${props.bgImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  }),
  fab: {
    backgroundColor: "red",
    color: "white",
    opacity: "0.8"
  },
  imageContainer: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 0.8
    }
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    opacity: 0,
    transition: ".5s ease",
    backgroundColor: "black"
  },
  imageText: {
    color: "white",
    fontSize: "16pt",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});
