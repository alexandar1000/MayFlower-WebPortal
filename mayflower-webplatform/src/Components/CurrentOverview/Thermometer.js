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

class Thermometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: 0, interval: null };
      }

    getLatestTemperature() {
        axios.get(`http://localhost:8000/api/v1/temperatures/0/`)
          .then(res => {
              this.setState({
                  temperature:  (Math.round(res.data.temperature * 100) / 100).toFixed(1)
              })
          })
    }
    componentDidMount() {
        this.getLatestTemperature();
        this.setState({
            interval: setInterval(() => {
                this.getLatestTemperature()
              }, 1000)})
      }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const {classes} = this.props;
        return (
             <Card className={classes.root}>
                <CardHeader
                    title="Thermometer"
                />
                <CardContent>
                    <Typography>
                        {this.state.temperature}c
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Thermometer);