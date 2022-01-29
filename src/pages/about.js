import React from 'react';
import Head from 'next/head'

import firebase from "../../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"

function About () {
  // const db = firebase.firestore();
  // var [events, eventsLoading, eventsError] = useCollection(
  //   db.collection("events"),
  //   {}
  // );

  // if (!eventsLoading && events) {
  //   events.docs.map((doc) => console.log(doc.data()));
  // }

  return (
    <div>
        <Head>
            <title>Home</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>About</h1>
    </div>
  )
}

export default About
