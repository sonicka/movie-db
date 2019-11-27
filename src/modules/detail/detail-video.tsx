import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import shaka from "shaka-player";
import muxjs from "mux.js";
import { get } from "lodash";

let manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

const DetailVideo: React.FC<RouteComponentProps> = props => {
  let videoUrl = get(props, "location.state.vid", "");
  let posterUrl = get(props, "location.state.bgImage", "");
  let video = React.createRef<HTMLVideoElement>(); // find the video element;
  (window as any).muxjs = muxjs;
  //(video as any).src = "https://www.youtube.com/watch?v=DYYtuKyMtY8";
  //(video as any).load();

  useEffect(() => {
    // Construct a Player to wrap around the video element
    let player = new shaka.Player(video.current);
    (window as any).player = player;

    const initPlayer = async () => {
      // Listen for error events.
      if (player) {
        player.addEventListener("error", function(event: any) {
          console.log(event);
        });

        //   Try to load a manifest.
        //   This is an asynchronous process.
        await player
          .load(manifestUri)
          .then(function() {
            // This runs if the asynchronous load is successful.
            console.log("The video has now been loaded!");
          })
          .catch((error: any) =>
            console.error("Error code", error.code, "object", error)
          ); // onError is executed if the asynchronous load fails.
        try {
          await player.load(manifestUri);

          // This runs if the asynchronous load is successful.
          console.log("The video has now been loaded!");
        } catch (error) {
          console.log("érror here");
          console.error("Error code", error.code, "object", error);
        }
      }
    };

    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      console.log("gonna init");
      initPlayer();
    } else {
      console.log("not gonna init");
      // This browser does not have the minimum set of APIs we need.
      console.error("Browser not supported!");
    }

    return () => {
      player.destroy();
    };
  }, [video, videoUrl]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <video
        ref={video}
        width="100%"
        height="100%"
        poster={posterUrl}
        controls
        autoPlay
        src={videoUrl}
      >
        <source src={videoUrl} />
      </video>
    </div>
  );
};

export default DetailVideo;
