import React, {Component} from "react";

class Timer extends Component {
    state = { }
    render(){
        return(
            <div className="App">
                <h2>
                {this.props.date.toLocaleTimeString()}
                </h2>
            </div>
        )
    }
}

export default Timer;