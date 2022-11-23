import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import SideBar from '../components/sidebar'
import firebase from '../../firebase/firebase'
import { Suspense } from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousDate: null,
      currentDate: new Date().toISOString().slice(0, 10),
      eventData: [],
      loaded: false,
      map: <></>,
    }

    this.getEvents = this.getEvents.bind(this)
    this.setDate = this.setDate.bind(this)
  }

  async componentDidMount() {
    let events = await this.getEvents(this.state.currentDate)
    if (events) {
      this.setState({ eventData: events })
    }
  }

  async getEvents() {
    let matches = []
    console.log('getEvents CURRENTDATE', this.state.currentDate)
    if (this.state.currentDate) {
      firebase
        .firestore()
        .collection('events')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().date == this.state.currentDate) {
              matches.push(doc.data())
            }
          })
          console.log('DATABASE PULL', matches)
          this.setState({ eventData: matches })
          const Map = dynamic(() => import('../components/map'), {
            ssr: false,
          })

          this.setState({
            map: <Map data={this.state.eventData} />,
          })
        })
        .catch((e) => console.log('Database Date Pull Failed', e))
    }
    this.setState({ loaded: true })
    // console.log("MATCHES", matches)
  }

  async setDate(date) {
    this.setState({ currentDate: date.dateStr })
    if (this.state.currentDate != this.state.previousDate) {
      let events = await this.getEvents(this.state.currentDate)
      this.setState({ eventData: events })
      this.setState({ previousDate: this.state.currentDate })
    }
    console.log('Set Date', this.state.currentDate)
  }

  render() {
    return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
        </Head>

        <div id="main" className="relative flex justify-center align-center">
          {this.state.loaded && this.state.map}
          <SideBar callback={this.setDate} />
        </div>
      </>
    )
  }
}

export default Home
