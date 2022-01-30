import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from "react";
import Modal from "../components/modal"
import TextField from '@material-ui/core/TextField';
import firebase from "../../firebase/firebase"
import Dropdown from './dropdown.js';
// import styled from 'styled-components';


function AddEventButton() {
  const locations = [
    {
        "name": "Turlington Plaza",
        "loc": [
            29.648980,
            -82.343855
        ],
        "type": "food"
    },
    {
        "name": "Plaza of the Americas",
        "loc": [
            29.650435,
            -82.342905
        ],
        "type": "club"
    },
    {
        "name": "Norman Field",
        "loc": [
            29.645577,
            -82.338742
        ],
        "type": "sports"
    },
    {
        "name": "Library West",
        "loc": [
            29.651241,
            -82.342906
        ],
        "type": "food"
    },
    {
        "name": "Flavet Field",
        "loc": [
            29.646621,
            -82.354212
        ],
        "type": "university"
    },
    {
        "name": "Reitz Union",
        "loc": [
            29.646564,
            -82.347762
        ],
        "type": "speaker"
    },
    {
        "name": "Newell Hall",
        "loc": [
            29.649108,
            -82.345180
        ],
        "type": "sports"
    },
    {
        "name": "University Auditorium",
        "loc": [
            29.6506636,
            -82.3440269
        ],
        "type": "university"
    },
    {
        "name": "Norman Lawn",
        "loc": [
            29.6506636,
            -82.3440269
        ],
        "type": "fun"
    }
]
  const handleSubmit = event => {
    event.preventDefault();
    // console.log(event.target[0].value); // org
    // console.log(event.target[1].value); // event
    // console.log(event.target[2].value); // description
    // console.log(event.target[3].value); // start date YYYY-MM-DD
    // console.log(event.target[4].value); // start time HH:MM military
    // console.log(event.target[5].value); // end time HH:MM military
    // alert('You have submitted the form.');

    let stuff = {
      date: event.target[3].value,
      description: event.target[2].value,
      end_time: event.target[6].value,
      name: event.target[1].value,
      organization: event.target[0].value,
      start_time: event.target[4].value,
      type: "fun", // TODO: dropdown
      price: "Free for students of UF", // TODO: input string
      location: "University Auditorium", // TODO: dropdown
      come_if: "You are a cool person.", // TODO: wait
      link: "https://google.com/", // TODO: wait
      attendance: 0, // TODO: future feature
    }
    firebase.firestore().collection("events").doc().set(stuff)
    .then(() => {
        console.log("Document successfully written!");
        console.log(stuff);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }

  const [showModal, setShowModal] = useState(false);
  var today = new Date();
  today = today.getDate();
  return (
    <div className=''>
      <button onClick={() => setShowModal(true)} className="bg-WHITE rounded-full">
        <PlusCircleIcon className='text-ORANGE hover:text-BLUE h-12 w-12'/>
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-3xl'>Event Form</h1>
          <form onSubmit={handleSubmit}>
            <label for="org">Organization Name:</label><br />
            <input className='rounded-lg bg-GRAY' type="text" id="org" name="org" /><br />
            <label for="event">Event Name:</label><br />
            <in put className='rounded-lg bg-GRAY' type="text" id='event' name='event' /><br />
            <label for="descrip">Event Description:</label><br />
            <input className='rounded-lg bg-GRAY' type="text" id='descrip' name='descrip' /><br />
            <Dropdown items={locations}/>
            
            <label for="price">Price:</label><br />
            <input className='rounded-lg bg-GRAY' type="text" id="price" name="price" /><br />
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
            // every minute
            inputProps={{
              step: 60,
            }}
            /><br />
            <TextField
            label="End Time"
            defaultValue="12:00"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            // every minute
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
//location dropdown, price, type dropdown 

//want to do: make close button round and put left, put submit button on bottom
// right and put it in circle, change Event Form font
export default AddEventButton;
