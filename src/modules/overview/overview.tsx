import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { OverviewGroup } from "./overview-group";
import { useStyles } from "./overview-styles";
import { fetchPopular, fetchFromCategory } from "../../fetchData";

// todo use Redux to store fetched data

const Overview: React.FC<RouteComponentProps> = props => {
  const classes = useStyles(props);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);

  useEffect(() => {
    fetchPopular("movie", setPopularMovies);
    fetchPopular("tv", setPopularSeries);
    fetchFromCategory("family", setFamilyMovies);
    fetchFromCategory("documentary", setDocumentaryMovies);
  }, []);

  return (
    <div className={classes.overview}>
      <OverviewGroup groupTitle="Popular Movies" movies={popularMovies} />
      <OverviewGroup groupTitle="Popular Series" movies={popularSeries} />
      <OverviewGroup groupTitle="Family Movies" movies={familyMovies} />
      <OverviewGroup groupTitle="Documentaries" movies={documentaryMovies} />
    </div>
  );
};

export default Overview;
