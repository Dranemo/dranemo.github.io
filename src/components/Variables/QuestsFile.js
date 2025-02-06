import { QuestTypeEnum, StatusEnum, RarityEnum } from "./Enums"

const QuestsFile = [
// ------------------------------------------------ Main Quests ------------------------------------------------
{
    title: "Develop Game Developer Skills",
    QuestType: QuestTypeEnum.MAIN,
    status: StatusEnum.IN_PROGRESS,
    location: "Gaming Campus - Grande Arche de la Défense, Paris",
    dateDesc: "Sept. 2022",
    timeDesc: "3 years",
    rewards: [
      {name: "[Title] Third-Year Major Student", rarity: RarityEnum.LEGENDARY},
      {name: "[Item] Bachelor in Computer Science", rarity: RarityEnum.RARE},
      {name: "[Title] Game Developer", rarity: RarityEnum.EPIC},
      {name: "[Skill] Game Development", rarity: RarityEnum.EPIC},
      {name: "[Skill] Project Management", rarity: RarityEnum.UNCOMMON}
    ],
    description: "You’re currently navigating your way through the academic world at Gaming Campus, steadily progressing toward the prestigious title of Game Developer. Throughout this challenging quest, you’ve already faced many technical trials, learning vital skills for your future role. The final boss (your graduation) still awaits, but you're well on your way to victory!"
  },
  
  {
    title: "Game Developer Internship at GStudio",
    QuestType: QuestTypeEnum.MAIN,
    status: StatusEnum.COMPLETED,
    location: "GStudio - Gaming Campus, Paris",
    dateDesc: "July - August 2024",
    timeDesc: "2 months",
    rewards: [
      {name: "[Skill] Game Development", rarity: RarityEnum.EPIC},
      {name: "[Skill] Team Collaboration", rarity: RarityEnum.UNCOMMON},
      {name: "[Skill] Agile Methodologies", rarity: RarityEnum.UNCOMMON},
      {name: "[Item] First Professional Experience", rarity: RarityEnum.RARE},
    ],
    description: "Your journey at GStudio, the Gaming Campus incubator, was your first foray into professional game development. You worked alongside a fellow developer, refining your programming skills and learning how to manage a project in an agile environment. Through this experience, you built a strong foundation in teamwork and game production, preparing you for the challenges ahead in the gaming industry."
  },
  
  
  {
    title: "Develop Basic Skills",
    QuestType: QuestTypeEnum.MAIN,
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
  },
  
  
  
  // ------------------------------------------------ Side Quests ------------------------------------------------
  {
    title: "Student Volunteering PGW - Volume 3",
    QuestType: QuestTypeEnum.SIDE,
    status: StatusEnum.COMPLETED,
    location: "Paris Games Week - Paris",
    dateDesc: "October 2024",
    timeDesc: "5 days",
    rewards: [
      {name: "[Skill] Customer Communication", rarity: RarityEnum.COMMON},
      {name: "[Title] PGW Veteran", rarity: RarityEnum.RARE}
    ],
    description: "Having completed your third year volunteering at Paris Games Week, you've now earned the title of PGW Veteran. Assisting the Jeux Made In France stand, you’ve refined your customer communication and event management skills, supporting the gaming community through your service."
  },
  
  {
    title: "Student Council - Communication Dept",
    QuestType: QuestTypeEnum.SIDE,
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
  },

  {
    title: "Volunteer Bug Tester for Appearance",
    status: StatusEnum.COMPLETED,
    location: "Remote",
    dateDesc: "February 2024",
    timeDesc: "1 month",
    rewards: [
      {name: "[Skill] Bug Detection", rarity: RarityEnum.UNCOMMON},
      {name: "[Skill] Analytical Thinking", rarity: RarityEnum.UNCOMMON},
      {name: "[Skill] Game Testing", rarity: RarityEnum.COMMON},
      {name: "[Title] Volunteer QA Tester", rarity: RarityEnum.COMMON}
    ],
    description: "You took part in the development of Appearance as a volunteer bug tester, hunting down glitches and ensuring a smooth player experience. Through meticulous testing and detailed reports, you contributed to improving the game’s stability, sharpening your analytical skills in the process."
  },


  
  {
    title: "Student Volunteering PGW - Volume 2",
    QuestType: QuestTypeEnum.SIDE,
    status: StatusEnum.COMPLETED,
    location: "Paris Games Week - Paris",
    dateDesc: "October 2023",
    timeDesc: "5 days",
    rewards: [
      {name: "[Skill] Customer Communication", rarity: RarityEnum.COMMON},
      {name: "[Title] PGW Adventurer", rarity: RarityEnum.UNCOMMON}
    ],
    description: "Volunteering at the EVA stand during the Paris Games Week 2023 was your second successful foray into event organization. You expanded on your customer communication skills and contributed to creating a memorable experience for attendees."
  },
  
  {
    title: "Student Council - I.T. Dept",
    QuestType: QuestTypeEnum.SIDE,
    status: StatusEnum.COMPLETED,
    location: "Gaming Campus - Grande Arche de la Défense, Paris",
    dateDesc: "May 2023",
    timeDesc: "5 months",
    rewards: [
      {name: "[Skill] Internal Project Support", rarity: RarityEnum.UNCOMMON},
      {name: "[Item] Technical Toolkit", rarity: RarityEnum.UNCOMMON}
    ],
    description: "Within the I.T. Department, you were entrusted with key technical challenges and internal projects. Your role was vital to the functioning of campus operations, and your contributions made you a trusted ally within the student body."
  },
  
  {
    title: "Student Volunteering PGW - Volume 1",
    QuestType: QuestTypeEnum.SIDE,
    status: StatusEnum.COMPLETED,
    location: "Paris Games Week - Paris",
    dateDesc: "October 2022",
    timeDesc: "5 days",
    rewards: [
      {name: "[Skill] Customer Communication", rarity: RarityEnum.COMMON}
    ],
    description: "Your very first quest as a volunteer at PGW 2022, working at both the Jeux Made In France and EVA stands. It was your initiation into the world of event management, where you began mastering customer interaction."
  },
  
  {
    title: "Produce a Recombinant Protein",
    QuestType: QuestTypeEnum.SIDE,
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
  },
  
]

export default QuestsFile;