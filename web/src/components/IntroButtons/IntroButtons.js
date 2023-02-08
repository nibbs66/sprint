import React from 'react'

import Button from 'src/components/Button'

const IntroButtons = () => {
  return (
    <>
      <div className={`lg:hidden`}>
        <Button
          variant={`coverButton`}
          size={'large'}
          className={` cursor-pointer rounded-md bg-[#ca0211] py-6 px-10  text-2xl leading-none text-white drop-shadow-xl transition duration-700 hover:bg-[#f10214] hover:duration-500`}
        >
          Lid Worden!
        </Button>
      </div>
      <div className={`hidden lg:block`}>
        <Button variant={`coverButton`} size={'xLarge'}>
          Lid Worden!
        </Button>
      </div>
    </>
  )
}

export default IntroButtons
