// React Imports
import { useState, useEffect, useRef } from "react";
// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Slider, Typography, Image } from "antd";
// Howler Imports
import { Howl /* Howler */ } from "howler";
// Hooks
import { useCurrentBreakpoint } from "../hooks";
// Components
import { List } from "../components/List";
import { AudioControls } from "../components/AudioControls";
import { ExpandPlaylistButton } from "../components/ExpandPlaylistButton";
// Types
import { MenuClickEventHandler } from "rc-menu/lib/interface";
type Track = {
  title: string;
  image: string;
  color: string;
  artist: string;
  audioSrc: string;
};
type AudioPlayerProps = {
  tracks: Track[];
  trackIndex: number;
  handleSelect: MenuClickEventHandler;
  skip: (to: "next" | "prev") => void;
};
// Constants
const { Title } = Typography;

/**
 * AudioPlayer
 *
 * A media player that takes in a list of tracks and offers the ability to
 * play, pause, go to next, and go to previous.
 */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  skip,
  tracks,
  trackIndex,
  handleSelect,
}) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [viewPlaylist, setViewPlaylist] = useState(true);
  const [size, setSize] = useState<"small" | "normal" | null>(null);

  // Hooks
  const { breakpoint } = useCurrentBreakpoint();

  // Constants
  const { title, artist, /* color,*/ image, audioSrc } = tracks[trackIndex];

  // Refs
  const isReady = useRef(false);
  const intervalRef = useRef(0);
  const audioRef = useRef(new Howl({ src: [audioSrc], autoplay: false }));

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
  }, [isPlaying]); // eslint-disable-line

  // Pause song and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Size of window
  useEffect(() => {
    return breakpoint === "xs" || breakpoint === "sm"
      ? setSize("small")
      : setSize("normal");
  }, [breakpoint]);

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
  }, [audioSrc]); // eslint-disable-line

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    const current = Number(audioRef.current.seek());
    const length = Number(audioRef.current.duration());

    intervalRef.current = window.setInterval(() => {
      if (current !== 0 && current === length) {
        skip("next");
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

  const togglePlaylistView = () => setViewPlaylist((v) => !v);

  return (
    <div
      className={clsx("audio-player-container", {
        column: size === "small",
      })}
    >
      <div className="audio-player">
        {!viewPlaylist && (
          <ExpandPlaylistButton
            size={size}
            viewPlaylist={viewPlaylist}
            togglePlaylistView={togglePlaylistView}
          />
        )}
        <div className="track-info">
          <div className="imageWrapper">
            <Image
              src={image}
              preview={false}
              alt={`track artwork for ${title} by ${artist}`}
            />
          </div>
          <div className="titleWrapper">
            <Title level={4}>{title}</Title>
          </div>
          <div className="artistWrapper">
            <Title level={5}>{artist}</Title>
          </div>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={() => skip("prev")}
            onNextClick={() => skip("next")}
            onPlayPauseClick={setIsPlaying}
          />
          <div className="sliderWrapper">
            <Slider
              min={0}
              step={1}
              max={duration}
              className="progress"
              value={trackProgress}
              tooltipVisible={false}
              onAfterChange={onScrubEnd}
              style={{ color: trackStyling }}
              onChange={(n: number) => onScrub(Number(n))}
            />
          </div>
        </div>
      </div>
      {viewPlaylist && (
        <div
          className={clsx(
            "audio-playlist",

            { "margin-top": size === "small" }
          )}
        >
          <List
            height={363}
            list={tracks}
            selectedIndex={trackIndex}
            handleSelect={handleSelect}
            togglePlaylistView={togglePlaylistView}
          />
        </div>
      )}
    </div>
  );
};
