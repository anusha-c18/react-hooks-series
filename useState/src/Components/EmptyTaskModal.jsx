import React from "react";
import "./EmptyTaskModal.css";

function EmptyTaskModal({ toggleModal }) {
  const closeModal = (event) => {
    event.stopPropagation();
    toggleModal();
  };
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <p className="modal-close" onClick={closeModal}>
          x
        </p>
        <p className="modal-message">Empty Task description!</p>
      </div>
    </div>
  );
}

export default EmptyTaskModal;
