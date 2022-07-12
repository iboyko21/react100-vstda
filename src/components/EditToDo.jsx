import React from "react";



const EditToDo = (props) => 
    <div className="card">
        <div className="card-header" style={{ 
            backgroundColor: props.priority == 1 ? '#F8D7DA' : props.priority == 2 ? '#FFF3CD' : props.priority == 3 ? '#D1E7DD' : 'none' }}>
                <h5 className="card-title text-center">Edit "{props.editname}"</h5>
        </div>
            <div className="card-body">
                <label htmlFor='todo' className='control-label'><b>Description</b></label>
                <textarea id='todo' className='update-todo-text form-input' value={props.name} onChange={props.handleOnChange}></textarea>
                
                <label htmlFor='priority' className='control-label'><b>Priority</b></label><br/>
                <select id='priority' className='update-todo-priority form-select' value={props.priority} onChange={props.handleOnChange}>
                    <option value='none' disabled hidden>Select a Priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                </div>
                <div className='card-footer'>
                    <button className="update-todo btn btn-success" onClick={() => props.update(props.index)}>Update</button>
                </div>
        </div>



export default EditToDo;
