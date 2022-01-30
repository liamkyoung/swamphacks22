import { React, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { divIcon, L } from 'leaflet';
import BottomPopUp from '../components/bottompopup'
import AddEventButton from './addeventbutton'


const Map = ({ data }) => {
    const [popUpState, setPopUp] = useState(false)
    const [currLocation, setLocation] = useState(null)
    
    function testPrint(e) {
        console.log(e);
    }

    let emojis = {
        "sports": "🏈",
        "club": "💡",
        "food": "🍔",
        "music": "🎵",
        "university": "🎓",
        "speaker": "🎤",
        "fun": "🥂"
    }

    return (
        <div className='relative h-auto w-screen'>
            <MapContainer className='mapContainer absolute left-0 top-0 z-0' center={position} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.places.map((place) => {
                        const icon = divIcon({
                            className: "",
                            html: `<div id="map-anchor"><p>${emojis[place.type]}</p></div>`
                        });
                        return (
                            <Marker position={place.loc} icon={icon}
                                eventHandlers={{ click: () => {
                                    setPopUp(!popUpState)
                                    setLocation(place)
                                } }}
                            >
                            </Marker>
                        )
                    })
                }
            </MapContainer>
            <div className='absolute bottom-10 right-5 z-100 h-16 w-16 cursor-pointer text-ORANGE hover:text-BLUE rounded-full'>
                <AddEventButton className='h-full w-full'/>
            </div>
            {
                (popUpState && currLocation) ?  <BottomPopUp data={currLocation} /> : null
            }
           
        </div> 
    )
}

export default Map;