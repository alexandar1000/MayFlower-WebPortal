import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

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
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
        selectEmpty: {
        marginTop: theme.spacing(2),
        },
    });

class ChartSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedChart: "Temperature"}
    }

    handleChartChange= (event) => {
        let newChartType = event.target.value
        this.setState({
          selectedChart: newChartType,
        });
        this.props.onChange(newChartType)
    }

    render() {
        const {classes} = this.props;
        return (
            <Card>
                <CardHeader
                    title="Settings"
                />
                <CardContent>
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                            value={this.state.selectedChart}
                            onChange={this.handleChartChange}
                            >
                            <option value="Temperature">Temperature</option>
                            <option value="Battery">Battery</option>
                        </NativeSelect>
                        <FormHelperText>Chart Type</FormHelperText>
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ChartSettings);