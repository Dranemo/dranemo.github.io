import React from 'react';
import { useState, useEffect } from 'react';
import amagara from './assets/images/bigImages/1024px-0698Amaura.png';

import './App.css';

import Nav from './components/Nav';

import Skills from './components/Skills'; 
import Achievements from './components/AchievementsTechno';
import Support from './components/Support';
import Main from './components/Main';
import Quests from './components/Quest';



const NavState = {
  main: 'Main Menu',
  skills: 'Skills',
  quest: 'Quest Log',
  achievements: 'Achievements',
  support: 'Support'
}



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









    // Détecter si la page est affichée sur un téléphone
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
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
  
    // Afficher un message si la page est affichée sur un téléphone
    if (isMobile) {
      return (
        <div className='Card' id='CardMobile'>
          <h3>Sorry, the mobile version is currently under development.</h3>
          <p>Please check back later, or use the desktop version!</p>
          <img src={amagara} alt="Amagara"/>
        </div>
      );
    }












  return (
    <div>
      <header>
        <Nav 
          navState={navState} 
          changeNavState={changeNavState}
          hoveredButton={hoveredButton}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        /> 
      </header>

      <main>
        {navState === NavState.quest && <Quests />} {/* Affiche la section des compétences */}
        {navState === NavState.skills && <Skills />} {/* Affiche la section des compétences */}
        {navState === NavState.achievements && <Achievements />} {/* Affiche la section des succès */}
        {navState === NavState.support && <Support />} {/* Affiche la section du support */}
        {navState === NavState.main && <Main />} {/* Affiche la section principale */}
      </main>
    </div>
  );
}

export default App;
