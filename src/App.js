import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import leafGreen from './assets/icons/leaf-green.png'

import './App.css'

class App extends Component {
  state = {
    greenIcon: {
      lat: 54.3532259,
      lng: 18.6381551,
    },
    zoom: 13,
  }

  greenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
  })

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <Map className='map' center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default App
