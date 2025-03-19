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
    quest: 'Quest Log',
    achievements: 'Achievements',
    support: 'Support'
  };


const YearEnum = {
    FIRST : '2022 - 2023',
    SECOND : '2023 - 2024',
    THIRD : '2024 - 2025',
    FOURTH : '2025 - 2026',
    FIFTH : '2026+',
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
        Python : 'Python',
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

    const ModeEnum = {
      LIGHT: {
        "English": 'Light Mode',
        "Français": 'Mode Clair'
      },
      DARK: {
        "English": 'Dark Mode',
        "Français": 'Mode Sombre'
      }
    }

    export { RarityEnum, NavState, YearEnum, StatusEnum, TechnoEnum, QuestTypeEnum, LanguageEnum, ModeEnum };
