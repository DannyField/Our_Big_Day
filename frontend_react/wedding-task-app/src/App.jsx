import React from "react";
import "./App.css";

const onFormSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const newTask = {
    task: {
      title: form[0].value,
      body: form[1].value,
      task_date: form[2].value,
      due_date: form[3].value,
      contact_name: form[4].value,
      contact_email: form[5].value,
      contact_mobile: form[6].value,
      image: form[7].value,
      extra_info: form[8].value,
      completed: form[9].value,
    },
  };
  try {
    const response = await fetch("http://192.168.1.20:8080/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <h1>TASKS</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="body">Body Description</label>
          <input type="text" name="body" id="body" />
        </div>
        <div>
          <label htmlFor="task_date">Date Started</label>
          <input type="text" name="task_date" id="task_date" />
        </div>
        <div>
          <label htmlFor="due_date">Due Date</label>
          <input type="text" name="due_date" id="due_date" />
        </div>
        <hr></hr>
        <h1>Contact Details</h1>
        <div>
          <label htmlFor="contact_name">Contact Name</label>
          <input type="text" name="contact_name" id="contact_name" />
        </div>
        <div>
          <label htmlFor="contact_email">Email Address</label>
          <input type="text" name="contact_email" id="contact_email" />
        </div>
        <div>
          <label htmlFor="contact_mobile">Mobile Number</label>
          <input type="text" name="contact_mobile" id="contact_mobile" />
        </div>
        <hr></hr>
        <h1>Extra Information</h1>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" />
        </div>
        <div>
          <label htmlFor="extra_info">Extra Information</label>
          <input type="text" name="extra_info" id="extra_info" />
        </div>
        <hr></hr>
        <div>
          <label htmlFor="completed">Completed</label>
          <input type="text" name="completed" id="completed" />
        </div>
        <div>
          <input type="submit" value="Submit Task" />
        </div>
      </form>
    </>
  );
}

export default App;
