import React from 'react';
import Chart from 'chart.js';
import { withStyles } from '@material-ui/core/styles';

  const styles = theme => ({
    });

class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {data: {}, chart: null}
    }

    componentDidMount() {
        let myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: this.props.chartData,
            options: this.props.options
        });
        this.setState({
            chart: myChart
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.state.chart != null) {
            let helperChartState = this.state.chart;
            helperChartState.data = nextProps.data;
            this.setState({
                chart: helperChartState
            })
            this.state.chart.update();
        }
    }

    render() {
        return (
            <canvas ref={this.canvasRef}></canvas>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LineChart);