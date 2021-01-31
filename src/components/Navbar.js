import React from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Button, Typography, Avatar, Grid } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";


const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid item>
    <AppBar className="bg-light text-red">
      <Toolbar className={classes.appbar}>
        <Avatar className="mx-3">
          <AssignmentIndIcon color="secondary" />
        </Avatar>
        <Typography variant="h5" className="flex-grow-1">
          Blood Bank
        </Typography>
        <Button variant="contained" color="secondary">
          Register
        </Button>
      </Toolbar>
    </AppBar>
    </Grid>
  );
};
export default Navbar;
