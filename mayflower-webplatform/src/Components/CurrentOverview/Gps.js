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

class Gps extends React.Component {
    render() {
        const {classes} = this.props;
        return (
             <Card className={classes.root}>
                <CardHeader
                    title="GPS"
                />
                <CardContent>
                    <Typography>
                        179.00; 120.12; 135
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Gps);