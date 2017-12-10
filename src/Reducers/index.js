import { combineReducers } from 'redux'
import updatePath from './updatePath';
import updateDirectory from './updateDirectory';

const todoPattern = combineReducers({
  updatePath,
  updateDirectory
})

export default todoPattern