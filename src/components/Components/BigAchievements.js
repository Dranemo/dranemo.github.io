import React, {useState, useEffect} from 'react';

import { getRarityColor, defaultLanguage, defaultMode } from "../Variables/Getters";
import { Arrow } from '../Variables/ImageGetter';

import '../../componentCSS/Components/BigAchievement.css';
import { ModeEnum, RewardsItemEnum, RarityEnum } from '../Variables/Enums';
import PagesFile from '../Variables/Texts/PagesFile';



function BigAchievement({displayedProject}) {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [displayImage, setDisplayImage] = useState(false);

    const changeCarouselIndex = (direction) => {
        console.log('changeCarouselIndex', direction);
        if (direction === 'next' && carouselIndex < displayedProject.details.carousel.length - 1) {
            setCarouselIndex(carouselIndex + 1);
        } else if (direction === 'prev' && carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1);
        }
    };



    const [Items, setItems] = useState([]);
    const [Skills, setSkills] = useState([]);
    const [Titles, setTitles] = useState([]);

    useEffect(() => {
        const items = [];
        const skills = [];
        const titles = [];


      displayedProject.details.rewards.forEach((reward) => {

          switch (reward.type) {
              case RewardsItemEnum.ITEM:
                  items.push(reward);
                  break;
                case RewardsItemEnum.SKILL:
                    skills.push(reward);
                    break;
                case RewardsItemEnum.TITLE:
                    titles.push(reward);
                    break;
              default:
                  break;
          }
      });


    items.sort((a, b) => Object.keys(RarityEnum).indexOf(b.rarity.English.toUpperCase()) - Object.keys(RarityEnum).indexOf(a.rarity.English.toUpperCase()));
    skills.sort((a, b) => Object.keys(RarityEnum).indexOf(b.rarity.English.toUpperCase()) - Object.keys(RarityEnum).indexOf(a.rarity.English.toUpperCase()));
    titles.sort((a, b) => Object.keys(RarityEnum).indexOf(b.rarity.English.toUpperCase()) - Object.keys(RarityEnum).indexOf(a.rarity.English.toUpperCase()));
      

      setItems(items);
      setSkills(skills);
      setTitles(titles);
    }, []);




    

    return (  

        <>
        {displayImage === true && displayedProject.details.carousel && (
            <>
            <div className='overlay2 bg-color-semi-black' onClick={() => setDisplayImage(false)}></div>
            <img src={displayedProject.details.carousel[carouselIndex].image} className='bigImage' alt={displayedProject.details.carousel[carouselIndex].alt} onClick={() => setDisplayImage(false)}/>
            </>
        )}
        






        
    




        <div className={`ProjectDetails bg-color3 shadow text-color5  ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>
            <img src={displayedProject.badgeImg.image} alt={`image project`} className='projectImgDesc' />
                
            <h2 className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{displayedProject.badgeTitle[defaultLanguage.Langue]}</h2>
            <hr className={`titleBarProj bg-color7 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <p>{displayedProject.dateDesc[defaultLanguage.Langue]}</p>
            <p>{displayedProject.timeDesc[defaultLanguage.Langue]}</p>
            <p>{displayedProject.type[defaultLanguage.Langue]}</p>
            <hr className={`titleBarProj bg-color7 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>

            <div>
                <h3 className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{displayedProject.details.title[defaultLanguage.Langue]}</h3>
                <hr className={`titleBarProj bg-color7 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>

                    
                <p className='DescProject' dangerouslySetInnerHTML={{ __html: displayedProject.details.description[defaultLanguage.Langue] }}></p>
                
                {(Titles.length > 0 || Skills.length > 0 || Items.length > 0) && (
                <>
                    { Titles.length > 0 && (
                    <>
                        <hr className={`titleBarProj bg-color7 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
                        <p className={`text-underlined text-color3 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}> {PagesFile.Achievements.Rewards[defaultLanguage.Langue]}</p>
                        <p>{RewardsItemEnum.TITLE[defaultLanguage.Langue]}:</p>
                        <ul id='removeStyleList'>
                            {Titles.map((reward, index) => (
                                <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                                    - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                                </li>
                            ))}
                        </ul>
                    </>)}

                    {Skills.length > 0 && (
                    <>
                        <p>{RewardsItemEnum.SKILL[defaultLanguage.Langue]}:</p>
                        <ul id='removeStyleList'>
                            {Skills.map((reward, index) => (
                                <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                                    - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                                </li>
                            ))}
                        </ul>
                    </>)}
                    {Items.length > 0 && (
                    <>
                        <p>{RewardsItemEnum.ITEM[defaultLanguage.Langue]}:</p>
                        <ul id='removeStyleList'>
                            {Items.map((reward, index) => (
                                <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                                    - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                                </li>
                            ))}
                        </ul>
                    </>)}
                </>)}
            </div>


            {displayedProject.details.carousel && displayedProject.details.carousel.length > 0 && (
                <>
                <hr className={`titleBarProj bg-color7 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`} id='BarFar'/>
                <div className='carouselDiv flex-space-evenly'>
                    <div className="arrowDiv hover-pointer" onClick={() => changeCarouselIndex('prev')}>
                    {carouselIndex > 0 && (
                        <img src={Arrow.left} className='arrowImg'/>
                    )}
                    </div>

                    <img src={displayedProject.details.carousel[carouselIndex].image} className='divInCarousel shadow trans-2s hover-pointer hover-shadow' id="buttonAch" alt={displayedProject.details.carousel[carouselIndex].alt} onClick={() => setDisplayImage(true)}/>
                    
                    <div className="arrowDiv hover-pointer" onClick={() => changeCarouselIndex('next')}>
                    {displayedProject.details.carousel.length > carouselIndex + 1 && (
                        <img src={Arrow.right} className='arrowImg'/>
                    )}
                    </div>
                    
                </div></>
            )}

            
            {displayedProject.links && displayedProject.links.length > 0 && (
                <div className='flex-direction-column flex-align-center'>
                    <hr className={`titleBarProj bg-color7 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`} id='BarFar'/>
                    {displayedProject.links.map((link, index) => (
                        <a href={link.url} target='_blank' rel='noreferrer' key={index} className={`link bg-color7 text-color4 shadow trans-2s hover-pointer hover-shadow ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`} id='buttonAch'>
                            <p>{link.name}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default BigAchievement;