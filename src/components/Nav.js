import React, {useState} from 'react';

import '../componentCSS/Nav.css';

import { NavState } from './Variables/Enums';
import { defaultLanguage, getFlagLanguage } from './Variables/Getters';
import PagesFile from './Variables/Texts/PagesFile';




function Nav({ navState, changeNavState, changeLanguage, hoveredButton, handleMouseEnter, handleMouseLeave }) {

    
  return (
    <div className='Nav flex-direction-column'>

        <div className='Menu bg-color8 text-color3 flex-direction-column shadow'>
            {/*{navState !== NavState.skills ? (
                <button className='button-as-text'
                        onClick={() => changeNavState(NavState.skills)}
                        onMouseEnter={() => handleMouseEnter(NavState.skills)}
                        onMouseLeave={handleMouseLeave}
                >
                    {hoveredButton === NavState.skills ? '>' : '\u00A0'}
                    &nbsp;Skills&nbsp;&nbsp;
                </button>
            ) : (
                <button className='button-as-text'
                        onClick={() => changeNavState(NavState.main)}
                        onMouseEnter={() => handleMouseEnter(NavState.main)}
                        onMouseLeave={handleMouseLeave}
                >
                    {hoveredButton === NavState.main ? '>' : '\u00A0'}
                    &nbsp;Main Menu&nbsp;&nbsp;
                </button>
            )}*/}

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


        </div>
    </div>
  );
}

export default Nav;
