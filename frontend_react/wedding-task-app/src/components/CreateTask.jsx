import React from "react";

class CreateTask extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: this.state }),
    });
    this.props.history.push("/tasks");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Task Name</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />
          <label htmlFor="body">Body Description</label>
          <textarea
            name="body"
            id="body"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="task_date">Start Date</label>
          <input
            type="text"
            name="task_date"
            id="task_date"
            onChange={this.onInputChange}
          />
          <label htmlFor="due_date">Due Date</label>
          <input
            type="text"
            name="due_date"
            id="due_date"
            onChange={this.onInputChange}
          />
          <hr></hr>
          <label htmlFor="title">Contact Name</label>
          <input
            type="text"
            name="contact_name"
            id="contact_name"
            onChange={this.onInputChange}
          />
          <label htmlFor="body">Contact Email</label>
          <textarea
            name="contact_email"
            id="contact_email"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="start_date">Contact Mobile</label>
          <input
            type="text"
            name="contact_mobile"
            id="contact_mobile"
            onChange={this.onInputChange}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />
          <label htmlFor="extra_info">Extra Information</label>
          <input
            type="text"
            name="extra_info"
            id="extra_info"
            onChange={this.onInputChange}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateTask;
