import React from 'react';
import  PropTypes from 'prop-types';

const InLineError = ({ message }) => <span style={{color: '#ae5856a'}}>{ message } </span>;

InLineError.propTypes = {
    message: PropTypes.string.isRequired
};

export default InLineError;
