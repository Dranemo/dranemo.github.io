import React, {useState, useEffect} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import '../../componentCSS/Components/QuestPart.css';
import '../../App.css';

import { StatusEnum, ModeEnum } from '../Variables/Enums';

import { getStatusColor, getRarityColor, defaultLanguage, defaultMode } from '../Variables/Getters';
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
    <div className={`PartQuest shadow hover-bg-color3 text-color5 hover-shadow hover-pointer trans-2s ${questOpen ? 'bg-color6' : 'bg-color3'} ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`} onClick={changeQuestOpen}>
        <h4 className={`text-color3 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}> <FontAwesomeIcon icon={questOpen ? faCaretDown : faCaretRight} /> {quest.title[defaultLanguage.Langue]} (<span style={{color: getStatusColor(quest.status)}}>{quest.status[defaultLanguage.Langue]}</span>) - {quest.dateDesc[defaultLanguage.Langue]}</h4>
        <div className={`overflow-hidden quest-details ${questOpen ? 'open' : ''}`}>
        {questOpened && (
            <>
                <hr className='titleBarQuest'/>

                <p><span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.Loc[defaultLanguage.Langue]}</span> {quest.location[defaultLanguage.Langue]}</p>

                {quest.status === StatusEnum.IN_PROGRESS ? (
                    <p><span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.Started[defaultLanguage.Langue]}</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.TimeUntilCompletion[defaultLanguage.Langue]}</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ) : quest.status === StatusEnum.COMPLETED ? (
                    <p><span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.Completed[defaultLanguage.Langue]}</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.TimeTaken[defaultLanguage.Langue]}</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ) : quest.status === StatusEnum.NOT_STARTED ? (
                    <p><span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.Starting[defaultLanguage.Langue]}</span> {quest.dateDesc[defaultLanguage.Langue]} <br/>
                        <span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.TimeExpected[defaultLanguage.Langue]}</span> {quest.timeDesc[defaultLanguage.Langue]}
                    </p>
                ): null}
                
                {quest.rewards.length > 0 && (
                    <>
                <p><span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.Rewards[defaultLanguage.Langue]}</span></p>
                <ul id='removeStyleList'>
                    {quest.rewards.map((reward, index) => (
                        <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                            - {reward.name[defaultLanguage.Langue]} ({reward.rarity[defaultLanguage.Langue]})
                        </li>
                    ))}
                </ul>
                <p><span className={`text-color3 text-underlined ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>{PagesFile.Quests.Desc[defaultLanguage.Langue]}</span><br/> {quest.description[defaultLanguage.Langue]}</p>
                </>)}

                </>) }
        </div>
    </div>
  );
}

export default QuestPart;
