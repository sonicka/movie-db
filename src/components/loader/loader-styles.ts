import { makeStyles } from "@material-ui/core/styles";

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
    border: "6px solid red",
    borderTop: "6px solid #d6d6d6",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    margin: "0 auto",
    animationName: "$spin",
    animation: "spin 2s linear infinite"
  }
});
