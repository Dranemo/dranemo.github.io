import React from 'react';
import { useState, useEffect } from 'react';
import amagara from './assets/images/bigImages/1024px-0698Amaura.png';

import { NavState, LanguageEnum, ModeEnum } from './components/Variables/Enums';
import { defaultLanguage, setDefaultLanguage, defaultMode, SetDefaultMode } from './components/Variables/Getters';
import PagesFile from './components/Variables/Texts/PagesFile';

import './App.css';

import Nav from './components/Nav';
import Achievements from './components/AchievementsTechno';
import Support from './components/Support';
import Main from './components/Main';
import Quests from './components/Quest';


const languagesPossible = Object.values(LanguageEnum);



function App() {

  /* Gestion de la navigation */
  const [navState, setNavState] = useState(NavState.main);
  const changeNavState = (newState) => {
      setNavState(newState);
      console.log('New nav state:', newState);
  }

  const [hoveredButton, setHoveredButton] = useState(null);
  // Fonction pour gérer le survol
  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const [currentIndex, setCurrentIndex] = useState(languagesPossible.indexOf(defaultLanguage));
    const goToNextLanguage = () => {
        const nextIndex = (currentIndex + 1) % languagesPossible.length;
        setCurrentIndex(nextIndex);
        setDefaultLanguage(languagesPossible[nextIndex]);
    };

    const [currentMode, setCurrentMode] = useState(defaultMode);
    const changeMode = () => {
      setCurrentMode((prevMode) => {
        const newMode = prevMode === ModeEnum.DARK ? ModeEnum.LIGHT : ModeEnum.DARK;
        SetDefaultMode(newMode); // Utilisez la nouvelle valeur calculée
        return newMode;
      });
    };














  return (
    <div className='App'>
      <header>
        <Nav 
          navState={navState} 
          changeNavState={changeNavState}
          changeLanguage={goToNextLanguage}
          changeMode={changeMode}
          hoveredButton={hoveredButton}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        /> 
      </header>

      <main>
        {navState === NavState.quest && <Quests />} {/* Affiche la section des compétences */}
        {navState === NavState.achievements && <Achievements />} {/* Affiche la section des succès */}
        {navState === NavState.support && <Support />} {/* Affiche la section du support */}
        {navState === NavState.main && <Main />} {/* Affiche la section principale */}
      </main>
    </div>
  );
}

export default App;
