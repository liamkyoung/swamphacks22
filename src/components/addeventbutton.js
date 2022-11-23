import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Modal from '../components/modal'
import TextField from '@material-ui/core/TextField'
import firebase from '../../firebase/firebase'
import Dropdown from './dropdown.js'
import Grid from '@material-ui/core/Grid'

function AddEventButton() {
  const types = [
    {
      name: 'sports',
    },
    {
      name: 'club',
    },
    {
      name: 'food',
    },
    {
      name: 'music',
    },
    {
      name: 'university',
    },
    {
      name: 'speaker',
    },
    {
      name: 'fun',
    },
  ]
  const locations = [
    {
      name: 'Turlington Plaza',
      loc: [29.64898, -82.343855],
      type: 'food',
    },
    {
      name: 'Plaza of the Americas',
      loc: [29.650435, -82.342905],
      type: 'club',
    },
    {
      name: 'Norman Field',
      loc: [29.645577, -82.338742],
      type: 'sports',
    },
    {
      name: 'Library West',
      loc: [29.651241, -82.342906],
      type: 'food',
    },
    {
      name: 'Flavet Field',
      loc: [29.646621, -82.354212],
      type: 'university',
    },
    {
      name: 'Reitz Union',
      loc: [29.646564, -82.347762],
      type: 'speaker',
    },
    {
      name: 'Newell Hall',
      loc: [29.649108, -82.34518],
      type: 'sports',
    },
    {
      name: 'University Auditorium',
      loc: [29.6506636, -82.3440269],
      type: 'university',
    },
    {
      name: 'Norman Lawn',
      loc: [29.6506636, -82.3440269],
      type: 'fun',
    },
  ]

  const locations2 = [
    {
      type: 'Club GBMs',
      loc: [29.64898, -82.343855],
      name: 'Turlington Plaza',
    },
    {
      type: 'Food',
      loc: [29.650435, -82.342905],
      name: 'Plaza of the Americas',
    },
    {
      type: 'Fun',
      loc: [29.645577, -82.338742],
      name: 'Norman Field',
    },
    {
      type: 'Music/Concert',
      loc: [29.651241, -82.342906],
      name: 'Library West',
    },
    {
      type: 'Sports Games',
      loc: [29.646621, -82.354212],
      name: 'Flavet Field',
    },
    {
      type: 'Speaker',
      loc: [29.646564, -82.347762],
      name: 'Reitz Union',
    },
    {
      type: 'University Events',
      loc: [29.649108, -82.34518],
      name: 'Newell Hall',
    },
  ]
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(event.target[3].value)
    console.log(event.target[4].value)
    console.log(event.target[5].value)
    console.log(event.target[6].value)
    console.log(event.target[7].value)
    console.log(event.target[8].value)
    console.log(event.target[9].value)

    let stuff = {
      date: event.target[5].value,
      description: event.target[2].value,
      end_time: event.target[8].value,
      name: event.target[1].value,
      organization: event.target[0].value,
      start_time: event.target[6].value,
      type: 'university', // TODO: dropdown
      price: event.target[3].value,
      location: 'University Auditorium', // TODO: dropdown
      come_if: 'You are a cool person.', // TODO: wait
      link: 'https://google.com/', // TODO: wait
      attendance: 0, // TODO: future feature
      lat: 29.649083585859735,
      long: -82.34513045683381,
    }
    console.log(stuff)
    firebase
      .firestore()
      .collection('events')
      .doc()
      .set(stuff)
      .then(() => {
        console.log('Document successfully written!')
        console.log(stuff)
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  const [showModal, setShowModal] = useState(false)
  var today = new Date()
  today = today.getDate()
  return (
    <div className="">
      <button
        onClick={() => setShowModal(true)}
        className="bg-WHITE rounded-full"
      >
        <PlusCircleIcon className="text-ORANGE hover:text-BLUE h-12 w-12" />
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl">Event Form</h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={10}>
              <Grid item xs={5}>
                <label htmlFor="org">Organization:</label>
                <br />
                <input
                  className="rounded-lg bg-GRAY"
                  type="text"
                  id="org"
                  name="org"
                />
                <br />
                <label htmlFor="event">Event Name:</label>
                <br />
                <input
                  className="rounded-lg bg-GRAY"
                  type="text"
                  id="event"
                  name="event"
                />
                <br />
                <label htmlFor="descrip">Event Description:</label>
                <br />
                <input
                  className="rounded-lg bg-GRAY"
                  type="text"
                  id="descrip"
                  name="descrip"
                />
                <br />

                <label htmlFor="price">Price:</label>
                <br />
                <input
                  className="rounded-lg bg-GRAY"
                  type="text"
                  id="price"
                  name="price"
                />
                <br />
                <label htmlFor="locations">Location:</label>
                <br />
                <div style={{ width: '200px' }}>
                  <Dropdown items={locations} />
                  <br />
                </div>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="date"
                  label="Start Date"
                  type="date"
                  defaultValue={today}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
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
                />
                <br />
                <TextField
                  id="date"
                  label="End Date"
                  type="date"
                  defaultValue={today}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
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
                />
                <br />
                <label htmlFor="etype">Event Type:</label>
                <br />
                <div style={{ width: '200px' }}>
                  <Dropdown items={types} />
                  <br />
                </div>
              </Grid>
            </Grid>
            {/* <div style = {{height:'300px'}}> */}
            <button type="submit">Submit</button>
            {/* </div> */}
          </form>
        </div>
      </Modal>
    </div>
  )
}
//location dropdown, price, type dropdown

//want to do: make close button round and put left, put submit button on bottom
// right and put it in circle, change Event Form font
export default AddEventButton
