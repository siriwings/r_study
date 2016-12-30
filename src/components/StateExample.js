/**
 * Created by siri on 2016-12-05.
 */
import React, {Component} from 'react';

class StateExample extends Component{
    constructor(props){
        super(props);

        this.state = {
            header:"StateExample Header Initial State",
            content: "StateExample Content Initial State"
        };
    }

    updateHeader(text){
        this.setState({
            header:"StateExample Header has changed."
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this.updateHeader.bind(this)}>LOVE</button>
            </div>
        );
    }
}

export default StateExample;