import React, { Component } from "react";

class NewListForm extends Component {
  state = { name: "", description: "" };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form className="new-list">
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          onChange={this.handleChange}
          name="description"
          placeholder="Description"
          type="text"
        />
        <input type="submit" value="Create New List" />
      </form>
    );
  }
}

export default NewListForm;
