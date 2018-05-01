import React from 'react';
import  PropTypes from 'prop-types';

class FlashMessage extends React.Component {

    onClick = () =>{
        this.props.deleteFlashMessage(this.props.message.id);
    }
    render(){
        const { text, type} = this.props.message;
        let  classname = `ui ${type} message`;
        return(
            <div className={classname}>
                <i onClick={this.onClick} className='close icon'></i>
                <p>{text}</p>
            </div>
        )
    }
}

FlashMessage.propTypes = {
    message : PropTypes.object.isRequired,
    deleteFlashMessage : PropTypes.func.isRequired
}

export default FlashMessage;
