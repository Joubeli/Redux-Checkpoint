import {ADDITION, UPDATE, DELETE, FILTER} from '../constant/typeactions'

const initialState={
    toDoList :[
        {
            id: Math.random(),
            text: 'React Course',
            Done: 'false',
        },


        { 
            id: Math.random(),
            text: 'Router Course',
            Done: 'false',

        },
         
        {
            id: Math.random(),
            text: 'Redux Course',
            Done: 'true',
        },

        {
          id: Math.random(),
          text: 'API Course',
          Done: 'true',
      }


    ]
}

const reducerADE =(state=initialState,{payload,type,id,editText, deleteText, done})=>{
        switch (type) {
            case ADDITION:
              return { ...state, toDoList: [...state.toDoList, payload] };
            case UPDATE:
              return{...state, toDoList: state.toDoList.map((todo)=>  id===todo.id ? {...todo, text: editText}:todo)};
            case DELETE:
              return{...state, toDoList: state.toDoList.filter((del)=>  deleteText!==del.text )};
            case FILTER:
              return{ ...state, toDoList: state.toDoList.filter((fil) => fil.Done==done)
                 
            }
        default: {return state}

    }     
    
  };


export default reducerADE