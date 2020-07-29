import React from "react";
import axios from "axios";

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      completed: false,
    };
  }
  handletitle = (e) => {
    this.setState(() => ({
      title: e.target.value,
    }));
  };
  handleResponsible = (e) => {
    this.setState(() => ({
      body: e.target.value,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`form submitted`);
    console.log(`todo title is ${this.state.title}`);
    console.log(`todos body is ${this.state.body}`);
    console.log(`the state of task is ${this.state.completed}`);

    const newTodo = {
      title: this.state.title,
      body: this.state.body,
      completed: this.state.completed,
    };

    const resp = await axios.post(`http://localhost:4000/todos`, newTodo);
    console.log(resp.data);

    this.setState(() => ({
      title: "",
      body: "",
      completed: false,
    }));
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>title: </label>
            <input
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>body: </label>

            <textarea
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateTodo;
