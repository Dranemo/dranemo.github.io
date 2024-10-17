import React from 'react';
import { useState } from 'react';

import './App.css';

import Nav from './components/Nav';

import Skills from './components/Skills'; // Import du composant Skills
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
  }

  const [hoveredButton, setHoveredButton] = useState(null);
  // Fonction pour gérer le survol
  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };





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
        {navState !== NavState.quest && <Main />} {/* Affiche la section principale */}
      </main>
    </div>
  );
}

export default App;
