import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo/AddTodo.js'
import styles from './Main.style.js'
import TodoItem from '../components/TodoItems/TodoItem.js'
import { addTask,completedTask, deleteTask } from '../redux/actions.js'

export class Main extends Component {
  

  render() {
    console.log("redux TaskItems" ,this.props.taskItems);
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
            <h1 style={styles.title}>Todo List</h1>
            <div style={styles.inputWrapper}>
              <AddTodo addTodo={(todo) =>{this.props.addTodo(todo)}}/>
              <hr style={styles.sperator}/>
            </div>
              {this.props.taskItems.map((task) =>{
                  return(
                    <TodoItem task={task} deleteTodo={(task) => this.props.deleteTodo(task)} completedTodo={(task) => this.props.completedTodo(task)}/>
                  )
              })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    taskItems: state.taskItems
})

const mapDispatchToProps =(dispatch)=> ({
  addTodo: (todo) => dispatch(addTask(todo)),
  deleteTodo: (task) => dispatch(deleteTask(task)),
  completedTodo: (task) => dispatch(completedTask(task))

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
