import React, { Component } from 'react';
import ToDo from './components/ToDo';
import AddToDo from './components/AddToDo';
import EditToDo from './components/EditToDo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        todo: '',
        priority: 'none',
        editEnabled: false,
        isComplete: false,
      todos : []
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  handleOnChange(event) {
    this.setState({
        [event.target.id] : event.target.value
  })
}

  handleAdd(){
    let object = {
      todo: this.state.todo,
      priority: this.state.priority,
      editEnabled: this.state.editEnabled,
      isComplete: this.state.isComplete
    }
    this.state.todos.push(object);
    this.state.todos.sort((a, b) => (a.priority > b.priority ? 1 : -1));
    this.setState({
      todo: '',
      priority: 'none',
    });
  }

  markComplete(i){
    let items = [...this.state.todos];
    let item = items[i];
    item.isComplete = !item.isComplete;
    this.setState({
      todos: items
    });
  }

  handleEdit(i){
    let items = [...this.state.todos];
    let item = items[i];
    item.editEnabled = true;
    this.setState({
      todos: items
    });
  }

  handleUpdate(i){
    let items = [...this.state.todos];
    let item = items[i];
    item.editEnabled = false;
    item.isComplete = false;
    item.todo = this.state.todo;
    item.priority = this.state.priority;
    
    this.setState({
      todo: '',
      priority: 'none',
      todos: items.sort((a, b) => (a.priority > b.priority ? 1 : -1))
    });
    
  }

  handleRemove(i){
    let items = [...this.state.todos]; // make a copy of the array, to not change state directly
      items.splice(i, 1);
      this.setState({
        todos : items
      });
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
          <AddToDo 
                 todo={this.state.todo}
                 priority={this.state.priority}
                 handleOnChange={this.handleOnChange}
                 handleAdd={this.handleAdd} 
                 />

            <div className='col-sm-8'>
              <div className='card '>
                <div className='card-header'>
                  <h4 className='card-title'>View Todos</h4>
                </div>

                <div className='todo-list card-body'>
                {this.state.todos.length == 0
                  ? <p><b>Welcome to Very Simple Todo App</b><br/>
                    Get started now by adding a new todo on the left</p>
                  : this.state.todos.map((todo, i) => (
                    todo.editEnabled ? 
                        <EditToDo 
                        key={i}
                        index={i}
                        name={this.state.todo}
                        editname={this.state.todos[i].todo}
                        priority={this.state.priority}
                        handleOnChange={this.handleOnChange}
                        update={this.handleUpdate}
                        />
                          :
                          <ToDo
                          key={i}
                          index={i}
                          name={todo.todo}
                          priority={todo.priority}
                          editEnabled={todo.editEnabled}
                          isComplete={todo.isComplete}
                          edit={this.handleEdit}
                          remove={this.handleRemove}
                          complete={this.markComplete}
                          />
          ))
        }
                </div>
              </div>
            </div>

            </div>
          </div>
    );
  }
}                 



export default App;
