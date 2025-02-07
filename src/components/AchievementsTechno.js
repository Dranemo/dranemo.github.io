import React, {useState, useEffect} from 'react';

import '../componentCSS/Achievements.css';
import ProjectMedal from './Components/ProjectMedal';
import BigAchievement from './Components/BigAchievements';

import ProjectsFile from './Variables/ProjectsFile';
import { TechnoEnum  } from './Variables/Enums';
import {Medal} from './Variables/ImageGetter';

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
              <h2>Achievements</h2>
              <hr className='titleBar'/>
          </div>



          <div className='MedalLegend'>
          <div className='MedalPart'>
            <img src={Medal.commonWhole} alt='Medal' className='MedalLegendMedal' />
            <p>First Year</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.uncommonWhole} alt='Medal' className='MedalLegendMedal' />
            <p>Second Year</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.rareWhole} alt='Medal' className='MedalLegendMedal' />
            <p>Third Year</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.epicWhole} alt='Medal' className='MedalLegendMedal' />
            <p>Fourth Year</p>
          </div>
          <div className='MedalPart'>
            <img src={Medal.legendaryWhole} alt='Medal' className='MedalLegendMedal' />
            <p>Fifth Year</p>
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
              <h3>Unreal Engine:</h3>
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
            <h3>Godot:</h3>
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
            <h3>Unity:</h3>
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
            <h3>C++:</h3>
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
            <h3>C#:</h3>
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
            <h3>Other:</h3>
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
