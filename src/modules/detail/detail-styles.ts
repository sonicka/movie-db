import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../constants";

/** Props expected by useStyles hook */
interface IWrapperStylesProps {
  backgroundImage?: string;
  contentMargin?: string;
  showVideo?: boolean;
}

/** Styles for Detail page */
export const useStyles = makeStyles({
  wrapperWrapper: (props: IWrapperStylesProps) => ({
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    backgroundColor: "black",
    backgroundImage: props.backgroundImage,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  }),
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundImage: "linear-gradient(to top, transparent 15%, black 85%)",
    marginBottom: "30px"
  },
  loaderWrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  errorWrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    padding: "80px 5px 20px 5px",
    color: "white",
    width: "100%",
    fontSize: "16pt",
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif"
  },
  content: (props: IWrapperStylesProps) => ({
    background: "rgba(255,255,255,0.6)",
    boxShadow: "0px 0px 17px 1px black",
    borderRadius: "4px",
    margin: `20px ${props.contentMargin} 20px ${props.contentMargin} `,
    padding: "20px"
  }),
  overviewWrapper: {
    height: "100%",
    fontFamily: "Literata, Roboto, Helvetica Neue, serif"
  },
  detailsWrapper: {
    height: "100%",
    margin: "20px 0 10px 0"
  },
  detailItem: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "15px"
  },
  detailItemTitle: {
    paddingRight: "5px",
    width: "50%",
    textAlign: "end",
    fontWeight: 600,
    lineHeight: "16px",
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif"
  },
  detailItemText: {
    paddingLeft: "5px",
    width: "50%",
    textAlign: "start",
    lineHeight: "16px",
    fontFamily: "Literata, Roboto, Helvetica Neue, serif"
  },
  genresWrapper: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif",
    padding: "16px 0"
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
    paddingTop: "6px",
    fontWeight: 400,
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif"
  },
  moreInfoIcons: {
    paddingTop: "5px"
  },
  tagline: {
    color: "white",
    textShadow: "0 0 5px black",
    fontStyle: "italic",
    fontSize: "22pt",
    paddingBottom: "50px",
    margin: 0,
    fontFamily: "Literata, Roboto, Helvetica Neue, serif"
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
    fontFamily: "Alatsi, Roboto, Helvetica Neue, sans-serif",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderTop: `1px solid ${primary}`,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: primary,
      color: "white"
    }
  },
  videoWrapper: (props: IWrapperStylesProps) => ({
    display: props.showVideo ? "block" : "none",
    backgroundColor: "black",
    height: "calc(100vh - 32px)"
  })
});
