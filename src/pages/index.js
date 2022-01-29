import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import SideBar from '../components/sidebar'

import firebase from "../../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"

export default function Home() {
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
        <Map className='absolute top-0 left-0 z-0'/>
        <SideBar />
      </div>
    </div>
  )
}
