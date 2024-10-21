import React from 'react';

import ImageMoi from '../assets/images/1024px-0698Amaura.png';
import CVfr from '../assets/files/CV_French.pdf';
import CVen from '../assets/files/CV_English.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';

import '../componentCSS/Main.css';
import '../componentCSS/Card.css';


function Main() {
    return (
      <div className='Card' id='MainCard'>
        <img src={ImageMoi} alt="Moi" className='imageMoi'/>
        <div className='divText'>
            <div className='MainTitle' id='colorBlue'>
                <h3>Yanaël Caillot</h3>
                <hr className='titleBar'/>
            </div>
            <div className='MainSections'>
                <div className='MainSection'>
                    <h4 className='titleSec' id='colorBlue'>Stats:</h4>
                    <p> - Level (Age): 19 <br/>
                        - Guild (Job): Student <br/>
                        - Server: France <br />
                        - Titles: </p>
                </div>

                <div className='MainSection'>
                    <h4 className='titleSec' id='colorBlue'>Character Preview:</h4>
                    <p> I am a naturally curious person and I am always eager to learn new skills and expand my knowledge in many fields. <br/>
                        Furthermore, I am a great team player, always willing to participate in projects to develop my creative skills and experience.</p>
                </div>

                <div className='MainSection'>
                    <h4 className='titleSec' id='colorBlue'>Inventory:</h4>
                    <p> - CV (English)  &nbsp;&nbsp;&nbsp;&nbsp;        <a href={CVen} download="CV_English_Yanael_Caillot.pdf" id='colorBlue'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a><br/>
                        - CV (French)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href={CVfr} download= "CV_French_Yanael_Caillot.pdf" id='colorBlue'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a><br/>
                        - GameBoy <br/>
                        - Karate black belt <br/>
                        See More...</p>
                </div>
            </div>


        </div>
      </div>
    );
  }

export default Main;