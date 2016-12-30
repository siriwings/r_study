import React, {Component} from 'react';
import Header from '../components/Header';

import Content from '../components/Content'
import Contacts from '../components/Contacts'
import StateExample from '../components/StateExample'
class App extends Component{
    render(){
        return (
            <div>
                <Header title="Header title" />

                <Content header = {this.props.appheader}
                    body={this.props.appbody}/>
                <StateExample/>
                <Contacts/>
            </div>
        )
    }
}

App.defaultProps={
    appheader: 'Default header'
};

export default App;