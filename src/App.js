import React from 'react';
import ReactDOM from 'react-dom';
import FileSystem from './FileSystem';
import Sidebar from './Sidebar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoPattern from './Reducers';

const store = createStore(todoPattern)
export default store;

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)


ReactDOM.render(
    <Provider store={store}>
        <div>
            <Sidebar />
            <FileSystem />
        </div>
    </Provider>,
    document.getElementById('app')
);