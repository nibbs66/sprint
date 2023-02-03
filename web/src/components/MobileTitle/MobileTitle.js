import React from 'react';
import logo from '../../../public/images/img.png'

const MobileTitle = () => {
  return (
    <div className={`lg:hidden flex flex-col items-center space-y-4`}>
      <div>
        <img src={logo} alt={``} />
      </div>
      <div className={`mobile font-thin italic text-4xl tracking-wider text-white`}>
        <span>Brabant Park</span>
      </div>
    </div>
  );
};

export default MobileTitle;
