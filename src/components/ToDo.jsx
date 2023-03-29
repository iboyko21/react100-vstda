import React from "react";

const ToDo = (props) => 
    !props.isComplete ? 
    <li className='todo success' 
        style={{ backgroundColor: props.priority == 1 ? '#F8D7DA' : props.priority == 2 ? '#FFF3CD' : '#D1E7DD' }}>
        <div className='todo-name'>
            <span className="todo-title" onClick={() => props.complete(props.index)}>{props.name}</span>
                <span className='todo-icons'>
                    <a onClick={() => props.edit(props.index)} className='edit-todo fa-solid fa-pen-to-square text-success'></a>
                    <a onClick={() => props.remove(props.index)} className='delete-todo fa-solid fa-trash text-danger'></a>
                </span>
        </div>
    </li>
    :
    <li className='todo complete'
        style={{ backgroundColor: '#F7F7F7' }}>
        <div className='todo-name'> 
            <span className="todo-title" onClick={() => props.complete(props.index)}>{props.name}</span>
                <span className='todo-icons'>
                    <a onClick={() => props.edit(props.index)} className='edit-todo fa-solid fa-pen-to-square text-success'></a>
                    <a onClick={() => props.remove(props.index)} className='delete-todo fa-solid fa-trash text-danger'></a>
                </span>
        </div>
    </li>

export default ToDo;