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
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
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
