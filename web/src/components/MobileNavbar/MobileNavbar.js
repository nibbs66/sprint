import { useState } from 'react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MobileNavbar = () => {
  const [active, setActive] = useState(false)
  console.log(active)
  const handleClick = () => {
    setActive(false)
  }
  return (
    <div
      className={`absolute z-10 flex w-full flex-col items-center lg:hidden`}
    >
      <div className={`flex w-full justify-end pr-5 pt-2`}>
        <Bars3Icon
          onClick={() => setActive(true)}
          className={`${
            active && 'hidden'
          }  h-10 w-10 cursor-pointer text-white hover:text-[ghostwhite]`}
        />
        <XMarkIcon
          onClick={() => setActive(false)}
          className={`${
            !active && 'hidden'
          }  h-10 w-10 cursor-pointer text-white hover:text-[ghostwhite]`}
        />
      </div>
      <div className={`relative flex w-full`}>
        <ul
          className={`${
            !active ? 'translate-x-32 ' : 'translate-x-0'
          } fixed top-12 right-2 flex flex-col items-start space-y-4 rounded-md bg-[#cd0012]/50 p-4 text-sm uppercase text-white transition-all duration-700  ease-in-out`}
        >
          <li
            onClick={handleClick}
            className={`cursor-pointer hover:font-bold hover:text-[#ca0211]`}
          >
            Over Ons
          </li>
          <li
            onClick={handleClick}
            className={`cursor-pointer hover:font-bold hover:text-[#ca0211]`}
          >
            Nieuws
          </li>
          <li
            onClick={handleClick}
            className={`cursor-pointer hover:font-bold hover:text-[#ca0211]`}
          >
            Gallery
          </li>

          <li
            onClick={handleClick}
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Lid Worden
          </li>

          <li
            onClick={() => setActive(false)}
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar
