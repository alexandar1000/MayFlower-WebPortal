import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemperatureChart from './HistoricalOverview/TemperatureChart';
import ChartSettings from './HistoricalOverview/ChartSettings';

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

class HistoricalData extends React.Component {
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
                        <TemperatureChart></TemperatureChart>
                    </Grid>
                    <Grid item xs={3}>
                        <ChartSettings></ChartSettings>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(HistoricalData);