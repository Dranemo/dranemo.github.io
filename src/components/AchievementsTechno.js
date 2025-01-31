import React, {useState, useEffect} from 'react';

import '../componentCSS/Achievements.css';
import ProjectMedal from './ProjectMedal';

import ProjectsFile from './getters/ProjectsFile';

const RarityEnum = {
  COMMON: 'Common',
  UNCOMMON: 'Uncommon',
  RARE: 'Rare',
  EPIC: 'Epic',
  LEGENDARY: 'Legendary'
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
                return '#4A7F32 ';
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

                    
                    <p className='DescProject' dangerouslySetInnerHTML={{ __html: displayedProject.details.description }}></p>
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

          <div className='bigDivAchievements'>
            <h3>Unreal Engine:</h3>
            <div className='divProjects'>
            <ProjectMedal 
                ProjectStruct={ProjectsFile.CarnivalProject}
                showTechno={true}

                onClick={() => handleProjectClick(ProjectsFile.CarnivalProject)}
              />
            </div>

            <h3>Unity:</h3>
            <div className='divProjects'>

              <ProjectMedal 
                ProjectStruct={ProjectsFile.CookingFryProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.CookingFryProject)}
              />
              <ProjectMedal 
                ProjectStruct={ProjectsFile.UnityShadersProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.UnityShadersProject)}
              />
              <ProjectMedal 
                ProjectStruct={ProjectsFile.TheFinalExitProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.TheFinalExitProject)}
              />
              <ProjectMedal 
                ProjectStruct={ProjectsFile.BranCastleProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.BranCastleProject)}
              />
              <ProjectMedal 
                ProjectStruct={ProjectsFile.BuildToScaleProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.BuildToScaleProject)}
              />
              <ProjectMedal 
                ProjectStruct={ProjectsFile.FoxLeagueProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.FoxLeagueProject)}
              />
            </div>


            <h3>C++:</h3>
            <div className='divProjects'>
              <ProjectMedal 
                ProjectStruct={ProjectsFile.PathfindingSimulationProject}
                showTechno={true}

                onClick={() => handleProjectClick(ProjectsFile.PathfindingSimulationProject)}
              />
              <ProjectMedal 
                ProjectStruct={ProjectsFile.ZoryaSistersProject}
                showTechno={true}

                onClick={() => handleProjectClick(ProjectsFile.ZoryaSistersProject)}
              />
            </div>


            <h3>C#:</h3>
            <div className='divProjects'>

              <ProjectMedal 
                ProjectStruct={ProjectsFile.PokemonASCIIProject}
                showTechno={false}

                onClick={() => handleProjectClick(ProjectsFile.PokemonASCIIProject)}
              />
            </div>


            <h3>Other:</h3>
            <div className='divProjects'>

              <ProjectMedal 
                ProjectStruct={ProjectsFile.PortfolioProject}
                showTechno={true}

                onClick={() => handleProjectClick(ProjectsFile.PortfolioProject)}
              />

              <ProjectMedal 
                ProjectStruct={ProjectsFile.GameOfLifeProject}
                showTechno={true}

                onClick={() => handleProjectClick(ProjectsFile.GameOfLifeProject)}
              />
        </div>
      </div>
      </div>
    );
  }
  
  export default Achievements;