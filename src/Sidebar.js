import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div ref='sidebar' id='sidebar'>Hello World</div>
        )
    }
}