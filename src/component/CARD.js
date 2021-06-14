import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { done } from'../JS/actions/actions'
import { Button} from 'react-bootstrap';
import EDIT from './EDIT';
import DELETE from './DELETE';
import { useDispatch } from 'react-redux';

const CARD = ({el}) => {
    const dispatch = useDispatch()

    return (
        <div>

            <ListGroup.Item as="li" className='list' >
                <span style={{ textDecoration: el.isDone ? 'line-through' : 'none' }}>{el.text}</span>
                <div className='buttons'>
                    <EDIT el={el} />
                    <DELETE el={el} />
                    <Button style={{ backgroundColor: el.isDone ? 'green' : 'rgb(134, 132, 132)' }} variant="success" className='done' onClick={() => dispatch(done(el.id))} >
                        {el.isDone ? 'isDone' : 'UnDone'}
                    </Button>
                </div>
            </ListGroup.Item>

        </div>
    )
}

export default CARD
