import {ADDITION, UPDATE, DELETE, DONE} from '../constant/typeactions'

const initialState={
    toDoList :[
        {
            id: Math.random(),
            text: 'React Course',
            isDone: true
        },


        { 
            id: Math.random(),
            text: 'Router Course',
            isDone: true

        },
         
        {
            id: Math.random(),
            text: 'Redux Course',
            isDone: true
        },

        {
          id: Math.random(),
          text: 'API Course',
          isDone: true
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
            case DONE :
              return{
                  ...state, 
                  toDoList: state.toDoList.map((todo) => 
                      (todo.id === payload) ? {...todo, isDone : !todo.isDone} : todo        
                  )
              }
        default: {return state}

    }     
    
  };


export default reducerADE