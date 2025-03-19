import React, { useState, useEffect }from 'react';

import '../componentCSS/Nav.css';

import { NavState, ModeEnum } from './Variables/Enums';
import { defaultLanguage, getFlagLanguage, defaultMode } from './Variables/Getters';
import { Lines } from './Variables/ImageGetter';
import PagesFile from './Variables/Texts/PagesFile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';




function Nav({ navState, changeNavState, changeLanguage, changeMode, hoveredButton, handleMouseEnter, handleMouseLeave }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const changeMenuOpen = () => {
        setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
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
            <>
            <button className='Lines' onClick={changeMenuOpen}><FontAwesomeIcon icon={faBars} /></button>
            <div className={`Nav flex-direction-column ${isMenuOpen ? '' : 'closed'}`}>
                <div className={`Menu bg-color8 text-color3 flex-direction-column shadow ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>
                    {navState !== NavState.quest ? (
                        <button className='button-as-text hover-pointer'
                                onClick={() => {changeNavState(NavState.quest); changeMenuOpen()}}
                        >
                            {hoveredButton === NavState.quest ? '>' : '\u00A0'}
                            {PagesFile.Quests.Title[defaultLanguage.Langue]}
                        </button>
                    ) : (
                        <button className='button-as-text hover-pointer'
                                onClick={() => {changeNavState(NavState.main); changeMenuOpen()}}
                        >
                            {hoveredButton === NavState.main ? '>' : '\u00A0'}
                            {PagesFile.Main.Title[defaultLanguage.Langue]}
                        </button>
                    )}
        
                    {navState !== NavState.achievements ? (
                        <button className='button-as-text hover-pointer'
                                onClick={() => {changeNavState(NavState.achievements); changeMenuOpen()}}
                        >
                            {hoveredButton === NavState.achievements ? '>' : '\u00A0'}
                            {PagesFile.Achievements.Title[defaultLanguage.Langue]}
                        </button>
                    ) : (
                        <button className='button-as-text hover-pointer'
                                onClick={() => {changeNavState(NavState.main); changeMenuOpen()}}
                        >
                            {hoveredButton === NavState.main ? '>' : '\u00A0'}
                            {PagesFile.Main.Title[defaultLanguage.Langue]}
                        </button>
                    )}
        
                    {navState !== NavState.support ? (
                        <button className='button-as-text hover-pointer'
                                onClick={() => {changeNavState(NavState.support); changeMenuOpen()}}
                        >
                            {hoveredButton === NavState.support ? '>' : '\u00A0'}
                            {PagesFile.Support.Title[defaultLanguage.Langue]}
                        </button>
                    ) : (
                        <button className='button-as-text hover-pointer'
                                onClick={() => {changeNavState(NavState.main); changeMenuOpen()}}
                        >
                            {hoveredButton === NavState.main ? '>' : '\u00A0'}
                            {PagesFile.Main.Title[defaultLanguage.Langue]}
                        </button>
                    )}
        
                    <button className='button-as-text hover-pointer'
                            onClick={() => changeLanguage()}
                    >
                        {hoveredButton === 'Language' ? '>' : '\u00A0'}
                        {PagesFile.Nav.Language[defaultLanguage.Langue]}: {defaultLanguage.Langue}
                        
                    </button>
        
                    <button className='button-as-text hover-pointer'
                            onClick={() => changeMode()}
                    >
                        {hoveredButton === 'Mode' ? '>' : '\u00A0'}
                        {defaultMode[defaultLanguage.Langue]} <FontAwesomeIcon icon={defaultMode === ModeEnum.LIGHT ? faSun : faMoon} />
                        
                    </button>
        
        
                </div>
            </div> 
        </>
        );
        
    }

    else {
        return (
            <div className='Nav flex-direction-column'>
        
                <div className={`Menu bg-color8 text-color3 flex-direction-column shadow ${defaultMode===ModeEnum.LIGHT ? 'light-mode' : ''}`}>
                    {navState !== NavState.quest ? (
                        <button className='button-as-text hover-pointer'
                                onClick={() => changeNavState(NavState.quest)}
                                onMouseEnter={() => handleMouseEnter(NavState.quest)}
                                onMouseLeave={handleMouseLeave}
                        >
                            {hoveredButton === NavState.quest ? '>' : '\u00A0'}
                            &nbsp;{PagesFile.Quests.Title[defaultLanguage.Langue]}&nbsp;&nbsp;
                        </button>
                    ) : (
                        <button className='button-as-text hover-pointer'
                                onClick={() => changeNavState(NavState.main)}
                                onMouseEnter={() => handleMouseEnter(NavState.main)}
                                onMouseLeave={handleMouseLeave}
                        >
                            {hoveredButton === NavState.main ? '>' : '\u00A0'}
                            &nbsp;{PagesFile.Main.Title[defaultLanguage.Langue]}&nbsp;&nbsp;
                        </button>
                    )}
        
                    {navState !== NavState.achievements ? (
                        <button className='button-as-text hover-pointer'
                                onClick={() => changeNavState(NavState.achievements)}
                                onMouseEnter={() => handleMouseEnter(NavState.achievements)}
                                onMouseLeave={handleMouseLeave}
                        >
                            {hoveredButton === NavState.achievements ? '>' : '\u00A0'}
                            &nbsp;{PagesFile.Achievements.Title[defaultLanguage.Langue]}&nbsp;&nbsp;
                        </button>
                    ) : (
                        <button className='button-as-text hover-pointer'
                                onClick={() => changeNavState(NavState.main)}
                                onMouseEnter={() => handleMouseEnter(NavState.main)}
                                onMouseLeave={handleMouseLeave}
                        >
                            {hoveredButton === NavState.main ? '>' : '\u00A0'}
                            &nbsp;{PagesFile.Main.Title[defaultLanguage.Langue]}&nbsp;&nbsp;
                        </button>
                    )}
        
                    {navState !== NavState.support ? (
                        <button className='button-as-text hover-pointer'
                                onClick={() => changeNavState(NavState.support)}
                                onMouseEnter={() => handleMouseEnter(NavState.support)}
                                onMouseLeave={handleMouseLeave}
                        >
                            {hoveredButton === NavState.support ? '>' : '\u00A0'}
                            &nbsp;{PagesFile.Support.Title[defaultLanguage.Langue]}&nbsp;&nbsp;
                        </button>
                    ) : (
                        <button className='button-as-text hover-pointer'
                                onClick={() => changeNavState(NavState.main)}
                                onMouseEnter={() => handleMouseEnter(NavState.main)}
                                onMouseLeave={handleMouseLeave}
                        >
                            {hoveredButton === NavState.main ? '>' : '\u00A0'}
                            &nbsp;{PagesFile.Main.Title[defaultLanguage.Langue]}&nbsp;&nbsp;
                        </button>
                    )}
        
                    <button className='button-as-text hover-pointer'
                            onClick={() => changeLanguage()}
                            onMouseEnter={() => handleMouseEnter('Language')}
                            onMouseLeave={handleMouseLeave}
                    >
                        {hoveredButton === 'Language' ? '>' : '\u00A0'}
                        &nbsp;{PagesFile.Nav.Language[defaultLanguage.Langue]}: {defaultLanguage.Langue}
                        &nbsp;&nbsp;
                    </button>
        
                    <button className='button-as-text hover-pointer'
                            onClick={() => changeMode()}
                            onMouseEnter={() => handleMouseEnter('Mode')}
                            onMouseLeave={handleMouseLeave}
                    >
                        {hoveredButton === 'Mode' ? '>' : '\u00A0'}
                        &nbsp;{defaultMode[defaultLanguage.Langue]} <FontAwesomeIcon icon={defaultMode === ModeEnum.LIGHT ? faSun : faMoon} />
                        &nbsp;&nbsp;
                    </button>
        
        
                </div>
            </div> 
        );
    }






    
  
}

export default Nav;
