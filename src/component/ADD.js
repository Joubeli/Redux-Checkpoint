import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import '../App.css'
const ADD = (props) => {
   
    return (
        <div>
            <InputGroup size="sm" className='list'>
                <InputGroup.Text id="inputGroup-sizing-sm">Add Courses to Submit</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={props.value} type='text' onChange={(e) => props.setValue(e.target.value)} />
                <Button variant="primary"  onClick={() => props.add()}>ADD</Button>
            </InputGroup>
        </div>
    )
}

export default ADD
