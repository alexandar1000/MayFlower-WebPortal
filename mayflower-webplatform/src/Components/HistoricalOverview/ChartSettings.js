import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
                            value={"Temperature"}
                            >
                            <option value="Temperature">Temperature</option>
                        </NativeSelect>
                        <FormHelperText>Chart Type</FormHelperText>
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ChartSettings);