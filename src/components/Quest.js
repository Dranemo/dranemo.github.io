import React, {useState, useEffect} from 'react';

import QuestPart from './Components/QuestPart';
import '../componentCSS/Card.css';
import '../componentCSS/Quests.css';

import { QuestTypeEnum, StatusEnum} from './Variables/Enums';
import QuestsFile from './Variables/Texts/QuestsFile';
import PagesFile from './Variables/Texts/PagesFile';
import { defaultLanguage } from './Variables/Getters';


// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------- Composant -------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
function Quests() {
  
  const [MainQuests, setMainQuest] = useState([]);
  const [SideQuests, setSideQuest] = useState([]);

  useEffect(() => {
    const mainQuests = [];
    const sideQuests = [];

    const mainProgress = [];
    const sideProgress = [];

    const mainNotStarted = [];
    const sideNotStarted = [];

      QuestsFile.forEach((quest) => {
        switch (quest.QuestType) {
              case QuestTypeEnum.MAIN:
                switch (quest.status) {
                  case StatusEnum.COMPLETED:
                    mainQuests.push(quest);
                    break;
                  case StatusEnum.IN_PROGRESS:
                    mainProgress.push(quest);
                  break;
                  default:
                    mainNotStarted.push(quest);
                  break;
                }
              break;
              case QuestTypeEnum.SIDE:
                switch (quest.status) {
                  case StatusEnum.COMPLETED:
                    sideQuests.push(quest);
                    break;
                  case StatusEnum.IN_PROGRESS:
                    sideProgress.push(quest);
                  break;
                  default:
                    sideNotStarted.push(quest);
                  break;
                }
              break;
              default:
                console.log('Quest type not found');
              break;
        }
      });

      mainProgress.forEach((quest) => {
        mainQuests.push(quest);
      });
      sideProgress.forEach((quest) => {
        sideQuests.push(quest);
      });

      mainNotStarted.forEach((quest) => {
        mainQuests.push(quest);
      });
      sideNotStarted.forEach((quest) => {
        sideQuests.push(quest);
      });

      setMainQuest(mainQuests);
      setSideQuest(sideQuests);
  }, []);
            
            
            
            
            
            
            
            
            
    return (
            
    <div className='Card' id='QuestCard'>
        <div>
            <h2>{PagesFile.Quests.Title[defaultLanguage.Langue]}</h2>
            <hr className='titleBar'/>
        </div>
        <p></p>

        <div className='QuestBigPart'>
          {MainQuests.length > 0 && (
            <>
            <h3 className='questSecondTitle'>{QuestTypeEnum.MAIN[defaultLanguage.Langue]}</h3>
            
            {MainQuests.map((quest) => (
              <QuestPart quest={quest} />
            ))}
            </>
          )}

          {SideQuests.length > 0 && (
            <>
            <h3 className='questSecondTitle'>{QuestTypeEnum.SIDE[defaultLanguage.Langue]}</h3>

            {SideQuests.map((quest) => (
              <QuestPart quest={quest} />
            ))}
            </>
          )}

        </div>

    </div>
  );
}

export default Quests;
