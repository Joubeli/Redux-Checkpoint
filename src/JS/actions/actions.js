import {ADDITION, UPDATE, DELETE, DONE} from '../constant/typeactions'

export const addToList=(payload)=>{

    return{
        type:ADDITION,
        payload:payload,
        
    }
}

export const updateToList=({id, editText})=>{
    return{
        type:UPDATE,
        id:id,
        editText:editText,
    }
}

export const deleteToList=({deleteText})=>{
    return{
        type:DELETE,
        deleteText:deleteText,
    }
}


export const done = (payload) => {
    return {
      type: DONE,
      payload
    };
  };



