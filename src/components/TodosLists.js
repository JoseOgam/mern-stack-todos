import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Todo = (props) => (
  <tr>
    <td>{props.todo.title}</td>
    <td>{props.todo.body}</td>
    <td>{props.todo.completed}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.todoList = this.todoList.bind(this);
    this.state = { todos: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 30 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
