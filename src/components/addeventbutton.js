import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from "react";
import Modal from "../components/modal"
import TextField from '@material-ui/core/TextField';

function AddEventButton() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  const [showModal, setShowModal] = useState(false);
  var today = new Date();
  today = today.getDate();
  return (
    <div className=''>
      <button onClick={() => setShowModal(true)} className="btn">
        <PlusCircleIcon className='h-12 w-12'/>
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-3xl'>Event Form</h1>
          <form onSubmit={handleSubmit}>
            <label for="org">Organization Name:</label><br />
            <input className='rounded-lg bg-GRAY' type="text" id="org" name="org" /><br />
            <label for="event">Event Name:</label><br />
            <input className='rounded-lg bg-GRAY' type="text" id='event' name='event' /><br />
            <label for="descrip">Event Description:</label><br />
            <input className='rounded-lg bg-GRAY' type="text" id='descrip' name='descrip' /><br />
            <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue= {today}
            InputLabelProps={{
              shrink: true,
            }}
            /><br />
            {/* <input className='rounded-lg bg-GRAY' type="text" id='stime' name='stime' /><br />
            <label for="start">Start Time:</label><br /> */}
            <TextField
            label="Start Time"
            defaultValue="12:00"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            // 5 minutes
            inputProps={{
              step: 60,
            }}
            /><br />
            <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue= {today}
            InputLabelProps={{
              shrink: true,
            }}
            /><br />
            <TextField
            label="End Time"
            defaultValue="12:00"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            // 5 minutes
            inputProps={{
              step: 60,
            }}
            /><br />
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </Modal>
    </div>
  )
}

export default AddEventButton;
