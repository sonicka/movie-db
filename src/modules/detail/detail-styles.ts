import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapperWrapper: (props: any) => ({
    height: "100vh",
    width: "100vw",
    paddingTop: props.topPadding,
    display: "flex",
    backgroundColor: "black",
    backgroundImage: `url(${props.bgImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  }),
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundImage: "linear-gradient(to top, transparent 15%, black 85%)"
  },
  title: (props: any) => ({
    color: "white",
    position: "fixed",
    width: "100%",
    height: "30vh",
    top: props.topPadding
  }),
  content: (props: any) => ({
    background: "rgba(255,255,255,0.6)",
    boxShadow: "0px 0px 17px 1px black",
    borderRadius: "4px",
    margin: `30vh ${props.contentMargin} 20px ${props.contentMargin} `,
    padding: "20px"
  }),
  overviewWrapper: {
    height: "100%"
  },
  detailsWrapper: {
    height: "100%",
    marginTop: "16px"
  },
  detailItem: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "15px"
  },
  detailItemTitle: {
    paddingRight: "5px",
    fontWeight: "bold",
    width: "50%",
    textAlign: "end"
  },
  detailItemText: {
    paddingLeft: "5px",
    width: "50%",
    textAlign: "start"
  },
  genresWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  genre: {
    background: "black",
    boxShadow: "0px 0px 1px 1px black",
    color: "white",
    padding: "5px",
    margin: "5px",
    border: "1px solid black",
    fontSize: "10pt"
  },
  buttonWrapper: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end"
  },
  bottomButton: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "32px",
    color: "black"
  }
});
