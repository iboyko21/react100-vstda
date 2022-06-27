import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1 className='text-light'>Very Simple Todo App</h1>
          <p className='text-light'>Track all of the things</p>
          <hr className='text-light' />
        </div>

        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
            <div className='card-header'>
              Add New Todo
            </div>
            <div className='card-body'>
            
                  <label htmlFor='todo' className='control-label'><b>I want to...</b></label>
                  <textarea id='todo' name='todo' className='create-todo-text form-text' value={this.state.amountDue} onChange={this.handleOnChange}></textarea>
                

                  <label htmlFor='priority' className='control-label'><b>How much of a priority is this?</b></label><br/>
                  <select id='priority' name='priority' className='create-todo-priority form-select' value={this.state.priority} onChange={this.handleOnChange}>
                    <option value='none' selected disabled hidden>Select a Priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                  </select>
                </div>
              <div className='card-footer'>

                  <div className="d-grid gap-2">
                    <button type='button' className='btn btn-success' onClick={this.handleOnClick}>Add</button>
                  </div>
                  
              </div>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='card '>
                <div className='card-header'>
                  View Todos
                </div>
                <div className='card-body bg-info'>
                  <b>Welcome to Very Simple Todo App!</b><br />
                  Get started now by adding a new todo on the left.
                </div>
              </div>
            </div>

            </div>
          </div>
    );
  }
}

export default App;
