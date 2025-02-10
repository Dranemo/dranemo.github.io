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
            {console.log('displayImage', displayImage)}
            <div className='overlay2' onClick={() => setDisplayImage(false)}></div>
            <img src={displayedProject.details.carousel[carouselIndex].image} className='bigImage' alt={displayedProject.details.carousel[carouselIndex].alt} onClick={() => setDisplayImage(false)}/>
            </>
        )}
        






        
    




        <div className='ProjectDetails'>
            <img src={displayedProject.badgeImg.image} alt={`image project`} className='projectImgDesc' />
                
            <h2 id='colorBlue'>{displayedProject.badgeTitle[defaultLanguage.Langue]}</h2>
            <hr className='titleBarProj'/>
            <p>{displayedProject.dateDesc[defaultLanguage.Langue]}</p>
            <p>{displayedProject.timeDesc[defaultLanguage.Langue]}</p>
            <hr className='titleBarProj2'/>

            <div>
                <h3 id='colorBlue'>{displayedProject.details.title[defaultLanguage.Langue]}</h3>
                <hr className='titleBarProj'/>

                    
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
                <hr className='titleBarProj' id='BarFar'/>
                <div className='carouselDiv'>
                    <div className="arrowDiv" onClick={() => changeCarouselIndex('prev')}>
                    {carouselIndex > 0 && (
                        <img src={Arrow.left} className='arrowImg' id="buttonBrown"/>
                    )}
                    </div>

                    <img src={displayedProject.details.carousel[carouselIndex].image} className='divInCarousel' id="buttonBrown" alt={displayedProject.details.carousel[carouselIndex].alt} onClick={() => setDisplayImage(true)}/>
                    
                    <div className="arrowDiv" onClick={() => changeCarouselIndex('next')}>
                    {displayedProject.details.carousel.length > carouselIndex + 1 && (
                        <img src={Arrow.right} className='arrowImg' id="buttonBrown"/>
                    )}
                    </div>
                    
                </div></>
            )}

            
            {displayedProject.links && displayedProject.links.length > 0 && (
                <div className='linksDiv'>
                    <hr className='titleBarProj' id='BarFar'/>
                    {displayedProject.links.map((link, index) => (
                        <a href={link.url} target='_blank' rel='noreferrer' key={index} className='link' id='buttonBrown'>
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