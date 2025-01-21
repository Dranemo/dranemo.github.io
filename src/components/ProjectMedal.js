import React from 'react';
import '../componentCSS/ProjectMedal.css';

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

function ProjectMedal({ badgeTitle, badgeImg, techno, dateDesc, timeDesc, onClick }) {

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

    

    

    return (
        <div className='ProjectPart'onClick={onClick}>
                <div className='ProjectTitlePart' >
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
        </div>
    );
}

export default ProjectMedal;