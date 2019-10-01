import React from "react";
import { useState } from "react";
import NewListForm from "./NewListForm";
import CurrentUserLists from "./CurrentUserLists";
const ListManager = () => {
  const [viewForm, setViewForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="list-manager">
      <div className="list-manager-div">
        {viewForm ? (
          <>
            <h1>List Manager</h1>
            <NewListForm setViewForm={setViewForm} />
          </>
        ) : (
          <>
            <h1>List Manager</h1>
            <div>
              <button
                className="new-list-button"
                onClick={() => setViewForm(true)}
              >
                New List
              </button>
              <button
                onClick={() => setEditMode(!editMode)}
                className="edit-list-button"
              >
                Edit
              </button>
            </div>
            <CurrentUserLists editMode={editMode} />
          </>
        )}
      </div>
    </div>
  );
};

export default ListManager;
