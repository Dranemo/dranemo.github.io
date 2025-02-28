import React, {useState, useEffect} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import '../../componentCSS/Components/QuestPart.css';
import { StatusEnum } from '../Variables/Enums';

import { getStatusColor, getRarityColor, defaultLanguage } from '../Variables/Getters';
import PagesFile from '../Variables/Texts/PagesFile';




function QuestPart( {quest} ) {
    
    const [questOpen, setQuestOpen] = useState(false);
  const [questOpened, setQuestOpened] = useState(false);

  const changeQuestOpen = () => {
    setQuestOpen((prevQuestOpen) => !prevQuestOpen);
  };

  // Utilisation de useEffect pour surveiller quand questOpen devient false
  useEffect(() => {
    if (!questOpen) {
      // Quand questOpen devient false, attend 2 secondes avant de mettre questOpened à false
      const timer = setTimeout(() => {
        setQuestOpened(false);
      }, 1000);

      // Nettoyage du timer en cas de changement avant la fin du délai
      return () => clearTimeout(timer);
    }
  }, [questOpen]); // Ce useEffect se déclenche à chaque changement de questOpen

  // Lorsque questOpen devient true, questOpened est mis à true immédiatement
  useEffect(() => {
    if (questOpen) {
      setQuestOpened(true);
    }
  }, [questOpen]);



  
    return (
    <div className='PartQuest' onClick={changeQuestOpen} id={questOpen ? 'lighterBackground' : undefined}>
        <h4 id='colorBlue'> <FontAwesomeIcon icon={questOpen ? faCaretDown : faCaretRight} /> {quest.title[defaultLanguage.Langue]} (<span style={{color: getStatusColor(quest.status)}}>{quest.status[defaultLanguage.Langue]}</span>) - {quest.dateDesc[defaultLanguage.Langue]}</h4>
        <div className={`quest-details ${questOpen ? 'open' : ''}`}>
        {questOpened && (
            <>
                <hr className='titleBarQuest'/>

                <p><span id='colorBlue' className='titleQuests'>{PagesFile.Quests.Loc[defaultLanguage.Langue]}</span> {quest.location[defaultLanguage.Langue]}</p>

                {quest.status === StatusEnum.IN_PROGRESS ? (
                    <p><span id='colorBlue' className='titleQuests'>{PagesFile.Quests.Started[defaultLanguage.Langue]}</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span id='colorBlue' className='titleQuests'>{PagesFile.Quests.TimeUntilCompletion[defaultLanguage.Langue]}</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ) : quest.status === StatusEnum.COMPLETED ? (
                    <p><span id='colorBlue' className='titleQuests'>{PagesFile.Quests.Completed[defaultLanguage.Langue]}</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span id='colorBlue' className='titleQuests'>{PagesFile.Quests.TimeTaken[defaultLanguage.Langue]}</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ) : quest.status === StatusEnum.NOT_STARTED ? (
                    <p><span id='colorBlue' className='titleQuests'>{PagesFile.Quests.Starting[defaultLanguage.Langue]}</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span id='colorBlue' className='titleQuests'>{PagesFile.Quests.TimeExpected[defaultLanguage.Langue]}</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ): null}
                
                {quest.rewards.length > 0 && (
                    <>
                <p><span id='colorBlue' className='titleQuests'>{PagesFile.Quests.Rewards[defaultLanguage.Langue]}</span></p>
                <ul id='removeStyleList'>
                    {quest.rewards.map((reward, index) => (
                        <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                            - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                        </li>
                    ))}
                </ul>
                <p><span id='colorBlue' className='titleQuests'>{PagesFile.Quests.Desc[defaultLanguage.Langue]}</span><br/> {quest.description[defaultLanguage.Langue]}</p>
                </>)}

                </>) }
        </div>
    </div>
  );
}

export default QuestPart;
