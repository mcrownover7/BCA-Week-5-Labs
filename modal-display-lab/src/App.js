import "./App.css";
import React from "react";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  //setting the use state of modal open
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container">
      <h2>Press for Modal</h2>
      {/* button passing arguments inline on click using an arrow function and setting modal open to true, which will display the modal */}
      <button onClick={(evt) => setModalOpen(true)} id="openButton">
        Open Modal
      </button>
      {/* connecting to modal and passing another evt handler arrow function to set modal open to be false, which will then hide modal due to if check in modal.js */}
      <Modal closeModal={(evt) => setModalOpen(false)} modalOpen={modalOpen} />
    </div>
  );
}

export default App;

//found examples of the evt handlers in https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers