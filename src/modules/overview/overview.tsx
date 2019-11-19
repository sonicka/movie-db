import React from "react";
import { RouteComponentProps } from "@reach/router";
import OverviewGroup from "./overview-group";
import { useStyles } from "./overview-styles";

const Overview: React.FC<RouteComponentProps> = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.overview}>
      <OverviewGroup groupTitle="Popular Movies" groupId={"popular_movies"} />
      <OverviewGroup groupTitle="Popular Series" groupId={"popular_series"} />
      <OverviewGroup groupTitle="Family Movies" groupId={"family_movies"} />
      <OverviewGroup groupTitle="Documentaries" groupId={"documentaries"} />
    </div>
  );
};

export default Overview;
