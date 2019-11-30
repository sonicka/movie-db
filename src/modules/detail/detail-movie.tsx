import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Grid, IconButton, Tooltip, useMediaQuery } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import MovieIcon from "@material-ui/icons/Movie";
import Rating from "../../components/rating/rating";
import { useStyles } from "./detail-styles";

interface IMovieDetailProps extends RouteComponentProps {
  title: string;
  tagline: string;
  overview: string;
  releaseDate: string;
  runtime: string;
  budget: number;
  revenue: number;
  genres: string[];
  originalLanguage: string;
  voteAverage: number;
  voteCount: number;
  homepage: string;
  imdbId: string;
}

const MovieDetail: React.FC<IMovieDetailProps> = ({
  title = "",
  tagline = "",
  overview = "",
  releaseDate = "",
  runtime = 0,
  budget = 0,
  revenue = 0,
  genres = [],
  originalLanguage = "",
  voteAverage = 0,
  voteCount = 0,
  homepage = "",
  imdbId = ""
}) => {
  const isLarge = useMediaQuery("(min-width:1100px)"); // todo adjust
  const stylesProps = {
    contentMargin: isLarge ? "200px" : "20px"
  };
  const classes = useStyles(stylesProps);

  const formattedRevenue = `$${revenue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  const formattedBudget = `$${budget
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  return (
    <>
      <Grid item xs={12} className={classes.title}>
        <h1>{title}</h1>
        <Grid item xs={12}>
          <Rating voteAverage={voteAverage} voteCount={voteCount} />
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
              <div className={classes.detailItemText}>{releaseDate}</div>
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
            <div className={classes.detailItem}>
              <div className={classes.detailItemTitle}>Original language</div>
              <div className={classes.detailItemText}>{originalLanguage}</div>
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
        <Grid item xs={12} md={12}>
          <div className={classes.moreInfo}>More info:</div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className={classes.moreInfoIcons}>
            <a href={homepage} target="_blank">
              <IconButton>
                <Tooltip title="Website">
                  <LanguageIcon />
                </Tooltip>
              </IconButton>
            </a>
            {imdbId && (
              <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank">
                <IconButton>
                  <Tooltip title="IMDb">
                    <MovieIcon />
                  </Tooltip>
                </IconButton>
              </a>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetail;
