import {ADDITION, UPDATE, DELETE, FILTER} from '../constant/typeactions'

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


export const filterToList=({done})=>{
    return{
        type:FILTER,
        done:done,
    }
}



