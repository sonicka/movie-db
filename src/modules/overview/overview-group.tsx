import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import Carousel from "../../components/carousel/carousel";
import Loader from "../../components/loader/loader";
import { CategoryType } from "../../constants";
import { saveData } from "../../actions/data-actions";
import { removeDetail } from "../../actions/detail-actions";
import { clearSearch } from "../../actions/search-actions";
import { DataType } from "../../constants";
import { useStyles } from "./overview-styles";

interface IOverviewGroupProps {
  groupTitle: string;
  groupId: DataType;
  category?: CategoryType;
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
  state,
  ...props
}) => {
  const classes = useStyles(props);
  const loading = get(state, `${groupId}.loading`);
  const entities = get(state, `${groupId}.entities`, []);
  const error = get(state, `${groupId}.error`);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(clearSearch());
    dispatch(saveData(groupId));
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
  state: state.data
});

export default connect(mapStateToProps)(OverviewGroup);
