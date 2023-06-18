

function Modal({ isOpen, onClose, content }){
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {"test"}
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
};

export default Modal; 