import React from 'react'

const FILTER = (props) => {
  return (
    <div className='input-text' >
      <h5 style={{marginLeft:'24px'}}>Filter Your Courses  !!</h5>
      <div className='input-checked'>
        <div className='input'>
          <input type="checkbox" id="done" onClick={(e)=>props.setDone(e.target.checked)} />
          <label for="done">Done</label>
        </div>
        <div className='input'>
          <input type="checkbox" id="undone" onClick={(e)=>props.setUndone(e.target.checked)} />
          <label for="undone">UnDone</label>
        </div>
      </div>
    </div>
  )
}

export default FILTER
