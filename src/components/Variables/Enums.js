const RarityEnum = {
    COMMON: {
      "English": 'Common',
      "Français": 'Commun'
    },
    UNCOMMON: {
      "English": 'Uncommon',
      "Français": 'Peu Commun'
    },
    RARE: {
      "English": 'Rare',
      "Français": 'Rare'
    },
    EPIC: {
      "English": 'Epic',
      "Français": 'Épique'
    },
    LEGENDARY: {
      "English": 'Legendary',
      "Français": 'Légendaire'
    }
  };



  const NavState = {
    main: 'Main Menu',
    skills: 'Skills',
    quest: 'Quest Log',
    achievements: 'Achievements',
    support: 'Support'
  };


const YearEnum = {
    FIRST : {
      "English": 'First Year',
      "Français": 'Première Année'
    },
    SECOND : {
      "English": 'Second Year',
      "Français": 'Deuxième Année'
    },
    THIRD : {
      "English": 'Third Year',
      "Français": 'Troisième Année'
    },
    FOURTH : {
      "English": 'Fourth Year',
      "Français": 'Quatrième Année'
    },
    FIFTH : {
      "English": 'Fifth Year',
      "Français": 'Cinquième Année'
    }
}

  // Définir l'enum pour le status
  const StatusEnum = {
      IN_PROGRESS: {
        "English" : 'In Progress',
        "Français" : 'En Cours'
      },
      COMPLETED: {
        "English": 'Completed',
        "Français": 'Terminé'
      },
      NOT_STARTED: {
        "English": 'Not Started',
        "Français": 'Non Commencé'
      }
    };


    const TechnoEnum = {
        UNREALENGINE: 'Unreal Engine',
        UNITY: 'Unity',
        GODOT: 'Godot',
        CPP: 'C++',
        CSHARP: 'C#',
        C : 'C',
        REACT: 'React',
    };

    const QuestTypeEnum = {
        MAIN: {
          "English": 'Main Quests',
          "Français": 'Quêtes Principales'
        },
        SIDE: {
          "English": 'Side Quests',
          "Français": 'Quêtes Secondaires'
        },
    };


    const LanguageEnum = {
      FR: {
        Langue: 'Français',
        html: 'fr'
      },
      EN: {
        Langue: 'English',
        html: 'en'
      }
    }

    export { RarityEnum, NavState, YearEnum, StatusEnum, TechnoEnum, QuestTypeEnum, LanguageEnum };
