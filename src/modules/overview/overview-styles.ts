import { makeStyles } from "@material-ui/core/styles";

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
    color: "white",
    fontWeight: 300,
    fontFamily: "Catamaran, Roboto, Helvetica Neue, sans-serif", // todo
    paddingBottom: "4px"
  },
  loading: {
    height: "338px",
    lineHeight: "338px"
  },
  link: {
    width: "100%"
  }
});
