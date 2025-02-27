import { RarityEnum } from "../Enums";

import CVfr from '../../../assets/files/CV_French.pdf';
import CVen from '../../../assets/files/CV_English.pdf';

const PagesFile = {
    App: {
        Sorry: {
            "English": "Sorry, the mobile version is currently under development.",
            "Français": "Désolé, la version mobile est actuellement en cours de développement."
        },
        CheckBack: {
            "English": "Please check back later, or use the desktop version!",
            "Français": "Veuillez revenir plus tard, ou utilisez la version bureau !"
        },
    },



    Main: {
        Title: {
            "English": "Main Menu",
            "Français": "Menu Principal"
        },
        BigTitle: {
            "English": "Yanaël Caillot",
            "Français": "Yanaël Caillot"
        },
        Stats: {
            "English": "Stats:",
            "Français": "Statistiques :"
        },
        Level: {
            "English": "Level (Age): ",
            "Français": "Niveau (Âge) : "
        },
        Guild: {
            "English": "Guild (Job): Student",
            "Français": "Guilde (Métier) : Étudiant"
        },
        Server: {
            "English": "Server: France",
            "Français": "Serveur : France"
        },
        EquippedTitle: {
            "English": "Equipped Title: ",
            "Français": "Titre équipé : "
        },
        CharacterPreview: {
            "English": "Character Preview:",
            "Français": "Aperçu du personnage :"
        },
        CharacterDescription: {
            "English": "I am a naturally curious person and I am always eager to learn new skills and expand my knowledge in many fields. Furthermore, I am a great team player, always willing to participate in projects to develop my creative skills and experience.",
            "Français": "Je suis une personne naturellement curieuse et je suis toujours désireux d'apprendre de nouvelles compétences et d'élargir mes connaissances dans de nombreux domaines."
        },
        CharacterDescription2: {
            "English": "Furthermore, I am a great team player, always willing to participate in projects to develop my creative skills and experience.",
            "Français": "De plus, je suis un excellent joueur d'équipe, toujours prêt à participer à des projets pour développer mes compétences créatives et mon expérience."
        },
        Inventory: {
            "English": "Inventory:",
            "Français": "Inventaire :"
        },
        InventoryItems: [
            {
                "English": "CV (English)",
                "Français": "CV (Anglais)",

                download: true,
                nbspNumber: {
                    "English": 4,
                    "Français": 5
                },
                href: CVen,
                downloadLink: "CV_English_Yanael_Caillot.pdf",
            },
            {
                "English": "CV (French)",
                "Français": "CV (Français)",

                download: true,
                nbspNumber: {
                    "English": 5,
                    "Français": 4
                },
                href: CVfr,
                downloadLink: "CV_Francais_Yanael_Caillot.pdf",
            },
            {
                "English": "GameBoy",
                "Français": "GameBoy",

                download: false,
            },
            {
                "English": "Karate black belt",
                "Français": "Ceinture noire de karaté",

                download: false,
            },
            {
                "English": "Electric Bass",
                "Français": "Basse électrique",

                download: false,
            }
        ],
        SeeMore: {
            "English": "See More...",
            "Français": "Voir Plus..."
        },


        EquippedTitleTitle: {
            Title: {
                "English": "Third-Year Major Student",
                "Français": "Major de troisième année"
            },
            Rarity: RarityEnum.LEGENDARY
        },
    },

    Quests: {
        Title: {
            "English": "Quests Log",
            "Français": "Quêtes"
        }
    },

    Achievements: {
        Title: {
            "English": "Achievements",
            "Français": "Succès"
        },
        Other: {
            "English": "Other",
            "Français": "Autres"
        }
    },

    Support: {
        Title: {
            "English": "Support",
            "Français": "Support"
        }
    },

    Nav: {
        Language: {
            "English": "Language",
            "Français": "Langue"
        }
    }
}

export default PagesFile;
