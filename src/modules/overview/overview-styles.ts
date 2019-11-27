import { makeStyles } from "@material-ui/core/styles";
import { lineHeight } from "@material-ui/system";

export const useStyles = makeStyles({
  overview: {
    paddingTop: "70px"
  },
  overviewGroup: {
    paddingBottom: "10px",
    color: "white"
  },
  overviewTitle: {
    paddingBottom: "6px"
  },
  loading: {
    height: "338px",
    lineHeight: "338px"
  },
  link: {
    width: "100%"
  },
  fab: {
    backgroundColor: "red",
    color: "white",
    opacity: "0.8"
  },
  legend: {
    position: "absolute",
    bottom: "40px",
    width: "185px",
    background: "#000",
    color: "white",
    padding: "10px 0",
    fontSize: "12px",
    textAlign: "center",
    opacity: "0.5",
    zIndex: 1000
  }
});

//@include transition(all, .5s, ease-in-out);
//@include transition(opacity, .35s, ease-in-out);
