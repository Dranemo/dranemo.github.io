import React from 'react';
import '../../componentCSS/Components/ProjectMedal.css';


import { getMedalImage } from '../Variables/Getters';



function ProjectMedal({ ProjectStruct, showTechno = true, onClick }) {

    

    

    

    return (
        <div className='ProjectPart' onClick={onClick}>
            <div className='ProjectTitlePart'>
                <div className='MedalImage'>
                    <img src={getMedalImage(ProjectStruct.badgeImg.rarity)} alt={`${ProjectStruct.badgeImg.rarity} medal`} className='Medal' />
                    <img src={ProjectStruct.badgeImg.image} alt={`image project`} className='projectImg' />
                </div>
                <div className='ProjectTitle'>
                    <h3>{ProjectStruct.badgeTitle}</h3>
                    {showTechno && <h4 style={{ textDecoration: 'underline' }}>{ProjectStruct.techno}</h4>}
                    <h4 style={{ textDecoration: 'underline' }}>{ProjectStruct.type}</h4>
                    <p>{ProjectStruct.dateDesc}</p>
                    <p>{ProjectStruct.timeDesc}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectMedal;