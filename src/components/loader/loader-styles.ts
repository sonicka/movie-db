import { makeStyles } from "@material-ui/core/styles";
import { primary, grey } from "../../constants";

/** Styles for loader component */
export const useStyles = makeStyles({
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  loader: {
    border: `6px solid ${primary}`,
    borderTop: `6px solid ${grey}`,
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    margin: "0 auto",
    animationName: "$spin",
    animation: "spin 2s linear infinite"
  }
});
