import { React, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { divIcon, L } from 'leaflet'
import BottomPopUp from '../components/bottompopup'
import AddEventButton from './addeventbutton'

function Map({ data }) {
  const [popUpState, setPopUp] = useState(false)
  const [currLocation, setLocation] = useState(null)
  const position = [29.649, -82.344]

  let emojis = {
    sports: '🏈',
    club: '💡',
    food: '🍔',
    music: '🎵',
    university: '🎓',
    speaker: '🎤',
    fun: '🥂',
  }

  console.log('Loading map!')

  return (
    <div className="overflow-hidden relative h-screen w-screen">
      <MapContainer
        id="CampusMap"
        className="mapContainer absolute left-0 top-0 z-0"
        center={position}
        zoom={20}
        scrollWheelZoom={true}
        whenReady={() => console.log('map ready')}
        whenCreated={() => console.log('map created')}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((place, i) => {
          // console.log('place', place)
          const icon = divIcon({
            className: '',
            html: `<div id="map-anchor"><p>${emojis[place.type]}</p></div>`,
          })
          return (
            <Marker
              key={i}
              position={[place.lat, place.long]}
              icon={icon}
              eventHandlers={{
                click: () => {
                  setPopUp(!popUpState)
                  setLocation(place)
                },
              }}
            ></Marker>
          )
        })}
      </MapContainer>

      <div className="absolute bottom-10 right-5 z-100 h-16 w-16 cursor-pointer text-ORANGE hover:text-BLUE rounded-full">
        <AddEventButton className="h-full w-full" />
      </div>
      {popUpState && currLocation ? <BottomPopUp data={currLocation} /> : null}
    </div>
  )
}

export default Map
