import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";

const Donar = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">User name</Typography>
        <Typography variant="h5">User name</Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant="contained">
          Select
        </Button>
      </CardActions>
    </Card>
  );
};
export default Donar;
