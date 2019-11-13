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
  movies: IMovie[];
}

export const OverviewGroup: React.FC = props => {
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

  const movies = [
    {
      src: "http://placekitten.com/g/400/200",
      title: "title"
    },
    {
      src: "http://placekitten.com/g/400/200",
      title: "title"
    },
    {
      src: "http://placekitten.com/g/400/200",
      title: "title"
    },
    {
      src: "http://placekitten.com/g/400/200",
      title: "title"
    }
  ];

  return (
    <div className={classes.overviewGroup}>
      <h3>Category</h3>
      <Slider {...settings}>
        {movies.map(movie => (
          <div>
            <img src={movie.src} alt={movie.title} />
            <p>lol</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
