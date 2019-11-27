import React from "react";
import { RouteComponentProps } from "@reach/router";
import OverviewGroup from "./overview-group";
import { useStyles } from "./overview-styles";

const Overview: React.FC<RouteComponentProps> = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.overview}>
      <OverviewGroup
        groupTitle="Popular Movies"
        groupId={"popular_movies"}
        category="movie"
      />
      <OverviewGroup
        groupTitle="Popular Series"
        groupId={"popular_series"}
        category="tv"
      />
      <OverviewGroup
        groupTitle="Family Movies"
        groupId={"family_movies"}
        category="movie"
      />
      <OverviewGroup
        groupTitle="Documentaries"
        groupId={"documentaries"}
        category="movie"
      />
    </div>
  );
};

export default Overview;
