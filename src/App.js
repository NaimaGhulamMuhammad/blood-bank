import React from "react";
import { Grid } from "@material-ui/core";
import Donar from "./components/donars/Donar";
import Home from './components/Home'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const App = () => {
  return (
    <Router>
      <Grid container>
        <Navbar />
        <Route path='/' exact render={props => <Home {...props}/> }/>
      </Grid>
    </Router>
  );
};
export default App;
