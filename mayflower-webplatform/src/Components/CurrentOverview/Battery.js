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

class Battery extends React.Component {
    render() {
        const {classes} = this.props;
        return (
             <Card className={classes.root}>
                <CardHeader
                    title="Battery"
                />
                <CardContent>
                    <Typography>
                        78%
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Battery);