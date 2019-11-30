import { makeStyles } from "@material-ui/core/styles";
import { primary, grey } from "../../constants";

/** Styles for Menu component */
export const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "black",
    borderBottom: `2px solid ${primary}`
  },
  menuItem: {
    width: "50%",
    color: "white",
    fontSize: "18pt",
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif",
    "&:hover": {
      background: "none",
      color: grey
    }
  }
});
