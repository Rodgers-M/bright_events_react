/*color #ae5856a */        
import React from 'react';
import  PropTypes from 'prop-types';

const InLineError = ({ message }) => <span style={{color: '#ffc6b3',letterSpacing : '1px', fontWeight : 'bold'}}>{ message } </span>;

InLineError.propTypes = {
    message: PropTypes.string.isRequired
};

export default InLineError;
