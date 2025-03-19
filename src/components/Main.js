import React from 'react';

import { BigImageGetter } from './Variables/ImageGetter';

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
      <div className='Card bg-color2 text-color1 line-height-1-5' id='MainCard'>

        <div className='MainTitle text-align-center'>
          <h2>{PagesFile.Main.BigTitle[defaultLanguage.Langue]}</h2>
          <hr className='titleBar bg-color5'/>
        </div>

        <div className='flex-space-evenly'>
          <img src={BigImageGetter.projectPortfolio} alt="Moi" className='imageMoi'/>

          <div className='flex-direction-column'>


            <div className='MainSections'>
                <div className='MainSection'>
                    <h4 className='text-underlined'>{PagesFile.Main.Stats[defaultLanguage.Langue]}</h4>
                    <p className='text-color2'>{PagesFile.Main.Level[defaultLanguage.Langue]}20 <br/>
                        - {PagesFile.Main.Guild[defaultLanguage.Langue]}<br/>
                        - {PagesFile.Main.Server[defaultLanguage.Langue]}<br /></p>
                    <p className='text-color2'>{PagesFile.Main.EquippedTitle[defaultLanguage.Langue]}<span style={{ color: getRarityColor(PagesFile.Main.EquippedTitleTitle.Rarity) }}>{PagesFile.Main.EquippedTitleTitle.Title[defaultLanguage.Langue]} ({PagesFile.Main.EquippedTitleTitle.Rarity[defaultLanguage.Langue]})</span></p>
                </div>

                <div className='MainSection'>
                    <h4 className='text-underlined' >{PagesFile.Main.Inventory[defaultLanguage.Langue]}</h4>
                    <ul className='text-color2' id='removeStyleList'>
                      {PagesFile.Main.InventoryItems.map((item, index) => (
                        <li key={index}>
                          - {item[defaultLanguage.Langue]} {item.download === true ? (
                            <>
                              {generateAdditionalContent(item.nbspNumber[defaultLanguage.Langue])}
                              <a href={item.href} download={item.downloadLink} className='text-color2 hover-pointer'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a>
                            </>
                          ) : null}
                        </li>
                      ))}
                      {PagesFile.Main.SeeMore[defaultLanguage.Langue]}
                    </ul>
                </div>

                <div className='MainSection'>
                    <h4 className='text-underlined'>{PagesFile.Main.CharacterPreview[defaultLanguage.Langue]}</h4>
                    <p className='text-color2'>{PagesFile.Main.CharacterDescription[defaultLanguage.Langue]}<br/>
                        {PagesFile.Main.CharacterDescription2[defaultLanguage.Langue]}</p>
                </div>
            </div>


        </div>
      </div>
      </div>
    );
  }

export default Main;