import React from "react";
import MouseEvent from "~/components/atoms/MouseEvent";
import VarticalNav from "~/components/molecules/VarticalNav";
import { Grid, Typography } from "@material-ui/core";
import Movie from "~/components/atoms/Movie";

import style from "./scss/MoviePlayer.scss";

class MoviePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.moviePlayerToArray = this.moviePlayerToArray.bind(this);
    this.time = 1.0;
  }
  moviePlayerToArray() {
    return [
      {
        name: "探索を開始する",
        timer: 1000,
        func() {
          document.getElementById("sampleMovie").play();
        }
      },
      {
        name: "一旦中断",
        timer: 1000,
        func() {
          document.getElementById("sampleMovie").pause();
        }
      },
      {
        name: "次の秒",
        timer: 1000,
        func() {
          document.getElementById("sampleMovie").currentTime = this.time;
          this.time += 1.0;
        }
      }
    ];
  }
  render() {
    const { src } = this.props;
    return (
      <div>
        <div className={style.movie_action}>
          <MouseEvent
            onFunction={() => {
              console.log("test");
              alert("みたな！！！！！");
            }}
            timer={500}
          />
        </div>
        <Grid container xs={12} justify="center">
          <Grid item xs={9}>
            <Movie src={src} id="sampleMovie" />
          </Grid>
          <Grid item xs={3}>
            <Grid container xs={12}>
              <VarticalNav array={this.moviePlayerToArray()} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MoviePlayer;
