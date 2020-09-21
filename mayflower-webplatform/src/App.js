import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MainView from './Components/MainView';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  mainView: {
    height: '100vh'
  },
  logoName: {
    textDecoration: 'none',
    color: "white"
  }

}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logoName}>MayFlower Web Platform</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <MainView/>
    </Router>
    </div>
  );
}

export default App;
