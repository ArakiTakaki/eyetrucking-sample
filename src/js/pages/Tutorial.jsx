import React from "react";
import { Grid } from "@material-ui/core";
import BottomNav from "~/components/organisms/BottomNav";
import MoviePlayer from "~/components/organisms/MoviePlayer";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import TransPage from "~/components/atoms/TransPage";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.indexNavArray = this.indexNavArray.bind(this);
  }

  indexNavArray() {
    const { history } = this.props;
    return [
      {
        name: "TOP",
        glid: 2,
        func: () => {
          history.push("/");
        },
        timer: 500
      },
      {
        name: "RESULT",
        glid: 2,
        func: () => {
          history.push("/result");
        },
        timer: 500
      }
    ];
  }
  render() {
    const movieSrc = `http://${location.hostname}:3000/movies/IMG_9972.MOV`;
    return (
      <div>
        <TransPage />
        <MoviePlayer src={movieSrc} />
        <BottomNav array={this.indexNavArray()} />
      </div>
    );
  }
}

export default Index;
