import React from "react";
import { Typography, Grid } from "@material-ui/core";
import MouseEvent from "~/components/atoms/MouseEvent";

const VarticalNav = props => {
  const { array } = props;
  return (
    <Grid item xs={12}>
      {array.map(value => (
        <Grid container xs={12} key={value.name} justify="space-between">
          <Grid item xs={11}>
            <Typography align="center" noWrap variant="h5">
              {value.name}
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <MouseEvent timer={value.timer} onFunction={value.func} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default VarticalNav;
