import React from "react";
import { Typography, Grid } from "@material-ui/core";
import BottomNav from "~/components/organisms/BottomNav";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Result extends React.Component {
  constructor(props) {
    super(props);
    this.indexNavArray = this.indexNavArray.bind(this);
  }

  indexNavArray() {
    const { history } = this.props;
    return [
      {
        name: "Tutorial",
        glid: 2,
        func() {
          history.push("/tutorial");
        },
        timer: 500
      },
      {
        name: "頑張る",
        glid: 2,
        func() {
          history.push("/select_stage");
        },
        timer: 500
      }
    ];
  }
  render() {
    return (
      <div>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              教えたいの入隊画面のCSSアニメーション
            </Typography>
          </Grid>
        </Grid>
        <BottomNav array={this.indexNavArray()} />
      </div>
    );
  }
}

export default Result;
