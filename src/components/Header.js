import React, {Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div>
                <h3>I'm a Header.</h3>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}
export default Header;