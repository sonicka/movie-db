import { makeStyles } from "@material-ui/core/styles";

/** Styles for Overview and OverviewGroup components */
export const useStyles = makeStyles({
  loaderWrapper: {
    width: "100%",
    height: "185px",
    display: "flex",
    alignItems: "center"
  },
  overview: {
    paddingTop: "70px"
  },
  overviewGroup: {
    paddingBottom: "8px"
  },
  overviewTitle: {
    color: "white"
  },
  loading: {
    height: "338px",
    lineHeight: "338px"
  },
  link: {
    width: "100%"
  }
});
