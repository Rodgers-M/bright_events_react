import { render } from 'react-dom'
import React from 'react'

render(
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'orange', color: 'white'}}
    >
    Hello world
    </h1>,
    document.getElementById('react-container')
)
