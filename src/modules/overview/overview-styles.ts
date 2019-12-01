import { makeStyles } from "@material-ui/core/styles";

/** Styles for Overview and OverviewGroup components */
export const useStyles = makeStyles({
  groupWrapper: {
    paddingBottom: "8px"
  },
  noEntitiesWrapper: {
    width: "100%",
    height: "280px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  overview: {
    paddingTop: "70px"
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
