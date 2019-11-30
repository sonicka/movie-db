import React from "react";
import { useStyles } from "./loader-styles";

/** Component shown when loading data */
const Loader: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.loader}></div>;
};

export default Loader;
