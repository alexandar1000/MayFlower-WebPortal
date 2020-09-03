import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useRouteMatch,
    // useParams
  } from "react-router-dom";


class MainView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route path="/control-centre">
                            <h1>Control Centre</h1>
                            <Link to="/">Home</Link>
                        </Route>
                        <Route path="/historical-data">
                            <h1>Historical Data</h1>
                            <Link to="/">Home</Link>
                        </Route>
                        <Route path="/">
                        <h1>Welcome to the Web Platform for the MayFlower Project!</h1>
                        <ul>
                            <li>
                                <Link to="/control-centre">About</Link>
                            </li>
                            <li>
                                <Link to="/historical-data">Topics</Link>
                            </li>
                        </ul>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainView;