import React from 'react'

import IntroButtons from 'src/components/IntroButtons/IntroButtons'
import MobileTitle from 'src/components/MobileTitle/MobileTitle'
import SprintTypeNoOpacity from 'src/components/SprintTypeNoOpacity/SprintTypeNoOpacity'
const Intro = () => {
  return (
    <div className={`w-full bg-joggers bg-cover  bg-fixed bg-center bg-no-repeat`}>
      <div
        id={`home`}
        className={` flex h-[calc(75vh+100px)] w-full items-center  justify-center  object-fill opacity-90 `}
      >
        <div className={`h-full w-full bg-black/50`}>
          <div
            className={`flex h-full flex-col items-center justify-center space-y-4 lg:space-y-10`}
          >
            <MobileTitle />
            <SprintTypeNoOpacity />
            {/*<div className={`flex`}>
                          <div
                              className={`flex justify-center items-center text-8xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-28 h-28 header border-4 border-white `}>
                          <span
                          >S</span>
                          </div>
                          <div
                              className={`flex justify-center items-center text-8xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-28 h-28 header border-4 border-white `}>
                          <span
                          >p</span>
                          </div>
                          <div
                              className={`flex justify-center items-center text-8xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-28 h-28 header border-4 border-white `}>
                          <span
                          >r</span>
                          </div>
                          <div
                              className={`flex justify-center items-center text-8xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-28 h-28 header border-4 border-white `}>
                          <span
                          >i</span>
                          </div>
                          <div
                              className={`flex justify-center items-center text-8xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-28 h-28 header border-4 border-white `}>
                          <span
                          >n</span>
                          </div>
                          <div
                              className={`flex justify-center items-center text-8xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-28 h-28 header border-4 border-white `}>
                          <span
                          >t</span>
                          </div>
                      </div>
                          <div className={`flex gap-2`}>
                          <div className={`flex `}>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >b</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >r</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >a</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >b</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >a</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >n</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >t</span>
                          </div>
                          </div>
                          <div  className={`flex`}>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >p</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >a</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >r</span>
                          </div>
                          <div className={`flex justify-center items-center text-4xl  opacity-100 uppercase font-semibold z-10 text-[#fee906] tracking-wider bg-black w-24 h-24 header border-4 border-white `}>
                          <span
                          >k</span>
                          </div>
                          </div>
                          </div>*/}
            <IntroButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
