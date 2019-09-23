import React, { Component } from "react";

class NewListForm extends Component {
  render() {
    return (
      <form className="new-list">
        <input type="text" />
        <input type="text" />
        <input type="submit" value="Create New List" />
      </form>
    );
  }
}

export default NewListForm;
