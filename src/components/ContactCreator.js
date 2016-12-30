import React, {Component} from 'react';


class ContactCreator extends Component{
    //input의 값을 컴포넌트의 state로 사용하기.
    constructor(props){
        super(props);
        this.state={
          name:"",
            phone:""
        };
    }

    /*
    * 인풋박스의 값을 변경 할 때 실행 될 handleChange(e) 메소드를 만들었습니다.
    * 여기서 파라미터 e 는 JavaScript 의 Event 인터페이스입니다.
    * e 를 사용함으로서 한 메소드로 여러 인풋박스를
    * 인풋박스의 name 에 따라 처리 할 수 있게됩니다.
    */
    handleChange(e){
        var nextState={};
        //e.target : 이벤트가 일어난곳
        //e.target.name : 이벤트가 일어난 곳의 name 노드
        nextState[e.target.name]=e.target.value;
        //alert(nextState.name +"//"+ nextState.phone);
        //alert(nextState);

        this.setState(nextState);
        console.dir(nextState);
    }

    /* 버튼을 클릭 했을 때 실행 될 메소드
    * handleClick() 에서는 parent 컴포넌트인 Contacts 에서 props 로 받아온 메소드를 실행합니다.
    * 파라미터로 ContactCreator의 state를 줌.
    * 그 후, 인풋 박스 값을 비웁니다.
    */
    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
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

                <button onClick={this.handleClick.bind(this)}>Insert</button>
            </div>
                );
    }
}



export default ContactCreator;