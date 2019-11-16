import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useStyles } from "./overview-styles";

interface IMovie {
  title: string;
  src: string;
}

interface IOverviewGroup {
  groupTitle: string;
  movies: any[];
}

export const OverviewGroup: React.FC<IOverviewGroup> = props => {
  const classes = useStyles(props);

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
      <h3>{props.groupTitle}</h3>
      <Slider {...settings}>
        {props.movies.map(movie => (
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
