import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemperatureChart from './HistoricalOverview/TemperatureChart';
import BatteryChart from './HistoricalOverview/BatteryChart';
import ChartSettings from './HistoricalOverview/ChartSettings';

import {
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

class HistoricalData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chartType: "Temperature"}
        this.handleChartChange = this.handleChartChange.bind(this);
    }

    handleChartChange(type) {
        this.setState({
            chartType: type
        })
    }

    render() {
        const {classes} = this.props;
        let chart = null;
        switch (this.state.chartType) {
            case "Temperature":
                chart = <TemperatureChart></TemperatureChart>
                break;
            case "Battery":
                chart = <BatteryChart></BatteryChart>
                break;
            default:
                chart = <TemperatureChart></TemperatureChart>
                break;
        }

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
                        {chart}
                    </Grid>
                    <Grid item xs={3}>
                        <ChartSettings onChange={this.handleChartChange}></ChartSettings>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(HistoricalData);