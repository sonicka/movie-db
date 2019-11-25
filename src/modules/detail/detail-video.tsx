import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import shaka from "shaka-player";
import { get } from "lodash";

let manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

const DetailVideo: React.FC<RouteComponentProps> = props => {
  let videoUrl = get(props, "location.state.vid", "");
  let posterUrl = get(props, "location.state.bgImage", "");
  let video = React.createRef<HTMLVideoElement>(); // find the video element;

  useEffect(() => {
    const initPlayer = async () => {
      // Construct a Player to wrap around the video element
      let player = new shaka.Player(video);

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

        (window as any).player = player;
      }
    };

    function initApp() {
      console.log("here we sre");
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
    }

    if (document) {
      console.log("document");
      document.addEventListener("DOMContentLoaded", initApp);
    }
  }, [video, videoUrl]);

  //   componentWillUnmount() {
  //       // unmount stuff
  //       // kill stream hogging...:)
  //   }

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
      />
    </div>
  );
};

export default DetailVideo;
