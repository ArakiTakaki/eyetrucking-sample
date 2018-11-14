import React from "react";
import PropTypes from "prop-types";

const MoviePlayer = props => {
  const { onEnded, onPlaying, onTimeUpdate, src } = props;
  return (
    <video
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      id="video"
      onPlaying={onPlaying}
      width="100%"
      src={src}
      autoPlay
      muted
    />
  );
};

MoviePlayer.propTypes = {
  onEnded: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlaying: PropTypes.func,
  src: PropTypes.string.isRequired
};

export default MoviePlayer;
