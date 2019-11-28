import React from "react";
import { useStyles } from "./loader-styles";

const Loader: React.FC = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
