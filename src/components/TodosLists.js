import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{/* {this.todoList()} */}</tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
