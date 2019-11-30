import React from "react";
import { useStyles } from "./loader-styles";

const Loader: React.FC = props => {
  const classes = useStyles(props);

  return <div className={classes.loader}></div>;
};

export default Loader;
