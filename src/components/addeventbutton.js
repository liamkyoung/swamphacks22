import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from "react";
import Modal from "../components/modal"

function AddEventButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=''>
      <button onClick={() => setShowModal(true)} className="btn p-3 rounded-full hover:bg-BLUE">
        <PlusCircleIcon className='h-12 w-12'/>
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form>
          <label for="fname">First name:</label><br />
          <input className='rounded-lg bg-GRAY' type="text" id="fname" name="fname" /><br />
          <label for="lname">Last name:</label><br />
          <input className='rounded-lg bg-GRAY' type="text" id="lname" name="lname" />
        </form>
      </Modal>
    </div>
  )
}

export default AddEventButton;
