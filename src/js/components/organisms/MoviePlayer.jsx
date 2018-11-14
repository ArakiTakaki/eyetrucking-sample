import React from "react";
import MouseEvent from "~/components/atoms/MouseEvent";
import VarticalNav from "~/components/molecules/VarticalNav";
import { Grid, Typography } from "@material-ui/core";
import Movie from "~/components/atoms/Movie";

class MoviePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.moviePlayerToArray = this.moviePlayerToArray.bind(this);
  }
  moviePlayerToArray() {
    return [
      {
        name: "ビデオを再生する",
        timer: 1000,
        func() {
          console.log("test");
        }
      },
      {
        name: "ビデオを停止する",
        timer: 1000,
        func() {
          console.log("stop");
        }
      }
    ];
  }
  render() {
    const { src } = this.props;
    return (
      <Grid container xs={12} justify="center">
        <Grid item xs={9} alignItems="center">
          <Movie src={src} />
        </Grid>
        <Grid item xs={3}>
          <Grid container xs={12}>
            <VarticalNav array={this.moviePlayerToArray()} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default MoviePlayer;
