import React, {Component} from "react";
import Die from "../Die/Die"
import "./DieRoll.css"

class DieRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dieOneValue: 1,
            dieTwoValue: 1,
            rolling: false,
        }
    }

    roll = (e) => {
        this.setState({
            dieOneValue: Math.floor(Math.random() * 6),
            dieTwoValue: Math.floor(Math.random() * 6),
            rolling: true
        })

        // Wait two seconds, then set rolling to false
        setTimeout(() => {
            this.setState({ rolling: false})

        }, 2000)
    }

    render() {
        return (
            <div className="DieRoll">
                <div className="dice">
                    <Die value={this.state.dieOneValue}/>
                    <Die value={this.state.dieTwoValue}/>
                </div>
                
                <button id="roll-dice" onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
    
        )
    }
}

export default DieRoll;