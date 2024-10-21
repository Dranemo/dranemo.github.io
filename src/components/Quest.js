import React from 'react';

import QuetsPart from './QuestPart';
import '../componentCSS/Card.css';
import '../componentCSS/Quests.css';


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


// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ Définir les quêtes ------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------ Main Quests ------------------------------------------------
const GamingCampusStudent = {
  title: "Develop Game Developer Skills",
  status: StatusEnum.IN_PROGRESS,
  location: "Gaming Campus - Grande Arche de la Défense, Paris",
  dateDesc: "Sept. 2022",
  timeDesc: "3 years",
  rewards: [
    {name: "[Item] Bachelor in Computer Science", rarity: RarityEnum.RARE},
    {name: "[Title] Game Developer", rarity: RarityEnum.EPIC},
    {name: "[Skill] Game Development", rarity: RarityEnum.EPIC},
    {name: "[Skill] Project Management", rarity: RarityEnum.UNCOMMON}
  ],
  description: "You’re currently navigating your way through the academic world at Gaming Campus, steadily progressing toward the prestigious title of Game Developer. Throughout this challenging quest, you’ve already faced many technical trials, learning vital skills for your future role. The final boss (your graduation) still awaits, but you're well on your way to victory!"
};

const DevelopBasicSkills = {
  title: "Develop Basic Skills",
  status: StatusEnum.COMPLETED,
  location: "Lycée Jules Ferry - Coulommiers",
  dateDesc: "July 2022",
  timeDesc: "3 years (Sept 2019 - July 2022)",
  rewards: [
    {name: "[Item] Baccalauréat", rarity: RarityEnum.UNCOMMON},
    {name: "[Title] Freshman", rarity: RarityEnum.COMMON},
    {name: "[Skill] Foundation in Physics and Biology", rarity: RarityEnum.COMMON}
  ],
  description: "This quest saw you complete your high school education at Lycée Jules Ferry, with a special focus on Physics and Biology. Your success in this quest was recognized with honors, unlocking the next stage of your academic journey."
};



// ------------------------------------------------ Side Quests ------------------------------------------------
const PGWVolunteeringVolume3 = {
  title: "Student Volunteering PGW - Volume 3",
  status: StatusEnum.NOT_STARTED,
  location: "Paris Games Week - Paris",
  dateDesc: "October 2024",
  timeDesc: "5 days",
  rewards: [
    {name: "[Skill] Customer Communication", rarity: RarityEnum.COMMON},
    {name: "[Title] PGW Veteran", rarity: RarityEnum.UNCOMMON}
  ],
  description: "Having completed your third year volunteering at Paris Games Week, you've now earned the title of PGW Veteran. Assisting the Jeux Made In France stand, you’ve refined your customer communication and event management skills, supporting the gaming community through your service."
};

const StudentCouncilCommunicationDept = {
  title: "Student Council - Communication Dept",
  status: StatusEnum.COMPLETED,
  location: "Gaming Campus - Grande Arche de la Défense, Paris",
  dateDesc: "May 2024",
  timeDesc: "9 months",
  rewards: [
    {name: "[Skill] Social Media Management", rarity: RarityEnum.UNCOMMON},
    {name: "[Skill] Content Creation", rarity: RarityEnum.UNCOMMON},
    {name: "[Item] Creative Toolkit (Visual & Copywriting)", rarity: RarityEnum.COMMON}
  ],
  description: "As head of the Communication Department within the Student Council, you took on the responsibility of crafting social media posts and managing public engagement. This quest bolstered your creativity and strengthened your ability to connect with a wide audience."
};

const PGWVolunteeringVolume2 = {
  title: "Student Volunteering PGW - Volume 2",
  status: StatusEnum.COMPLETED,
  location: "Paris Games Week - Paris",
  dateDesc: "October 2023",
  timeDesc: "5 days",
  rewards: [
    {name: "[Skill] Customer Communication", rarity: RarityEnum.COMMON},
    {name: "[Title] PGW Adventurer", rarity: RarityEnum.UNCOMMON}
  ],
  description: "Volunteering at the EVA stand during the Paris Games Week 2023 was your second successful foray into event organization. You expanded on your customer communication skills and contributed to creating a memorable experience for attendees."
};

const StudentCouncilITDept = {
  title: "Student Council - I.T. Dept",
  status: StatusEnum.COMPLETED,
  location: "Gaming Campus - Grande Arche de la Défense, Paris",
  dateDesc: "May 2023",
  timeDesc: "5 months",
  rewards: [
    {name: "[Skill] Internal Project Support", rarity: RarityEnum.UNCOMMON},
    {name: "[Item] Technical Toolkit", rarity: RarityEnum.UNCOMMON}
  ],
  description: "Within the I.T. Department, you were entrusted with key technical challenges and internal projects. Your role was vital to the functioning of campus operations, and your contributions made you a trusted ally within the student body."
};

const PGWVolunteeringVolume1 = {
  title: "Student Volunteering PGW - Volume 1",
  status: StatusEnum.COMPLETED,
  location: "Paris Games Week - Paris",
  dateDesc: "October 2022",
  timeDesc: "5 days",
  rewards: [
    {name: "[Skill] Customer Communication", rarity: RarityEnum.COMMON}
  ],
  description: "Your very first quest as a volunteer at PGW 2022, working at both the Jeux Made In France and EVA stands. It was your initiation into the world of event management, where you began mastering customer interaction."
};

const RecombinantProtein = {
  title: "Produce a Recombinant Protein",
  status: StatusEnum.COMPLETED,
  location: "Lycée Jules Ferry - Coulommiers",
  dateDesc: "May 2022",
  timeDesc: "3 Months",
  rewards: [
    {name: "[Skill] Accuracy", rarity: RarityEnum.COMMON},
    {name: "[Skill] Efficiency", rarity: RarityEnum.COMMON},
    {name: "[Skill] Autonomy", rarity: RarityEnum.UNCOMMON}
  ],
  description: "As part of the Amgen Global Experience, you participated in a highly technical project that involved producing a recombinant protein using advanced molecular biology techniques. This quest tested your precision and independence, and you emerged with valuable laboratory experience."
};








// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------- Composant -------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
function Quests() {
  return (
    <div className='Card' id='QuestCard'>
        <div>
            <h2 id='colorBlue'>Yanaël CAILLOT</h2>
            <hr className='titleBar'/>
        </div>
        <p></p>
        <h3 id='colorBlue' className='questSecondTitle'>Main Quests</h3>
        <QuetsPart
              title={GamingCampusStudent.title}
              status={GamingCampusStudent.status}
              location={GamingCampusStudent.location}
              dateDesc={GamingCampusStudent.dateDesc}
              timeDesc={GamingCampusStudent.timeDesc}
              rewards={GamingCampusStudent.rewards}
              description={GamingCampusStudent.description}
        />

        <QuetsPart 
              title={DevelopBasicSkills.title}
              status={DevelopBasicSkills.status}
              location={DevelopBasicSkills.location}
              dateDesc={DevelopBasicSkills.dateDesc}
              timeDesc={DevelopBasicSkills.timeDesc}
              rewards={DevelopBasicSkills.rewards}
              description={DevelopBasicSkills.description}
        />

        
        <p></p>
        <h3 id='colorBlue' className='questSecondTitle'>Side Quests</h3>
        <QuetsPart
              title={PGWVolunteeringVolume3.title}
              status={PGWVolunteeringVolume3.status}
              location={PGWVolunteeringVolume3.location}
              dateDesc={PGWVolunteeringVolume3.dateDesc}
              timeDesc={PGWVolunteeringVolume3.timeDesc}
              rewards={PGWVolunteeringVolume3.rewards}
              description={PGWVolunteeringVolume3.description}
            />

          <QuetsPart
              title={StudentCouncilCommunicationDept.title}
              status={StudentCouncilCommunicationDept.status}
              location={StudentCouncilCommunicationDept.location}
              dateDesc={StudentCouncilCommunicationDept.dateDesc}
              timeDesc={StudentCouncilCommunicationDept.timeDesc}
              rewards={StudentCouncilCommunicationDept.rewards}
              description={StudentCouncilCommunicationDept.description}
            />

          <QuetsPart
              title={PGWVolunteeringVolume2.title}
              status={PGWVolunteeringVolume2.status}
              location={PGWVolunteeringVolume2.location}
              dateDesc={PGWVolunteeringVolume2.dateDesc}
              timeDesc={PGWVolunteeringVolume2.timeDesc}
              rewards={PGWVolunteeringVolume2.rewards}
              description={PGWVolunteeringVolume2.description}
            />

          <QuetsPart
              title={StudentCouncilITDept.title}
              status={StudentCouncilITDept.status}
              location={StudentCouncilITDept.location}
              dateDesc={StudentCouncilITDept.dateDesc}
              timeDesc={StudentCouncilITDept.timeDesc}
              rewards={StudentCouncilITDept.rewards}
              description={StudentCouncilITDept.description}
            />
          
          <QuetsPart
              title={PGWVolunteeringVolume1.title}
              status={PGWVolunteeringVolume1.status}
              location={PGWVolunteeringVolume1.location}
              dateDesc={PGWVolunteeringVolume1.dateDesc}
              timeDesc={PGWVolunteeringVolume1.timeDesc}
              rewards={PGWVolunteeringVolume1.rewards}
              description={PGWVolunteeringVolume1.description}
            />
          
          <QuetsPart
              title={RecombinantProtein.title}
              status={RecombinantProtein.status}
              location={RecombinantProtein.location}
              dateDesc={RecombinantProtein.dateDesc}
              timeDesc={RecombinantProtein.timeDesc}
              rewards={RecombinantProtein.rewards}
              description={RecombinantProtein.description}
            />

          

    </div>
  );
}

export default Quests;
