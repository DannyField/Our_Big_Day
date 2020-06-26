import React from "react";

class Task extends React.Component {
  async componentDidMount() {
    const response = await fetch("http://192.168.1.20:3000");
    console.dir(response);
    const tasks = await response.json();
    console.dir(tasks);
    console.log("task here 2");
    this.setState({ tasks: tasks });
  }

  render() {
    const taskItems = this.state?.tasks;
    console.log("render here");
    console.log(this.state);
    return <h1>Yep</h1>;
  }
}

export default Task;
