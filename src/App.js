import React from 'react';
import { useState, useEffect } from 'react';

import { NavState, LanguageEnum, ModeEnum } from './components/Variables/Enums';
import { defaultLanguage, setDefaultLanguage, defaultMode, SetDefaultMode, isMobile, setIsMobile } from './components/Variables/Getters';
import PagesFile from './components/Variables/Texts/PagesFile';

import './App.css';

import Nav from './components/Nav';
import Achievements from './components/AchievementsTechno';
import Support from './components/Support';
import Main from './components/Main';
import Quests from './components/Quest';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


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



    const [isBannerShown, setIsBannerShown] = useState(true);
    const hideBanner = () => {
        setIsBannerShown(false);
        console.log('Banner hidden');
    };


    const [currentBool, setMobileBool] = useState(isMobile);
    const changeMobile = (bool) => {
        setIsMobile(bool); // Directly set the value using the exported function
        setMobileBool(bool); // Update the local state
      };


    // Détecter si la page est affichée sur un téléphones
    useEffect(() => {
      const handleResize = () => {
        changeMobile(window.innerWidth < 601);
      };
  
      // Vérifier la taille de la fenêtre au chargement
      handleResize();
  
      // Ajouter un écouteur d'événement pour les changements de taille de la fenêtre
      window.addEventListener('resize', handleResize);
  
      // Nettoyer l'écouteur d'événement lors du démontage du composant
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);












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

      <footer>
        {isMobile && (
          <>
            <div className={`footerMobile text-color1 ${isBannerShown ? "" : "hidden"}`} >
              {PagesFile.App.BetterOnDesktop[defaultLanguage.Langue]}

              <button className='footerMobileCross text-color1 ' onClick={hideBanner}>
                <FontAwesomeIcon icon={faXmark}/>
              </button>
            </div>
            
          </>
        )}
      </footer  >
    </div>
  );
}

export default App;
