import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import LineChart from './LineChart'
import { withStyles } from '@material-ui/core/styles';

import { 
    Card,
    CardContent,
    CardHeader
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
        this.state = {temperaturesData: {}}
    }

    processTemperatures(rawValues) {
        let labelsEntries = [];
        let dataEntries = [];
        for (let i = 0; i < rawValues.length; i++) {
            dataEntries[i] = rawValues[i].temperature;
            labelsEntries[i] = rawValues[i].id;
        }
        return {
            labels: labelsEntries,
            datasets: [{
                label: 'Temperatures',
                data: dataEntries
            }]
        }

    }

    getLatestTemperatures(chartRef) {
        axios.get(`http://localhost:8000/api/v1/temperatures/`)
          .then(res => {
              let tempsChartData = this.processTemperatures(res.data);
              this.setState({
                temperaturesData: tempsChartData
              })
          })
    }

    componentDidMount() {
        this.getLatestTemperatures(this.myChart);
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.chart}>
                <CardHeader
                    title="Data Overview"
                />
                <CardContent>
                    <LineChart data={this.state.temperaturesData}></LineChart>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(TemperatureChart);