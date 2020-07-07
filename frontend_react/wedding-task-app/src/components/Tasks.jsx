import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/List.css";

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
        <div className="List" key={index}>
          <h3>TO DO: {task.title}</h3>
          <Link
            to={{
              pathname: `/tasks/${task.id}`,
              state: task,
            }}
          >
            <button>Show</button>
          </Link>
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
