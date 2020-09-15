import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import VideoFeed from './CurrentOverview/VideoFeed';
import Thermometer from './CurrentOverview/Thermometer';
import Gps from './CurrentOverview/Gps';
import Battery from './CurrentOverview/Battery';
import BoatControls from './Controls/BoatControls';
import { 
    Card,
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
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    grid: {
        marginTop: '15px'
    }
  });


class ControlCentre extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="baseline"
                    spacing={2}
                    className={classes.grid}
                >
                    <Grid item xs={7}>
                        <VideoFeed></VideoFeed>
                    </Grid>
                    <Grid item xs={3}>
                        <BoatControls></BoatControls>
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
                    <Grid item xs={3}>
                        <Battery></Battery>
                    </Grid>
                    <Grid item xs={3}>
                        <Gps></Gps>
                    </Grid>
                    <Grid item xs={3}>
                        <Thermometer></Thermometer>
                    </Grid>
                </Grid>
            </div>
        );
    }
    
}

export default withStyles(styles, { withTheme: true })(ControlCentre);