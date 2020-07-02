import React from "react";
import { Link } from "react-router-dom";

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
        <h1>Task Name: {t.title}</h1>
        <p>Description: {t.body}</p>
        <p>Start Date: {t.start_date}</p>
        <p>Due Date: {t.due_date}</p>
        <hr></hr>
        <h1>Contact Name: {t.contact_name}</h1>
        <p>Contact Mobile: {t.contact_mobile}</p>
        <p>Contact Email: {t.contact_email}</p>
        <hr></hr>
        <p>Images or Photos: {t.image}</p>
        <p>Extra Information: {t.extra_info}</p>
        <p>Completed: {t.completed}</p>
        <button onClick={this.props.history.goBack}>Back</button>
        <Link to={`/tasks/${t.id}/edit`}>
          <button>Edit</button>
        </Link>
        <span onClick={() => this.deleteTask(t.id)}>
          <button>Delete</button>
        </span>
      </div>
    );
  }
}

export default Task;
