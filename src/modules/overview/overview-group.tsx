import React, { useEffect, useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import { store } from "../../store";
import { useStyles } from "./overview-styles";
import { saveSomeData } from "../../dataActions";
import { IwhichData } from "../../dataActions";
import { removeDetail } from "../../detailActions";
import { CATEGORY } from "../../fetchData";
import Carousel from "../../components/carousel/carousel";

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

interface IOverviewGroup {
  groupTitle: string;
  groupId: IwhichData;
  category?: CATEGORY;
  search: boolean;
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const OverviewGroup: React.FC<IOverviewGroup & any> = ({
  dispatch,
  groupTitle,
  groupId,
  category,
  //search = false,
  ...props
}) => {
  const classes = useStyles(props);
  const state = store.getState().data;
  const loading = get(state, `${groupId}.loading`);
  const entities = get(state, `${groupId}.entities`, []);
  const error = get(state, `${groupId}.error`);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [width, height] = useWindowSize();

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(saveSomeData(groupId));
  }, [dispatch, groupId]);

  return <Carousel />;
};

const mapStateToProps = (state: any) => ({
  state: state.data // todo?
});

export default connect(mapStateToProps)(OverviewGroup);
