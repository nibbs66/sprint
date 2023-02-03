import React from 'react'



import Facebook from 'src/components/icons/Facebook'
import Twitter from 'src/components/icons/Twitter'
import YouTube from 'src/components/icons/YouTube'
import logo from '../../../public/images/img.png'

const Navbar = () => {
  //bg-black/30
  return (
    <nav className={`absolute z-10 hidden w-full bg-black/40 lg:block `}>
      <div className="flex h-full w-full items-center justify-between py-12 px-10">
        <div className={`cursor-pointer`}>
          <img
            src={logo}
            alt={``}
            layout={`intrinsic`}
            objectFit={`contain`}
          />
        </div>

        <ul className={`flex items-center space-x-10 uppercase text-white  `}>
          <li
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Over Ons
          </li>
          <li
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Nieuws
          </li>
          <li
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Gallery
          </li>

          <li
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Lid Worden
          </li>

          <li
            className={`cursor-pointer hover:font-semibold hover:text-[#ca0211]`}
          >
            Contact
          </li>
        </ul>
        <div className={`flex items-center space-x-5`}>
          <div className={`cursor-pointer rounded-full bg-[#ca0211] p-2`}>
            <Facebook width={`w-6`} height={`h-6`} text={`text-white`} />
          </div>
          <div className={`cursor-pointer rounded-full bg-[#ca0211] p-2`}>
            <Twitter width={`w-6`} height={`h-6`} text={`text-white`} />
          </div>
          <div className={`cursor-pointer rounded-full bg-[#ca0211] p-2`}>
            <YouTube width={`w-6`} height={`h-6`} text={`text-white`} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
