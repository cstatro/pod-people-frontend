import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../redux/actions/dispatchActions/ModalActions";
import { useEffect, useState } from "react";
import { postConfig } from "../api/config";
const Modal = props => {
  const { closeModal, title, itunes, refreshUser, user } = props;

  useEffect(() => {
    refreshUser(1);
  }, []);
  const [list_id, setList] = useState(null);

  const handleClick = e => {
    e.stopPropagation();
  };
  const handleButton = () => {
    const config = postConfig({ list_id, user_id: user.id });
    fetch();
    closeModal();
  };
  const handleChange = e => {
    setList(parseInt(e.target.value));
  };

  return (
    <div onClick={closeModal} className="modal-wrap">
      <div onClick={handleClick} className="modal">
        <h2>{title}</h2>
        <p>{itunes.summary}</p>
        {!!user.lists ? (
          <>
            <select name="list_id" onChange={handleChange}>
              {user.lists.map(l => (
                <option value={l.id}>{l.name}</option>
              ))}
            </select>
            <button onClick={handleButton}>+</button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default connect(
  null,
  modalActions
)(Modal);
