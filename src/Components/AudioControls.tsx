// React Imports
import React from "react";

// Ant Design Imports
import { Button } from "antd";

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
 * Pause, Play, Next & Prev buttons at the bottom of the audio player
 */
export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPrevClick,
  onNextClick,
  onPlayPauseClick,
}) => {
  return (
    <div className="audio-controls">
      <Button
        type="link"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
        icon={<Prev />}
      />
      {isPlaying ? (
        <Button
          type="link"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
          icon={<Pause />}
        />
      ) : (
        <Button
          type="link"
          className="play"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
          icon={<Play />}
        />
      )}
      <Button
        type="link"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
        icon={<Next />}
      />
    </div>
  );
};
