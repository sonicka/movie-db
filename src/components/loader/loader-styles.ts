import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  loaderWrapper: {
    width: "100%",
    height: "185px"
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  // todo center loader
  loader: {
    border: "16px solid red",
    borderTop: "16px solid black",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    margin: "0 auto",
    animationName: "$spin",
    animation: "spin 2s linear infinite"
  }
});
