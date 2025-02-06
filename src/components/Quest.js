import React, {useState, useEffect} from 'react';

import QuestPart from './Components/QuestPart';
import '../componentCSS/Card.css';
import '../componentCSS/Quests.css';

import { QuestTypeEnum} from './Variables/Enums';
import QuestsFile from './Variables/QuestsFile';


// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------- Composant -------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
function Quests() {
  
  const [MainQuests, setMainQuest] = useState([]);
  const [SideQuests, setSideQuest] = useState([]);

  useEffect(() => {
    const mainQuests = [];
    const sideQuests = [];

      QuestsFile.forEach((quest) => {
        switch (quest.QuestType) {
              case QuestTypeEnum.MAIN:
                mainQuests.push(quest);
              break;
              case QuestTypeEnum.SIDE:
                sideQuests.push(quest);
              break;
              default:
                console.log('Quest type not found');
              break;
        }
      });
      setMainQuest(mainQuests);
      setSideQuest(sideQuests);
  }, []);
            
            
            
            
            
            
            
            
            
    return (
            
    <div className='Card' id='QuestCard'>
        <div>
            <h2>Quest Log</h2>
            <hr className='titleBar'/>
        </div>
        <p></p>

        <div className='QuestBigPart'>
          {MainQuests.length > 0 && (
            <>
            <h3 className='questSecondTitle'>Main Quests</h3>
            
            {MainQuests.map((quest) => (
              <QuestPart quest={quest} />
            ))}
            </>
          )}

          {SideQuests.length > 0 && (
            <>
            <h3 className='questSecondTitle'>Side Quests</h3>

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
