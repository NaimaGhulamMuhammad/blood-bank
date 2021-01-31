import React from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  TextField,
  Button,
  IconButton,
  Grid,
  Typography,
  InputAdornment
} from "@material-ui/core";

const Input = ({
  name,
  half,
  autoFocus,
  type,
  label,
  value,
  handleChange,
  showPassword
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        type={type}
        variant="outlined"
        label={label}
        fullWidth
        required
        value={value}
        autoFocus={autoFocus}
        color="secondary"
        onChange={handleChange}
        InputProps={
          name === "password" ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showPassword}>
                  {type === "password" ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            )
          } : null
        }
      />
    </Grid>
  );
};
export default Input;
