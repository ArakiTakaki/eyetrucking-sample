import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Paper
} from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class RoomContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* pattern1 */}
        <Grid container spacing={8} justify="flex-start">
          <Grid item xs={10}>
            <Typography component="p" color="secondary" align="left">
              &nbsp;Other
            </Typography>
            <Paper>
              <Typography component="p">
                テストテキストテストテキストテストテキストあいうえお
              </Typography>
            </Paper>
            <Typography component="p" align="right">
              1994-18-19 10:20:04&nbsp;
            </Typography>
          </Grid>
        </Grid>
        {/* pattern2 */}
        <Grid container spacing={16} justify="flex-end">
          <Grid item xs={10}>
            <Grid item xs={12} md={2}>
              <Typography component="p" color="secondary" align="right">
                You
              </Typography>
            </Grid>
            <Paper>
              <Grid container justify="flex-end" alignItems="center">
                <Grid item xs={12} md={9}>
                  <Typography component="p">
                    テストテキストテストテキストテストテキストあいうえお
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Typography component="p" align="left">
              1994-18-19 10:20:04
            </Typography>
          </Grid>
        </Grid>
        {/* pattern3 */}
        <Grid container spacing={16} justify="center">
          <Grid item xs={11}>
            <Paper>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={7} md={2}>
                  <Typography component="p" color="secondary">
                    UserName
                  </Typography>
                </Grid>
                <Grid item xs={5} md={2}>
                  <Typography component="p" align="right">
                    1994-18-19 10:20:04
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography component="p">
                    テストテキストテストテキストテストテキストあいうえお
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RoomContent;
