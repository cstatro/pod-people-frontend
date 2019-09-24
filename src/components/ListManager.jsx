import React from "react";
import { useState } from "react";
import NewListForm from "./NewListForm";
import CurrentUserLists from "./CurrentUserLists";
const ListManager = props => {
  const [viewForm, setViewForm] = useState(false);
  return (
    <div className="list-manager">
      {viewForm ? (
        <NewListForm setViewForm={setViewForm} />
      ) : (
        <>
          <button onClick={() => setViewForm(true)}>New List</button>
          <CurrentUserLists />
        </>
      )}
    </div>
  );
};

export default ListManager;
