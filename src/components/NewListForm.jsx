import React, { Component } from "react";
import { postConfig } from "../api/config";
import { newListFormState } from "../redux/actions/mapStateToProps/newListFormState";
import { connect } from "react-redux";

class NewListForm extends Component {
  state = { name: "", description: "" };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { user_id, setViewForm } = this.props;
    const config = postConfig({ ...this.state, user_id });
    fetch("http://localhost:3000/lists", config)
      .then(r => r.json())
      .then(json => {
        console.log(json);
        setViewForm(false);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-list">
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

export default connect(newListFormState)(NewListForm);
