import React from 'react'

import Footer from 'src/components/Footer'
import MobileNavbar from 'src/components/MobileNavbar'
import Navbar from 'src/components/Navbar'

const MainLayout = ({ children }) => {
  //<div className="mx-auto max-w-screen-2xl bg-slate-100 "><div className="mx-auto max-w-screen-2xl bg-slate-100 ">
  return (
    <div className={`relative   mx-auto max-w-screen-2xl `}>
      <MobileNavbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
