// React Imports
import React, { useState, useEffect, useRef } from "react";

// Components
import { AudioControls } from "../Components/AudioControls";

interface Track {
  title: string;
  artist: string;
  audioSrc: any; // | import,
  image: string;
  color: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

/**
 * AudioPlayer
 *
 * A short paragraph about me which leads into my contact form
 */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(
    new Audio(
      "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
      // "https://drive.google.com/file/d/1trwmIhgC6jrj_34YtHyIG5g5gvezu7EP/view?usp=sharing"
      // require("../assets/tracks/DayDreamer.mp3")
    )
  );
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  // useEffects
  // Play Track if isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      console.log(audioRef);
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handlers
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  return (
    <div className="audio-player">
      <div className="track-info">
        <audio src="/assets/tracks/DayDreamer.mp3"></audio>
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <audio controls>
          <source src="/DayDreamer.mp3" />
        </audio>
      </div>
    </div>
  );
};
