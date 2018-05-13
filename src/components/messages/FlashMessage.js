import React from 'react';
import  PropTypes from 'prop-types';

class FlashMessage extends React.Component {

    onClick = () =>{
        this.props.deleteFlashMessage(this.props.message.id);
    }
    render(){
        const { text, type} = this.props.message;
        const  classname = `ui ${type} message`;
        return(
            <div className={classname}>
                <i onClick={this.onClick} className='close icon' />
                <p>{text}</p>
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message : PropTypes.shape({
        id : PropTypes.string,
        text : PropTypes.string,
        type : PropTypes.string
    }).isRequired,
    deleteFlashMessage : PropTypes.func.isRequired
};

export default FlashMessage;
