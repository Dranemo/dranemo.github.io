import React from 'react';

import Gmail from '../assets/images/gmail.png';
import Discord from '../assets/images/discord.png';
import LinkedIn from '../assets/images/linkedin.png';

import '../componentCSS/Support.css';

function Support() {

  return (
    <div className='Card' id='CardSupport'>
        <div>
            <h2 id='colorBlue'>Support</h2>
            <hr className='titleBar'/>
        </div>
        <p></p>
        <div className='SupportLogos'>
          <a href='mailto:ycaillot[at]gaming.com'>
            <img src={Gmail} alt='Gmail' className='SupportLogo' />
          </a>
          {/* <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
            <img src={Discord} alt='Discord' className='SupportLogo'/>
          </a> */}
          <a href='https://www.linkedin.com/in/ycaillot/' target='_blank' rel='noopener noreferrer'>
            <img src={LinkedIn} alt='LinkedIn' className='SupportLogo'/>
          </a>
        </div>

        <p></p>


    </div>
  );
}

export default Support;