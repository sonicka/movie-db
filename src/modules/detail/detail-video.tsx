import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import shaka from "shaka-player";
import muxjs from "mux.js";
import { get } from "lodash";
import { useStyles } from "./detail-styles";

const manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
export const video = React.createRef<HTMLVideoElement>();

/** Component that plays video using Shaka player */
const DetailVideo: React.FC<RouteComponentProps> = props => {
  const classes = useStyles({});
  let videoUrl = get(props, "location.state.video", "");
  let posterUrl = get(props, "location.state.bgImage", "");
  (window as any).muxjs = muxjs;

  console.log(video);

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

        // Try to load a manifest.
        await player
          .load(manifestUri)
          .then(function() {
            if (video.current) {
              video.current
                .requestFullscreen()
                .catch(err =>
                  console.log(`Fullscreen cannot be toggled. ${err}`)
                );
            }
            console.log("The video has now been loaded!");
          })
          .catch((error: any) =>
            console.error("Error code", error.code, "object", error)
          );
      }
    };

    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      initPlayer();
    } else {
      console.error("Browser not supported!");
    }

    return () => {
      player.destroy();
    };
  }, [video, videoUrl]);

  return (
    <div className={classes.videoWrapper}>
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

// export const initPlayer = async (video: any) => {
//   (window as any).muxjs = muxjs;

//   // Construct a Player to wrap around the video element
//   let player = new shaka.Player(video.current);
//   (window as any).player = player;

//   // Install built-in polyfills to patch browser incompatibilities.
//   shaka.polyfill.installAll();

//   // Check if the browser supports the basic APIs Shaka needs.
//   if (shaka.Player.isBrowserSupported()) {
//     // Listen for error events.
//     if (player) {
//       player.addEventListener("error", function(event: any) {
//         console.log(event);
//       });

//       // Try to load a manifest.
//       await player
//         .load(manifestUri)
//         .then(function() {
//           if (video.current) {
//             video.current
//               .requestFullscreen()
//               .catch((err: any) =>
//                 console.log(`Fullscreen cannot be toggled. ${err}`)
//               );
//           }
//           console.log("The video has now been loaded! YASSS");
//         })
//         .catch((error: any) =>
//           console.error("Error code", error.code, "object", error)
//         );
//     }
//   } else {
//     console.error("Browser not supported!");
//   }
// };

export default DetailVideo;
