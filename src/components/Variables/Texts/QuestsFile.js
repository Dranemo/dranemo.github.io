import { QuestTypeEnum, StatusEnum, RarityEnum } from "../Enums"

const QuestsFile = [
// ------------------------------------------------ Main Quests ------------------------------------------------

{
  title: {
    "English": "Master the Art of Game Development",
    "Français": "Maîtriser l'Art du Développement de Jeux"
  },
  QuestType: QuestTypeEnum.MAIN,
  status: StatusEnum.NOT_STARTED,
  location: {
    "English": "Gaming Campus - Grande Arche de la Défense, Paris",
    "Français": "Gaming Campus - Grande Arche de la Défense, Paris"
  },
  dateDesc: {
    "English": "Sept. 2025",
    "Français": "Sept. 2025"
  },
  timeDesc: {
    "English": "2 years",
    "Français": "2 ans"
  },
  rewards: [
    {
      name: {
        "English": "[Item] MSc in Game Development (RNCP 7)",
        "Français": "[Objet] MSc en Développement de Jeux (RNCP 7)"
      },
      rarity: RarityEnum.LEGENDARY
    },
    {
      name: {
        "English": "[Title] Game Engine Architect",
        "Français": "[Titre] Architecte de Moteur de Jeu"
      },
      rarity: RarityEnum.EPIC
    },
    {
      name: {
        "English": "[Skill] Advanced C++ & C# Programming",
        "Français": "[Compétence] Programmation C++ & C# Avancée"
      },
      rarity: RarityEnum.EPIC
    },
    {
      name: {
        "English": "[Skill] Unreal Engine 5 & Unity Mastery",
        "Français": "[Compétence] Maîtrise d'Unreal Engine 5 & Unity"
      },
      rarity: RarityEnum.EPIC
    },
    {
      name: {
        "English": "[Skill] Procedural Generation & Complex Algorithms",
        "Français": "[Compétence] Génération Procédurale & Algorithmes Complexes"
      },
      rarity: RarityEnum.RARE
    },
    {
      name: {
        "English": "[Skill] AI & Networking for Games",
        "Français": "[Compétence] IA & Réseaux pour Jeux"
      },
      rarity: RarityEnum.RARE
    },
    {
      name: {
        "English": "[Skill] Leadership & Soft Skills",
        "Français": "[Compétence] Leadership & Compétences Interpersonnelles"
      },
      rarity: RarityEnum.UNCOMMON
    }
  ],
  description: {
    "English": "Embarking on this challenging quest, you seek to master the intricacies of game development. Your training covers high-level programming, engine mastery, and cutting-edge technologies. Through real-world projects and two years of in-studio apprenticeship, you refine your expertise and build a portfolio worthy of the industry’s top studios. The final challenge? Leading a team to craft a full-fledged video game, proving your worth as a future industry leader.",
    "Français": "En vous lançant dans cette quête exigeante, vous cherchez à maîtriser les subtilités du développement de jeux. Votre formation couvre la programmation avancée, la maîtrise des moteurs et les technologies de pointe. À travers des projets concrets et deux ans d'alternance en studio, vous affinez votre expertise et construisez un portfolio digne des meilleurs studios de l'industrie. Le défi final ? Diriger une équipe pour créer un jeu vidéo complet, prouvant ainsi votre valeur en tant que futur leader du secteur."
  }
},




{
  title: {
    "English": "Develop Game Developer Skills",
    "Français": "Développer des Compétences de Développeur de Jeux"
  },
  QuestType: QuestTypeEnum.MAIN,
  status: StatusEnum.IN_PROGRESS,
  location: {
    "English": "Gaming Campus - Grande Arche de la Défense, Paris",
    "Français": "Gaming Campus - Grande Arche de la Défense, Paris"
  },
  dateDesc: {
    "English": "Sept. 2022",
    "Français": "Sept. 2022"
  },
  timeDesc: {
    "English": "3 years",
    "Français": "3 ans"
  },
  rewards: [
    {
      name: {
        "English": "[Title] Third-Year Major Student",
        "Français": "[Titre] Étudiant de Troisième Année"
      },
      rarity: RarityEnum.LEGENDARY
    },
    {
      name: {
        "English": "[Item] Bachelor in Computer Science",
        "Français": "[Objet] Bachelor en Informatique"
      },
      rarity: RarityEnum.RARE
    },
    {
      name: {
        "English": "[Title] Game Developer",
        "Français": "[Titre] Développeur de Jeux"
      },
      rarity: RarityEnum.EPIC
    },
    {
      name: {
        "English": "[Skill] Game Development",
        "Français": "[Compétence] Développement de Jeux"
      },
      rarity: RarityEnum.EPIC
    },
    {
      name: {
        "English": "[Skill] Project Management",
        "Français": "[Compétence] Gestion de Projet"
      },
      rarity: RarityEnum.UNCOMMON
    }
  ],
  description: {
    "English": "You’re currently navigating your way through the academic world at Gaming Campus, steadily progressing toward the prestigious title of Game Developer. Throughout this challenging quest, you’ve already faced many technical trials, learning vital skills for your future role. The final boss (your graduation) still awaits, but you're well on your way to victory!",
    "Français": "Vous naviguez actuellement dans le monde académique du Gaming Campus, progressant régulièrement vers le prestigieux titre de Développeur de Jeux. Tout au long de cette quête exigeante, vous avez déjà affronté de nombreuses épreuves techniques, acquérant des compétences essentielles pour votre futur rôle. Le boss final (votre diplôme) vous attend encore, mais vous êtes bien parti pour la victoire !"
  }
},

  
{
  title: {
    "English": "Game Developer Internship at GStudio",
    "Français": "Stage de Développeur de Jeux chez GStudio"
  },
  QuestType: QuestTypeEnum.MAIN,
  status: StatusEnum.COMPLETED,
  location: {
    "English": "GStudio - Gaming Campus, Paris",
    "Français": "GStudio - Gaming Campus, Paris"
  },
  dateDesc: {
    "English": "July - August 2024",
    "Français": "Juillet - Août 2024"
  },
  timeDesc: {
    "English": "2 months",
    "Français": "2 mois"
  },
  rewards: [
    {
      name: {
        "English": "[Skill] Game Development",
        "Français": "[Compétence] Développement de Jeux"
      },
      rarity: RarityEnum.EPIC
    },
    {
      name: {
        "English": "[Skill] Team Collaboration",
        "Français": "[Compétence] Collaboration en Équipe"
      },
      rarity: RarityEnum.UNCOMMON
    },
    {
      name: {
        "English": "[Skill] Agile Methodologies",
        "Français": "[Compétence] Méthodologies Agiles"
      },
      rarity: RarityEnum.UNCOMMON
    },
    {
      name: {
        "English": "[Item] First Professional Experience",
        "Français": "[Objet] Première Expérience Professionnelle"
      },
      rarity: RarityEnum.RARE
    }
  ],
  description: {
    "English": "Your journey at GStudio, the Gaming Campus incubator, was your first foray into professional game development. You worked alongside a fellow developer, refining your programming skills and learning how to manage a project in an agile environment. Through this experience, you built a strong foundation in teamwork and game production, preparing you for the challenges ahead in the gaming industry.",
    "Français": "Votre aventure chez GStudio, l'incubateur du Gaming Campus, a été votre première immersion dans le développement de jeux professionnel. Vous avez travaillé aux côtés d'un autre développeur, perfectionnant vos compétences en programmation et apprenant à gérer un projet dans un environnement agile. Grâce à cette expérience, vous avez acquis des bases solides en travail d'équipe et en production de jeux, vous préparant aux défis à venir dans l'industrie du jeu vidéo."
  }
},

  
  
{
  title: {
    "English": "Develop Basic Skills",
    "Français": "Développer des Compétences de Base"
  },
  QuestType: QuestTypeEnum.MAIN,
  status: StatusEnum.COMPLETED,
  location: {
    "English": "Lycée Jules Ferry - Coulommiers",
    "Français": "Lycée Jules Ferry - Coulommiers"
  },
  dateDesc: {
    "English": "July 2022",
    "Français": "Juillet 2022"
  },
  timeDesc: {
    "English": "3 years (Sept 2019 - July 2022)",
    "Français": "3 ans (Sept 2019 - Juillet 2022)"
  },
  rewards: [
    {
      name: {
        "English": "[Item] Baccalauréat",
        "Français": "[Objet] Baccalauréat"
      },
      rarity: RarityEnum.UNCOMMON
    },
    {
      name: {
        "English": "[Title] Freshman",
        "Français": "[Titre] Étudiant Débutant"
      },
      rarity: RarityEnum.COMMON
    },
    {
      name: {
        "English": "[Skill] Foundation in Physics, Chemistry, and Biology",
        "Français": "[Compétence] Bases en Physique, Chimie et SVT"
      },
      rarity: RarityEnum.COMMON
    }
  ],
  description: {
    "English": "This quest saw you complete your high school education at Lycée Jules Ferry, with a special focus on Physics, Chemistry, and Biology. Your success in this quest was recognized with honors, unlocking the next stage of your academic journey.",
    "Français": "Cette quête vous a permis de terminer votre parcours au Lycée Jules Ferry, avec une spécialisation en Physique, Chimie et SVT. Votre succès a été récompensé avec mention, débloquant ainsi l’étape suivante de votre parcours académique."
  }
},

  
  
  
  // ------------------------------------------------ Side Quests ------------------------------------------------
  {
    title: {
        "English": "Student Volunteering PGW - Volume 3",
        "Français": "Bénévolat Étudiant PGW - Volume 3"
    },
    QuestType: QuestTypeEnum.SIDE,
    status: StatusEnum.COMPLETED,
    location: {
        "English": "Paris Games Week - Paris",
        "Français": "Paris Games Week - Paris"
    },
    dateDesc: {
        "English": "October 2024",
        "Français": "Octobre 2024"
    },
    timeDesc: {
        "English": "5 days",
        "Français": "5 jours"
    },
    rewards: [
        {
            name: {
                "English": "[Skill] Customer Communication",
                "Français": "[Compétence] Communication Client"
            },
            rarity: RarityEnum.COMMON
        },
        {
            name: {
                "English": "[Title] PGW Veteran",
                "Français": "[Titre] Vétéran PGW"
            },
            rarity: RarityEnum.RARE
        }
    ],
    description: {
        "English": "Having completed your third year volunteering at Paris Games Week, you've now earned the title of PGW Veteran. Assisting the Jeux Made In France stand, you’ve refined your customer communication and event management skills, supporting the gaming community through your service.",
        "Français": "Après trois années de bénévolat à la Paris Games Week, tu as désormais obtenu le titre de Vétéran PGW. En aidant sur le stand Jeux Made In France, tu as perfectionné tes compétences en communication client et en gestion d'événements, tout en soutenant la communauté du jeu vidéo grâce à ton engagement."
    }
},

  
{
  title: {
      "English": "Student Council - Communication Dept",
      "Français": "Bureau des Étudiants - Département Communication"
  },
  QuestType: QuestTypeEnum.SIDE,
  status: StatusEnum.COMPLETED,
  location: {
      "English": "Gaming Campus - Grande Arche de la Défense, Paris",
      "Français": "Gaming Campus - Grande Arche de la Défense, Paris"
  },
  dateDesc: {
      "English": "May 2024",
      "Français": "Mai 2024"
  },
  timeDesc: {
      "English": "9 months",
      "Français": "9 mois"
  },
  rewards: [
      {
          name: {
              "English": "[Skill] Social Media Management",
              "Français": "[Compétence] Gestion des Réseaux Sociaux"
          },
          rarity: RarityEnum.UNCOMMON
      },
      {
          name: {
              "English": "[Skill] Content Creation",
              "Français": "[Compétence] Création de Contenu"
          },
          rarity: RarityEnum.UNCOMMON
      },
      {
          name: {
              "English": "[Item] Creative Toolkit (Visual & Copywriting)",
              "Français": "[Objet] Boîte à Outils Créative (Visuel & Rédaction)"
          },
          rarity: RarityEnum.COMMON
      }
  ],
  description: {
      "English": "As a key contributor to the Communication Department within the Student Council, you supported the team lead by helping craft social media posts and manage public engagement. This quest bolstered your creativity and strengthened your ability to connect with a wide audience.",
      "Français": "En tant que membre actif du Département Communication du Bureau des Étudiants, tu as soutenu le responsable en contribuant à la création de publications sur les réseaux sociaux et à la gestion de l'engagement du public. Cette quête a renforcé ta créativité et ta capacité à toucher un large public."
  }
},


{
  title: {
      "English": "Volunteer QA/Tester for Appearance",
      "Français": "QA/Testeur Bénévole pour Appearance"
  },
  QuestType: QuestTypeEnum.SIDE,
  status: StatusEnum.COMPLETED,
  location: {
      "English": "Remote",
      "Français": "À distance"
  },
  dateDesc: {
      "English": "February 2024",
      "Français": "Février 2024"
  },
  timeDesc: {
      "English": "1 month",
      "Français": "1 mois"
  },
  rewards: [
      {
          name: {
              "English": "[Skill] Bug Detection",
              "Français": "[Compétence] Détection de Bugs"
          },
          rarity: RarityEnum.UNCOMMON
      },
      {
          name: {
              "English": "[Skill] Analytical Thinking",
              "Français": "[Compétence] Analyse et Esprit Critique"
          },
          rarity: RarityEnum.UNCOMMON
      },
      {
          name: {
              "English": "[Skill] Game Testing",
              "Français": "[Compétence] Test de Jeu"
          },
          rarity: RarityEnum.COMMON
      },
      {
          name: {
              "English": "[Title] Volunteer QA Tester",
              "Français": "[Titre] Testeur QA Bénévole"
          },
          rarity: RarityEnum.COMMON
      }
  ],
  description: {
      "English": "You contributed to the development of *Appearance* as a volunteer QA and bug tester, assisting the team by identifying glitches and helping improve the player experience. Through meticulous testing and detailed feedback, you played a role in refining the game’s stability while sharpening your analytical skills.",
      "Français": "Tu as contribué au développement de *Appearance* en tant que QA et testeur bénévole, en aidant l'équipe à repérer les bugs et à améliorer l'expérience des joueurs. Grâce à des tests rigoureux et des retours détaillés, tu as participé à l'amélioration de la stabilité du jeu tout en affinant tes compétences analytiques."
  }
},


  
{
  title: {
      "English": "Student Volunteering PGW - Volume 2",
      "Français": "Volontariat Étudiant PGW - Volume 2"
  },
  QuestType: QuestTypeEnum.SIDE,
  status: StatusEnum.COMPLETED,
  location: {
      "English": "Paris Games Week - Paris",
      "Français": "Paris Games Week - Paris"
  },
  dateDesc: {
      "English": "October 2023",
      "Français": "Octobre 2023"
  },
  timeDesc: {
      "English": "5 days",
      "Français": "5 jours"
  },
  rewards: [
      {
          name: {
              "English": "[Skill] Customer Communication",
              "Français": "[Compétence] Communication Client"
          },
          rarity: RarityEnum.COMMON
      },
      {
          name: {
              "English": "[Title] PGW Adventurer",
              "Français": "[Titre] Aventurier PGW"
          },
          rarity: RarityEnum.UNCOMMON
      }
  ],
  description: {
      "English": "Volunteering at the EVA stand during the Paris Games Week 2023 was your second rewarding experience in event organization. Assisting the team, you further honed your customer communication skills and contributed to crafting a memorable experience for the event's attendees.",
      "Français": "Ton volontariat au stand EVA lors de la Paris Games Week 2023 fut ta deuxième expérience enrichissante dans l'organisation d'événements. En tant qu'assistant, tu as affiné tes compétences en communication avec le public et participé à la création d'une expérience mémorable pour les visiteurs."
  }
},

  
{
  title: {
      "English": "Student Council - I.T. Dept",
      "Français": "Conseil Étudiant - Département Informatique"
  },
  QuestType: QuestTypeEnum.SIDE,
  status: StatusEnum.COMPLETED,
  location: {
      "English": "Gaming Campus - Grande Arche de la Défense, Paris",
      "Français": "Gaming Campus - Grande Arche de la Défense, Paris"
  },
  dateDesc: {
      "English": "May 2023",
      "Français": "Mai 2023"
  },
  timeDesc: {
      "English": "5 months",
      "Français": "5 mois"
  },
  rewards: [
      {
          name: {
              "English": "[Skill] Internal Project Support",
              "Français": "[Compétence] Support de Projet Interne"
          },
          rarity: RarityEnum.UNCOMMON
      },
      {
          name: {
              "English": "[Item] Technical Toolkit",
              "Français": "[Objet] Kit d'Outils Techniques"
          },
          rarity: RarityEnum.UNCOMMON
      }
  ],
  description: {
      "English": "Within the I.T. Department, you were entrusted with key technical challenges and internal projects. Your role was vital to the functioning of campus operations, and your contributions made you a trusted ally within the student body.",
      "Français": "Au sein du Département Informatique, tu as été chargé des défis techniques majeurs et des projets internes. Ton rôle était essentiel au bon fonctionnement des opérations du campus, et tes contributions t'ont permis de devenir un allié de confiance au sein de la communauté étudiante."
  }
},

  
{
  title: {
      "English": "Student Volunteering PGW - Volume 1",
      "Français": "Bénévolat Étudiant PGW - Volume 1"
  },
  QuestType: QuestTypeEnum.SIDE,
  status: StatusEnum.COMPLETED,
  location: {
      "English": "Paris Games Week - Paris",
      "Français": "Paris Games Week - Paris"
  },
  dateDesc: {
      "English": "October 2022",
      "Français": "Octobre 2022"
  },
  timeDesc: {
      "English": "5 days",
      "Français": "5 jours"
  },
  rewards: [
      {
          name: {
              "English": "[Skill] Customer Communication",
              "Français": "[Compétence] Communication Client"
          },
          rarity: RarityEnum.COMMON
      }
  ],
  description: {
      "English": "Your very first quest as a volunteer at PGW 2022, working at both the Jeux Made In France and EVA stands. It was your initiation into the world of event management, where you began mastering customer interaction.",
      "Français": "Ta toute première quête en tant que bénévole à la PGW 2022, travaillant à la fois sur les stands Jeux Made In France et EVA. Cela a été ton initiation au monde de l'organisation d'événements, où tu as commencé à maîtriser l'interaction avec les clients."
  }
},

  
{
  title: {
      "English": "Produce a Recombinant Protein",
      "Français": "Produire une Protéine Recombinante"
  },
  QuestType: QuestTypeEnum.SIDE,
  status: StatusEnum.COMPLETED,
  location: {
      "English": "Lycée Jules Ferry - Coulommiers",
      "Français": "Lycée Jules Ferry - Coulommiers"
  },
  dateDesc: {
      "English": "May 2022",
      "Français": "Mai 2022"
  },
  timeDesc: {
      "English": "3 Months",
      "Français": "3 Mois"
  },
  rewards: [
      {
          name: {
              "English": "[Skill] Accuracy",
              "Français": "[Compétence] Précision"
          },
          rarity: RarityEnum.COMMON
      },
      {
          name: {
              "English": "[Skill] Efficiency",
              "Français": "[Compétence] Efficacité"
          },
          rarity: RarityEnum.COMMON
      },
      {
          name: {
              "English": "[Skill] Autonomy",
              "Français": "[Compétence] Autonomie"
          },
          rarity: RarityEnum.UNCOMMON
      }
  ],
  description: {
      "English": "As part of the Amgen Global Experience, you participated in a highly technical project that involved producing a recombinant protein using advanced molecular biology techniques. This quest tested your precision and independence, and you emerged with valuable laboratory experience.",
      "Français": "Dans le cadre de l'Amgen Global Experience, tu as participé à un projet hautement technique qui consistait à produire une protéine recombinante en utilisant des techniques avancées de biologie moléculaire. Cette quête a mis à l'épreuve ta précision et ton autonomie, et tu en es ressorti avec une précieuse expérience en laboratoire."
  }
},

  
]

export default QuestsFile;