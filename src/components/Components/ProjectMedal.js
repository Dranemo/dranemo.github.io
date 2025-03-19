import React from 'react';
import '../../componentCSS/Components/ProjectMedal.css';


import { getMedalImage, getMedalImageWhole, defaultLanguage, defaultMode } from '../Variables/Getters';
import { ModeEnum } from '../Variables/Enums';



function ProjectMedal({ ProjectStruct, showTechno = true, onClick }) {
    

    return (
        <div className={`ProjectPart flex-direction-column flex-align-center bg-color3 shadow trans-2s text-color3 hover-bg-color3 hover-shadow hover-pointer ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`} onClick={onClick}>
            <div className='ProjectTitlePart'>
                <div className='MedalImage flex-justify-content-center flex-align-center'>
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