import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useStyles } from "./rating-styles";

interface IRationgProps {
  voteAverage: number;
  voteCount: number;
}
const Rating: React.FC<IRationgProps> = ({ voteAverage, voteCount }) => {
  const classes = useStyles();

  return (
    <div className={classes.progressbarWrapper}>
      <CircularProgressbarWithChildren
        maxValue={10}
        value={voteAverage}
        styles={buildStyles({
          textColor: "white",
          pathColor: "red",
          textSize: "12px",
          strokeLinecap: "butt"
        })}
      >
        <div className={classes.progressbarNumber}>
          <strong>{`${voteAverage}/10`}</strong>
        </div>
        <div className={classes.progressbarVotes}>{`${voteCount} votes`}</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Rating;
