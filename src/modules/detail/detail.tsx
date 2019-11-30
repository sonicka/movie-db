import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, Link } from "@reach/router";
import { Grid } from "@material-ui/core";
import { get } from "lodash";
import { saveDetail } from "../../actions/detail-actions";
import Loader from "../../components/loader/loader";
import MovieDetail from "./detail-movie";
import TvDetail from "./detail-tv";
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
}

/** Component that holds details of given movie/tv show */
const Detail: React.FC<IDetailProps> = ({
  titleId,
  dispatch,
  location,
  detail,
  loading
}) => {
  // const video = `https://www.youtube.com/watch?v=${get(
  //   detail.videos,
  //   "results[0].key",
  //   ""
  // )}`;

  const backgroundImage = detail.backdrop_path
    ? `url(http://image.tmdb.org/t/p/w1280/${detail.backdrop_path})`
    : null;
  let stylesProps = {};
  if (backgroundImage) {
    stylesProps = {
      backgroundImage: backgroundImage
    };
  }
  const classes = useStyles(stylesProps);

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
        }
        {!loading && category === Category.MOVIE && (
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
        {!loading && category === Category.TV && (
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
        <Grid item xs={12}>
          <div className={classes.buttonWrapper}>
            <Link
              to={`play/`}
              state={{
                //video: video,
                posterUrl: backgroundImage
              }}
            >
              <button className={classes.bottomButton}>PLAY MOVIE</button>
            </Link>
          </div>
        </Grid>
        )}
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
  };
}

const mapStateToProps = (state: Istate, ownProps: any) => {
  return {
    ...ownProps,
    detail: state.detail.detailData,
    loading: state.detail.loading
  };
};

export default connect(mapStateToProps)(Detail);
