import React, { Component } from "react"
import { List } from "../List/List"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import './style.css'
import avatar from '../../img/avatar.jpg'
import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
      { id: 1, text: "Wake up", done: true }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/tasks/")
      .then(res => {
        console.log(res.data);
        if (res.data.length > 0) {

          this.setState(
            {
             tasks: res.data
          })
          }
        }
      )
      .catch(e => {
        console.log(e);
      })
  }

  // state = {
    // tasks: [
    //   { id: 1, name: "Wake up", done: true },
    //   { id: 2, name: "Play bills", done: true },
    //   { id: 3, name: "Read a book", done: false },
    // ],
  //   todoText: "",
  // };

  onChangeInput = (e) => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ tasks, todoText }) => ({
      tasks: [...tasks, { id: tasks.length + 1, name: todoText, done: false }],
      todoText: "",
    }));
  };

  onChangeBox = (item) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((el) =>
        el.id === item.id ? { ...el, done: !el.done } : el
      ),
    }));
  };

  handleDel = item => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(el => el.id !== item.id)
    }));
  };

  render() {
    const { tasks, todoText } = this.state;

    return (
      
        <div className="wrap">
          <div className="logo">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="wrap-task-list">
            <h1>My Tasks</h1>
            <List
              list={tasks}
              onChangeBox={this.onChangeBox}
              handleDel={this.handleDel}
            />
            <form id="form">
              <div className="btn-grp">
                <Input value={todoText} onChange={this.onChangeInput} />
                <Button onClick={this.onSubmitTodo}>Add task</Button>
              </div>
            </form>
          </div>
        </div>
      
    );
  }
}
