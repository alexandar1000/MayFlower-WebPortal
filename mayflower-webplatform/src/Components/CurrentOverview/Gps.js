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
                    53.384; -1.459; 54
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Gps);