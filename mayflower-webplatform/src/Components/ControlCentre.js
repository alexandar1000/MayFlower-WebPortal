import React from 'react';
import {
    Link,
  } from "react-router-dom";


class ControlCentre extends React.Component {

    render() {
        return (
            <div>
                <h1>Control Centre</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
    
}

export default ControlCentre;