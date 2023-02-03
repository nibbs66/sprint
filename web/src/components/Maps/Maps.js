import { useState } from 'react'

import Map, { Marker, NavigationControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import Popover from 'src/components/Popover/Popover'

import shoes from '../../../public/shoes.png'

const Maps = () => {
  const [viewState, setViewState] = useState({
    longitude: 4.80681,
    latitude: 51.58223,
    zoom: 17,
  })

  return (
    <div className={`relative text-black max-w-screen-2xl`}>
      <Map
        onMove={(evt) => setViewState(evt.viewState)}
        {...viewState}
        mapStyle="mapbox://styles/nibbs66/clc0az665003k14pr6xtiiah8"
        style={{ width: '100%', height: '100vh' }}
        mapboxAccessToken={`pk.eyJ1IjoibmliYnM2NiIsImEiOiJjbGRrMDAxZnIxd2gyM3FxcDc1M2NlNHJ2In0.oegI82xRY1D63liULmbzDg`}
        scrollZoom={false}
        minZoom={12}
      >
        <div>
          <NavigationControl showCompass={false} position={'top-left'} />
        </div>
        <Marker
          longitude={4.80681}
          latitude={51.58223}
          offsetLeft={-15}
          offsetTop={-15}
          anchor="bottom"
        >
          <Popover />
          <img src={shoes} alt={``} className={`h-12 w-12`} />
        </Marker>
      </Map>
    </div>
  )
}

export default Maps
