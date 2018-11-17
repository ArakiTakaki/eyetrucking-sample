import React from "react";
import PropTypes from "prop-types";
import styles from "./scss/Movie.scss";

let x = 0;
let y = 0;
let time = 0;
const log = [];

const onMouseMove = event => {
  x = event.pageX;
  y = event.pageY;
  time = event.currentTarget.currentTime;
};

const onClick = event => {
  log.push({
    transform: `translate(${x}px, ${y}px)`
  });
  console.log(JSON.stringify(log));
  console.log(`END TIME: ${time}`);
  event.currentTarget.currentTime = time + 0.25;
};
const MoviePlayer = props => {
  const { onEnded, onPlaying, onTimeUpdate, src, id } = props;
  return (
    <video
      className={styles.video}
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
