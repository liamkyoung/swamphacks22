import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from "react";
import Modal from "../components/modal"

function AddEventButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=''>
      <button onClick={() => setShowModal(true)} className="btn">
        {/* <PlusCircleIcon /> */}
        Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        JAISJQIJIJDIWJIJSDISJDIW
      </Modal>
    </div>
  )
}

export default AddEventButton;
