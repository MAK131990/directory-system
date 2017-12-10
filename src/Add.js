import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {folderName:''}
    }
    cancelledClick(){
        this.setState({folderName:''})
    }
    textValueChanged(event){
        this.setState({folderName:event.target.value})
    }
    addClick(){
        let folderName = this.state.folderName
        this.props.add(folderName);
        this.setState({folderName:''});
    }
    backClick(){
        this.props.back()
    }
    render(){
        return(
            <div>
            {/* <input type='button' className='button' value='+' /> */}
            <div className='AddFolder'>
                <input type='text' placeholder='Add Folder' value={this.state.folderName} 
                  className='FolderText'                          onChange={this.textValueChanged.bind(this)}/><br/>
                <input className='button' type='button'  value='+'  onClick={this.addClick.bind(this)}/>
                <input className='button' type='button'  value='X' onClick={this.cancelledClick.bind(this)}/>
                <input className='button' type='button'  value='<-' onClick={this.backClick.bind(this)}/>
            </div>
            </div>
        )
    }
}