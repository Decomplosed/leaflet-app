import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import leafGreen from './assets/icons/leaf-green.png'
import leafRed from './assets/icons/leaf-red.png'
import leafOrange from './assets/icons/leaf-orange.png'
import leafShadow from './assets/icons/leaf-shadow.png'

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
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  })

  render() {
    const positionGreenIcon = [
      this.state.greenIcon.lat,
      this.state.greenIcon.lng,
    ]

    return (
      <Map className='map' center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={positionGreenIcon} icon={this.greenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default App
