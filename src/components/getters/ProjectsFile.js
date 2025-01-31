
import { BigImageGetter, SmallImageGetter } from './ImageGetter';
import "../../componentCSS/Achievements.css";

const RarityEnum = {
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare',
    EPIC: 'Epic',
    LEGENDARY: 'Legendary'
  };

const ProjectsFile = {
    // Unreal Projects
    CarnivalProject: {
        badgeTitle: "Carnival",
        badgeImg: { image: BigImageGetter.projectCarnival, rarity: RarityEnum.UNCOMMON },
        type: "Solo - School Project",
        techno: "Unreal Engine 5 - Blueprints",
        dateDesc: "January 2025",
        timeDesc: "1 week",
        details: {
            title: "Carnival - Blueprint Prototype",
            description: "In <span style='font-weight: 900;'>Carnival</span>, step into a prototype built using Unreal Engine 5's Blueprints system. This project includes a carnival setting with a game of knock-down cans and bumper cars, where NPCs wave at you when you approach. The game also features a currency system, adding a simple layer of interaction. While it's more of a prototype than a finished game, the focus was on implementing core mechanics and systems, such as NPC behavior and interactive objects, within a week. The game lacks 3D models, but it serves as a fun and functional demonstration of Blueprints in action.",
            rewards: [
                { name: "[Item] Carnival Prototype", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Unreal Engine Blueprints", rarity: RarityEnum.RARE },
                { name: "[Skill] Game Prototyping", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Blueprint Developer", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectCarnival
        },
        links: []
    },
    
    

    // Unity Projects
    CookingFryProject: {
        badgeTitle: "Cooking Fry",
        badgeImg: { image: BigImageGetter.projectCookingFry, rarity: RarityEnum.UNCOMMON },
        type: "Solo - Personal Project",
        techno: "Unity",
        dateDesc: "December 2024",
        timeDesc: "1 week",
        details: {
            title: "Cooking Fry - 3D Cooking UI Experience",
            description: "In <span style='font-weight: 900;'>Cooking Fry</span>, dive into a simple cooking game where the primary focus is the user interface (UI). Though the game isn’t finished, it allows you to experiment with creating recipes and cooking ingredients in a 3D environment. The ultimate goal? To learn and practice UI design for cooking games. You can only cook, but the game offers a glimpse into how a fully functional cooking game would work, with recipes to create but no customers to serve. A week-long solo project to enhance your UI development skills in Unity.",
            rewards: [
                { name: "[Item] Cooking Fry Recipe Creation", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] UI Development", rarity: RarityEnum.RARE },
                { name: "[Skill] 3D Game Interaction", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] UI Cooking Beginner", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectCookingFry
        },
        links: []
    },
    
    

    UnityShadersProject: {
        badgeTitle: "Unity Shaders",
        badgeImg: { image: BigImageGetter.projectUnityShaders, rarity: RarityEnum.UNCOMMON },
        type: "Solo - Personal Project",
        techno: "Unity (Shader Graph)",
        dateDesc: "November 2024",
        timeDesc: "1 week",
        details: {
            title: "Unity Shaders - Water & Mountains with Shader Graph",
            description: "In <span style='font-weight: 900;'>Unity Shaders</span>, dive into the world of Shader Graph as you explore the basics of creating custom shaders. Over the course of one week, you’ll learn to craft an entire environment from scratch, starting with a simple plane. From there, you’ll create <span style='font-weight: 900;'>moving water</span> and majestic mountains, all powered by shaders. A simple, yet powerful demonstration of the potential of Shader Graph for creating dynamic environments with minimal resources. A great starting point in my shader learning journey!",
            rewards: [
                { name: "[Item] Shader Graph Environment", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Shader Development", rarity: RarityEnum.RARE },
                { name: "[Skill] Water Simulation", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Shader Newcomer", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectUnityShaders
        },
        links: []
    },
    

      TheFinalExitProject: {
        badgeTitle: "The Final Exit",
        badgeImg: { image: BigImageGetter.projectTheFinalExit, rarity: RarityEnum.LEGENDARY },
        type: "Solo - School Project",
        techno: "Unity",
        dateDesc: "November 2024",
        timeDesc: "1 week",
        details: {
            title: "The Final Exit - Horror Elevator Escape",
            description: "Step into the terrifying world of <span style='font-weight: 900;'>The Final Exit</span>, a survival horror exploration game where you must navigate through a haunted hotel to escape. With 10 floors to descend, your goal is to find a hidden button on each level to activate the elevator and move on. But beware, <span style='font-weight: 900;'>monsters lurk</span> in the shadows, ready to hunt you down. There's no AI – just the eerie sounds of electricity and flickering lights to warn you when a monster is near. Hide and survive until you can complete your descent. Can you make it to the final floor and escape?",
            rewards: [
                { name: "[Item] The Final Exit Button", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Unity Development", rarity: RarityEnum.RARE },
                { name: "[Skill] Horror Game Design", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Audio and Environmental Cues", rarity: RarityEnum.RARE },
                { name: "[Title] Hotel Escape Artist", rarity: RarityEnum.EPIC }
            ],
            carousel: SmallImageGetter.projectTheFinalExit
        },
        links: [
            { name: "Itch.io", url: "https://dranemo.itch.io/the-final-exit" },
        ]
    },
    

      BranCastleProject: {
        badgeTitle: "Bran Castle",
        badgeImg: { image: BigImageGetter.projectBranCastle, rarity: RarityEnum.EPIC },
        type: "Group - School Project",
        techno: "Unity",
        dateDesc: "July - August 2024",
        timeDesc: "2 months",
        details: {
            title: "Bran Castle - Vampire Survival Beat 'Em Up",
            description: "In <span style='font-weight: 900;'>Bran Castle</span>, you play as a powerful vampire defending your castle from angry villagers and the royal guard. Your ultimate goal? Gather enough blood to complete a dark ritual and summon a demon. But with waves of enemies attacking from every direction, your task is no easy feat. The game challenges you to manage resources, strategically place units, and fight off your foes to survive until nightfall. A fully autonomous project, the first game I completed from start to finish, with successes waiting to be unlocked along the way. Now go ahead, <span style='font-weight: 900;'>defend your castle</span> and complete the ritual!",
            rewards: [
                { name: "[Item] Bran Castle Defenders", rarity: RarityEnum.EPIC },
                { name: "[Skill] Unity Development", rarity: RarityEnum.EPIC },
                { name: "[Skill] 2D Game Design", rarity: RarityEnum.RARE },
                { name: "[Skill] Resource Management", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Vampire Lord of Bran", rarity: RarityEnum.EPIC }
            ],
            carousel: SmallImageGetter.projectBranCastle
        },
        links: [
            { name: "Itch.io", url: "https://dranemo.itch.io/bran-castle" },
        ]
    },
    

      BuildToScaleProject: {
        badgeTitle: "Build to Scale",
        badgeImg: { image: BigImageGetter.projectBuildToScale, rarity: RarityEnum.RARE },
        type: "Solo - Personal Project",
        techno: "Unity",
        dateDesc: "August 2024",
        timeDesc: "5 days",
        details: {
            title: "Build to Scale - Shape Rescaling Puzzle",
            description: "Step into the shoes of a high-tech robot with the ability to <span style='font-weight: 900;'>rescale</span> materials in <span style='font-weight: 900;'>Build to Scale</span>, a simple yet intriguing puzzle game created for GMTK 2024. Your goal? Rebuild shapes presented to you using spawnable cubes, modifying them to fit the required form. While it’s a basic test of mechanics, the gameplay is surprisingly engaging, with fun and challenging moments. A quick, solo-made project that showcases both functionality and creativity within just <span style='font-weight: 900;'>5 days</span>!",
            rewards: [
                { name: "[Item] GMTK 2024 Submission (Build to Scale)", rarity: RarityEnum.RARE },
                { name: "[Skill] Unity Development", rarity: RarityEnum.RARE },
                { name: "[Skill] Game Prototyping", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Solo Game Jam Developer", rarity: RarityEnum.EPIC },
                { name: "[Skill] Rapid Problem Solving", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectBuildToScale
        },
        links: [
            { name: "Itch.io", url: "https://dranemo.itch.io/build-to-scale"},
        ]
    },

      FoxLeagueProject: {
        badgeTitle: "Fox League",
        badgeImg: { image: BigImageGetter.projectFoxLeague, rarity: RarityEnum.UNCOMMON },
        type: "Group - School Project",
        techno: "Unity",
        dateDesc: "February - March 2024",
        timeDesc: "2 weeks",
        details: {
            title: "Fox League - 2v2 Fox Soccer Showdown",
            description: "Get ready for an epic <span style='font-weight: 900;'>1v1 showdown</span> in Fox League, a fast-paced soccer game where two foxes battle it out on a wild, obstacle-filled field. Inspired by classic car-soccer games, this project is all about quick reflexes, strategy, and avoiding chaos as you compete for victory across <span style='font-weight: 900;'>3 intense rounds</span>. Created as a first Unity project with a group, no power-ups, just pure skill!",
            rewards: [
                { name: "[Item] Fox League Soccer Match", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Unity Development", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Multiplayer Game Design", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Unity Soccer Rookie", rarity: RarityEnum.RARE }
            ],
            carousel: SmallImageGetter.projectFoxLeague
        },
        links: []
    },
    


    // C++ Projects
    PathfindingSimulationProject: {
        badgeTitle: "Pathfinding Simulation",
        badgeImg: { image: BigImageGetter.projectPathfindingSimulation, rarity: RarityEnum.UNCOMMON },
        type: "Group - School Project",
        techno: "C++ with SFML",
        dateDesc: "September - October 2024",
        timeDesc: "1 week",
        details: {
            title: "Pathfinding Simulation - Grid Navigation Algorithms",
            description: "In <span style='font-weight: 900;'>Pathfinding Simulation</span>, test various pathfinding algorithms implemented in C++ with SFML. Explore methods like DFS, BFS, A*, Greedy, and Dijkstra on a non-weighted grid. This school group project focuses on visualizing how each algorithm navigates and finds the optimal or first-found path. It’s a great introduction to understanding algorithm efficiency and implementation, with hands-on experience in coding these techniques.",
            rewards: [
                { name: "[Item] Pathfinding Grid Simulation", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] C++ Development", rarity: RarityEnum.RARE },
                { name: "[Skill] Algorithm Design", rarity: RarityEnum.RARE },
                { name: "[Title] Pathfinding Explorer", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectPathfindingSimulation
        },
        links: []
    },
      
    ZoryaSistersProject: {
        badgeTitle: "Zorya Sisters",
        badgeImg: { image: BigImageGetter.projectZoryaSisters, rarity: RarityEnum.RARE },
        type: "Group - School Project",
        techno: "C++ with SFML (Custom Engine)",
        dateDesc: "November - December 2023",
        timeDesc: "3 weeks",
        details: {
            title: "Zorya Sisters - 2D Platformer Puzzle",
            description: "Unleash the power of <span style='font-weight: 900;'>Zorya Sisters</span>, a trio of Russian dolls who will stop at nothing to escape their owner’s house. Solve challenging puzzles and use unique abilities to overcome tricky obstacles. Developed over 3 weeks as part of a school project, the game showcases the mechanics of a traditional platformer-puzzle hybrid. Originally planned to include multiple worlds, time constraints led to a single level introducing core gameplay. A true test of puzzle design and custom game engine development!",
            rewards: [
                { name: "[Item] Zorya Sisters Prototype", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Custom Game Engine Development", rarity: RarityEnum.RARE },
                { name: "[Skill] Puzzle Design", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Platformer Creator", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectZoryaSisters
        },
        links: []
    },   
      
      
    // C# Projects
    PokemonASCIIProject: {
        badgeTitle: "PokemonASCII",
        badgeImg: { image: BigImageGetter.projectPokemonASCII, rarity: RarityEnum.RARE },
        type: "Group - School Project",
        techno: "C# Console",
        dateDesc: "February 2024",
        timeDesc: "2 weeks",
        details: {
            title: "PokemonASCII - Retro Console Adventure",
            description: "Relive the classic <span style='font-weight: 900;'>Pokemon Red & Blue</span> experience in a retro ASCII format with <span style='font-weight: 900;'>PokemonASCII</span>. Recreate the iconic Bourg Palette and Route 1, using only ASCII characters for the environment and Pokemon. Developed in C# console, the game faithfully replicates all essential mechanics: stats, attacks, evolutions, level-ups, battles, captures, and wild encounters. With music adding to the nostalgic atmosphere, this 2-week school project brings the world of Pokemon to life in a uniquely minimalist way.",
            rewards: [
                { name: "[Item] Pokemon Red & Blue (C# Console)", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] C# Development", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] Console Game Design", rarity: RarityEnum.RARE },
                { name: "[Title] Retro Game Developer", rarity: RarityEnum.RARE }
            ],
            carousel: SmallImageGetter.projectPokemonASCII
        },
        links: [
            { name: "GitHub Repository", url: "https://github.com/Dranemo/PokemonASCII"},
            { name: "Github Release", url: "https://github.com/Dranemo/PokemonASCII/releases/tag/ReleasePortfolio"}
        ]
    },
      
    
      // Other Projects
      PortfolioProject: {
        badgeTitle: "Portfolio",
        badgeImg: { image: BigImageGetter.projectPortfolio, rarity: RarityEnum.EPIC },
        type: "Solo - Personal Project",
        techno: "React",
        dateDesc: "October 2024 - Ongoing",
        timeDesc: "Ongoing",
        details: {
            title: "Portfolio - Personal Game Status",
            description: "In <span style='font-weight: 900;'>Portfolio</span>, transform your personal achievements into a retro video game status screen. Built with React, this project is designed to showcase a dynamic, interactive profile that mirrors a video game system. As a personal project, the goal is to present your skills and projects with a playful twist, capturing the essence of your journey through a game-like interface. Still ongoing, this portfolio evolves as new projects are completed and new 'achievements' and 'Quests' are unlocked.",
            rewards: [
                { name: "[Item] Interactive Portfolio", rarity: RarityEnum.EPIC },
                { name: "[Skill] React Development", rarity: RarityEnum.RARE },
                { name: "[Skill] UI/UX Design", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Aspiring Web Developer", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectPortfolio
        },
        links: []
    },
    
      
      GameOfLifeProject: {
        badgeTitle: "Game of Life",
        badgeImg: { image: BigImageGetter.projectGameOfLifeC, rarity: RarityEnum.UNCOMMON },
        type: "Group - School Project",
        techno: "C with SDL",
        dateDesc: "February 2023",
        timeDesc: "1 week",
        details: {
            title: "Game of Life - Cellular Automaton Simulation",
            description: "In <span style='font-weight: 900;'>Game of Life</span>, experience the evolution of cells in this classic cellular automaton simulation, implemented in C with SDL. This group school project brings Conway’s famous 'Game of Life' to life by simulating cell births, deaths, and interactions based on simple rules. While it’s a straightforward concept, it provided a solid understanding of how systems can evolve from basic principles, with the added challenge of visualizing it using SDL in C.",
            rewards: [
                { name: "[Item] Game of Life in C", rarity: RarityEnum.UNCOMMON },
                { name: "[Skill] C Programming", rarity: RarityEnum.RARE },
                { name: "[Skill] SDL Development", rarity: RarityEnum.UNCOMMON },
                { name: "[Title] Cellular Automaton Engineer", rarity: RarityEnum.UNCOMMON }
            ],
            carousel: SmallImageGetter.projectGameOfLifeC
        },
        links: []
    }
    
};

export default ProjectsFile;