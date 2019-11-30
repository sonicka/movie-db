import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "red",
    borderBottom: "1px solid white",
    backgroundImage: "linear-gradient(salmon, red)"
  },
  menuItem: {
    width: "50%",
    color: "white",
    fontSize: "15pt",
    fontWeight: 500,
    fontFamily: "Catamaran, Roboto, Helvetica Neue, sans-serif",
    "&:hover": {
      background: "none",
      color: "#d6d6d6"
    }
  }
});
