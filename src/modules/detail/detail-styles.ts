import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapperWrapper: (props: any) => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    backgroundColor: "black",
    backgroundImage: props.backgroundImage,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
    //paddingTop: props.topPadding,
    //todo remove fixed position
  }),
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundImage: "linear-gradient(to top, transparent 15%, black 85%)"
  },
  loaderWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  title: (props: any) => ({
    marginTop: "80px",
    color: "white",
    position: "fixed",
    width: "100%",
    fontFamily: "Catamaran, Roboto, Helvetica Neue, sans-serif",
    height: "250px"
    //top: props.topPadding
  }),
  content: (props: any) => ({
    background: "rgba(255,255,255,0.6)",
    boxShadow: "0px 0px 17px 1px black",
    borderRadius: "4px",
    margin: `270px ${props.contentMargin} 20px ${props.contentMargin} `,
    padding: "20px"
  }),
  overviewWrapper: {
    height: "100%",
    fontFamily: "Lora, Roboto, Helvetica Neue, sans-serif" // todo
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
    //fontWeight: "bold",
    width: "50%",
    textAlign: "end",
    fontWeight: 600,
    fontFamily: "Catamaran, Roboto, Helvetica Neue, sans-serif" // todo
  },
  detailItemText: {
    paddingLeft: "5px",
    width: "50%",
    textAlign: "start",
    fontFamily: "Lora, Roboto, Helvetica Neue, sans-serif" // todo
  },
  genresWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "5px 0"
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
  moreInfo: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
    fontWeight: 400,
    fontFamily: "Catamaran, Roboto, Helvetica Neue, sans-serif" // todo
  },
  moreInfoIcons: {
    paddingTop: "5px"
  },
  tagline: {
    color: "white",
    fontStyle: "italic",
    fontFamily: "Lora, Roboto, Helvetica Neue, sans-serif" // todo
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
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderTop: "1px solid red",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "red",
      color: "white"
    }
  },
  videoWrapper: {
    width: "100vw",
    height: "100vh"
  }
});
