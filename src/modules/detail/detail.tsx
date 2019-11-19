import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { store } from "../../store";
import { saveDetail } from "../../detailActions";
import { get } from "lodash";
import { useStyles } from "./detail-styles";
import { Grid } from "@material-ui/core";

interface IDetailProps extends RouteComponentProps {
  titleId?: number; // todo remove ? after implementing video
}

const Detail: React.FC<IDetailProps & any> = ({
  titleId,
  dispatch,
  ...props
}) => {
  const classes = useStyles(props);

  const detail = store.getState().detail.detailData;

  useEffect(() => {
    dispatch(saveDetail("movie", titleId));
  }, []);

  // todo zistit ako rendernut upravene data  zo stateu // ako vyvolat funkciu po nacitani dat z API
  const getTopTitleYear = (title: string, date: string) =>
    title.concat(" (", date.substring(0, 4), ")");

  const bgImage = `http://image.tmdb.org/t/p/w1280/${detail.backdrop_path}`;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        paddingTop: "64px",
        display: "flex",
        backgroundImage: `url(${bgImage})`, // todo move to styles file
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor: "black"
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>
            {getTopTitleYear(
              get(detail, "title", ""),
              get(detail, "release_date", "")
            )}
          </h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>{detail.overview}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <b> Genres</b>
          <ul>
            <p>
              {get(detail, "genres", []).map((genre: any) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </p>
          </ul>
          <b> Released on</b>
          <p> {detail.release_date}</p>
        </Grid>
        <Grid item xs={12}>
          <button>PLAY MOVIE</button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.detail // todo?
});

export default connect(mapStateToProps)(Detail);
