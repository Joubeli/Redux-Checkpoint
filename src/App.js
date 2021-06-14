import './App.css';
import { useState } from 'react'
import { addToList } from './JS/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import List from './component/List'
import ADD from './component/ADD';
import FILTER from './component/FILTER';
import HEADER from './component/HEADER';


function App(props) {
  const [value, setValue] = useState('')
  const [done, setDone]=useState('')
  const[undone,setUndone]=useState('')


  const dispatch = useDispatch()
  

  const selectTodos = state => state.toDoList
  const todos = useSelector(selectTodos)


  const add = () => {
    const newadd = {
      id: Math.random(),
      text: value,
      Done: false,
    }
    dispatch(addToList(newadd))
    setValue('')
  }

  

  return (
    <div>
    
    <HEADER/>

    <FILTER setDone={setDone}  setUndone={setUndone}/>
    <ADD add={add} value={value} setValue={setValue}/>
    <List todos={todos} done={done} undone={undone}/>
    </div >
  );
}


export default App;
