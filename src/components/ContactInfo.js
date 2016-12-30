/**
 * Created by siri on 2016-12-05.
 */
import React, {Component} from 'react';

class ContactInfo extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }


    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    render(){

        let getStyle = (isSelect) => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };


        return(
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>{this.props.name} {this.props.phone} {this.props.contactKey}</li>
        );
    }
}

export default ContactInfo;