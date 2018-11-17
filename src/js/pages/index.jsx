import React from "react";
import { Typography, Grid, Fade } from "@material-ui/core";
import styles from "./scss/index.scss";
import BottomNav from "~/components/organisms/BottomNav";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import { API_ROOT } from "~/contents/api";
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
        name: "SKIP",
        glid: 2,
        func() {
          history.push("/");
        },
        timer: 500
      },
      {
        name: "TUTORIAL",
        glid: 2,
        func() {
          history.push("/tutorial");
        },
        timer: 500
      }
    ];
  }
  render() {
    return (
      <div>
        <TransPage />
        <Grid container xs={12} justify="center">
          <Grid item xs={6}>
            <img src={`${API_ROOT}/img/logo.png`} width="100%" />
            <Typography> test </Typography>
          </Grid>
        </Grid>
        <BottomNav array={this.indexNavArray()} />
      </div>
    );
  }
}

export default Index;
