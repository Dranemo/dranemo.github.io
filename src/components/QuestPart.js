import React, {useState} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import '../componentCSS/QuestPart.css';

// Définir l'enum pour le status
const StatusEnum = {
    IN_PROGRESS: 'In Progress',
    COMPLETED: 'Completed',
    NOT_STARTED: 'Not Started'
  };

// Definir l'enum pour les raretés
const RarityEnum = {
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare',
    EPIC: 'Epic',
    LEGENDARY: 'Legendary'
  };


function QuetsPart( {title, status, location, dateDesc, timeDesc, rewards, description} ) {
    const [questOpen, setQuestOpen] = useState(false);
    const changeQuestOpen = () => {
        setQuestOpen(!questOpen);
    };

    // Définir la couleur en fonction du status
    const getStatusColor = (status) => {
        switch (status) {
            case StatusEnum.IN_PROGRESS:
                return '#ff3131';
            case StatusEnum.COMPLETED:
                return '#5ea041';
            case StatusEnum.NOT_STARTED:
                return '#ff914d';
            default:
                return 'black';
        }
    };

    // Définir la couleur en fonction du status
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
    <div className='PartQuest' onClick={changeQuestOpen}>
        <h4 id='colorBlue'> <FontAwesomeIcon icon={questOpen ? faCaretDown : faCaretRight} /> {title} (<span style={{color: getStatusColor(status)}}>{status}</span>) - {dateDesc}</h4>
        {questOpen && (
            <div>
                <hr className='titleBarQuest'/>

                <p><span id='colorBlue' className='titleQuests'>LOCATION:</span> {location}</p>

                {status === StatusEnum.IN_PROGRESS ? (
                    <p><span id='colorBlue' className='titleQuests'>QUEST STARTED:</span> {dateDesc} <br/>
                        <span id='colorBlue' className='titleQuests'>TIME UNTIL COMPLETION:</span> {timeDesc}
                    </p>
                ) : status === StatusEnum.COMPLETED ? (
                    <p><span id='colorBlue' className='titleQuests'>QUEST COMPLETED:</span> {dateDesc} <br/>
                        <span id='colorBlue' className='titleQuests'>TIME TAKEN:</span> {timeDesc}
                    </p>
                ) : status === StatusEnum.NOT_STARTED ? (
                    <p><span id='colorBlue' className='titleQuests'>QUEST STARTING:</span> {dateDesc} <br/>
                        <span id='colorBlue' className='titleQuests'>TIME EXPECTED:</span> {timeDesc}
                    </p>
                ): null}
                
                <p><span id='colorBlue' className='titleQuests'>REWARDS{status !== StatusEnum.COMPLETED ? ' (EXPECTED)' : ''}:</span></p>
                <ul id='removeStyleList'>
                    {rewards.map((reward, index) => (
                        <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                            - {reward.name} ({reward.rarity})
                        </li>
                    ))}
                </ul>
                <p><span id='colorBlue' className='titleQuests'>DESCRIPTION:</span><br/> {description}</p>
                 
            </div>
        )}
    </div>
  );
}

export default QuetsPart;
