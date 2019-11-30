import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Grid, IconButton, Tooltip, useMediaQuery } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import Rating from "../../components/rating/rating";
import { useStyles } from "./detail-styles";

/** Props expected by TvDetail component */
interface ITvDetailProps extends RouteComponentProps {
  title: string;
  overview: string;
  episodeRuntime: string;
  firstAirDate: string;
  lastAirDate: string;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  genres: string[];
  originalLanguage: string;
  voteAverage: number;
  voteCount: number;
  homepage: string;
}

/** Component that contains detail information about a TV show */
const TvDetail: React.FC<ITvDetailProps> = ({
  title = "",
  overview = "",
  episodeRuntime = 0,
  firstAirDate = "",
  lastAirDate = "",
  numberOfEpisodes = 0,
  numberOfSeasons = 0,
  genres = [],
  originalLanguage = "",
  voteAverage = 0,
  voteCount = 0,
  homepage = ""
}) => {
  const isLarge = useMediaQuery("(min-width:1150px)");
  const stylesProps = {
    contentMargin: isLarge ? "180px" : "30px"
  };
  const classes = useStyles(stylesProps);

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
              <div className={classes.detailItemTitle}>First aired on</div>
              <div className={classes.detailItemText}>{firstAirDate}</div>
            </div>
            <div className={classes.detailItem}>
              <div className={classes.detailItemTitle}>Last aired on</div>
              <div className={classes.detailItemText}>{lastAirDate}</div>
            </div>
            <div className={classes.detailItem}>
              <div className={classes.detailItemTitle}>Episode runtime</div>
              <div className={classes.detailItemText}>
                {`${episodeRuntime} minutes`}
              </div>
            </div>
            <div className={classes.detailItem}>
              <div className={classes.detailItemTitle}>Number of episodes</div>
              <div
                className={classes.detailItemText}
              >{`${numberOfEpisodes} in ${numberOfSeasons} ${
                numberOfSeasons === 1 ? "season" : "seasons"
              }`}</div>
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
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              <IconButton>
                <Tooltip title="Website">
                  <LanguageIcon />
                </Tooltip>
              </IconButton>
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TvDetail;
