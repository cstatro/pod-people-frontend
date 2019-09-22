import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../redux/actions/dispatchActions/ModalActions";

const Modal = props => {
  const { closeModal } = props;

  const handleClick = e => {
    e.stopPropagation();
  };
  return (
    <div onClick={closeModal} className="modal-wrap">
      <div onClick={handleClick} className="modal"></div>
    </div>
  );
};

export default connect(
  null,
  modalActions
)(Modal);
