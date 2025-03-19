import React, {useState, useEffect} from 'react';


import '../componentCSS/Achievements.css';
import ProjectMedal from './Components/ProjectMedal';
import BigAchievement from './Components/BigAchievements';

import ProjectsFile from './Variables/Texts/ProjectsFile';
import { TechnoEnum, YearEnum, ModeEnum  } from './Variables/Enums';
import {Medal, technoImages} from './Variables/ImageGetter';

import { defaultLanguage, defaultMode } from './Variables/Getters';
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
        if(project.show === false) return;

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
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [displayedProject]);

    const handleProjectClick = (project) => {
        console.log('ProjectMedal clicked', project);
        setDisplayedProject(project);
    };




    return (
      <div className={`Card bg-color2 text-color1 flex-direction-column text-align-center line-height-1-5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>
          <div>
              <h2>{PagesFile.Achievements.Title[defaultLanguage.Langue]}</h2>
              <hr className={`titleBar bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
          </div>



          <div className='MedalLegend'>
          <div className='MedalPart'>
            <img src={Medal.commonWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.FIRST}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.uncommonWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.SECOND}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.rareWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.THIRD}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.epicWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.FOURTH}</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.legendaryWhole} alt='Medal' className='MedalLegendMedal' />
            <p>{YearEnum.FIFTH}</p>
          </div>
        </div>


          {/*********************** Project details **********************/}
          {displayedProject && (
            <>
                <div className='overlay bg-color-semi-black' onClick={() => handleProjectClick(null)}></div>
                <BigAchievement displayedProject={displayedProject} />
            </>
            )}


          {/*********************** Display medals **********************/}
          <div className='bigDivAchievements'>
          {UEAchievements.length > 0 && (
            <>
            <hr className={`titleBar2 bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <div className='DivLogo text-align-center '>
              <img src={technoImages.unreal} alt='Unreal Engine' className='TechnoImage' />
              <h3>{TechnoEnum.UNREALENGINE}:</h3>
            </div>
              <div className='divProjects text-align-center flex-space-evenly'>

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
            <hr className={`titleBar2 bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <div className='DivLogo text-align-center '>
              <img src={technoImages.godot} alt='Godot' className='TechnoImage' />
              <h3>{TechnoEnum.GODOT}:</h3>
            </div>
            <div className='divProjects text-align-center flex-space-evenly'>
              
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
            <hr className={`titleBar2 bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <div className='DivLogo text-align-center '>
              <img src={technoImages.unity} alt='Unity' className='TechnoImage' />
              <h3>{TechnoEnum.UNITY}:</h3>
            </div>
            <div className='divProjects text-align-center flex-space-evenly'>
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
            <hr className={`titleBar2 bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <div className='DivLogo text-align-center '>
              <img src={technoImages.cpp} alt='CPP' className='TechnoImage' />
              <h3>{TechnoEnum.CPP}:</h3>
            </div>
            <div className='divProjects text-align-center flex-space-evenly'>

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
            <hr className={`titleBar2 bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <div className='DivLogo text-align-center '>
              <img src={technoImages.csharp} alt='CSharp' className='TechnoImage' />
              <h3>{TechnoEnum.CSHARP}:</h3>
            </div>
            <div className='divProjects text-align-center flex-space-evenly'>
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
            <hr className={`titleBar2 bg-color5 ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}/>
            <div className='DivLogo text-align-center '>
              <h3>{PagesFile.Achievements.Other[defaultLanguage.Langue]}:</h3>
            </div>
            <div className='divProjects text-align-center flex-space-evenly'>
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
