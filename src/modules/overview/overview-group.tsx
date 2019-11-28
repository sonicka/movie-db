import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import { store } from "../../store";
import Carousel from "../../components/carousel/carousel";
import { CATEGORY } from "../../fetchData";
import { saveSomeData, IwhichData } from "../../actions/data-actions";
import { removeDetail } from "../../actions/detail-actions";
import { clearSearch } from "../../actions/search-actions";
import { useStyles } from "./overview-styles";

// pure-react-carousel"; // remove
// import Slider from "react-slick"; // remove
// import Carousel, { Dots } from "@brainhubeu/react-carousel"; // remove
// import Carousel from "react-multi-carousel"; // remove
// import Carousel from "react-responsive-carousel/lib/components/Carousel"; // remove
// import { Image, Label } from "semantic-ui-react"; // remove
// import "semantic-ui-css/semantic.min.css";

interface IMovie {
  title: string;
  src: string;
}

interface IOverviewGroupProps {
  groupTitle: string;
  groupId: IwhichData;
  category?: CATEGORY;
  search: boolean;
}

interface IOverviewGroupState {
  //todo
}

const OverviewGroup: React.FC<IOverviewGroupProps & any> = ({
  dispatch,
  groupTitle,
  groupId,
  category,
  ...props
}) => {
  const classes = useStyles(props);
  const state = store.getState().data;
  const loading = get(state, `${groupId}.loading`);
  const entities = get(state, `${groupId}.entities`, []);
  const error = get(state, `${groupId}.error`);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(clearSearch());
    dispatch(saveSomeData(groupId));
  }, [dispatch, groupId]);

  return (
    <div className={classes.overviewGroup}>
      <h3 className={classes.overviewTitle}>{groupTitle}</h3>
      {loading && <p className={classes.loading}> Loading...</p>}
      {!loading && !error && (
        <Carousel entities={entities} category={category} />
      )}
      {error && <i>error occured while loading data</i>}
      {/* todo error */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.data // todo?
});

export default connect(mapStateToProps)(OverviewGroup);
