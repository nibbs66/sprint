import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Contact from 'src/components/Contact/Contact'
import Gallery from 'src/components/Gallery/Gallery'
import Intro from 'src/components/Intro/Intro'
import Maps from 'src/components/Maps/Maps'
import SharedContent from 'src/components/SharedContent/SharedContent'
import Sponsors from 'src/components/Sponsors/Sponsors'

const HomePage = () => {
  return (
    <div className={`flex flex-col items-center space-y-5 `}>
      <MetaTags title="Home" description="Home page" />
      <Intro />
      <div className={`w-full`}>
        <Maps />
      </div>
      <SharedContent />

      <Gallery />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default HomePage
