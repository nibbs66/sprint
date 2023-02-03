import React from 'react'

import { EnvelopeIcon, PhoneIcon, HomeIcon } from '@heroicons/react/24/outline'

import monkey from '../../../public/images/monkey.png'
const Footer = () => {
  return (
    <div className={`bg-joggers bg-cover bg-center bg-no-repeat`}>
      <div className={`mt-5 h-full w-full bg-black/50 py-16`}>
        <div className={`flex items-center justify-around`}>
          <div className={`flex flex-col gap-4`}>
            <span className={`flex items-center space-x-2 text-white`}>
              <EnvelopeIcon className={`h-5 w-5 text-white`} />
              <span>brabantpark@avsprint.nl</span>
            </span>
            <span className={`flex items-center space-x-2 text-white`}>
              <PhoneIcon className={`h-5 w-5 text-white`} />
              <span>06 28429376</span>
            </span>
          </div>
          <div className={`flex items-center justify-center gap-5 text-white`}>
            <span>Website by</span>
            <div className={`h-10 w-10 cursor-pointer`}>
              <img
                src={monkey}
                alt={``}

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
