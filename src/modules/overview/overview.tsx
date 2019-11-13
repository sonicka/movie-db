import React from "react";
import { RouteComponentProps } from "@reach/router";
import { OverviewGroup } from "./overview-group";
import { useStyles } from "./overview-styles";

/// func fetchCategory => array of movie objects => func format objects to IMovie format => array of formatted
/// func createMovieList = map of ' category title : array of movies ' tuples

const Overview: React.FC<RouteComponentProps> = props => {
  const classes = useStyles(props);

  return (
    // forEach tuple in movieList return OverviewGroup with props groupTitle=key and movies=value
    <div className={classes.overview}>
      <OverviewGroup />
      <OverviewGroup />
      <OverviewGroup />
      <OverviewGroup />
    </div>
  );
};

export default Overview;
