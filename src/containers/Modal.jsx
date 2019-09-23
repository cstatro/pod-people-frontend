import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../redux/actions/dispatchActions/ModalActions";
import { useEffect } from "react";
const Modal = props => {
  const { closeModal, title, itunes } = props;

  useEffect(() => {}, []);

  const handleClick = e => {
    e.stopPropagation();
  };
  return (
    <div onClick={closeModal} className="modal-wrap">
      <div onClick={handleClick} className="modal">
        <h2>{title}</h2>
        <p>{itunes.summary}</p>
      </div>
    </div>
  );
};

export default connect(
  null,
  modalActions
)(Modal);
