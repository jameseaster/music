// React Imports
import React from "react";

// Ant Design Icons
import Pause from "@ant-design/icons/PauseOutlined";
import Play from "@ant-design/icons/CaretRightOutlined";
import Next from "@ant-design/icons/StepForwardOutlined";
import Prev from "@ant-design/icons/StepBackwardOutlined";

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: (command: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

/**
 * AudioControls
 *
 * ...
 */
export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="audio-controls">
      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <Prev />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
      >
        <Next />
      </button>
    </div>
  );
};
