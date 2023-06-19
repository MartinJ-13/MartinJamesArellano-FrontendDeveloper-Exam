import { AiFillCloseCircle } from "react-icons/ai";
import React, { useRef, useEffect } from "react";

function ReadFull({ isOpen, setOpen, content }) {
  const dialogRef = useRef(null);

    useEffect(() => {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }, [isOpen]);

  function closeModal() {
    setOpen(false);
  }
  return (
    //Modal when clicking Read Full
    <dialog ref={dialogRef} className="modal">
      <div className="modal-content">
        <div className="upper-modal">
          <div className="modal-title">{content.title}</div>
          <div>
            <AiFillCloseCircle
              className="modal-close"
              size="1.7rem"
              onClick={closeModal}
            />
          </div>
        </div>

        <div className="modal-details">
          {content.author} | {content.date}
        </div>

        <div className="modal-body">
         {content.content}
        </div>
        <div className="modal-buttons">
          <button className="modal-publish">Publish</button>
          <button className="modal-delete">Delete</button>
        </div>
      </div>
    </dialog>
  );
}

export default ReadFull;
