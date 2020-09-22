import React from 'react';
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

class BatteryChart extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {batteryData: {}}
    }

    processCharges(rawValues) {
        let labelsEntries = [];
        let dataEntries = [];
        for (let i = 0; i < rawValues.length; i++) {
            dataEntries[i] = rawValues[i].percentage;
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

    getLatestCharges(chartRef) {
        axios.get(`http://localhost:8000/api/v1/battery/`)
          .then(res => {
              console.log(res);
              let chargesChartData = this.processCharges(res.data);
              this.setState({
                batteryData: chargesChartData
              })
          })
    }

    componentDidMount() {
        this.getLatestCharges(this.myChart);
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.chart}>
                <CardHeader
                    title="Data Overview"
                />
                <CardContent>
                    <LineChart data={this.state.batteryData}></LineChart>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(BatteryChart);