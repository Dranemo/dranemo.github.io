import React from 'react';
import '../../componentCSS/Components/ProjectMedal.css';


import { getMedalImage, getMedalImageWhole, defaultLanguage } from '../Variables/Getters';



function ProjectMedal({ ProjectStruct, showTechno = true, onClick }) {
    document.addEventListener("DOMContentLoaded", function() {
        const medal = document.querySelector('.Medal');
        const projectImg = document.querySelector('.MedalImageCenter');
    
        if (medal && projectImg) {
            const medalHeight = medal.offsetHeight;
            const newHeight = medalHeight * 0.7;
            projectImg.style.height = `${newHeight}px`;
            projectImg.style.width = `${newHeight}px`;
        }
    });



    return (
        <div className='ProjectPart' onClick={onClick}>
            <div className='ProjectTitlePart'>
                <div className='MedalImage'>
                    <img src={getMedalImageWhole(ProjectStruct.badgeImg.rarity)} alt={`${ProjectStruct.badgeImg.rarity} whole medal`} className='Medal' />
                    <div className='MedalImageCenter'>
                        <img src={ProjectStruct.badgeImg.image} alt={`image project`} className='projectImg' />
                    </div>
                    <img src={getMedalImage(ProjectStruct.badgeImg.rarity)} alt={`${ProjectStruct.badgeImg.rarity} medal`} className='Medal' id="MedalForward" />
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