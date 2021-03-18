import React, {Component} from "react";
import "./Die.css"

class Die extends Component {
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"]
    }
    

    render() {
        return(
            <div className="Die">
                <i className={`fas fa-dice-${this.props.faces[this.props.value]}`}></i>
            </div>
        )
    }
}

export default Die;