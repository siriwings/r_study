/**
 * Created by siri on 2016-12-05.
 */
import React, {Component} from 'react';

class ContactEditor extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            phone:""
        };

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
    }


    handleChange(e) {
        var nextState = {};
        //e.target : 이벤트가 일어난곳
        //e.target.name : 이벤트가 일어난 곳의 name 노드
        nextState[e.target.name] = e.target.value;
        //alert(nextState.name +"//"+ nextState.phone);
        //alert(nextState);

        this.setState(nextState);
        console.dir(nextState);
    }

    handleClick(){
        if(!this.props.isSelected){
            console.log("contact not selected");
            return;
        }
        this.props.onEdit(this.state.name,this.state.phone);
    }

    render(){
        return (
            <div>
                <input type="text"
                       name="name"
                       placeholder="name"
                       value={this.state.name}
                       onChange={this.handleChange.bind(this)}/>

                <input type="text"
                       name="phone"
                       placeholder="phone"
                       value={this.state.phone}
                       onChange={this.handleChange.bind(this)}/>

                <button onClick={this.handleClick.bind(this)}>Edit</button>
            </div>
        );
    }
}

export default ContactEditor;