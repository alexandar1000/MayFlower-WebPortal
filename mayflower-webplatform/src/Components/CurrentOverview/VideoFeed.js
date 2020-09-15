import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardHeader,
    CardMedia,
  } from '@material-ui/core';


  import boatCamera from './camera.jpg';


const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  });

class VideoFeed extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    title="Video Feed"
                />
                <CardMedia
                    className={classes.media}
                    image={boatCamera}
                    title="Boat Camera"
                />
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(VideoFeed);