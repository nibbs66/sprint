import React from 'react'

const Upcoming = () => {
  return (
    <div className={` w-full h-screen bg-bgImg bg-center bg-cover`}>
      <div className={` w-full h-screen bg-black bg-opacity-50`}>
        <div
          className={`flex flex-col w-full h-full text-white items-center pt-24 pb-10 lg:px-24 overflow-y-scroll`}
        >
          <span
            className={`uppercase  text-lg md:text-3xl lg:text-5xl border-b-2 border-b-white w-full text-center  pb-12`}
          >
            Upcoming Events
          </span>

          <div
            className={`grid grid-cols-2 lg:grid-cols-3 w-full py-10 border-b-2 border-b-white text-sm  lg:text-xl`}
          >
            <div className={`flex flex-col items-center space-y-1`}>
              <span className={`text-center`}>13 oct</span>
              <span className={`text-sm font-thin`}>19:30 uur</span>
            </div>
            <span className={`hidden lg:block text-center`}>Hardloop</span>
            <span className={`text-center`}>Bress Sportscenter</span>
          </div>
          <div
            className={`grid grid-cols-2 lg:grid-cols-3 w-full py-10 border-b-2 border-b-white text-sm  lg:text-xl`}
          >
            <div className={`flex flex-col items-center space-y-1`}>
              <span className={`text-center`}>15 oct</span>
              <span className={`text-sm font-thin`}>9:00 uur</span>
            </div>
            <span className={`hidden lg:block text-center`}>Bos Hardloop</span>
            <span className={`text-center`}> Mastbos</span>
          </div>
          <div
            className={`grid grid-cols-2 lg:grid-cols-3 w-full py-10 border-b-2 border-b-white text-sm  lg:text-xl`}
          >
            <div className={`flex flex-col items-center space-y-1`}>
              <span className={`text-center`}>17 oct</span>
              <span className={`text-sm font-thin`}>19:30 uur</span>
            </div>
            <span className={`hidden lg:block text-center`}>Hardloop</span>
            <span className={`text-center`}>Bress Sportscenter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
