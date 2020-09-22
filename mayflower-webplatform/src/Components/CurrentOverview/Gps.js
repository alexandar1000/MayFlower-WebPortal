import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@material-ui/core';



const styles = theme => ({

  });

class Gps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 53.38455701638842,
            longitude: -1.4595508575439455,
            altitude: 54.0
        }
        this.getCurrentGPS = this.getCurrentGPS.bind(this);
    }


    componentDidMount() {
        this.timer = setInterval(this.getCurrentGPS, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    async getCurrentGPS(){
        const api = axios.create();
        await api.get(`http://localhost:8000/api/v1/gps/current/`)
            .then(res =>{
                this.setState({
                    latitude: res.data.latitude,
                    longitude: res.data.longitude,
                    altitude: res.data.altitude
                });
            });
    }

    render() {
        const {classes} = this.props;
        let lat = "53.3846 N";
        let long = "1.4596 W";
        let alt = "54.0 M";
        const {latitude, longitude, altitude} = this.state;
        if (latitude != null && longitude != null && altitude != null) {
            if (latitude >= 0){
                // lat = Math.round(latitude, 4).toString() + " N";
                lat = latitude.toFixed(4) + " N";
            }else {
                // lat = ((-1) * Math.round(latitude, 4)).toString() + " S";
                lat = ((-1) * latitude.toFixed(4)) + " S";
            }
            if (longitude >= 0){
                // long = Math.round(longitude, 4).toString() + " E";
                long = longitude.toFixed(4) + " E";
            }else {
                // long = ((-1) * Math.round(longitude, 4)).toString() + " W";
                long = ((-1) * longitude.toFixed(4)) + " W";
            }
            alt = altitude.toFixed(1) + " M";
        }
        return (
            <Card className={classes.root}>
                <CardHeader
                    title="GPS"
                />
                <CardContent>
                    <Typography>
                        {lat}; {long}; {alt}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Gps);