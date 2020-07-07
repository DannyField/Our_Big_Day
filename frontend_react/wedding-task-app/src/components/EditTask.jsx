import React from "react";

class EditTask extends React.Component {
  state = {
    title: "",
    body: "",
    task_date: "",
    due_date: "",
    contact_name: "",
    contact_email: "",
    contact_mobile: "",
    image: "",
    extra_info: "",
    completed: "",
    loading: true,
    id: this.props.match.params.id,
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const {
      id,
      title,
      body,
      task_date,
      due_date,
      contact_name,
      contact_email,
      contact_mobile,
      image,
      extra_info,
      completed,
    } = this.state;
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        task_date,
        due_date,
        contact_name,
        contact_email,
        contact_mobile,
        image,
        extra_info,
        completed,
      }),
    });
    this.props.history.push("/tasks");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`http://localhost:3000/tasks/${id}`);
    const {
      title,
      body,
      task_date,
      due_date,
      contact_name,
      contact_email,
      contact_mobile,
      image,
      extra_info,
      completed,
    } = await response.json();
    this.setState({
      title,
      body,
      task_date,
      due_date,
      contact_name,
      contact_email,
      contact_mobile,
      image,
      extra_info,
      completed,
      loading: false,
    });
  }

  render() {
    const {
      title,
      body,
      task_date,
      due_date,
      contact_name,
      contact_email,
      contact_mobile,
      image,
      extra_info,
      completed,
      loading,
    } = this.state;
    return (
      !loading && (
        <div className="container">
          <h1>Edit a Task</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.onInputChange}
              value={title}
            />
            <label htmlFor="body">Description</label>
            <textarea
              type="text"
              name="body"
              id="body"
              onChange={this.onInputChange}
              value={body}
            ></textarea>
            <label htmlFor="task_date">Start Date</label>
            <input
              type="date"
              name="task_date"
              id="task_date"
              onChange={this.onInputChange}
              value={task_date}
            />
            <label htmlFor="due_date">Due Date</label>
            <input
              type="date"
              name="due_date"
              id="due_date"
              onChange={this.onInputChange}
              value={due_date}
            />
            <label htmlFor="contact_mobile">Contact Name</label>
            <input
              name="contact_name"
              id="contact_name"
              onChange={this.onInputChange}
              value={contact_name}
            ></input>
            <label htmlFor="contact_email">Contact Email</label>
            <input
              name="contact_email"
              id="contact_email"
              onChange={this.onInputChange}
              value={contact_email}
            ></input>
            <label htmlFor="contact_mobile">Contact Mobile</label>
            <input
              name="contact_mobile"
              id="contact_mobile"
              onChange={this.onInputChange}
              value={contact_mobile}
            ></input>
            <label htmlFor="image">image</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={this.onInputChange}
              value={image}
            />
            <label htmlFor="extra_info">Extra Info</label>
            <textarea
              name="extra_info"
              id="extra_info"
              onChange={this.onInputChange}
              value={extra_info}
            ></textarea>
            <label htmlFor="extra_info">Completed</label>
            <input
              name="completed"
              id="completed"
              onChange={this.onInputChange}
              value={completed}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    );
  }
}

export default EditTask;

// title, body, task_date, due_date, contact_name, contact_email, contact_mobile, image, extra_info, completed
