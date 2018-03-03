import React, { Component } from 'react'
import Landing from './landing'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {name: 'Bright Events'}
    }
    render(){
        return(
            <div className='app'>
            <Landing />
            </div>
        )
    }
}
