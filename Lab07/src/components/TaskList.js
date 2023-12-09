// TaskList.js

import React, { Component } from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      subtaskTitleInput: "",
      subtaskDescriptionInput: "",
      selectedTaskIndex: null,

    };
  }

  updateInput = (inputKey, value) => {
    this.setState({
      [inputKey]: value,
    });
  };

  addTask = (task) => {
    if (task.title !== "") {
      const newTask = {
        title: task.title,
        description: task.description,
        subtasks: [], // Initialize subtasks array

      };

      this.setState((prevState) => ({
        list: [...prevState.list, newTask],
      }));
    }
  };

  deleteTask = (index) => {
    const updatedList = [...this.state.list];
    updatedList.splice(index, 1);

    this.setState({
      list: updatedList,
    });
  };

  editTask = (index) => {
    const updatedList = [...this.state.list];
    const editedTitle = prompt("Edit the title:", updatedList[index].title);
    const editedDescription = prompt("Edit the description:", updatedList[index].description);

    if (editedTitle !== null && editedTitle.trim() !== "") {
      updatedList[index].title = editedTitle;
      updatedList[index].description = editedDescription;

      this.setState({
        list: updatedList,
      });
    }
  };
  addSubtask = (taskIndex, subtask) => {
    const updatedTasks = [...this.state.list];
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      subtasks: updatedTasks[taskIndex].subtasks
        ? [...updatedTasks[taskIndex].subtasks, subtask]
        : [subtask],
    };
    this.setState({
      list: updatedTasks,
      subtaskTitleInput: "",
      subtaskDescriptionInput: "",
    });
  };

  deleteSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...this.state.list];
    updatedTasks[taskIndex].subtasks.splice(subtaskIndex, 1);

    this.setState({
      list: updatedTasks,
    });
  };

  editSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...this.state.list];
    const selectedSubtask = updatedTasks[taskIndex].subtasks[subtaskIndex];

    const editedTitle = prompt("Edit the subtask title:", selectedSubtask.title);
    const editedDescription = prompt("Edit the subtask description:", selectedSubtask.description);

    if (editedTitle !== null && editedTitle.trim() !== "") {
      updatedTasks[taskIndex].subtasks[subtaskIndex].title = editedTitle;
      updatedTasks[taskIndex].subtasks[subtaskIndex].description = editedDescription;

      this.setState({
        list: updatedTasks,
      });
    }
  };

  toggleCheckbox = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...this.state.list];
    updatedTasks[taskIndex].subtasks[subtaskIndex].isChecked = !updatedTasks[taskIndex].subtasks[subtaskIndex].isChecked;

    this.setState({
      list: updatedTasks,
    });
  };
  toggleSelectedTask = (index) => {
    this.setState((prevState) => ({
      selectedTaskIndex: prevState.selectedTaskIndex === index ? null : index,
    }));
  };

      

      

  render() {
    return (
      <div className="container">
        <NewTaskForm addTask={this.addTask} />
        <ul className="list-group">
          {this.state.list.map((task, index) => (
            <Task
              key={index}
              task={task}
              deleteTask={() => this.deleteTask(index)}
              editTask={() => this.editTask(index)}
              addSubtask={(subtask) => this.addSubtask(index, subtask)}
              deleteSubtask={(subtaskIndex) => this.deleteSubtask(index, subtaskIndex)}
              editSubtask={(subtaskIndex) => this.editSubtask(index, subtaskIndex)}
              toggleCheckbox={(subtaskIndex) => this.toggleCheckbox(index, subtaskIndex)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
