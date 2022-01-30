import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState, Component } from 'react'
import SideBar from '../components/sidebar'
import Data from '../../assets/locations.json'
import Database from "../components/database"
import firebase from "../../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousDate: null,
      currentDate: new Date().toISOString().slice(0, 10),
      eventData: []
    }

    this.getEvents = this.getEvents.bind(this)
    this.setDate = this.setDate.bind(this)
  }

  async componentDidMount() {
    console.log("componentDidMount")
    this.state.eventData = await this.getEvents(this.state.currentDate)
  }

  async componentDidUpdate() {
    console.log("componentDidUpdate")
    if (this.state.currentDate != this.state.previousDate) {
      this.state.eventData = await this.getEvents(this.state.currentDate)
      this.state.previousDate = this.state.currentDate
    }
  }

  async getEvents () {
    let matches = [];
    console.log('getEvents CURRENTDATE', this.state.currentDate)
    if (this.state.currentDate) {
        firebase.firestore().collection("events").get().then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {
                if (doc.data().date == this.state.currentDate) {
                    matches.push(doc.data());
                }
            });
            console.log("DATABASE PULL", matches);
            this.state.eventData = matches
            console.log("THIS.STATE.EVENTDATA", this.state.eventData)
        })
        .catch((e) => console.log("Database Date Pull Failed", e));
    }
    console.log("MATCHES", matches)
  }

  async setDate(date) {
    this.state.currentDate = date
    if (this.state.currentDate != this.state.previousDate) {
      this.state.eventData = await this.getEvents(this.state.currentDate)
      this.state.previousDate = this.state.currentDate
      console.log("CHANGING DATE", this.state.eventData)
    }
    console.log("Set Date", this.state.currentDate)
  }

  render () {
    const Map = dynamic(() => import('../components/map'), { loading: () => <p>A map is loading</p>,  ssr: false })

    return (
      <div className="">
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""/>
        </Head>
        
        <div id='main' className='relative flex justify-center align-center'>
          <Map className='absolute top-0 left-0 z-0' data={this.state.eventData} />
          <SideBar callback={this.setDate} />
        </div>
      </div>
    )
  }
}

export default Home




// export default function Home() {
//   const Map = dynamic(() => import('../components/map'), { loading: () => <p>A map is loading</p>,  ssr: false })
//   const [selectedDate, setDate] = useState(new Date().toISOString().slice(0, 10))
//   const [eventData, setData] = useState(null)

//   console.log("selectedDate: ", selectedDate)
//   return (
//     <div className="">
//       <Head>
//         <title>Home</title>
//         <meta name="description" content="Home Page" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
//           integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
//           crossOrigin=""/>
//       </Head>
      
//       <div id='main' className='relative flex justify-center align-center'>
//         <Map className='absolute top-0 left-0 z-0' data={eventData}/>
//         <SideBar callback={setDate} />
//         {selectedDate ? <Database date={selectedDate} callback={setData} /> : null }
//       </div>
//     </div>
//   )
// }
