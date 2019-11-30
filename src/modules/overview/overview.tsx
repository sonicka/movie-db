import React from "react";
import { RouteComponentProps } from "@reach/router";
import OverviewGroup from "./overview-group";
import { useStyles } from "./overview-styles";
import { MovieGroups } from "../../constants";

/** Component consisting of all movie groups shown on homepage */
const Overview: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.overview}>
      <OverviewGroup
        groupTitle="Popular Movies"
        groupId={MovieGroups.POPULAR_MOVIES}
        category="movie"
      />
      <OverviewGroup
        groupTitle="Popular Series"
        groupId={MovieGroups.POPULAR_SERIES}
        category="tv"
      />
      <OverviewGroup
        groupTitle="Family Movies"
        groupId={MovieGroups.FAMILY_MOVIES}
        category="movie"
      />
      <OverviewGroup
        groupTitle="Documentaries"
        groupId={MovieGroups.DOCUMENTARIES}
        category="movie"
      />
    </div>
  );
};

export default Overview;
