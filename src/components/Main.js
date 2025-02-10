import React from 'react';
import { useState, useEffect } from 'react';

import ImageMoi from '../assets/images/bigImages/1024px-0698Amaura.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import '../componentCSS/Main.css';
import '../componentCSS/Card.css';

import { getRarityColor, defaultLanguage } from './Variables/Getters';

import PagesFile from './Variables/Texts/PagesFile';







// ----------------------------------------------------------------------------------- //
// ------------------------ Le Texte se trouve dans PagesFiles ----------------------- //
// ----------------------------------------------------------------------------------- //

function Main() {



// Fonction pour générer les éléments supplémentaires
const generateAdditionalContent = (nbspNumber) => {
  let content = [];
  for (let i = 0; i < nbspNumber; i++) {
      content.push(<span key={i}>&nbsp;</span>);
  }
  return content;
};








    return (
      <div className='Card' id='MainCard'>

      <div className='MainTitle'>
                <h3>{PagesFile.Main.BigTitle[defaultLanguage.Langue]}</h3>
                <hr className='titleBar'/>
            </div>

        <div className='MainFlex'>
        <img src={ImageMoi} alt="Moi" className='imageMoi'/>
        <div className='divText'>


            <div className='MainSections'>
                <div className='MainSection'>
                    <h4 className='titleSec'>{PagesFile.Main.Stats[defaultLanguage.Langue]}</h4>
                    <p id='colorClair2'>{PagesFile.Main.Level[defaultLanguage.Langue]}20 <br/>
                        - {PagesFile.Main.Guild[defaultLanguage.Langue]}<br/>
                        - {PagesFile.Main.Server[defaultLanguage.Langue]}<br /></p>
                    <p id='colorClair2'>{PagesFile.Main.EquippedTitle[defaultLanguage.Langue]}<span style={{ color: getRarityColor(PagesFile.Main.EquippedTitleTitle.Rarity) }}>{PagesFile.Main.EquippedTitleTitle.Title[defaultLanguage.Langue]} ({PagesFile.Main.EquippedTitleTitle.Rarity[defaultLanguage.Langue]})</span></p>
                </div>

                <div className='MainSection'>
                    <h4 className='titleSec'>{PagesFile.Main.CharacterPreview[defaultLanguage.Langue]}</h4>
                    <p id='colorClair2'>{PagesFile.Main.CharacterDescription[defaultLanguage.Langue]}<br/>
                        {PagesFile.Main.CharacterDescription2[defaultLanguage.Langue]}</p>
                </div>

                <div className='MainSection'>
                    <h4 className='titleSec' >{PagesFile.Main.Inventory[defaultLanguage.Langue]}</h4>
                    <ul id='removeStyleList'>
                      {PagesFile.Main.InventoryItems.map((item, index) => (
                        <li key={index}>
                          - {item[defaultLanguage.Langue]} {item.download === true ? (
                            <>
                              {generateAdditionalContent(item.nbspNumber[defaultLanguage.Langue])}
                              <a href={item.href} download={item.downloadLink} id='colorClair2'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a>
                            </>
                          ) : null}
                        </li>
                      ))}
                      {PagesFile.Main.SeeMore[defaultLanguage.Langue]}
                    </ul>
                </div>
            </div>


        </div>
      </div>
      </div>
    );
  }

export default Main;