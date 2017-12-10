const updatePath = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_PATH':
          return action.path
        default:
          return state
      }
    }
    
    export default updatePath