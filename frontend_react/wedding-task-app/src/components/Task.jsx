import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/TaskStyle.css";

class Task extends React.Component {
  deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("Deleted the task");
    this.props.history.push("/tasks");
  };

  render() {
    const t = this.props.location.state;
    console.log(this.props);
    return (
      <div>
        <div className="Container">
          <h1>{t.title}</h1>
          <p>Description: {t.body}</p>
          <p>Start Date: {t.start_date}</p>
          <p>Due Date: {t.due_date}</p>
          <hr></hr>
          <p>Contact Name: {t.contact_name}</p>
          <p>Contact Mobile: {t.contact_mobile}</p>
          <p>Contact Email: {t.contact_email}</p>
          <hr></hr>
          <p>Images or Photos: {t.image}</p>
          <p>Extra Information: {t.extra_info}</p>
          <p>Completed: {t.completed}</p>
          <div className="ButtonGroup">
            <button
              className="ContainerButton"
              onClick={this.props.history.goBack}
            >
              Back
            </button>
            <Link to={`/tasks/${t.id}/edit`}>
              <button className="ContainerButton">Edit</button>
            </Link>
            <span onClick={() => this.deleteTask(t.id)}>
              <button className="ContainerButton">Delete</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
