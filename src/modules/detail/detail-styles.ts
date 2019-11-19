import { makeStyles } from "@material-ui/core/styles";

export const useStyles = (props: any) => {
  // todo
  makeStyles({
    wrapper: {
      height: "100vh",
      width: "100vw",
      paddingTop: "64px",
      display: "flex",
      backgroundImage: `url(${props})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundColor: "black",
      "&:after": {
        content: "",
        display: "block",
        position: "absolute",
        width: "100%",
        height: "55%",
        bottom: 0,
        background: "-webkit-linear-gradient(transparent, #FFF) left repeat"
      }
    },
    background: {
      position: "fixed",
      top: 0,
      left: "50%",
      minWidth: "100%",
      minHeight: "100%"
    }
  });
};
