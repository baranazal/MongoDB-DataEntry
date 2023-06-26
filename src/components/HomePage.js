import React from 'react';
import logo from '../img/logo.png';

function HomePage() {
  return (
    <div className='homepage'>
      <div className="homepage-para">
        <h4>
          Effortlessly submit <br /> incident reports with our <br /> user friendly DataEntry <br />
          Exportation website
        </h4>
      </div>
      <div  >
        <img src={logo} alt="" className='homepage-logo' />
      </div>
    </div>
  );
}

export default HomePage;
