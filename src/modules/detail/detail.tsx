import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps } from "@reach/router";
import { Grid } from "@material-ui/core";
import { get } from "lodash";
import { saveDetail } from "../../actions/detail-actions";
import Loader from "../../components/loader/loader";
import ErrorMessage from "../../components/error-message/error-message";
import MovieDetail from "./detail-movie";
import TvDetail from "./detail-tv";
import { playVideo, enterFullscreen } from "./detail-video";
import { useStyles } from "./detail-styles";
import { Category } from "../../constants";

/** Props expected by Detail component */
interface IDetailProps extends RouteComponentProps {
  titleId: number;
  dispatch: Dispatch<any>;
  detail: {
    title: string;
    release_date: string;
    tagline: string;
    overview: string;
    runtime: string;
    budget: number;
    revenue: number;
    genres: any[];
    backdrop_path: string;
    videos: [];
    name: string;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
    last_air_date: string;
    number_of_episodes: number;
    number_of_seasons: number;
    episode_run_time: string;
    original_language: string;
    homepage: string;
    imdb_id: string;
  };
  loading: boolean;
  error: any;
}

/** Component that holds details of given movie/tv show */
const Detail: React.FC<IDetailProps> = ({
  titleId,
  dispatch,
  location,
  detail,
  loading,
  error
}) => {
  // const videoUrl = `https://www.youtube.com/watch?v=${get(
  //   detail.videos,
  //   "results[0].key",
  //   ""
  // )}`;

  const [showVideo, setShownVideo] = useState(false);
  const video = React.createRef<HTMLVideoElement>();

  const backgroundImage = detail.backdrop_path
    ? `url(http://image.tmdb.org/t/p/w1280/${detail.backdrop_path})`
    : null;
  let stylesProps = { showVideo: showVideo };
  let stylesPropsWithBg = {};
  if (backgroundImage) {
    stylesPropsWithBg = {
      showVideo: showVideo,
      backgroundImage: backgroundImage
    };
  }
  const classes = useStyles(backgroundImage ? stylesPropsWithBg : stylesProps);

  const category = get(location, "state.category", "");

  useEffect(() => {
    dispatch(saveDetail(category, titleId));
  }, [dispatch, titleId, category]);

  const formattedTitle = (title: string = "", date: string = "") =>
    title.concat(" (", date.substring(0, 4), ")");

  const formattedDate = (date: string = "") => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    if (date) {
      return new Date(date).toLocaleDateString("en-EN", options);
    }
  };

  return (
    <div className={classes.wrapperWrapper}>
      <Grid container className={classes.wrapper}>
        {loading && (
          <div className={classes.loaderWrapper}>
            <Loader />
          </div>
        )}
        {error && (
          <div className={classes.errorWrapper}>
            <ErrorMessage message="Error occurred while loading details!" />
          </div>
        )}
        {!error && !loading && !showVideo && category === Category.MOVIE && (
          <>
            <MovieDetail
              title={formattedTitle(detail.title, detail.release_date)}
              overview={detail.overview}
              releaseDate={formattedDate(detail.release_date) || ""}
              runtime={detail.runtime}
              budget={detail.budget}
              revenue={detail.revenue}
              genres={detail.genres}
              originalLanguage={detail.original_language}
              voteAverage={detail.vote_average}
              voteCount={detail.vote_count}
              homepage={detail.homepage}
              imdbId={detail.imdb_id}
            />
            {detail.tagline && (
              <Grid item xs={12}>
                <p className={classes.tagline}>{`'${detail.tagline}'`}</p>
              </Grid>
            )}
          </>
        )}
        {!error && !loading && !showVideo && category === Category.TV && (
          <TvDetail
            title={formattedTitle(detail.name, detail.first_air_date)}
            overview={detail.overview}
            voteAverage={detail.vote_average}
            voteCount={detail.vote_count}
            firstAirDate={formattedDate(detail.first_air_date) || ""}
            lastAirDate={formattedDate(detail.last_air_date) || ""}
            numberOfEpisodes={detail.number_of_episodes}
            numberOfSeasons={detail.number_of_seasons}
            episodeRuntime={detail.episode_run_time}
            originalLanguage={detail.original_language}
            genres={detail.genres}
            homepage={detail.homepage}
          />
        )}
        <div className={classes.videoWrapper}>
          <video
            ref={video}
            width="100%"
            height="100%"
            poster={`http://image.tmdb.org/t/p/w1280/${detail.backdrop_path}`}
            controls
            autoPlay
            // src={videoUrl}
          />
        </div>
        <Grid item xs={12}>
          <div className={classes.buttonWrapper}>
            <button
              className={classes.bottomButton}
              onClick={() => {
                if (showVideo) {
                  setShownVideo(false);
                  (window as any).player
                    .destroy()
                    .then(() => console.log("Player stopped."))
                    .catch((err: any) =>
                      console.log(`Unable to stop player. ${err})`)
                    );
                } else {
                  setShownVideo(true);
                  playVideo(video);
                  enterFullscreen(video);
                }
              }}
            >
              {showVideo ? "BACK TO DETAIL" : "PLAY MOVIE"}
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

interface IMovieFields {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  release_date: string;
  runtime: number;
  budget: string;
  revenue: string;
  original_language: string;
  genres: any;
  homepage: string;
  imdb_id: string;
  backdrop_path: string;
  videos: { results: any[] };
}

interface ITvShowFields {
  name: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  first_air_date: string;
  last_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  episode_run_time: number;
  original_language: string;
  genres: any;
  homepage: string;
  backdrop_path: string;
  videos: { results: any[] };
}

interface Istate {
  detail: {
    detailData: IMovieFields | ITvShowFields;
    loading: boolean;
    error: any;
  };
}

const mapStateToProps = (state: Istate, ownProps: any) => {
  return {
    ...ownProps,
    detail: state.detail.detailData,
    loading: state.detail.loading,
    error: state.detail.error
  };
};

export default connect(mapStateToProps)(Detail);
