import React from "react";



const AddToDo = (props) => 
    <div className='col-sm-4'>
        <div className='card'>
            <div className='card-header'>
                <h4 className='card-title'>Add New Todo</h4>
            </div>
        <div className='card-body'>
    
          <label htmlFor='todo' className='control-label'><b>I want to...</b></label>
          <textarea id='todo' name='todo' className='create-todo-text form-text' value={props.todo} onChange={props.handleOnChange}></textarea>
        
          <label htmlFor='priority' className='control-label'><b>How much of a priority is this?</b></label><br/>
          <select id='priority' name='priority' className='create-todo-priority form-select' value={props.priority} onChange={props.handleOnChange}>
            <option value='none' disabled hidden>Select a Priority</option>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
        </div>

        <div className='card-footer'>
          <div className="d-grid">
            <button type='button' className='btn btn-success create-todo' onClick={props.handleAdd}>Add</button>
          </div>
      </div>
      </div>
    </div>



export default AddToDo;