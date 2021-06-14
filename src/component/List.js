import React from 'react'
import '../App.css';
import { ListGroup } from 'react-bootstrap';
import CARD from './CARD';



const List = ({ todos, done, undone }) => {

    return (
        <div >
            <ListGroup as="ul"  >
            <ListGroup.Item as="li" active className='list'>To Do List</ListGroup.Item>

             {done===undone? todos.map((el, index) => <CARD el={el}/>)

              :done? todos.filter((el)=>el.isDone===true).map((el, index) => <CARD el={el}/>)

              :todos.filter((el)=>el.isDone===false).map((el, index) => <CARD el={el}/>)}

            </ListGroup>

        </div>

    )
}

export default List
