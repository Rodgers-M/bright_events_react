import React from 'react';

const NoResults = () => (
    <div className='ui grid'>
        <div className='eight wide centered column'>
            <div className='ui warning message'>
                <i className='exclamation triangle icon' />
                <div className='header'> No results</div> 
            </div>
        </div>
    </div>
);

export default NoResults;
