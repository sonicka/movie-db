import { makeStyles } from "@material-ui/core/styles";

/** Styles for Rating component */
export const useStyles = makeStyles({
  progressbarNumber: {
    fontSize: 18,
    margin: "0 auto"
  },
  progressbarVotes: {
    fontSize: 11,
    margin: "0 auto",
    display: "none"
  },
  progressbarWrapper: {
    width: "80px",
    margin: "0 auto",
    paddingBottom: "10px",
    "&:hover $progressbarVotes": {
      display: "block"
    },
    "&:hover $progressbarNumber": {
      display: "none"
    }
  }
});
