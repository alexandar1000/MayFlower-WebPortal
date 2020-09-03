import React from 'react';
import {
    Link,
  } from "react-router-dom";


class HistoricalData extends React.Component {
    render() {
        return (
            <div>
                <h1>Historical Data</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
    
}
export default HistoricalData;