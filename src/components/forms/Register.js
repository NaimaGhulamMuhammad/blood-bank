import React from "react";
import useStyles from "../styles";
import {
  Button,
  Typography,
  Grid,
  Container,
  Paper,
  Avatar,
  Switch
} from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import {CreateUser} from '../../store/action/index'
import {useDispatch} from "react-redux"
import Input from "../Input";

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSignup, setSignup] = React.useState(false);
  const [user, setUser] = React.useState({firstName:'',lastName:'',email:'',password:'',donar:false})
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  };
  const isDonar = (e)=> {
    setUser({...user, donar:!user.donar})
  }
  const [show, setShow] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
   dispatch(CreateUser(user))
    console.log(user)
  };
  const switchMode = () => {
    setSignup(!isSignup);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={4}
        className="p-4 d-flex flex-column justify-content-around align-items-center"
      >
        <Avatar className="mb-3">
          <AssignmentIndIcon color="secondary" />
        </Avatar>
        <Typography variant="h4" color="secondary" gutterBottom>
          {isSignup ? "Register" : "Log In"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  type="text"
                  half
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  type="text"
                  half
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              type="email"
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              type={show ? "text" : "password"}
              handleChange={handleChange}
              showPassword={() => setShow(!show)}
            />
            {isSignup && (
              <>
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type={show ? "text" : "password"}
                handleChange={handleChange}
              />
              <Grid item>
              <Switch color="secondary" edge="start"  onChange={isDonar}/>
              <Typography variant="body1" color="secondary"  display="inline">Register as a Donar</Typography >
            </Grid>
              </>
            )}
            
          </Grid>
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            className="my-3 p-2"
          >
            {isSignup ? "Register" : "LogIn"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already Have an account? Log In"
                  : "Don't have an account? Get Register"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Register;
