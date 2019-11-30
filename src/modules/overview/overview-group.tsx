import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import Carousel from "../../components/carousel/carousel";
import Loader from "../../components/loader/loader";
import { saveData } from "../../actions/data-actions";
import { removeDetail } from "../../actions/detail-actions";
import { clearSearch } from "../../actions/search-actions";
import { DataType, MovieGroups, CategoryType } from "../../constants";
import { useStyles } from "./overview-styles";

/** Props expected by OverviewGroup component */
interface IOverviewGroupProps {
  groupTitle: string;
  groupId: DataType;
  category: CategoryType;
  search?: boolean;
}

/** Type of Overview group state */
type IOverviewGroupState = {
  data: {
    [value in MovieGroups]: IGroupData;
  };
};

/** Type of data inside each movie group */
interface IGroupData {
  loading: boolean;
  error: any;
  entities: any[];
}

/** Component representing one movie group on homepage */
const OverviewGroup: React.FC<IOverviewGroupProps & any> = ({
  dispatch,
  groupTitle,
  groupId,
  category,
  groupData
}) => {
  const classes = useStyles();
  const loading = get(groupData, "loading", false);
  const entities = get(groupData, "entities", []);
  const error = get(groupData, "error", false);

  console.log(entities);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(clearSearch());
    dispatch(saveData(groupId));
  }, [dispatch, groupId]);

  return (
    <div className={classes.groupWrapper}>
      <h3 className={classes.overviewTitle}>{groupTitle}</h3>
      {loading && (
        <div className={classes.noEntitiesWrapper}>
          <Loader />
        </div>
      )}
      {!loading && !error && entities && (
        <Carousel entities={entities} category={category} />
      )}
      {error && (
        <div className={classes.noEntitiesWrapper}>
          <h4 className={classes.error}>Error occured while loading data!</h4>
        </div>
      )}
      {!loading && !error && !entities && (
        <div className={classes.noEntitiesWrapper}></div>
      )}
    </div>
  );
};

const mapStateToProps = (
  state: IOverviewGroupState,
  ownProps: IOverviewGroupProps
) => {
  const groupData = get(state.data, `[${ownProps.groupId}]`, {});

  return {
    ...ownProps,
    groupData
  };
};

export default connect(mapStateToProps)(OverviewGroup);
