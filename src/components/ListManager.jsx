import React from "react";
import { useState } from "react";
const ListManager = props => {
  const [viewForm, setViewForm] = useState(false);
  return (
    <div className="list-manager">
      {viewForm ? (
        <h2>Hi</h2>
      ) : (
        <button onClick={() => setViewForm(true)}>New List</button>
      )}
    </div>
  );
};

export default ListManager;
