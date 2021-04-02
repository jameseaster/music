// React Imports
import React from "react";

// Dependency Imports
import ReactPlayer from "react-player";

/**
 * ResponsivePlayer
 *
 * TODO: add details here
 */
export const ResponsivePlayer: React.FC<{}> = () => {
  const live = [
    "https://www.youtube.com/watch?v=mkLl_BpGbeU",
    "https://www.youtube.com/watch?v=-28qjhW5Wzw",
    "https://www.youtube.com/watch?v=ymHZx1rr9Bg",
    "https://www.youtube.com/watch?v=Ka9EV91Yku8",
  ];

  const transcriptions = [
    "https://www.youtube.com/watch?v=eZyFPcJjOkA",
    "https://www.youtube.com/watch?v=z3FH5_C_pzo",
    "https://www.youtube.com/watch?v=nCrCLeIJzm8",
    "https://www.youtube.com/watch?v=Bq5qf50d-cI",
    "https://www.youtube.com/watch?v=gIe8VBxFGOM",
    "https://www.youtube.com/watch?v=lYYy3sZMRwQ",
    "https://www.youtube.com/watch?v=lGysbDsvNOU",
    "https://www.youtube.com/watch?v=rW97jsCq9A8",
    "https://www.youtube.com/watch?v=uBfEOiovs9g",
    "https://www.youtube.com/watch?v=7Dy6AteuOHE",
  ];
  return (
    <div className="player-wrapper">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        stopOnUnmount
        className="react-player"
        url={[...live, ...transcriptions]}
      />
    </div>
  );
};
