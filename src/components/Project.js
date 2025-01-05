import React, { useState } from 'react';
import '../componentCSS/Project.css';

import woodenMedal from '../assets/images/woodMedal.png';
import ironMedal from '../assets/images/ironMedal.png';
import bronzeMedal from '../assets/images/bronzeMedal.png';
import silverMedal from '../assets/images/silverMedal.png';
import goldMedal from '../assets/images/goldMedal.png';



const RarityEnum = {
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare',
    EPIC: 'Epic',
    LEGENDARY: 'Legendary'
};





function Project({ badgeTitle, badgeImg, techno, dateDesc, timeDesc, details }) {
    const [projectOpen, setProjectOpen] = useState(false);

    const toggleProjectOpen = () => {
        setProjectOpen(!projectOpen);
    };

    const getMedalImage = (rarity) => {
        switch (rarity) {
            case RarityEnum.COMMON:
                return woodenMedal;
            case RarityEnum.UNCOMMON:
                return ironMedal;
            case RarityEnum.RARE:
                return bronzeMedal;
            case RarityEnum.EPIC:
                return silverMedal;
            case RarityEnum.LEGENDARY:
                return goldMedal;
            default:
                return null;
        }
    };

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case RarityEnum.COMMON:
                return '#737373';
            case RarityEnum.UNCOMMON:
                return '#5ea041';
            case RarityEnum.RARE:
                return '#004aad';
            case RarityEnum.EPIC:
                return '#8c52ff';
            case RarityEnum.LEGENDARY:
                return '#b8860b';
            default:
                return 'black';
        }
    };

    

    return (
        <div className='ProjectPart'>
                <div className='ProjectTitlePart' onClick={toggleProjectOpen} style={{ width: projectOpen ? '90%' : '20vw' }}>
                    <div className='MedalImage'>
                        <img src={getMedalImage(badgeImg.rarity)} alt={`${badgeImg.rarity} medal`} className='Medal' />
                        <img src={badgeImg.image} alt={`image project`} className='projectImg' />
                    </div>
                    <div className='ProjectTitle'>
                        <h3>{badgeTitle}</h3>
                        <h4 style={{ textDecoration: 'underline' }}>{techno}</h4>
                        <p>{dateDesc}</p>
                        <p>{timeDesc}</p>
                    </div>
                </div>

            {projectOpen && (
                <div className='ProjectDetails'>
                    <img src={badgeImg.image} alt={`image project`} className='projectImgDesc' />
                    
                    <h2 id='colorBlue'>{badgeTitle}</h2>
                    <hr className='titleBarProj'/>
                    <p>{dateDesc}</p>
                    <p>{timeDesc}</p>
                    <hr className='titleBarProj2'/>

                    <div>
                        <h3>{details.title}</h3>
                        <hr className='titleBarProj'/>

                        
                        <p className='DescProject'>{details.description}</p>
                        <ul id='removeStyleList'>
                            {details.rewards.map((reward, index) => (
                                <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                                    - {reward.name} ({reward.rarity})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
