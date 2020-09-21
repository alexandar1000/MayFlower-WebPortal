import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

import { 
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid
  } from '@material-ui/core';


  const styles = theme => ({
    });

class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {data: {}, chart: null}
    }

    componentDidMount() {
        let myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: this.props.chartData,
            options: this.props.options
        });
        this.setState({
            chart: myChart
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.state.chart != null) {
            this.state.chart.data = nextProps.data;
            this.state.chart.update();
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <canvas ref={this.canvasRef}></canvas>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LineChart);