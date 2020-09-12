import React from "react";
import axios from "axios";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      completed: false,
    };
  }
  componentDidMount() {
    axios
      .patch("http://localhost:4000/todos/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          body: response.data.body,
          completed: response.completed,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h3 align="center">Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>body: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            />
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditTodo;
