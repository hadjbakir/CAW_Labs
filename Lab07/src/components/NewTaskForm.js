// NewTaskForm.js

import React, { Component } from "react";

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      descriptionInput: "",
    };
  }

  updateInput = (inputKey, value) => {
    this.setState({
      [inputKey]: value,
    });
  };

  render() {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="add title . . ."
          value={this.state.userInput}
          onChange={(e) => this.updateInput("userInput", e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="add description . . ."
          value={this.state.descriptionInput}
          onChange={(e) => this.updateInput("descriptionInput", e.target.value)}
        />
        <button
          className="btn btn-dark mt-2"
          onClick={() => {
            this.props.addTask({
              title: this.state.userInput,
              description: this.state.descriptionInput,
            });
            this.setState({
              userInput: "",
              descriptionInput: "",
            });
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default NewTaskForm;
