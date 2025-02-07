import React from 'react';
import { useState, useEffect } from 'react';

import ImageMoi from '../assets/images/bigImages/1024px-0698Amaura.png';
import CVfr from '../assets/files/CV_French.pdf';
import CVen from '../assets/files/CV_English.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import '../componentCSS/Main.css';
import '../componentCSS/Card.css';

import { getRarityColor } from './Variables/Getters';
import { RarityEnum } from './Variables/Enums';







const EquippedTitle = {
  Title: 'Third-Year Major Student',
  Rarity: RarityEnum.LEGENDARY
};



function Main() {



    // Détecter si la page est affichée sur un téléphone
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      // Vérifier la taille de la fenêtre au chargement
      handleResize();
  
      // Ajouter un écouteur d'événement pour les changements de taille de la fenêtre
      window.addEventListener('resize', handleResize);
  
      // Nettoyer l'écouteur d'événement lors du démontage du composant
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // Afficher un message si la page est affichée sur un téléphone
    if (isMobile) {
      return (
        <div className='Card' id='CardMobile'>
          <h3>Sorry, the mobile version is currently under development.</h3>
          <p>Please check back later, or use the desktop version!</p>
          <img src={ImageMoi} alt="Moi"/>
        </div>
      );
    }












    return (
      <div className='Card' id='MainCard'>

<div className='MainTitle'>
                <h3>Yanaël Caillot</h3>
                <hr className='titleBar'/>
            </div>

        <div className='MainFlex'>
        <img src={ImageMoi} alt="Moi" className='imageMoi'/>
        <div className='divText'>


            <div className='MainSections'>
                <div className='MainSection'>
                    <h4 className='titleSec'>Stats:</h4>
                    <p id='colorClair2'> - Level (Age): 20 <br/>
                        - Guild (Job): Student <br/>
                        - Server: France <br /></p>
                    <p id='colorClair2'>Equipped Title : <span style={{ color: getRarityColor(EquippedTitle.Rarity) }}>{EquippedTitle.Title} ({EquippedTitle.Rarity})</span></p>
                </div>

                <div className='MainSection'>
                    <h4 className='titleSec'>Character Preview:</h4>
                    <p id='colorClair2'> I am a naturally curious person and I am always eager to learn new skills and expand my knowledge in many fields. <br/>
                        Furthermore, I am a great team player, always willing to participate in projects to develop my creative skills and experience.</p>
                </div>

                <div className='MainSection'>
                    <h4 className='titleSec' >Inventory:</h4>
                    <p id='colorClair2'> - CV (English)  &nbsp;&nbsp;&nbsp;&nbsp;        <a href={CVen} download="CV_English_Yanael_Caillot.pdf" id='colorClair2'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a><br/>
                        - CV (French)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href={CVfr} download= "CV_French_Yanael_Caillot.pdf" id='colorClair2'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a><br/>
                        - GameBoy <br/>
                        - Karate black belt <br/>
                        - Electric Bass <br/>
                        See More...</p>
                </div>
            </div>


        </div>
      </div>
      </div>
    );
  }

export default Main;