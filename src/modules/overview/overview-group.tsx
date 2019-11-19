import React, { useEffect } from "react";
import { Link } from "@reach/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useStyles } from "./overview-styles";
import { saveSomeData } from "../../dataActions";
import { connect } from "react-redux";
import { store } from "../../store";
import { get } from "lodash";
import { IwhichData } from "../../dataActions";
import { removeDetail } from "../../detailActions";

interface IMovie {
  title: string;
  src: string;
}

interface IOverviewGroup {
  groupTitle: string;
  groupId: IwhichData;
}

const OverviewGroup: React.FC<IOverviewGroup & any> = ({
  dispatch,
  groupTitle,
  groupId,
  ...props
}) => {
  const classes = useStyles(props);
  const state = store.getState().data;
  const loading = get(state, `${groupId}.loading`);
  const entities = get(state, `${groupId}.entities`, []);
  const error = get(state, `${groupId}.error`);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(saveSomeData(groupId));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={classes.overviewGroup}>
      <h3>{groupTitle}</h3>
      {loading && <p>Loading...</p>}
      {entities && (
        <Slider {...settings}>
          {entities.map((o: any) => (
            <div key={o.id}>
              <Link to={`/title/${o.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w185${o.poster_path}`}
                  alt={o.title}
                />
                <p>{o.title}</p>
              </Link>
            </div>
          ))}
        </Slider>
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
