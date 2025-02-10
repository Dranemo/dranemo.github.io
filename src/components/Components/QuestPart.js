import React, {useState} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import '../../componentCSS/Components/QuestPart.css';
import { StatusEnum } from '../Variables/Enums';

import { getStatusColor, getRarityColor, defaultLanguage } from '../Variables/Getters';




function QuestPart( {quest} ) {
    const [questOpen, setQuestOpen] = useState(false);
    const changeQuestOpen = () => {
        setQuestOpen(!questOpen);
    };




  
    return (
    <div className='PartQuest' onClick={changeQuestOpen}>
        <h4 id='colorBlue'> <FontAwesomeIcon icon={questOpen ? faCaretDown : faCaretRight} /> {quest.title[defaultLanguage.Langue]} (<span style={{color: getStatusColor(quest.status)}}>{quest.status[defaultLanguage.Langue]}</span>) - {quest.dateDesc[defaultLanguage.Langue]}</h4>
        <div className={`quest-details ${questOpen ? 'open' : ''}`}>
        {questOpen && (
            <>
                <hr className='titleBarQuest'/>

                <p><span id='colorBlue' className='titleQuests'>LOCATION:</span> {quest.location[defaultLanguage.Langue]}</p>

                {quest.status === StatusEnum.IN_PROGRESS ? (
                    <p><span id='colorBlue' className='titleQuests'>QUEST STARTED:</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span id='colorBlue' className='titleQuests'>TIME UNTIL COMPLETION:</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ) : quest.status === StatusEnum.COMPLETED ? (
                    <p><span id='colorBlue' className='titleQuests'>QUEST COMPLETED:</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span id='colorBlue' className='titleQuests'>TIME TAKEN:</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ) : quest.status === StatusEnum.NOT_STARTED ? (
                    <p><span id='colorBlue' className='titleQuests'>QUEST STARTING:</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span id='colorBlue' className='titleQuests'>TIME EXPECTED:</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ): null}
                
                {quest.rewards.length > 0 && (
                    <>
                <p><span id='colorBlue' className='titleQuests'>REWARDS{quest.status !== StatusEnum.COMPLETED ? ' (EXPECTED)' : ''}:</span></p>
                <ul id='removeStyleList'>
                    {quest.rewards.map((reward, index) => (
                        <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                            - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                        </li>
                    ))}
                </ul>
                <p><span id='colorBlue' className='titleQuests'>DESCRIPTION:</span><br/> {quest.description[defaultLanguage.Langue]}</p>
                </>)}

                </>) }
        </div>
    </div>
  );
}

export default QuestPart;
