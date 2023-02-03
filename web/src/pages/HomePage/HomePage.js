import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Contact from 'src/components/Contact/Contact'
import Gallery from 'src/components/Gallery/Gallery'
import HomeMap from 'src/components/HomeMap/HomeMap'
import Intro from 'src/components/Intro/Intro'
import Nieuws from 'src/components/Nieuws/Nieuws'
import SharedContent from 'src/components/SharedContent/SharedContent'
import Sponsors from 'src/components/Sponsors/Sponsors'
import Upcoming from 'src/components/Upcoming/Upcoming'
const HomePage = () => {
  return (
    <div className={`flex flex-col space-y-5 items-center `}>
      <MetaTags title="Home" description="Home page" />
      <Intro />
      <div className={`w-full`}>
        <HomeMap />
      </div>
      <SharedContent />

      <Gallery />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default HomePage
