import React, { Component } from "react";

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false }
    }

    handleClick = (e) => this.setState({ clicked: !this.state.clicked })

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? "Clicked!!!" : "Not clicked..." }</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default BrokenClick