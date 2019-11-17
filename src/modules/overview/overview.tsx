import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { OverviewGroup } from "./overview-group";
import { useStyles } from "./overview-styles";
import { foo, saveSomeData } from "../../appActions";
import { connect } from "react-redux";
import { store } from "../../store";

const Overview: React.FC<RouteComponentProps & any> = props => {
  const classes = useStyles(props);

  useEffect(() => {
    props.dispatch(foo());
    props.dispatch(saveSomeData("popular_movies"));
    props.dispatch(saveSomeData("popular_series"));
    props.dispatch(saveSomeData("family_movies"));
    props.dispatch(saveSomeData("documentaries"));
  }, []);

  console.log(store.getState()); // todo

  return (
    <div className={classes.overview}>
      {/* <OverviewGroup groupTitle="Popular Movies" movies={popularMovies} />
      <OverviewGroup groupTitle="Popular Series" movies={popularSeries} />
      <OverviewGroup groupTitle="Family Movies" movies={familyMovies} />
      <OverviewGroup groupTitle="documentaries" movies={documentaryMovies} /> */}
    </div>
  );
};

interface IState {
  foobar: string;
  loading: boolean;
  data: any;
  [key: string]: any;
}

const mapStateToProps = (state: IState) => ({
  foobar: state.foobar,
  loading: state.loading,
  data: state.data // todo!
});

export default connect(mapStateToProps)(Overview);
