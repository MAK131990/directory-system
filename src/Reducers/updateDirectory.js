const updateDirectory = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_DIRECTORY':
          return action.directory
        default:
          return state
      }
    }
    
    export default updateDirectory