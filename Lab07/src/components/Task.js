// Task.js

import React, { useState } from "react";
import Subtask from "./Subtask";

const Task = ({ task, deleteTask, editTask, addSubtask, deleteSubtask, editSubtask, toggleCheckbox, }) => {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [subtaskTitleInput, setSubtaskTitleInput] = useState("");
  const [subtaskDescriptionInput, setSubtaskDescriptionInput] = useState("");
  const handleAddSubtask = () => {
    addSubtask({
      title: subtaskTitleInput,
      description: subtaskDescriptionInput,
    });

    // Reset subtask input fields
    setSubtaskTitleInput("");
    setSubtaskDescriptionInput("");
  };

  return (
    <li className="list-group-item">
      <div>
        <div
        onClick={() => setShowSubtasks(!showSubtasks)}
        style={{
          display: "flex",
        justifyContent: "space-between",
           cursor: "pointer",
            textDecoration: task.isChecked ? "line-through" : "none" ,
            backgroundColor: task.isChecked ? "lightgreen" : "inherit",
          }}>
          {task.title} &nbsp; &nbsp;
          {task.description}
        
        <span>
          <button className="btn btn-outline-danger mr-2" onClick={deleteTask}>
            Delete
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-outline-primary mr-2" onClick={editTask}>
            Edit
          </button>
          
        </span>
        </div>
        {task.subtasks && (
          <ul className="list-group mt-2">
            {task.subtasks.map((subtask, subindex) => (
              
              <Subtask
                key={subindex}
                subtask={subtask}
                deleteSubtask={() => deleteSubtask(subindex)}
                editSubtask={() => editSubtask(subindex)}
                toggleCheckbox={() => toggleCheckbox(subindex)}
              />
            ))}
          </ul>
        )}
        <br></br>
        <div>
          <input
            type="text"
            placeholder="add subtask title . . ."
            className="form-control"
            value={subtaskTitleInput}
            onChange={(e) => setSubtaskTitleInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="add subtask description . . ."
            className="form-control mt-2"
            value={subtaskDescriptionInput}
            onChange={(e) => setSubtaskDescriptionInput(e.target.value)}
          />
          <button className="btn btn-dark mt-2" onClick={handleAddSubtask}>
            Add Subtask
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
