
import { BigImageGetter, SmallImageGetter } from '../ImageGetter';
import { TechnoEnum, RarityEnum, YearEnum } from '../Enums';

const ProjectsFile = [
    // Unreal Projects
    {
        badgeTitle: {
            "English": "Carnival",
            "Français": "Carnaval"
        },
        badgeImg: { image: BigImageGetter.projectCarnival, rarity: YearEnum.THIRD },
        type: {
            "English": "Solo - School Project",
            "Français": "Solo - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.UNREALENGINE,
        techno: {
            "English": "Unreal Engine 5 - Blueprints",
            "Français": "Unreal Engine 5 - Blueprints"
        },
        dateDesc: {
            "English": "January 2025",
            "Français": "Janvier 2025"
        },
        timeDesc: {
            "English": "1 week",
            "Français": "1 semaine"
        },
        details: {
            title: {
                "English": "Carnival - Blueprint Prototype",
                "Français": "Carnaval - Prototype Blueprint"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Carnival</span>, step into a prototype built using Unreal Engine 5's Blueprints system. This project includes a carnival setting with a game of knock-down cans and bumper cars, where NPCs wave at you when you approach. The game also features a currency system, adding a simple layer of interaction. While it's more of a prototype than a finished game, the focus was on implementing core mechanics and systems, such as NPC behavior and interactive objects, within a week. The game lacks 3D models, but it serves as a fun and functional demonstration of Blueprints in action.",
                "Français": "Dans <span style='font-weight: 900;'>Carnaval</span>, entrez dans un prototype construit avec le système de Blueprints d'Unreal Engine 5. Ce projet comprend un décor de carnaval avec un jeu de boîtes à renverser et des voitures tamponneuses, où les PNJ vous saluent lorsque vous vous approchez. Le jeu présente également un système de monnaie, ajoutant une couche d'interaction simple. Bien qu'il soit plus un prototype qu'un jeu fini, l'objectif était de mettre en œuvre les mécanismes et systèmes de base, tels que le comportement des PNJ et les objets interactifs, en une semaine. Le jeu manque de modèles 3D, mais il sert de démonstration fonctionnelle et amusante des Blueprints en action."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Carnival Prototype",
                        "Français": "[Objet] Prototype de Carnaval"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Unreal Engine Blueprints", 
                        "Français": "[Compétence] Blueprints Unreal Engine"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Game Prototyping",
                        "Français": "[Compétence] Prototypage de Jeu"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Blueprint Developer", 
                        "Français": "[Titre] Développeur Blueprint"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectCarnival
        },
        links: []
    },

    
    

    // Unity Projects
    {
        badgeTitle: {
            "English": "Cooking Fry",
            "Français": "Cooking Fry"
        },
        badgeImg: { image: BigImageGetter.projectCookingFry, rarity: YearEnum.THIRD },
        type: {
            "English": "Solo - School Project",
            "Français": "Solo - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.UNITY,
        techno: {
            "English": "Unity",
            "Français": "Unity"
        },
        dateDesc: {
            "English": "December 2024",
            "Français": "Décembre 2024"
        },
        timeDesc: {
            "English": "1 week",
            "Français": "1 semaine"
        },
        details: {
            title: {
                "English": "Cooking Fry - 3D Cooking UI Experience",
                "Français": "Cooking Fry - Expérience UI de Cuisine 3D"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Cooking Fry</span>, dive into a simple cooking game where the primary focus is the user interface (UI). Though the game isn’t finished, it allows you to experiment with creating recipes and cooking ingredients in a 3D environment. The ultimate goal? To learn and practice UI design for cooking games. You can only cook, but the game offers a glimpse into how a fully functional cooking game would work, with recipes to create but no customers to serve. A week-long solo project to enhance your UI development skills in Unity.",
                "Français": "Dans <span style='font-weight: 900;'>Cooking Fry</span>, plongez dans un jeu de cuisine simple où l'accent est mis sur l'interface utilisateur (UI). Bien que le jeu ne soit pas terminé, il vous permet d'expérimenter la création de recettes et la cuisson d'ingrédients dans un environnement 3D. L'objectif ultime ? Apprendre et pratiquer la conception UI pour les jeux de cuisine. Vous pouvez uniquement cuisiner, mais le jeu donne un aperçu du fonctionnement d'un jeu de cuisine complet, avec des recettes à préparer mais sans clients à servir. Un projet solo d'une semaine pour améliorer vos compétences en développement d'interface utilisateur dans Unity."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Cooking Fry Recipe Creation",
                        "Français": "[Objet] Création de Recettes Cooking Fry"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] UI Development",
                        "Français": "[Compétence] Développement UI"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] 3D Game Interaction",
                        "Français": "[Compétence] Interaction Jeu 3D"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] UI Cooking Beginner",
                        "Français": "[Titre] Débutant UI Cuisine"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectCookingFry
        },
        links: []
    },

    
    

    {
        badgeTitle: {
            "English": "Unity Shaders",
            "Français": "Unity Shaders"
        },
        badgeImg: { image: BigImageGetter.projectUnityShaders, rarity: YearEnum.THIRD },
        type: {
            "English": "Solo - School Project",
            "Français": "Solo - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.UNITY,
        techno: {
            "English": "Unity (Shader Graph)",
            "Français": "Unity (Shader Graph)"
        },
        dateDesc: {
            "English": "November 2024",
            "Français": "Novembre 2024"
        },
        timeDesc: {
            "English": "1 week",
            "Français": "1 semaine"
        },
        details: {
            title: {
                "English": "Unity Shaders - Water & Mountains with Shader Graph",
                "Français": "Unity Shaders - Eau & Montagnes avec Shader Graph"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Unity Shaders</span>, dive into the world of Shader Graph as you explore the basics of creating custom shaders. Over the course of one week, you’ll learn to craft an entire environment from scratch, starting with a simple plane. From there, you’ll create <span style='font-weight: 900;'>moving water</span> and majestic mountains, all powered by shaders. A simple, yet powerful demonstration of the potential of Shader Graph for creating dynamic environments with minimal resources. A great starting point in my shader learning journey!",
                "Français": "Dans <span style='font-weight: 900;'>Unity Shaders</span>, plongez dans le monde de Shader Graph en explorant les bases de la création de shaders personnalisés. En une semaine, vous apprendrez à concevoir un environnement entier à partir de zéro, en commençant par un simple plan. À partir de là, vous créerez de <span style='font-weight: 900;'>l'eau en mouvement</span> et de majestueuses montagnes, le tout propulsé par des shaders. Une démonstration simple mais puissante du potentiel de Shader Graph pour créer des environnements dynamiques avec un minimum de ressources. Un excellent point de départ dans mon apprentissage des shaders !"
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Shader Graph Environment",
                        "Français": "[Objet] Environnement Shader Graph"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Shader Development",
                        "Français": "[Compétence] Développement de Shaders"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Water Simulation",
                        "Français": "[Compétence] Simulation d'Eau"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Shader Newcomer",
                        "Français": "[Titre] Nouveau dans les Shaders"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectUnityShaders
        },
        links: []
    },

    

    {
        badgeTitle: {
            "English": "The Final Exit",
            "Français": "The Final Exit"
        },
        badgeImg: { image: BigImageGetter.projectTheFinalExit, rarity: YearEnum.THIRD },
        type: {
            "English": "Solo - School Project",
            "Français": "Solo - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.UNITY,
        techno: {
            "English": "Unity",
            "Français": "Unity"
        },
        dateDesc: {
            "English": "November 2024",
            "Français": "Novembre 2024"
        },
        timeDesc: {
            "English": "1 week",
            "Français": "1 semaine"
        },
        details: {
            title: {
                "English": "The Final Exit - Horror Elevator Escape",
                "Français": "The Final Exit - Évasion Horrifique en Ascenseur"
            },
            description: {
                "English": "Step into the terrifying world of <span style='font-weight: 900;'>The Final Exit</span>, a survival horror exploration game where you must navigate through a haunted hotel to escape. With 10 floors to descend, your goal is to find a hidden button on each level to activate the elevator and move on. But beware, <span style='font-weight: 900;'>monsters lurk</span> in the shadows, ready to hunt you down. There's no AI – just the eerie sounds of electricity and flickering lights to warn you when a monster is near. Hide and survive until you can complete your descent. Can you make it to the final floor and escape?",
                "Français": "Plongez dans le monde terrifiant de <span style='font-weight: 900;'>The Final Exit</span>, un jeu d'exploration horrifique où vous devez traverser un hôtel hanté pour vous échapper. Avec 10 étages à descendre, votre objectif est de trouver un bouton caché à chaque niveau pour activer l'ascenseur et continuer. Mais attention, <span style='font-weight: 900;'>des monstres rôdent</span> dans l'ombre, prêts à vous traquer. Il n'y a pas d'IA – seulement les bruits inquiétants de l'électricité et des lumières vacillantes pour vous avertir lorsqu'un monstre est proche. Cachez-vous et survivez jusqu'à atteindre le dernier étage. Parviendrez-vous à vous échapper ?"
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] The Final Exit Button",
                        "Français": "[Objet] Bouton de La Dernière Sortie"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Unity Development",
                        "Français": "[Compétence] Développement Unity"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Horror Game Design",
                        "Français": "[Compétence] Conception de Jeu d'Horreur"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Audio and Environmental Cues",
                        "Français": "[Compétence] Indices Sonores et Environnementaux"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Title] Hotel Escape Artist",
                        "Français": "[Titre] Artiste de l'Évasion Hôtelière"
                    },
                    rarity: RarityEnum.EPIC 
                }
            ],
            carousel: SmallImageGetter.projectTheFinalExit
        },
        links: [
            { 
                name: "Itch.io",
                url: "https://dranemo.itch.io/the-final-exit" 
            }
        ]
    },

    

    {
        badgeTitle: {
            "English": "Bran Castle",
            "Français": "Bran Castle"
        },
        badgeImg: { image: BigImageGetter.projectBranCastle, rarity: YearEnum.SECOND },
        type: {
            "English": "Group - Professional Project",
            "Français": "Groupe - Projet Professionnel"
        },
        TechnoEnum: TechnoEnum.UNITY,
        techno: {
            "English": "Unity",
            "Français": "Unity"
        },
        dateDesc: {
            "English": "July - August 2024",
            "Français": "Juillet - Août 2024"
        },
        timeDesc: {
            "English": "2 months",
            "Français": "2 mois"
        },
        details: {
            title: {
                "English": "Bran Castle - Vampire Survival Beat 'Em Up",
                "Français": "Bran Castle - Beat 'Em Up de Survie Vampirique"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Bran Castle</span>, you play as a powerful vampire defending your castle from angry villagers and the royal guard. Your ultimate goal? Gather enough blood to complete a dark ritual and summon a demon. But with waves of enemies attacking from every direction, your task is no easy feat. The game challenges you to manage resources, strategically place units, and fight off your foes to survive until nightfall. A fully autonomous project, the first game I completed from start to finish, with successes waiting to be unlocked along the way. Now go ahead, <span style='font-weight: 900;'>defend your castle</span> and complete the ritual!",
                "Français": "Dans <span style='font-weight: 900;'>Bran Castlr</span>, vous incarnez un puissant vampire défendant son château contre des villageois en colère et la garde royale. Votre objectif ultime ? Récolter suffisamment de sang pour accomplir un sombre rituel et invoquer un démon. Mais avec des vagues d’ennemis attaquant de toutes parts, la tâche ne sera pas facile. Le jeu vous met au défi de gérer vos ressources, de placer stratégiquement vos unités et de repousser vos adversaires jusqu’à la tombée de la nuit. Un projet entièrement autonome, le premier jeu que j’ai complété de bout en bout, avec des succès à débloquer en chemin. Maintenant, allez-y, <span style='font-weight: 900;'>défendez votre château</span> et accomplissez le rituel !"
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Bran Castle Defenders",
                        "Français": "[Objet] Défenseurs du Château de Bran"
                    },
                    rarity: RarityEnum.EPIC 
                },
                { 
                    name: {
                        "English": "[Skill] Unity Development",
                        "Français": "[Compétence] Développement Unity"
                    },
                    rarity: RarityEnum.EPIC 
                },
                { 
                    name: {
                        "English": "[Skill] 2D Game Design",
                        "Français": "[Compétence] Conception de Jeu 2D"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Resource Management",
                        "Français": "[Compétence] Gestion des Ressources"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Vampire Lord of Bran",
                        "Français": "[Titre] Seigneur Vampire de Bran"
                    },
                    rarity: RarityEnum.EPIC 
                }
            ],
            carousel: SmallImageGetter.projectBranCastle
        },
        links: [
            { 
                name: "Itch.io",
                url: "https://dranemo.itch.io/bran-castle" 
            }
        ]
    },

    
    {
        badgeTitle: {
            "English": "Build to Scale",
            "Français": "Build to Scale"
        },
        badgeImg: { image: BigImageGetter.projectBuildToScale, rarity: YearEnum.SECOND },
        type: {
            "English": "Solo - Personal Project (GameJam)",
            "Français": "Solo - Projet Personnel (GameJam)"
        },
        TechnoEnum: TechnoEnum.UNITY,
        techno: {
            "English": "Unity",
            "Français": "Unity"
        },
        dateDesc: {
            "English": "August 2024",
            "Français": "Août 2024"
        },
        timeDesc: {
            "English": "5 days",
            "Français": "5 jours"
        },
        details: {
            title: {
                "English": "Build to Scale - Shape Rescaling Puzzle",
                "Français": "Build to Scale - Puzzle de Redimensionnement de Formes"
            },
            description: {
                "English": "Step into the shoes of a high-tech robot with the ability to <span style='font-weight: 900;'>rescale</span> materials in <span style='font-weight: 900;'>Build to Scale</span>, a simple yet intriguing puzzle game created for GMTK 2024. Your goal? Rebuild shapes presented to you using spawnable cubes, modifying them to fit the required form. While it’s a basic test of mechanics, the gameplay is surprisingly engaging, with fun and challenging moments. A quick, solo-made project that showcases both functionality and creativity within just <span style='font-weight: 900;'>5 days</span>!",
                "Français": "Incarnez un robot high-tech capable de <span style='font-weight: 900;'>redimensionner</span> des matériaux dans <span style='font-weight: 900;'>Build to Scale</span>, un jeu de puzzle simple mais intrigant créé pour le GMTK 2024. Votre objectif ? Reconstruire des formes présentées en utilisant des cubes générables, en les modifiant pour correspondre à la structure demandée. Bien qu'il s'agisse d'un test mécanique de base, le gameplay se révèle étonnamment captivant, avec des moments à la fois amusants et stimulants. Un projet rapide, réalisé en solo, qui met en avant à la fois fonctionnalité et créativité en seulement <span style='font-weight: 900;'>5 jours</span> !"
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] GMTK 2024 Submission (Build to Scale)",
                        "Français": "[Objet] Soumission GMTK 2024 (Build to Scale)"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Unity Development",
                        "Français": "[Compétence] Développement Unity"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Game Prototyping",
                        "Français": "[Compétence] Prototypage de Jeu"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Solo Game Jam Developer",
                        "Français": "[Titre] Développeur Solo de Game Jam"
                    },
                    rarity: RarityEnum.EPIC 
                },
                { 
                    name: {
                        "English": "[Skill] Rapid Problem Solving",
                        "Français": "[Compétence] Résolution de Problèmes Rapide"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectBuildToScale
        },
        links: [
            { 
                name: "Itch.io",
                url: "https://dranemo.itch.io/build-to-scale"
            }
        ]
    },


    {
        badgeTitle: {
            "English": "Fox League",
            "Français": "Fox League"
        },
        badgeImg: { image: BigImageGetter.projectFoxLeague, rarity: YearEnum.SECOND },
        type: {
            "English": "Group - School Project",
            "Français": "Groupe - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.UNITY,
        techno: {
            "English": "Unity",
            "Français": "Unity"
        },
        dateDesc: {
            "English": "February - March 2024",
            "Français": "Février - Mars 2024"
        },
        timeDesc: {
            "English": "2 weeks",
            "Français": "2 semaines"
        },
        details: {
            title: {
                "English": "Fox League - 1v1 Fox Soccer Showdown",
                "Français": "Fox League - Duel de Football 1v1 entre Renards"
            },
            description: {
                "English": "Get ready for an epic <span style='font-weight: 900;'>1v1 showdown</span> in Fox League, a fast-paced soccer game where two foxes battle it out on a wild, obstacle-filled field. Inspired by classic car-soccer games, this project is all about quick reflexes, strategy, and avoiding chaos as you compete for victory across <span style='font-weight: 900;'>3 intense rounds</span>. Created as a first Unity project with a group, no power-ups, just pure skill!",
                "Français": "Préparez-vous pour un <span style='font-weight: 900;'>duel 1v1</span> épique dans Fox League, un jeu de football rapide où deux renards s'affrontent sur un terrain rempli d'obstacles. Inspiré des jeux de football avec des voitures classiques, ce projet met l'accent sur les réflexes, la stratégie et l'évitement du chaos pour décrocher la victoire en <span style='font-weight: 900;'>3 manches intenses</span>. Créé comme premier projet Unity en groupe, pas de power-ups, juste du talent pur !"
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Fox League Soccer Match",
                        "Français": "[Objet] Match de Football Fox League"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Unity Development",
                        "Français": "[Compétence] Développement Unity"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Multiplayer Game Design",
                        "Français": "[Compétence] Conception de Jeu Multijoueur"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Unity Soccer Rookie",
                        "Français": "[Titre] Débutant en Football Unity"
                    },
                    rarity: RarityEnum.RARE 
                }
            ],
            carousel: SmallImageGetter.projectFoxLeague
        },
        links: []
    },

    


    // C++ Projects
    {
        badgeTitle: {
            "English": "Pathfinding Simulation",
            "Français": "Simulation de Pathfinding"
        },
        badgeImg: { image: BigImageGetter.projectPathfinding, rarity: YearEnum.THIRD },
        type: {
            "English": "Group - School Project",
            "Français": "Groupe - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.CPP,
        techno: {
            "English": "C++ with SFML",
            "Français": "C++ avec SFML"
        },
        dateDesc: {
            "English": "September - October 2024",
            "Français": "Septembre - Octobre 2024"
        },
        timeDesc: {
            "English": "1 week",
            "Français": "1 semaine"
        },
        details: {
            title: {
                "English": "Pathfinding Simulation - Grid Navigation Algorithms",
                "Français": "Simulation de Pathfinding - Algorithmes de Navigation sur Grille"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Pathfinding Simulation</span>, test various pathfinding algorithms implemented in C++ with SFML. Explore methods like DFS, BFS, A*, Greedy, and Dijkstra on a non-weighted grid. This school group project focuses on visualizing how each algorithm navigates and finds the optimal or first-found path. It’s a great introduction to understanding algorithm efficiency and implementation, with hands-on experience in coding these techniques.",
                "Français": "Dans <span style='font-weight: 900;'>Simulation de Pathfinding</span>, testez divers algorithmes de recherche de chemin implémentés en C++ avec SFML. Explorez des méthodes comme DFS, BFS, A*, Greedy et Dijkstra sur une grille non pondérée. Ce projet scolaire en groupe se concentre sur la visualisation de la manière dont chaque algorithme navigue et trouve le chemin optimal ou le premier trouvé. C’est une excellente introduction pour comprendre l'efficacité des algorithmes et leur implémentation, avec une expérience pratique dans le codage de ces techniques."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Pathfinding Grid Simulation",
                        "Français": "[Objet] Simulation de Grille de Recherche de Chemin"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] C++ Development",
                        "Français": "[Compétence] Développement C++"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Algorithm Design",
                        "Français": "[Compétence] Conception d'Algorithmes"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Title] Pathfinding Explorer",
                        "Français": "[Titre] Explorateur de Recherche de Chemin"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectPathfindingSimulation
        },
        links: []
    },


    {
        badgeTitle: {
            "English": "VxV Engine",
            "Français": "VxV Engine"
        },
        badgeImg: { image: BigImageGetter.projectVxVEngine, rarity: YearEnum.SECOND },
        type: {
            "English": "Group - School Project",
            "Français": "Groupe - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.CPP,
        techno: {
            "English": "C++ - OpenGL",
            "Français": "C++ - OpenGL"
        },
        dateDesc: {
            "English": "March - April 2024",
            "Français": "Mars - Avril 2024"
        },
        timeDesc: {
            "English": "5 weeks",
            "Français": "5 semaines"
        },
        details: {
            title: {
                "English": "VxV Engine - Understanding Game Engines",
                "Français": "VxV Engine - Comprendre les Moteurs de Jeu"
            },
            description: {
                "English": "Enter the depths of game engine development with <span style='font-weight: 900;'>VxV Engine</span>, a homemade engine built with OpenGL in C++. Created as an educational project, VxV was designed to help us truly grasp the inner workings of a game engine—from rendering pipelines to basic ECS systems. While not intended for commercial use (yet), it stands as a foundational learning experience, providing hands-on insight into what powers modern game engines.",
                "Français": "Entrez dans les profondeurs du développement de moteurs de jeu avec <span style='font-weight: 900;'>VxV Engine</span>, un moteur maison construit avec OpenGL en C++. Créé comme un projet éducatif, VxV a été conçu pour nous aider à comprendre réellement le fonctionnement interne d'un moteur de jeu, des pipelines de rendu aux systèmes ECS de base. Bien qu'il ne soit pas destiné à un usage commercial (pour l'instant), il représente une expérience d'apprentissage fondamentale, offrant un aperçu pratique de ce qui alimente les moteurs de jeu modernes."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Custom OpenGL Engine",
                        "Français": "[Objet] Moteur OpenGL Personnalisé"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] OpenGL Rendering",
                        "Français": "[Compétence] Rendu OpenGL"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Engine Architecture",
                        "Français": "[Compétence] Architecture de Moteur"
                    },
                    rarity: RarityEnum.EPIC 
                },
                { 
                    name: {
                        "English": "[Title] Game Engine Apprentice",
                        "Français": "[Titre] Apprenti Moteur de Jeu"
                    },
                    rarity: RarityEnum.RARE 
                }
            ],
            carousel: SmallImageGetter.projectVxVEngine
        },
        links: [
            { name: "GitHub Repository", url: "https://github.com/Dranemo/VxVEngine" }
        ]
    },

    
      
    {
        badgeTitle: {
            "English": "Zorya Sisters",
            "Français": "Zorya Sisters"
        },
        badgeImg: { image: BigImageGetter.projectZoryaSisters, rarity: YearEnum.SECOND },
        type: {
            "English": "Group - School Project",
            "Français": "Groupe - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.CPP,
        techno: {
            "English": "C++ with SFML (Custom Engine)",
            "Français": "C++ avec SFML (Moteur Personnalisé)"
        },
        dateDesc: {
            "English": "November - December 2023",
            "Français": "Novembre - Décembre 2023"
        },
        timeDesc: {
            "English": "3 weeks",
            "Français": "3 semaines"
        },
        details: {
            title: {
                "English": "Zorya Sisters - 2D Platformer Puzzle",
                "Français": "Zorya Sisters - Puzzle Plateforme 2D"
            },
            description: {
                "English": "Unleash the power of <span style='font-weight: 900;'>Zorya Sisters</span>, a trio of Russian dolls who will stop at nothing to escape their owner’s house. Solve challenging puzzles and use unique abilities to overcome tricky obstacles. Developed over 3 weeks as part of a school project, the game showcases the mechanics of a traditional platformer-puzzle hybrid. Originally planned to include multiple worlds, time constraints led to a single level introducing core gameplay. A true test of puzzle design and custom game engine development!",
                "Français": "Libérez la puissance des <span style='font-weight: 900;'>Zorya Sisters</span>, un trio de poupées russes prêtes à tout pour s'échapper de la maison de leur propriétaire. Résolvez des puzzles difficiles et utilisez des capacités uniques pour surmonter des obstacles complexes. Développé en 3 semaines dans le cadre d'un projet scolaire, le jeu présente les mécaniques d'un hybride entre plateforme et puzzle. Initialement prévu pour inclure plusieurs mondes, les contraintes de temps ont abouti à un niveau unique introduisant les mécaniques de jeu principales. Un véritable test de la conception de puzzles et du développement de moteur de jeu personnalisé !"
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Zorya Sisters Prototype",
                        "Français": "[Objet] Prototype des Sœurs Zorya"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Custom Game Engine Development",
                        "Français": "[Compétence] Développement de Moteur de Jeu Personnalisé"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] Puzzle Design",
                        "Français": "[Compétence] Conception de Puzzles"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Platformer Creator",
                        "Français": "[Titre] Créateur de Plateforme"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectZoryaSisters
        },
        links: []
    },

      
      
    // C# Projects
    {
        badgeTitle: {
            "English": "PokemonASCII",
            "Français": "PokemonASCII"
        },
        badgeImg: { image: BigImageGetter.projectPokemonASCII, rarity: YearEnum.SECOND },
        type: {
            "English": "Group - School Project",
            "Français": "Groupe - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.CSHARP,
        techno: {
            "English": "C# Console",
            "Français": "Console C#"
        },
        dateDesc: {
            "English": "February 2024",
            "Français": "Février 2024"
        },
        timeDesc: {
            "English": "2 weeks",
            "Français": "2 semaines"
        },
        details: {
            title: {
                "English": "PokemonASCII - Retro Console Adventure",
                "Français": "PokemonASCII - Aventure Rétro Console"
            },
            description: {
                "English": "Relive the classic <span style='font-weight: 900;'>Pokemon Red & Blue</span> experience in a retro ASCII format with <span style='font-weight: 900;'>PokemonASCII</span>. Recreate the iconic Bourg Palette and Route 1, using only ASCII characters for the environment and Pokemon. Developed in C# console, the game faithfully replicates all essential mechanics: stats, attacks, evolutions, level-ups, battles, captures, and wild encounters. With music adding to the nostalgic atmosphere, this 2-week school project brings the world of Pokemon to life in a uniquely minimalist way.",
                "Français": "Revivez l'expérience classique de <span style='font-weight: 900;'>Pokemon Rouge & Bleu</span> dans un format rétro ASCII avec <span style='font-weight: 900;'>PokemonASCII</span>. Recréez le Bourg Palette emblématique et la Route 1, en utilisant uniquement des caractères ASCII pour l'environnement et les Pokémon. Développé en console C#, le jeu réplique fidèlement toutes les mécaniques essentielles : statistiques, attaques, évolutions, montées en niveau, batailles, captures et rencontres sauvages. Avec de la musique ajoutant à l'atmosphère nostalgique, ce projet scolaire de 2 semaines fait revivre l'univers de Pokémon d'une manière minimaliste unique."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Pokemon Red & Blue (C# Console)",
                        "Français": "[Objet] Pokemon Rouge & Bleu (Console C#)"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] C# Development",
                        "Français": "[Compétence] Développement C#"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] Console Game Design",
                        "Français": "[Compétence] Conception de Jeux Console"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Title] Retro Game Developer",
                        "Français": "[Titre] Développeur de Jeux Rétro"
                    },
                    rarity: RarityEnum.RARE 
                }
            ],
            carousel: SmallImageGetter.projectPokemonASCII
        },
        links: [
            { 
                name: "GitHub Repository",
                url: "https://github.com/Dranemo/PokemonASCII"
            },
            { 
                name: "Github Release",
                url: "https://github.com/Dranemo/PokemonASCII/releases/tag/ReleasePortfolio"
            }
        ]
    },

      
    
      // Other Projects
      {
        badgeTitle: {
            "English": "Portfolio",
            "Français": "Portfolio"
        },
        badgeImg: { image: BigImageGetter.projectPortfolio, rarity: YearEnum.THIRD },
        type: {
            "English": "Solo - Personal Project",
            "Français": "Solo - Projet Personnel"
        },
        TechnoEnum: TechnoEnum.REACT,
        techno: {
            "English": "React",
            "Français": "React"
        },
        dateDesc: {
            "English": "October 2024 - Ongoing",
            "Français": "Octobre 2024 - En cours"
        },
        timeDesc: {
            "English": "Ongoing",
            "Français": "En cours"
        },
        details: {
            title: {
                "English": "Portfolio - Personal Game Status",
                "Français": "Portfolio - Statut de Jeu Personnel"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Portfolio</span>, transform your personal achievements into a retro video game status screen. Built with React, this project is designed to showcase a dynamic, interactive profile that mirrors a video game system. As a personal project, the goal is to present your skills and projects with a playful twist, capturing the essence of your journey through a game-like interface. Still ongoing, this portfolio evolves as new projects are completed and new 'achievements' and 'Quests' are unlocked.",
                "Français": "Dans <span style='font-weight: 900;'>Portfolio</span>, transformez vos réalisations personnelles en un écran de statut rétro de jeu vidéo. Développé avec React, ce projet est conçu pour présenter un profil dynamique et interactif qui reflète un système de jeu vidéo. En tant que projet personnel, l'objectif est de présenter vos compétences et vos projets de manière ludique, capturant l'essence de votre parcours à travers une interface de type jeu. En cours de développement, ce portfolio évolue à mesure que de nouveaux projets sont réalisés et que de nouvelles 'réalisations' et 'missions' sont débloquées."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Interactive Portfolio",
                        "Français": "[Objet] Portfolio Interactif"
                    },
                    rarity: RarityEnum.EPIC 
                },
                { 
                    name: {
                        "English": "[Skill] React Development",
                        "Français": "[Compétence] Développement React"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] UI/UX Design",
                        "Français": "[Compétence] Conception UI/UX"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Aspiring Web Developer",
                        "Français": "[Titre] Développeur Web Aspitant"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectPortfolio
        },
        links: [
            { 
                name: "GitHub Repository",
                url: "https://github.com/Dranemo/dranemo.github.io"
            }
        ]
    },

    
      
    {
        badgeTitle: {
            "English": "Game of Life",
            "Français": "Jeu de la Vie"
        },
        badgeImg: { image: BigImageGetter.projectGameOfLifeC, rarity: YearEnum.FIRST },
        type: {
            "English": "Group - School Project",
            "Français": "Groupe - Projet Scolaire"
        },
        TechnoEnum: TechnoEnum.C,
        techno: {
            "English": "C with SDL",
            "Français": "C avec SDL"
        },
        dateDesc: {
            "English": "February 2023",
            "Français": "Février 2023"
        },
        timeDesc: {
            "English": "1 week",
            "Français": "1 semaine"
        },
        details: {
            title: {
                "English": "Game of Life - Cellular Automaton Simulation",
                "Français": "Jeu de la Vie - Simulation d'Automate Cellulaire"
            },
            description: {
                "English": "In <span style='font-weight: 900;'>Game of Life</span>, experience the evolution of cells in this classic cellular automaton simulation, implemented in C with SDL. This group school project brings Conway’s famous 'Game of Life' to life by simulating cell births, deaths, and interactions based on simple rules. While it’s a straightforward concept, it provided a solid understanding of how systems can evolve from basic principles, with the added challenge of visualizing it using SDL in C.",
                "Français": "Dans <span style='font-weight: 900;'>Jeu de la Vie</span>, vivez l'évolution des cellules dans cette simulation classique d'automate cellulaire, implémentée en C avec SDL. Ce projet scolaire de groupe met en œuvre le célèbre 'Jeu de la Vie' de Conway, en simulant les naissances, morts et interactions des cellules basées sur des règles simples. Bien qu'il s'agisse d'un concept simple, il a permis de mieux comprendre comment les systèmes peuvent évoluer à partir de principes de base, avec le défi supplémentaire de visualiser cela en utilisant SDL en C."
            },
            rewards: [
                { 
                    name: {
                        "English": "[Item] Game of Life in C",
                        "Français": "[Objet] Jeu de la Vie en C"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Skill] C Programming",
                        "Français": "[Compétence] Programmation C"
                    },
                    rarity: RarityEnum.RARE 
                },
                { 
                    name: {
                        "English": "[Skill] SDL Development",
                        "Français": "[Compétence] Développement SDL"
                    },
                    rarity: RarityEnum.UNCOMMON 
                },
                { 
                    name: {
                        "English": "[Title] Cellular Automaton Engineer",
                        "Français": "[Titre] Ingénieur Automate Cellulaire"
                    },
                    rarity: RarityEnum.UNCOMMON 
                }
            ],
            carousel: SmallImageGetter.projectGameOfLifeC
        },
        links: [
            { 
                name: "GitHub Repository",
                url: "https://github.com/Dranemo/Conway-s-Game-of-Life"
            },
            { 
                name:  "GitHub Release",
                url: "https://github.com/Dranemo/Releases/releases/tag/GameOfLifeC"
            }
        ]
    },

];

export default ProjectsFile;
