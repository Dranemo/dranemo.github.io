import React, {useState, useEffect} from 'react';

import '../componentCSS/Achievements.css';
import ProjectMedal from './Components/ProjectMedal';
import BigAchievement from './Components/BigAchievements';

import ProjectsFile from './Variables/Texts/ProjectsFile';
import { TechnoEnum, YearEnum  } from './Variables/Enums';
import {Medal} from './Variables/ImageGetter';

import { defaultLanguage } from './Variables/Getters';
import PagesFile from './Variables/Texts/PagesFile';

function Achievements() {
  {/*********************** Display Medals **********************/}
    const [UEAchievements, setUEAchievements] = useState([]);
    const [GodotAchievements, setGodotAchievements] = useState([]);
    const [UnityAchievements, setUnityAchievements] = useState([]);
    const [CppAchievements, setCPPAchievements] = useState([]);
    const [CSharpAchievements, setCSharpAchievements] = useState([]);
    const [OtherAchievements, setOtherAchievements] = useState([]);

    useEffect(() => {
      const ueAchievements = [];
      const godotAchievements = [];
      const unityAchievements = [];
      const cppAchievements = [];
      const csharpAchievements = [];
      const otherAchievements = [];


      ProjectsFile.forEach((project) => {
          switch (project.TechnoEnum) {
              case TechnoEnum.UNREALENGINE:
                  ueAchievements.push(project);
                  break;
              case TechnoEnum.GODOT:
                  godotAchievements.push(project);
                  break;
              case TechnoEnum.UNITY:
                  unityAchievements.push(project);
                  break;
              case TechnoEnum.CPP:
                  cppAchievements.push(project);
                  break;
              case TechnoEnum.CSHARP:
                  csharpAchievements.push(project);
                  break;
              default:
                  otherAchievements.push(project);
                  break;
          }
      });

        setUEAchievements(ueAchievements);
        setGodotAchievements(godotAchievements);
        setUnityAchievements(unityAchievements);
        setCPPAchievements(cppAchievements);
        setCSharpAchievements(csharpAchievements);
        setOtherAchievements(otherAchievements);
    }, []);



  {/*********************** Big Display **********************/}
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




    return (
      <div className='Card' id='CardAch'>
          <div>
              <h2>{PagesFile.Achievements.Title[defaultLanguage.Langue]}</h2>
              <hr className='titleBar'/>
          </div>



          <div className='MedalLegend'>
          <div className='MedalPart'>
            <img src={Medal.commonWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.FIRST[defaultLanguage.Langue]}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.uncommonWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.SECOND[defaultLanguage.Langue]}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.rareWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.THIRD[defaultLanguage.Langue]}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.epicWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.FOURTH[defaultLanguage.Langue]}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.legendaryWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.FIFTH[defaultLanguage.Langue]}</p>
          </div>
        </div>


          {/*********************** Project details **********************/}
          {displayedProject && (
            <>
                <div className='overlay' onClick={() => handleProjectClick(null)}></div>
                <BigAchievement displayedProject={displayedProject} />
            </>
            )}


          {/*********************** Display medals **********************/}
          <div className='bigDivAchievements'>
          {UEAchievements.length > 0 && (
            <>
              <h3>{TechnoEnum.UNREALENGINE}:</h3>
              <div className='divProjects'>

              {UEAchievements.map((project) => (
                <ProjectMedal 
                    ProjectStruct={project}
                    showTechno={true}
                    onClick={() => handleProjectClick(project)}
                  />
              ))}

              </div>
            </>
          )}



          {GodotAchievements.length > 0 && (
          <>
            <h3>{TechnoEnum.GODOT}:</h3>
            <div className='divProjects'>
              
              {GodotAchievements.map((project) => (
                <ProjectMedal 
                    ProjectStruct={project}
                    showTechno={true}
                    onClick={() => handleProjectClick(project)}
                  />
              ))} 
            </div>
          </>
          )}



          {UnityAchievements.length > 0 && (
          <>
            <h3>{TechnoEnum.UNITY}:</h3>
            <div className='divProjects'>
              {UnityAchievements.map((project) => (
                <ProjectMedal
                    ProjectStruct={project}
                    showTechno={true}
                    onClick={() => handleProjectClick(project)}
                  />
              ))}
            </div>
          </>
          )}

          {CppAchievements.length > 0 && (
          <>
            <h3>{TechnoEnum.CPP}:</h3>
            <div className='divProjects'>

              {CppAchievements.map((project) => (
                <ProjectMedal
                    ProjectStruct={project}
                    showTechno={true}
                    onClick={() => handleProjectClick(project)}
                  />
              ))}
            </div>
          </>
          )}

          {CSharpAchievements.length > 0 && (
          <>
            <h3>{TechnoEnum.CSHARP}:</h3>
            <div className='divProjects'>
              {CSharpAchievements.map((project) => (
                <ProjectMedal
                    ProjectStruct={project}
                    showTechno={true}
                    onClick={() => handleProjectClick(project)}
                  />
              ))}
            </div>
          </>
          )}

          {OtherAchievements.length > 0 && (
          <>
            <h3>{PagesFile.Achievements.Other[defaultLanguage.Langue]}:</h3>
            <div className='divProjects'>
              {OtherAchievements.map((project) => (
                <ProjectMedal
                    ProjectStruct={project}
                    showTechno={true}
                    onClick={() => handleProjectClick(project)}
                  />
              ))} 
            </div>
          </>
          )}


        </div>


        
      </div>
    );
  }
  
  export default Achievements;
