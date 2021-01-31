import React from "react";
import { Grid } from "@material-ui/core";
import Register from "./forms/Register";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column">
      <div className={`${classes.appbar} p-5`} />
      <Register />
    </Grid>
  );
};
export default Home;
