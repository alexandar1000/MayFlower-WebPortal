import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Link,
  } from "react-router-dom";
import { 
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core';



  const styles = theme => ({
    root: {
      height: '100%',
      'align-content': 'space-around'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    testItem: {
    },
    link: {
        textDecoration: 'none'
    }

  });
  
  class LandingPage extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <h1>Welcome to the Web Platform for the MayFlower Project!</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <Link to="/control-centre" className={classes.link}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Control Centre
                                    </Typography>
                                </CardContent>
                            </Link>   
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <Link to="/historical-data" className={classes.link}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Historical Data
                                    </Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LandingPage);
