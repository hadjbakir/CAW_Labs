// Subtask.js

import React from "react";

const Subtask = ({ subtask, deleteSubtask, editSubtask, toggleCheckbox }) => {
  return (
    <li className="list-group-item" style={{ backgroundColor: subtask.isChecked ? "lightgreen" : "inherit" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <span style={{ textDecoration: subtask.isChecked ? "line-through" : "none" }}>
            {subtask.title} &nbsp; &nbsp;
            {subtask.description}
          </span>
        </div>
          

          {/* Buttons for subtasks (Delete, Edit, and Checkbox) */}
          <span style={{ display: "flex", alignItems: "center" }}>
            <button className="btn btn-outline-danger mr-2" onClick={deleteSubtask}>
              Delete
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-outline-primary mr-2" onClick={editSubtask}>
              Edit
            </button>
            &nbsp; &nbsp;
            <input
              type="checkbox"
              className="form-check-input ml-2"
              checked={subtask.isChecked}
              onChange={toggleCheckbox}
            />
          </span>
        </div>
      
    </li>
  );
};

export default Subtask;
