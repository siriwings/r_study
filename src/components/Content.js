import React, {Component} from 'react';

class Content extends Component{
    render(){
        return (
            <div>
                <h2>Content</h2>
                <p>{this.props.header}</p>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default Content;