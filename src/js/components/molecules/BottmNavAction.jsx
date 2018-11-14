import React from "react";
import { Typography, Grid } from "@material-ui/core";
import MouseEvent from "~/components/atoms/MouseEvent";

const BottomNavActions = props => {
  const { array } = props;
  return (
    <Grid item xs={12}>
      <Grid container xs={12} justify="space-between">
        {array.map(value => (
          <Grid item xs={value.glid} key={value.name}>
            <Typography align="center" noWrap variant="h5">
              {value.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container xs={12} spacing={24} justify="space-between">
        {array.map(value => (
          <Grid item xs={value.glid} key={value.name}>
            <MouseEvent timer={value.timer} onFunction={value.func} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BottomNavActions;
