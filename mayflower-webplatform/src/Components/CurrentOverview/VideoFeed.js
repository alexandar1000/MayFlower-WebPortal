import React from 'react';

import axios from 'axios';
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
    constructor(props) {
        super(props);
        this.state = { image: null, interval: null, keymg: 0 };
      }

    getLatestImage() {
        axios.get('http://localhost:8000/api/v1/video/')
        // .then(res => res.blob())
        .then(res => {
                // let outside = URL.createObjectURL(res)
                // console.log(outside)
              this.setState({
                //   image: res.data
                  keymg: this.state.keymg + 1
              })
          })

//           fetch(fetchURL + image)
//   //                         vvvv
//   .then(response => response.blob())
//   .then(images => {
//       // Then create a local URL for that image and print it 
//       outside = URL.createObjectURL(images)
//       console.log(outside)
//   })
    }

    componentDidMount() {
        this.getLatestImage();
        this.setState({
            interval: setInterval(() => {
                this.getLatestImage()
              }, 1000)})
      }

    componentWillUnmount() {
        // clearInterval(this.state.interval);
    }


    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    title="Video Feed"
                />
                <CardMedia
                    key={this.state.keymg}
                    className={classes.media}
                    image={'http://localhost:8000/api/v1/video/'}
                    // image={this.state.image}
                    title="Boat Camera"
                />
                {/* <img src={this.state.image}></img> */}
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(VideoFeed);