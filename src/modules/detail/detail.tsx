import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Link } from "@reach/router";
import format from "date-fns/format";
import { saveDetail } from "../../detailActions";
import { useStyles } from "./detail-styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import { get } from "lodash";
import { CATEGORY } from "../../fetchData";

interface IDetailProps extends RouteComponentProps {
  titleId?: number; // todo remove ? after implementing video
}

const Detail: React.FC<IDetailProps & any> = ({
  titleId,
  dispatch,
  category = "", // todo
  title = "",
  tagline = "",
  releaseDate = "",
  revenue = 0,
  budget = 0,
  runtime = 0,
  overview = "",
  genres = [],
  backdrop_path = "",
  videos = [],
  ...props
}) => {
  const vid = `https://www.youtube.com/watch?v=${get(
    videos,
    "results[0].key",
    ""
  )}`;
  const isSmall = useMediaQuery("(max-width:601px)");
  const isLarge = useMediaQuery("(min-width:1100px)"); // todo adjust
  const bgImage = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const stylesProps = {
    backgroundColor: "red",
    bgImage: bgImage,
    topPadding: isSmall ? "56px" : "64px",
    contentMargin: isLarge ? "200px" : "20px"
  };
  const classes = useStyles(stylesProps);

  console.log(category);

  useEffect(() => {
    dispatch(saveDetail(props.location.state.category, titleId)); // todo
  }, [dispatch, titleId, props.location.state.category]);

  const formattedTitle = (title: string, date: string) =>
    title.concat(" (", date.substring(0, 4), ")");
  const formattedRevenue = `$${revenue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  const formattedBudget = `$${budget
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  const formattedDate = (date: string) => {
    let parsed = date.split("-");
    if (parsed.length > 0) {
      return format(
        new Date(
          parseInt(parsed[0]),
          parseInt(parsed[1]) - 1,
          parseInt(parsed[2])
        ),
        "dd MMMM yyyy"
      );
    }
  };

  // todo podla category upravit fieldy

  return (
    <div className={classes.wrapperWrapper}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} className={classes.title}>
          <h1>{formattedTitle(title, releaseDate)}</h1>
          <Grid item xs={12}>
            <h2>{tagline}</h2>
          </Grid>
        </Grid>
        <Grid container className={classes.content}>
          <Grid item xs={12} md={6}>
            <div className={classes.overviewWrapper}>
              <p>{overview}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.detailsWrapper}>
              <div className={classes.detailItem}>
                <div className={classes.detailItemTitle}>Released on</div>
                <div className={classes.detailItemText}>
                  {releaseDate.length > 0 && formattedDate(releaseDate)}
                </div>
              </div>
              <div className={classes.detailItem}>
                <div className={classes.detailItemTitle}>Runtime</div>
                <div className={classes.detailItemText}>
                  {`${runtime} minutes`}
                </div>
              </div>
              <div className={classes.detailItem}>
                <div className={classes.detailItemTitle}>Budget</div>
                <div className={classes.detailItemText}>{formattedBudget}</div>
              </div>
              <div className={classes.detailItem}>
                <div className={classes.detailItemTitle}>Revenue</div>
                <div className={classes.detailItemText}>{formattedRevenue}</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={classes.genresWrapper}>
              {genres.map((genre: any) => (
                <div key={genre.id} className={classes.genre}>
                  {genre.name}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonWrapper}>
            <Link to={`play/`} state={{ vid: vid, bgImage: bgImage }}>
              <button className={classes.bottomButton}>PLAY MOVIE</button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

interface Istate {
  // todo determine if movie or tv show
  detail: {
    category: CATEGORY;
    detailData: {
      title: string;
      tagline: string;
      release_date: string;
      revenue: string;
      budget: string;
      runtime: string;
      overview: string;
      genres: any;
      backdrop_path: string;
      videos: { results: any[] };
    };
  };
} // todo

const mapStateToProps = (state: Istate, ownProps: any) => {
  return {
    ...ownProps,
    title: state.detail.detailData.title,
    category: state.detail.category,
    tagline: state.detail.detailData.tagline,
    releaseDate: state.detail.detailData.release_date,
    revenue: state.detail.detailData.revenue,
    budget: state.detail.detailData.budget,
    runtime: state.detail.detailData.runtime,
    overview: state.detail.detailData.overview,
    genres: state.detail.detailData.genres,
    backdrop_path: state.detail.detailData.backdrop_path,
    videos: state.detail.detailData.videos
  };
};

export default connect(mapStateToProps)(Detail);
