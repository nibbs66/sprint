import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Intro from '../../components/Intro/Intro'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

     <Intro/>

    </>
  )
}

export default HomePage
