import React from 'react';
import '../../componentCSS/Components/ProjectMedal.css';


import { getMedalImage, defaultLanguage } from '../Variables/Getters';



function ProjectMedal({ ProjectStruct, showTechno = true, onClick }) {
    return (
        <div className='ProjectPart' onClick={onClick}>
            <div className='ProjectTitlePart'>
                <div className='MedalImage'>
                    <img src={ProjectStruct.badgeImg.image} alt={`image project`} className='projectImg' />
                    <img src={getMedalImage(ProjectStruct.badgeImg.rarity)} alt={`${ProjectStruct.badgeImg.rarity} medal`} className='Medal' />
                </div>
                <div className='ProjectTitle'>
                    <h3>{ProjectStruct.badgeTitle[defaultLanguage.Langue]}</h3>
                    {showTechno && <h4 style={{ textDecoration: 'underline' }}>{ProjectStruct.techno[defaultLanguage.Langue]}</h4>}
                </div>
            </div>
        </div>
    );
}

export default ProjectMedal;