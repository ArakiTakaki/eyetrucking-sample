import React from "react";
import PropTypes from "prop-types";

let x = 0;
let y = 0;
let time = 0;
const log = [];
const meta_data = [
  { x: 926, y: 390, time: 0 },
  { x: 830, y: 355, time: 1 },
  { x: 902, y: 409, time: 2 },
  { x: 951, y: 426, time: 3 },
  { x: 938, y: 426, time: 4 },
  { x: 988, y: 442, time: 5 },
  { x: 923, y: 424, time: 6 },
  { x: 982, y: 466, time: 7 },
  { x: 769, y: 469, time: 8 },
  { x: 657, y: 428, time: 9 },
  { x: 741, y: 477, time: 10 }
];

const onMouseMove = event => {
  x = event.pageX;
  y = event.pageY;
  time = event.currentTarget.currentTime;
};

const onClick = event => {
  log.push({
    x: x,
    y: y,
    time: time
  });
  console.log(JSON.stringify(log));
  event.currentTarget.currentTime = time + 0.25;
};
const MoviePlayer = props => {
  const { onEnded, onPlaying, onTimeUpdate, src, id } = props;
  return (
    <video
      onClick={onClick}
      onMouseMove={onMouseMove}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      id={id}
      onPlaying={onPlaying}
      width="100%"
      src={src}
      muted
    />
  );
};

MoviePlayer.propTypes = {
  onEnded: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlaying: PropTypes.func,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default MoviePlayer;
