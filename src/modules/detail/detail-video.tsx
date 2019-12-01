import { RefObject } from "react";
import shaka from "shaka-player";
import muxjs from "mux.js";
import { manifestUri } from "../../constants";

/** Function that creates video player usingg Shaka player */
export const playVideo = (video: RefObject<HTMLVideoElement>) => {
  (window as any).muxjs = muxjs;

  // Construct a Player to wrap around the video element
  let player = new shaka.Player(video.current);

  // Attach player to the window to make it easy to access
  (window as any).player = player;

  // Initialize video player after checking browser support
  const initPlayer = async () => {
    // Listen for error events.
    if (player) {
      player.addEventListener("error", function(event: any) {
        console.log(event);
      });

      // Try to load a manifest.
      await player.load(manifestUri).catch((error: any) => {
        console.error("Error code", error.code, "object", error);
      });
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
};

/** Function to play video on fullscreen */
export const enterFullscreen = (video: RefObject<HTMLVideoElement>) => {
  try {
    if (video.current) {
      video.current.requestFullscreen();
    }
  } catch (error) {
    console.log(`Fullscreen cannot be toggled. ${error}`);
  }
};
