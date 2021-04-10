// React Imports
import { useState } from "react";
// Components
import { AudioPlayer } from "../components/AudioPlayer";
// Assets
import { tracks } from "../assets/tracks";
// Types
import { MenuClickEventHandler } from "rc-menu/lib/interface";

/**
 * Audio Page
 *
 * TODO:
 */
export const Audio: React.FC<{}> = () => {
  // Local State
  const [trackIndex, setTrackIndex] = useState(0);

  // Skip audio track forward or backward
  const skip = (to: "next" | "prev") => {
    return to === "next"
      ? trackIndex < tracks.length - 1
        ? setTrackIndex(trackIndex + 1)
        : setTrackIndex(0)
      : trackIndex - 1 >= 0
      ? setTrackIndex(trackIndex - 1)
      : setTrackIndex(tracks.length - 1);
  };

  // Select audio track from playlist
  const handleAudioSelect: MenuClickEventHandler = ({ key }) => {
    setTrackIndex(Number(key));
  };

  return (
    <div className="pages-container">
      <div className="media-container">
        <AudioPlayer
          skip={skip}
          tracks={tracks}
          trackIndex={trackIndex}
          handleSelect={handleAudioSelect}
        />
      </div>
    </div>
  );
};
