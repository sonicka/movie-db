import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { fetchDetail } from "../../fetchData";

interface IDetailProps extends RouteComponentProps {
  titleId?: number; // todo remove ? after implementing video
}

const Detail: React.FC<IDetailProps> = props => {
  console.log("props");
  console.log(props);

  const [detail, setDetail] = useState<any>({}); // todo type

  useEffect(() => {
    //fetchDetail("movie", props.titleId, setDetail);
  }, []);

  // todo zistit ako rendernut upravene data  zo stateu // ako vyvolat funkciu po nacitani dat z API

  // const getReleaseYear = (date: string) => console.log(date.substring(0, 5));

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        paddingTop: "64px",
        display: "flex"
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "50vw"
        }}
      >
        <h5>{/*detail.title + (year) */}</h5>
        {/* <h5>{detail.title}</h5> */}
        <img
          src={`http://image.tmdb.org/t/p/w185${detail.poster_path}`}
          alt={detail.title}
        />
        <p>{detail.overview}</p>
        <p>_________________________________</p>
        <b> Genres</b>
        <ul>
          <p>
            {" "}
            {/*detail.genres.map((genre: any) => (
              <li>{genre.name}</li>
            ))*/}
          </p>
        </ul>
        <b> Released on</b>
        <p> {detail.release_date}</p>
        <button>PLAY MOVIE</button>
      </div>
      <div
        style={{
          height: "100vh",
          width: "50vw"
        }}
      >
        {/* video */}
        <img
          src={`http://image.tmdb.org/t/p/w500/${detail.backdrop_path}`}
          alt={detail.title}
        />
      </div>
    </div>
  );
};

export default Detail;
