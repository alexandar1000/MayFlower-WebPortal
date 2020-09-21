import React from 'react';
import axios from 'axios';
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
    constructor(props) {
        super(props);
        this.state = {
            percentage: 70,
            timer: null
        }
        this.getCurrentBattery = this.getCurrentBattery.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.getCurrentBattery, 1000);
    }

    componentWillUnmount() {
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    async getCurrentBattery(){
        const api = axios.create();
        await api.get(`http://localhost:8000/api/v1/battery/current/`)
            .then(res =>{
                this.setState({
                    percentage: res.data.percentage
                }, ()=>{
                    console.log(this.state.percentage);
                }).catch(err =>{
                    console.log(err);
                });
            });
    }


    render() {
        const {classes} = this.props;
        const {percentage} = this.state;

        return (
             <Card className={classes.root}>
                <CardHeader
                    title="Battery"
                />
                <CardContent>
                    <Typography>
                        {percentage + " %"}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Battery);