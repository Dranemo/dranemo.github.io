import React, {useState, useEffect} from 'react';

import '../componentCSS/Achievements.css';
import ProjectMedal from './Components/ProjectMedal';

import { BigImageGetter, SmallImageGetter } from './Variables/ImageGetter';






  // --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ Définir les quêtes ------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

const PortfolioProject = {
    badgeTitle: "Portfolio",
    badgeImg: { image: BigImageGetter.projectPortfolio, rarity: RarityEnum.EPIC },
    techno: "React",
  
    dateDesc: "October 2024 - Present",
    timeDesc: "Ongoing Development",
  
    details: {
      title: "Personal Portfolio - React Development",
      description: "Your personal portfolio, currently under development using React, showcases your journey as a game developer. Initiated in October 2023, this dynamic platform will feature all your projects, allowing you to present your skills and achievements effectively. With an emphasis on user experience and design, it will serve as a vital tool for sharing your work with the world.",
      rewards: [
        { name: "[Item] Interactive Portfolio", rarity: RarityEnum.EPIC },
        { name: "[Skill] React Development", rarity: RarityEnum.RARE },
        { name: "[Skill] UI/UX Design", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Aspiring Web Developer", rarity: RarityEnum.UNCOMMON }
      ],
      carousel: SmallImageGetter.projectPortfolio
    },

    links: []
  };
  
  const PathfindingSimulationProject = {
    badgeTitle: "Pathfinding Simulation",
    badgeImg: { image: BigImageGetter.projectPathfinding, rarity: RarityEnum.RARE },
    techno: "C++ with SFML",
  
    dateDesc: "September - October 2024",
    timeDesc: "1 week",
  
    details: {
      title: "Pathfinding Algorithms Simulation - C++ with SFML",
      description: "This project is a **pathfinding simulation** developed in C++ using SFML. Created over the span of one week as a group of four, the simulation visualizes multiple pathfinding algorithms on an unweighted grid. The algorithms implemented include **DFS**, **BFS**, **A\***, **Greedy**, and **Dijkstra**. The project provided an in-depth understanding of these algorithms' workings and allowed for real-time visualization of their efficiency and behavior.",
      rewards: [
        { name: "[Item] Pathfinding Simulation (C++)", rarity: RarityEnum.RARE },
        { name: "[Skill] C++ Development with SFML", rarity: RarityEnum.RARE },
        { name: "[Skill] Pathfinding Algorithms (DFS, BFS, A*, Greedy, Dijkstra)", rarity: RarityEnum.EPIC },
        { name: "[Skill] Algorithm Visualization", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Pathfinding Explorer", rarity: RarityEnum.RARE }
      ],
      carousel: SmallImageGetter.projectPathfinding
    },

    links: [
        { name: "GitHub Repository", url: ""},
        { name: "Zip File", url: ""}
    ]
  };
  
  const BranCastleProject = {
    badgeTitle: "Bran Castle",
    badgeImg: { image: BigImageGetter.projectBranCastle, rarity: RarityEnum.EPIC },
    techno: "Unity",
  
    dateDesc: "July - August 2024",
    timeDesc: "2 months",
  
    details: {
      title: "Bran Castle - Vampire Defense Game",
      description: "In **Bran Castle**, your first autonomous game developed in Unity over two months with a teammate, you take on the role of a vampire defending your castle from enraged villagers and the royal guard. Your ultimate goal is to gather enough blood to complete a dark ritual and summon a demon. Armed with powerful abilities, you fend off waves of attackers while managing resources and strategically placing units to assist in the defense. Survive until nightfall to complete the ritual and achieve your dark ambitions. The game features French language support with an option for other languages.",
      rewards: [
        { name: "[Item] Bran Castle Game", rarity: RarityEnum.EPIC },
        { name: "[Skill] Unity Development", rarity: RarityEnum.RARE },
        { name: "[Skill] Resource Management", rarity: RarityEnum.UNCOMMON },
        { name: "[Skill] Strategic Planning", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Autonomous Game Developer", rarity: RarityEnum.EPIC }
      ],
      carousel: SmallImageGetter.projectBranCastle
    },

    links: [
        { name: "Itch.io", url: ""},
    ]
  };
  
  const BuildToScaleProject = {
    badgeTitle: "Build to Scale",
    badgeImg: { image: BigImageGetter.ProjectBuildToScale, rarity: RarityEnum.RARE },
    techno: "Unity",
  
    dateDesc: "August 2024",
    timeDesc: "5 days",
  
    details: {
      title: "Build to Scale - GMTK 2024 Game Jam Quest",
      description: "In this daring solo quest for the GMTK 2024 Game Jam, you ventured into uncharted territory to create **Build to Scale** within the constraints of the 'Build to Scale' theme. Armed with only Unity and your determination, you successfully completed this challenge in 5 days. While not a full release, the project served as a **technical demo** and a foundation for future development, showcasing your ability to rapidly prototype and design a functional game from scratch. This was your very first Game Jam, and it marked the beginning of your journey as a solo developer.",
      rewards: [
        { name: "[Item] GMTK 2024 Submission (Build to Scale)", rarity: RarityEnum.RARE },
        { name: "[Skill] Unity Development", rarity: RarityEnum.RARE },
        { name: "[Skill] Game Prototyping", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Solo Game Jam Developer", rarity: RarityEnum.EPIC },
        { name: "[Skill] Rapid Problem Solving", rarity: RarityEnum.UNCOMMON }
      ],
      carousel: SmallImageGetter.ProjectBuildToScale
    },

    links: [
        { name: "Itch.io", url: ""},
    ]
  };
  
  const FoxLeagueProject = {
    badgeTitle: "Fox League",
    badgeImg: { image: BigImageGetter.projectFoxLeague, rarity: RarityEnum.UNCOMMON },
    techno: "Unity",
  
    dateDesc: "February - March 2024",
    timeDesc: "2 Weeks",
  
    details: {
      title: "Fox League - Multiplayer Football Adventure",
      description: "In **Fox League**, a 3D multiplayer game developed in Unity, you experience the thrill of football with a twist. Featuring split-screen gameplay, players control agile foxes as they navigate through various obstacles on the field. This project marks your first foray into Unity development, drawing inspiration from popular car football games while adding a unique animalistic flair.",
      rewards: [
        { name: "[Item] Fox League Unity Project", rarity: RarityEnum.RARE },
        { name: "[Skill] Unity Development", rarity: RarityEnum.RARE },
        { name: "[Skill] Game Design", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Aspiring Game Developer", rarity: RarityEnum.UNCOMMON }
      ],
      carousel: SmallImageGetter.projectFoxLeague
    },

    links: [
        { name: "Zip File", url: ""},
    ]
  };
  
  const PokemonRedBlueCSharpProject = {
    badgeTitle: "Pokemon Red & Blue Recreation",
    badgeImg: { image: BigImageGetter.projectPokemonASCII, rarity: RarityEnum.UNCOMMON },
    techno: "C# Console",
  
    dateDesc: "February 2024",
    timeDesc: "2 weeks",
  
    details: {
      title: "Pokemon Red & Blue - C# Console Recreation",
      description: "This project is a C# console-based recreation of key elements from **Pokemon Red & Blue** (1998). Developed over two weeks as part of your studies, the game includes **Pallet Town**, **Route 1**, and the iconic introduction by Professor Oak. Players can engage in classic turn-based battles, capture Pokémon, and complete small quests. Although incomplete and containing known bugs, the project showcases your first experience with C# development and replicates core gameplay mechanics such as wild encounters, Pokémon stats, and leveling.",
      rewards: [
        { name: "[Item] Pokemon Red & Blue (C# Console)", rarity: RarityEnum.UNCOMMON },
        { name: "[Skill] C# Development", rarity: RarityEnum.UNCOMMON },
        { name: "[Skill] Turn-based Combat System", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Novice C# Developer", rarity: RarityEnum.RARE }
      ],
      carousel: SmallImageGetter.projectPokemonASCII
    },

    links: [
        { name: "GitHub Repository", url: ""},
        { name: "Zip File", url: ""}
    ]
  };
  
  const ZoryaSistersProject = {
    badgeTitle: "Zorya Sisters",
    badgeImg: { image: BigImageGetter.projectZoryaSisters, rarity: RarityEnum.RARE },
    techno: "C++ with SFML",
  
    dateDesc: "November - December 2023",
    timeDesc: "3 weeks",
  
    details: {
      title: "Zorya Sisters - Platformer Puzzle Quest",
      description: "Zorya Sisters is a 2D platformer and puzzle game developed with SFML in C++ over the course of three weeks as part of a group project at Gaming Campus. In a team of five, you crafted this intricate game where players control Russian dolls with unique powers, navigating obstacles and solving puzzles to escape a house. The game, while still a prototype, demonstrated your mastery of game mechanics and C++ development beyond simulation projects. Although only one level was completed, the foundation for a full-scale platformer was set.",
      rewards: [
        { name: "[Item] Zorya Sisters Prototype", rarity: RarityEnum.RARE },
        { name: "[Skill] C++ Development with SFML", rarity: RarityEnum.RARE },
        { name: "[Skill] Game Mechanics Design", rarity: RarityEnum.UNCOMMON },
        { name: "[Skill] Team Collaboration", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Platformer Creator", rarity: RarityEnum.RARE }
      ],
      carousel: SmallImageGetter.projectZoryaSisters
    },

    links: [
        { name: "GitHub Repository", url: ""},
        { name: "Zip File", url: ""}
    ]
  };
  
  const GameOfLifeCProject = {
    badgeTitle: "Game of Life",
    badgeImg: { image: BigImageGetter.projectGameOfLifeC, rarity: RarityEnum.UNCOMMON },
    techno: "C with SDL",
  
    dateDesc: "April 2023",
    timeDesc: "1 week",
  
    details: {
      title: "Game of Life - First C Project Quest",
      description: "You embarked on a collaborative quest to develop a simulation of **Conway’s Game of Life** in C. This was your first encounter with the language, and over the course of a week, alongside a trusted ally, you tackled the complexities of memory management and algorithms in C. The result was a functional version of this classic simulation, marking your first achievement in low-level programming.",
      rewards: [
        { name: "[Item] Game of Life in C", rarity: RarityEnum.UNCOMMON },
        { name: "[Skill] C Programming", rarity: RarityEnum.RARE },
        { name: "[Skill] Memory Management", rarity: RarityEnum.UNCOMMON },
        { name: "[Title] Novice C Programmer", rarity: RarityEnum.RARE }
      ],
      carousel: SmallImageGetter.projectGameOfLifeC
    },

    links: [
        { name: "GitHub Repository", url: ""},
        { name: "Zip File", url: ""}
    ]
  };
  





function Achievements() {

    const [displayedProject, setDisplayedProject] = useState(null);

    useEffect(() => {
        if (displayedProject) {
            console.log('Achievements useEffect', displayedProject);
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [displayedProject]);

    const handleProjectClick = (project) => {
        console.log('ProjectMedal clicked', project);
        setDisplayedProject(project);
    };



    const getRarityColor = (rarity) => {
        switch (rarity) {
            case RarityEnum.COMMON:
                return '#737373';
            case RarityEnum.UNCOMMON:
                return '#5ea041';
            case RarityEnum.RARE:
                return '#004aad';
            case RarityEnum.EPIC:
                return '#8c52ff';
            case RarityEnum.LEGENDARY:
                return '#b8860b';
            default:
                return 'black';
        }
    };




    return (
      <div className='Card' id='CardAch'>
          <div>
              <h2>Achievements</h2>
              <hr className='titleBar'/>
          </div>


          {/*********************** Project details **********************/}
          {displayedProject && (
            <>
                <div className='overlay' onClick={() => handleProjectClick(null)}></div>
                <div className='ProjectDetails'>
                <img src={displayedProject.badgeImg.image} alt={`image project`} className='projectImgDesc' />
                
                <h2 id='colorBlue'>{displayedProject.badgeTitle}</h2>
                <hr className='titleBarProj'/>
                <p>{displayedProject.dateDesc}</p>
                <p>{displayedProject.timeDesc}</p>
                <hr className='titleBarProj2'/>

                <div>
                    <h3 id='colorBlue'>{displayedProject.details.title}</h3>
                    <hr className='titleBarProj'/>

                    
                    <p className='DescProject'>{displayedProject.details.description}</p>
                    <ul id='removeStyleList'>
                        {displayedProject.details.rewards.map((reward, index) => (
                            <li key={index} style={{ color: getRarityColor(reward.rarity) }}>
                                - {reward.name} ({reward.rarity})
                            </li>
                        ))}
                    </ul>
                </div>

                {displayedProject.links && displayedProject.links.length > 0 && (
                    <div className='linksDiv'>
                        {displayedProject.links.map((link, index) => (
                            <div key={index} className='link'>
                                <a href={link.url} target='_blank' rel='noreferrer' className='linkColor'>{link.name}</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </>
            )}


        <div className='divProjects'>
        <ProjectMedal 
            badgeTitle={PortfolioProject.badgeTitle}
            badgeImg={PortfolioProject.badgeImg}
            techno={PortfolioProject.techno}
            dateDesc={PortfolioProject.dateDesc}
            timeDesc={PortfolioProject.timeDesc}

            onClick={() => handleProjectClick(PortfolioProject)}
          />

          <ProjectMedal 
            badgeTitle={PathfindingSimulationProject.badgeTitle}
            badgeImg={PathfindingSimulationProject.badgeImg}
            techno={PathfindingSimulationProject.techno}
            dateDesc={PathfindingSimulationProject.dateDesc}
            timeDesc={PathfindingSimulationProject.timeDesc}

            onClick={() => handleProjectClick(PathfindingSimulationProject)}
          />

          <ProjectMedal 
            badgeTitle={BranCastleProject.badgeTitle}
            badgeImg={BranCastleProject.badgeImg}
            techno={BranCastleProject.techno}
            dateDesc={BranCastleProject.dateDesc}
            timeDesc={BranCastleProject.timeDesc}

            onClick={() => handleProjectClick(BranCastleProject)}
          />


          <ProjectMedal 
            badgeTitle={BuildToScaleProject.badgeTitle}
            badgeImg={BuildToScaleProject.badgeImg}
            techno={BuildToScaleProject.techno}
            dateDesc={BuildToScaleProject.dateDesc}
            timeDesc={BuildToScaleProject.timeDesc}

            onClick={() => handleProjectClick(BuildToScaleProject)}
          />

          <ProjectMedal 
            badgeTitle={FoxLeagueProject.badgeTitle}
            badgeImg={FoxLeagueProject.badgeImg}
            techno={FoxLeagueProject.techno}
            dateDesc={FoxLeagueProject.dateDesc}
            timeDesc={FoxLeagueProject.timeDesc}

            onClick={() => handleProjectClick(FoxLeagueProject)}
          />
          <ProjectMedal 
            badgeTitle={PokemonRedBlueCSharpProject.badgeTitle}
            badgeImg={PokemonRedBlueCSharpProject.badgeImg}
            techno={PokemonRedBlueCSharpProject.techno}
            dateDesc={PokemonRedBlueCSharpProject.dateDesc}
            timeDesc={PokemonRedBlueCSharpProject.timeDesc}

            onClick={() => handleProjectClick(PokemonRedBlueCSharpProject)}
          />
          <ProjectMedal 
            badgeTitle={ZoryaSistersProject.badgeTitle}
            badgeImg={ZoryaSistersProject.badgeImg}
            techno={ZoryaSistersProject.techno}
            dateDesc={ZoryaSistersProject.dateDesc}
            timeDesc={ZoryaSistersProject.timeDesc}

            onClick={() => handleProjectClick(ZoryaSistersProject)}
          />
          <ProjectMedal 
            badgeTitle={GameOfLifeCProject.badgeTitle}
            badgeImg={GameOfLifeCProject.badgeImg}
            techno={GameOfLifeCProject.techno}
            dateDesc={GameOfLifeCProject.dateDesc}
            timeDesc={GameOfLifeCProject.timeDesc}

            onClick={() => handleProjectClick(GameOfLifeCProject)}
          />
        </div>
      </div>
    );
  }
  
  export default Achievements;