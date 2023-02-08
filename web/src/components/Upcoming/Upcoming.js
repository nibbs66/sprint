import React from 'react'

const Upcoming = () => {
  return (
    <div className={` h-screen w-full bg-bgImg bg-cover bg-center`}>
      <div className={` h-screen w-full bg-black bg-opacity-50`}>
        <div
          className={`flex h-full w-full flex-col items-center overflow-y-scroll pt-24 pb-10 text-white lg:px-24`}
        >
          <span
            className={`w-full  border-b-2 border-b-white pb-12 text-center text-lg uppercase md:text-3xl  lg:text-5xl`}
          >
            Upcoming Events
          </span>

          <div
            className={`grid w-full grid-cols-2 border-b-2 border-b-white py-10 text-sm lg:grid-cols-3  lg:text-xl`}
          >
            <div className={`flex flex-col items-center space-y-1`}>
              <span className={`text-center`}>13 oct</span>
              <span className={`text-sm font-thin`}>19:30 uur</span>
            </div>
            <span className={`hidden text-center lg:block`}>Hardloop</span>
            <span className={`text-center`}>Bress Sportscenter</span>
          </div>
          <div
            className={`grid w-full grid-cols-2 border-b-2 border-b-white py-10 text-sm lg:grid-cols-3  lg:text-xl`}
          >
            <div className={`flex flex-col items-center space-y-1`}>
              <span className={`text-center`}>15 oct</span>
              <span className={`text-sm font-thin`}>9:00 uur</span>
            </div>
            <span className={`hidden text-center lg:block`}>Bos Hardloop</span>
            <span className={`text-center`}> Mastbos</span>
          </div>
          <div
            className={`grid w-full grid-cols-2 border-b-2 border-b-white py-10 text-sm lg:grid-cols-3  lg:text-xl`}
          >
            <div className={`flex flex-col items-center space-y-1`}>
              <span className={`text-center`}>17 oct</span>
              <span className={`text-sm font-thin`}>19:30 uur</span>
            </div>
            <span className={`hidden text-center lg:block`}>Hardloop</span>
            <span className={`text-center`}>Bress Sportscenter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
