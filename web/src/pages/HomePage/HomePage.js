import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Contact from 'src/components/Contact/Contact'
import Gallery from 'src/components/Gallery/Gallery'
import Intro from 'src/components/Intro/Intro'
import Nieuws from 'src/components/Nieuws/Nieuws'
import Sponsors from 'src/components/Sponsors/Sponsors'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Intro />
      <Nieuws />
      <Gallery/>
      <Sponsors/>
      <Contact/>
    </>
  )
}

export default HomePage
