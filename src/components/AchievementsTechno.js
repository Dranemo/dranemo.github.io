import React, {useState, useEffect} from 'react';

import '../componentCSS/Achievements.css';
import ProjectMedal from './Components/ProjectMedal';
import BigAchievement from './Components/BigAchievements';

import ProjectsFile from './Variables/ProjectsFile';
import { RarityEnum, TechnoEnum } from './Variables/Enums';



var UEAchievements = [];
var GodotAchievements = [];
var UnityAchievements = [];
var CppAchievements = [];
var CSharpAchievements = [];
var OtherAchievements = [];


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