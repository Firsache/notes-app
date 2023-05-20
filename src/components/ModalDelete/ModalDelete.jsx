import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";

import { BsX } from "react-icons/bs";
import { NotesContext } from "../../context/NotesContext";
import { Backdrop, CloseBtn, Modal, ModalButtons } from "./ModalDelete.styled";

const modalRoot = document.querySelector("#modal-root");

export const ModalDelete = () => {
  const { currentNote, deleteNote, modalDelete } = useContext(NotesContext);

  useEffect(() => {
    function handleEscapeClick(e) {
      if (e.code === "Escape") {
        modalDelete();
      }
    }
    window.addEventListener("keydown", handleEscapeClick);
    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
    };
  }, [modalDelete]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      modalDelete();
    }
  };

  const handleEscapeClick = (e) => {
    if (e.code === "Escape") {
      modalDelete();
    }
  };
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal onKeyDown={handleEscapeClick}>
        Would you like to delete the note <span>{currentNote.title}</span> ?
        <ModalButtons>
          <button className="submit" onClick={() => deleteNote(currentNote.id)}>
            Submit
          </button>
          <button className="cancel" onClick={() => modalDelete()}>
            Cancel
          </button>
        </ModalButtons>
        <CloseBtn onClick={() => modalDelete()}>
          <BsX size={25} />
        </CloseBtn>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
