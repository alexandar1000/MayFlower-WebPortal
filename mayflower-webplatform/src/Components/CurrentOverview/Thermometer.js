import React from 'react';
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
    render() {
        const {classes} = this.props;
        return (
             <Card className={classes.root}>
                <CardHeader
                    title="Thermometer"
                />
                <CardContent>
                    <Typography>
                        25.3c
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Thermometer);