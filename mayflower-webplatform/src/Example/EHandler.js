import React from 'react';

class EHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        const isToggled = this.state.isToggleOn;
        let label;
        if (isToggled) {
            label = <label>Si</label>
        } else {
            label = <label>Non</label>
        }
        return (
            <div>
                {label}
                <button onClick={this.clickHandler}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default EHandler;