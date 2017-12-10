import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import store from './App';
import { setUpdatedPath, setUpdatedDirectory } from './Actions';
import Add from './Add';

export default class FileSystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directory: {
                root:
                {
                }
            },
            path: 'root'
        }
    }
    folderClicked(event,d) {
        let path = this.state.path + ',' + d
        this.setState({ path: path })
    }
    back() {
        let y = this.state.path;
        y = y.split(',');
        if (y.length > 1) {
            y.pop();
        }
        this.setState({ path: y.join(',') })
    }
    renderCurrentLevel() {
        let path = this.state.path;
        let pathArray = path.split(',');
        let folderDivs;
        let folders = this.state.directory;
        for (let i = 0; i < pathArray.length; i++) {
            folders = folders[pathArray[i]]
        }
        if (folders) {
            folderDivs = Object.keys(folders).map((d, index) => <div className='row' key={index}
                onDoubleClick={this.folderClicked.bind(this,event,d)}><img src='./folder.png' /> {d}</div>)
            //store.dispatch(setUpdatedPath(path));
        }
        return folderDivs;
    }
    newFolderAdded(folderName) {
        let path = this.state.path;
        let pathArray = path.split(',');
        let folders = {};//= this.state.directory;
        this.set(path, folderName)
        this.forceUpdate()
    }
    set(path, value) {
        var schema = this.state.directory;  // a moving reference to internal objects within obj
        var pList = path.split(',');
        var len = pList.length;
        for (var i = 0; i < len - 1; i++) {
            var elem = pList[i];
            if (!schema[elem]) schema[elem] = {}
            schema = schema[elem];
        }

        schema[pList[len - 1]][value] = {};
        //return schema;
    }



    render() {
        let y = this.state.path
        y = (y.split(',').join(' > '));
        let l = this.renderCurrentLevel();
        return (
            <div id='main'>
                <div>PWD : {y}</div><hr />
                <div>
                    <Add add={this.newFolderAdded.bind(this)} back={this.back.bind(this)} />
                </div>
                {l}
            </div>
        )
    }
}