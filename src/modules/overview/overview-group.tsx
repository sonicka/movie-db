import React, { useEffect, useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { Fab } from "@material-ui/core";
import { get } from "lodash";
import ItemsCarousel from "react-items-carousel";
import { store } from "../../store";
import { useStyles } from "./overview-styles";
import { saveSomeData } from "../../dataActions";
import { IwhichData } from "../../dataActions";
import { removeDetail } from "../../detailActions";
import { CATEGORY } from "../../fetchData";

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
  category: CATEGORY;
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

  return (
    <div className={classes.overviewGroup}>
      <h3 className={classes.overviewTitle}>{groupTitle}</h3>
      {loading && <p className={classes.loading}> Loading...</p>}
      <div
        style={{
          padding: "0",
          maxWidth: "1400px",
          minWidth: "185px",
          margin: "auto"
        }}
      >
        <ItemsCarousel
          infiniteLoop={true}
          gutter={Math.floor(window.innerWidth / 92)}
          activePosition={"center"}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={
            width < 400
              ? Math.floor(window.innerWidth / 185)
              : window.innerWidth / 185
          }
          slidesToScroll={1}
          outsideChevron={false}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={(value: number) => setActiveItemIndex(value)}
          rightChevron={
            <Fab className={classes.fab} size="small">
              {">"}
            </Fab>
          }
          leftChevron={
            <Fab className={classes.fab} size="small">
              {"<"}
            </Fab>
          }
        >
          {entities.map((o: any) => (
            <div key={o.id} style={{ width: "185px" }}>
              <Link to={`/title/${o.id}`} state={{ category: category }}>
                {console.log(o)}
                <img
                  src={`http://image.tmdb.org/t/p/w185${o.poster_path}`}
                  alt={category === "movie" ? o.title : o.name}
                />
              </Link>
              <p className={classes.legend}>
                {category === "movie" ? o.title : o.name}
              </p>
            </div>
          ))}
        </ItemsCarousel>
      </div>
      {error && <i>error occured while loading data</i>}
      {/* todo error */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.data // todo?
});

export default connect(mapStateToProps)(OverviewGroup);
