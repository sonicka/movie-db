import React, { useState, useLayoutEffect } from "react";
import { Link } from "@reach/router";
import { Fab } from "@material-ui/core";
import ItemsCarousel from "react-items-carousel";
import { useStyles } from "./carousel-styles";
import { CategoryType } from "../../constants";

/** Props expected by Carousel component */
interface ICarousel {
  entities: IEntity[];
  category?: CategoryType;
  search?: boolean;
}

/** Type of entities coming to Carousel via props */
interface IEntity {
  id: string;
  name?: string;
  title?: string;
  poster_path: string;
  media_type: string;
}

/** Hook to get current window width */
function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return width;
}

/** Component showing lists of movies/tv shows */
const Carousel: React.FC<ICarousel> = ({
  entities,
  category,
  search = false
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const width = useWindowWidth();
  const classes = useStyles({ width: width });

  return (
    <ItemsCarousel
      infiniteLoop={true}
      activePosition="center"
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
      style={width < 400 ? { padding: "0 50%" } : {}}
    >
      {entities.map((o: IEntity) => (
        <div key={o.id} className={classes.imageContainer}>
          <img
            src={
              o.poster_path
                ? `http://image.tmdb.org/t/p/w185${o.poster_path}`
                : "https://dummyimage.com/185x281/000/fff.jpg&text=Image+Unavailable"
            }
            alt={category === "movie" ? o.title : o.name}
          />
          <Link
            to={`/title/${o.id}`}
            state={{ category: search ? o.media_type : category }}
          >
            <div className={classes.imageOverlay}>
              {search && (
                <div className={classes.imageText}>
                  {o.media_type === "movie" ? o.title : o.name}
                </div>
              )}
              {!search && (
                <div className={classes.imageText}>
                  {category === "movie" ? o.title : o.name}
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </ItemsCarousel>
  );
};

export default Carousel;
