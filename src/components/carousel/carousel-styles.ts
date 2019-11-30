import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../constants";

export const useStyles = makeStyles({
  fab: {
    backgroundColor: primary,
    color: "white",
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif",
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
    height: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0,
    transition: ".5s ease",
    backgroundColor: "black"
  },
  imageText: {
    color: "white",
    fontFamily: "Literata, Roboto, Helvetica Neue, sans-serif",
    fontSize: "12pt",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});
