import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import { store } from "../../store";
import Carousel from "../../components/carousel/carousel";
import Loader from "../../components/loader/loader";
import { CATEGORY } from "../../fetchData";
import { saveSomeData, IwhichData } from "../../actions/data-actions";
import { removeDetail } from "../../actions/detail-actions";
import { clearSearch } from "../../actions/search-actions";
import { useStyles } from "./overview-styles";

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
      {loading && (
        <div className={classes.loaderWrapper}>
          <Loader />
        </div>
      )}
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
