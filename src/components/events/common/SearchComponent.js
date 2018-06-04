import React from 'react';
import PropTypes from 'prop-types';

function SearchComponent(props) {
    return (
        <div className='ui grid'>
            <div className='six wide centered column'>
                <div className='fluid ui icon input'>
                    <input
                        onChange={props.onChange}
                        type='text' name='search' placeholder='search...'
                    />
                    <i className='search icon' />
                </div>
            </div>
        </div>
    );
}

SearchComponent.propTypes = {
    onChange : PropTypes.func.isRequired
};

export default SearchComponent;
