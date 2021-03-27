// React Imports
import React, { useState, useEffect, useRef } from "react";

// Howler Imports
import { Howl /* Howler */ } from "howler";

// Components
import { AudioControls } from "../Components/AudioControls";
import { Backdrop } from "../Components/Backdrop";

interface Track {
  title: string;
  artist: string;
  audioSrc: string;
  image: string;
  color: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

/**
 * AudioPlayer
 *
 * A media player that takes in a list of tracks and offers the ability to
 * play, pause, go to next, and go to previous.
 */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  // Constants
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Howl({ src: [audioSrc], autoplay: false }));
  const intervalRef = useRef(0);
  const isReady = useRef(false);

  // Current track duration
  const duration = audioRef.current.duration();

  // Styling the scrub bar
  const currentPercentage = `${(trackProgress / duration) * 100}%`;
  const trackStyling =
    "-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
    currentPercentage +
    ", #fff), color-stop(" +
    currentPercentage +
    ", #777))";

  // useEffects //
  // Play Track if isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Pause song and clean up on unmount
  useEffect(() => {
    let { current: song } = audioRef;
    let { current: interval } = intervalRef;
    return () => {
      song.pause();
      clearInterval(interval);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    // Pause current track
    audioRef.current.pause();

    // Create new howl with new audioSrc
    audioRef.current = new Howl({ src: [audioSrc], autoplay: false });
    // Extract current progress TODO: which could just always be 0?
    const progress = Number(audioRef.current.seek());
    setTrackProgress(progress);

    /**
     * isReady ref here on the first pass (initial mount)
     * This is to prevent the audio from playing automatically
     * when this useEffect hook first runs
     */
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [audioSrc]);

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

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    const current = Number(audioRef.current.seek());
    const length = Number(audioRef.current.duration());

    intervalRef.current = window.setInterval(() => {
      if (current !== 0 && current === length) {
        toNextTrack();
      } else {
        const progress = Number(audioRef.current.seek());
        setTrackProgress(progress);
      }
    }, 1000);
  };

  const onScrub = (value: number) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.seek(value);
    setTrackProgress(value);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
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
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(Number(e.target.value))}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
      <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      />
    </div>
  );
};
