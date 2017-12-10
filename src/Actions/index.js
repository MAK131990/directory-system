export function setUpdatedPath(path){
  // console.log(path)
    return {
        type: 'UPDATE_PATH',
        path:path
      }
    }

export function setUpdatedDirectory(directory){
        return {
            type: 'UPDATE_DIRECTORY',
            directory:directory
          }
        }