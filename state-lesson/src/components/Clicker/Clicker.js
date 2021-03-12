import React, {Component} from "react"

class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
    }

    randomNumber = (e) => {
        let newNumber = Math.floor(Math.random() * 10) + 1
        console.log(newNumber)
        this.setState({ number: newNumber })
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.number}</h1>
                { this.state.number === 7 
                ? <h2>You Win!</h2> 
                : <button onClick={this.randomNumber}>New Number</button>
                }
            </div>
        )
    }
}

export default Clicker