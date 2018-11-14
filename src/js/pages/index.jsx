import React from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import { Typography, Grid, Card } from "@material-ui/core";
import MouseEvent from "~/components/atoms/MouseEvent";

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
  render() {
    const { name } = this.props.store;
    return (
      <div>
        <Grid container xs={12} justify="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              ココを教え隊！
            </Typography>
          </Grid>
          <Card>
            <Grid container xs={12} justify="center">
              <Grid item xs={12}>
                <Typography align="center" variant="h4">
                  視線を下の丸に合わせてください
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <MouseEvent
                  number={1000}
                  onFunction={() => {
                    this.props.history.push("/tutorial");
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Index;
