import React, {useState} from 'react';

import { getRarityColor, defaultLanguage } from "../Variables/Getters";
import { Arrow } from '../Variables/ImageGetter';

import '../../componentCSS/Components/BigAchievement.css';



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

    

    return (  

        <>
        {displayImage === true && displayedProject.details.carousel && (
            <>
            <div className='overlay2 bg-color-semi-black' onClick={() => setDisplayImage(false)}></div>
            <img src={displayedProject.details.carousel[carouselIndex].image} className='bigImage' alt={displayedProject.details.carousel[carouselIndex].alt} onClick={() => setDisplayImage(false)}/>
            </>
        )}
        






        
    




        <div className='ProjectDetails bg-color3 shadow text-color-black'>
            <img src={displayedProject.badgeImg.image} alt={`image project`} className='projectImgDesc' />
                
            <h2 className='text-color3 text-underlined'>{displayedProject.badgeTitle[defaultLanguage.Langue]}</h2>
            <hr className='titleBarProj bg-color7'/>
            <p>{displayedProject.dateDesc[defaultLanguage.Langue]}</p>
            <p>{displayedProject.timeDesc[defaultLanguage.Langue]}</p>
            <hr className='titleBarProj2 bg-color7'/>

            <div>
                <h3 className='text-color3 text-underlined'>{displayedProject.details.title[defaultLanguage.Langue]}</h3>
                <hr className='titleBarProj bg-color7'/>

                    
                <p className='DescProject' dangerouslySetInnerHTML={{ __html: displayedProject.details.description[defaultLanguage.Langue] }}></p>
                <ul id='removeStyleList'>
                    {displayedProject.details.rewards.map((reward, index) => (
                        <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                            - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                        </li>
                    ))}
                </ul>
            </div>


            {displayedProject.details.carousel && displayedProject.details.carousel.length > 0 && (
                <>
                <hr className='titleBarProj bg-color7' id='BarFar'/>
                <div className='carouselDiv flex-space-evenly'>
                    <div className="arrowDiv hover-pointer" onClick={() => changeCarouselIndex('prev')}>
                    {carouselIndex > 0 && (
                        <img src={Arrow.left} className='arrowImg'/>
                    )}
                    </div>

                    <img src={displayedProject.details.carousel[carouselIndex].image} className='divInCarousel shadow trans-2s hover-pointer hover-shadow' id="buttonBrown" alt={displayedProject.details.carousel[carouselIndex].alt} onClick={() => setDisplayImage(true)}/>
                    
                    <div className="arrowDiv hover-pointer" onClick={() => changeCarouselIndex('next')}>
                    {displayedProject.details.carousel.length > carouselIndex + 1 && (
                        <img src={Arrow.right} className='arrowImg'/>
                    )}
                    </div>
                    
                </div></>
            )}

            
            {displayedProject.links && displayedProject.links.length > 0 && (
                <div className='flex-direction-column flex-align-center'>
                    <hr className='titleBarProj bg-color7' id='BarFar'/>
                    {displayedProject.links.map((link, index) => (
                        <a href={link.url} target='_blank' rel='noreferrer' key={index} className='link bg-color7 text-color4 shadow trans-2s hover-pointer hover-shadow' id='buttonBrown'>
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