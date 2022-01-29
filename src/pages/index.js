import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import firebase from "../../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

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

      <h1 className='bg-DARK_BLUE text-white'>Hello!</h1>
      <div>
        <Map />
      </div>
    </div>
  )
}
