import React from "react";

function Modal(props) {
  //if statement prevents rendering if modal open is false (similar to warning banner from lecture)
  if (!props.modalOpen) {
    return null;
  }

  return (
    //setting the modal class to have an on click to close the modal using props
    <div className="modal" onClick={props.closeModal}>
      {/* setting up a div that contains all the content of the modal and using an on click evt to stop the propagation of the closure from above at this level. It will not close if you click inside of here. Bubbling? */}
      <div className="insideModal" onClick={(evt) => evt.stopPropagation()}>
        <div className="modalHeader">
          <h4 id="modalTitle">Hello Modal!</h4>
        </div>
        <div className="modalBody">
          This is some body text for modal testing. Click anywhere outside to close!
        </div>
        <div className="modalFooter">
          {/* calling close modal on click of this button */}
          <button onClick={props.closeModal} id="closeButton">
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

//found examples of the evt handlers in https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers