import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import LandingPage from './LandingPage';
import ControlCentre from './ControlCentre';
import HistoricalData from './HistoricalData';


class MainView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route path="/control-centre">
                            <ControlCentre/>
                        </Route>
                        <Route path="/historical-data">
                            <HistoricalData/>
                        </Route>
                        <Route path="/">
                            <LandingPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainView;