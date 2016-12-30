import React, {Component} from 'react';
import update from 'react-addons-update';
import ContactInfo from '../components/ContactInfo';
import ContactEditor from '../components/ContactEditor';
import ContactRemover from '../components/ContactRemover';
import ContactCreator from '../components/ContactCreator';
class Contacts extends Component{

    constructor(props){
        super(props);
        this.state={
            contactData:[{name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],

            /*
            * selectedKey : 현재 선택된 컴포넌트의 고유번호.
            * Contact 가 없을 시에는 -1 로 설정.
            * 초기 값 : -1
            */

            //선택기능에 사용
            selectedKey:-1,

            //수정기능에 사용
            selected:{
                name:"",
                phone:""
            }
        };
    }

    //Contact컴포넌트의 state의 contactData에 데이터를 삽입하는 메서드
    _insertContact(name,phone){
        let newState=update(this.state,{contactData:{
            $push:[{"name":name, "phone":phone}]
        }
        });

        this.setState(newState);
    }


    /*
    * <선택된 내용을 인풋박스로 복사하는 기능 구현하기>
    * Contact를 선택하였을 때 prop selected 에 값을 저장 하게하고,
    * 선택을 취소 하였을 때, 값을 공백으로 설정하도록 하였습니다.
    * 그리고 이 prop selected 값을 ContactEditor 에 prop contact로 전달해줍니다.
    */
    _onSelect(key){
        if(key==this.state.selectedKey){
            console.log("key select cancelled");

            this.setState({
                selectedKey:-1,
                selected:{
                    name:"",
                    phone:""
                }
            });
            return;
        }

        this.setState({
            selectedKey:key,
            selected:this.state.contactData[key]

        });

        console.log(key+" is selected");
    }

    _isSelected(key){
        if(this.state.selectedKey==key){
            return true;
        }else{
            return false;
        }
    }

    _removeContact(){
        if(this.state.selectedKey==-1){
            console.log("contact not selected");
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }


    _editContact(name, phone){
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }


    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {/*contactData는 배열객체를 참조하고 있다.
                    새로 contact객체를 만듬. contactData를 복사한다 생각하자.
                    i는 index
                     contactData객체의 length 만큼 <ContactInfo name~~ phone~~ key~~/>가 반복되서 생김.
                    */}
                {this.state.contactData.map((contact, i) => {
                    return (<ContactInfo name={contact.name}
                                         phone={contact.phone}
                                         contactKey={i}
                                         isSelected={this._isSelected.bind(this)(i)}
                                         onSelect={this._onSelect.bind(this)}
                    />);

                })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>

                {/*
                 * •isSelected: parent 컴포넌트에서 Contact가 선택 되어있는지 안되어있는지 알려줌.
                 * •onEdit(): parent 컴포넌트에서 전달 받을 메소드로 서, 데이터 수정 작업을 처리.
                 * •contact: parent 컴포넌트에서 선택된 Contact의 name 과 phone 정보를 갖고있는 객체.
                 */}
                <ContactEditor onEdit={this._editContact.bind(this)}
                                isSelected={(this.state.selectedKey!=-1)}
                                contact={this.state.selected}/>
            </div>
        );
    }
}

export default Contacts;