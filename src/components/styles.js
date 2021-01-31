import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appbar: {
    display: "flex",
    ...theme.mixins.toolbar
  }
}));
