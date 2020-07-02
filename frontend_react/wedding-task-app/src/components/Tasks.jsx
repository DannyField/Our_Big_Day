import React from "react";
import { Link } from "react-router-dom";

class Tasks extends React.Component {
  state = { tasks: [] };

  getTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    this.setState({ tasks: data });
  };

  renderTasks = () => {
    return this.state.tasks.map((task, index) => {
      return (
        <div key={index}>
          <h3>To do: {task.name}</h3>
          <p>Info About The Task: {task.body}</p>
          <p>Start Date: {task.start_date}</p>
          <p>Due Date: {task.due_date}</p>
          <Link
            to={{
              pathname: `/tasks/${task.id}`,
              state: task,
            }}
          >
            <button>Show</button>
          </Link>
          <hr />
        </div>
      );
    });
  };

  async componentDidMount() {
    this.getTasks();
  }

  render() {
    return <div>{this.renderTasks()}</div>;
  }
}

export default Tasks;
