import React, { Component } from "react"
import { List } from "../List/List"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import './style.css'
import avatar from '../../img/avatar.jpg'

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Wake up", done: true },
      { id: 2, name: "Play bills", done: true },
      { id: 3, name: "Read a book", done: false }
    ],
    todoText: ""
  };

  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false }],
      todoText: ""
    }));
  };

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  // handleDel = item => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.filter(el => el.id !== item.id)
  //   }));
  // };

  render() {
    const { todos, todoText } = this.state;

    return (
      <>
        <div className="wrap">
          <div className="logo">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="wrap-task-list">
            <h1>My Tasks</h1>
            <List
              list={todos}
              onChangeBox={this.onChangeBox}
              // handleDel={this.handleDel}
            />
            <form id="form">
              <div className="btn-grp">
                <Input value={todoText} onChange={this.onChangeInput} />
                <Button onClick={this.onSubmitTodo}>Add task</Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
