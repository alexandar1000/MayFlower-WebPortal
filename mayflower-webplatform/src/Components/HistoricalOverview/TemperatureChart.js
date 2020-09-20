import React from 'react';
import Chart from 'chart.js';
import { withStyles } from '@material-ui/core/styles';

import { 
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid
  } from '@material-ui/core';


  const styles = theme => ({
        grid: {
            marginTop: '15px'
        },
        chart: {
            minHeight: "60vh"
        }
    });

class TemperatureChart extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.chartData =  {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '12', '14'],
            datasets: [{
                label: 'Temperatures',
                data: [22.0, 22.1, 22.2, 22.1, 22.0, 21.8, 21.9, 21.4, 21.7, 22.0, 21.9, 22.1, 22.3, 22.4]
            }]
        }
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: this.chartData,
            options: {
                fill: false
            }
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.chart}>
                <CardHeader
                    title="Data Overview"
                />
                <CardContent>
                    <canvas ref={this.canvasRef}></canvas>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(TemperatureChart);