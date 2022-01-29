import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import BottomPopUp from '../components/bottompopup'

const Map = () => {
  const position = [29.649, -82.344]
    return (
        <div className='h-auto w-screen'>
            <MapContainer className='mapContainer' center={position} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <BottomPopUp />
                    </Popup>
                </Marker>
            </MapContainer> 
        </div>
           
    )
}

export default Map;