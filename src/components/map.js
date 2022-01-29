import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { divIcon, L } from 'leaflet';
import BottomPopUp from '../components/bottompopup'
import AddEventButton from './addeventbutton'
import Data from '../../assets/locations.json'

const Map = () => {
    const position = [29.649, -82.344]
    const icon = divIcon({
        className: "",
        html: '<div id="map-anchor">💡</div>'
    });

    function testPrint(e) {
        console.log(e);
    }

    return (
        <div className='relative h-auto w-screen'>
            <MapContainer className='mapContainer absolute left-0 top-0 z-0' center={position} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    Data.places.map((place) => {
                        return (
                            <Marker position={place.loc} icon={icon}
                                eventHandlers={{ click: () => {alert(place.name)} }}
                            >
                            </Marker>
                        )
                    })
                }

                
            </MapContainer>
            <div className='absolute bottom-10 right-5 z-100 h-16 w-16 cursor-pointer text-ORANGE hover:text-BLUE rounded-full'>
                <AddEventButton className='h-full w-full'/>
            </div>
        </div>
           
    )
}

export default Map;