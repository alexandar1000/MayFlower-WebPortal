import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { 
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid
  } from '@material-ui/core';


const styles = theme => ({

  });

class BoatControls extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    title="Controls"
                />
                <CardContent>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className={classes.grid}
                >
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Typography>
                                Forward
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    className={classes.grid}
                >
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Typography>
                                Left
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Typography>
                                Right
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    className={classes.grid}
                >
                    <Grid item xs={5}>
                        <Card className={classes.root}>
                            <Typography>
                                Backwards
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(BoatControls);