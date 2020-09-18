import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { 
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid
  } from '@material-ui/core';


const styles = theme => ({

  });

class BoatControls extends React.Component {
    left() {
        axios.post('http://localhost:8000/api/v1/controls/command/', {
            command: 'a'
          })
        //   .then(function (response) {
        //     console.log(response);
        //   })
    }

    
    right() {
        axios.post('http://localhost:8000/api/v1/controls/command/', {
            command: 'd'
          })
        //   .then(function (response) {
        //     console.log(response);
        //   })
    }


    reverse() {
        axios.post('http://localhost:8000/api/v1/controls/command/', {
            command: 's'
          })
        //   .then(function (response) {
        //     console.log(response);
        //   })
    }

    forward() {
        axios.post('http://localhost:8000/api/v1/controls/command/', {
            command: 'w'
          })
        //   .then(function (response) {
        //     console.log(response);
        //   })
    }


    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    title="Controls"
                />
                <CardContent>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className={classes.grid}
                >
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Button variant="contained" onClick={() => { this.forward() }}>
                                <Typography>
                                    Forward
                                </Typography>
                            </Button> 
                        </Card>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    className={classes.grid}
                >
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Button variant="contained" onClick={() => { this.left() }}>
                                <Typography>
                                    Left
                                </Typography>
                            </Button> 
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                        <Button variant="contained" onClick={() => { this.right() }}>
                                <Typography>
                                    Right
                                </Typography>
                            </Button> 
                        </Card>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    className={classes.grid}
                >
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Button variant="contained" onClick={() => { this.reverse() }}>
                                <Typography>
                                    Backward
                                </Typography>
                            </Button> 
                        </Card>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(BoatControls);