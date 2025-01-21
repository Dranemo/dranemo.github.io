import React, {useState} from 'react';

import '../componentCSS/Nav.css';


const NavState = {
    main: 'Main Menu',
    skills: 'Skills',
    quest: 'Quest Log',
    achievements: 'Achievements',
    support: 'Support'
  };


function Nav({ navState, changeNavState, hoveredButton, handleMouseEnter, handleMouseLeave }) {

    
  return (
    <div className='Nav'>

        <div className='Menu'>
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
                <button className='button-as-text'
                        onClick={() => changeNavState(NavState.quest)}
                        onMouseEnter={() => handleMouseEnter(NavState.quest)}
                        onMouseLeave={handleMouseLeave}
                >
                    {hoveredButton === NavState.quest ? '>' : '\u00A0'}
                    &nbsp;Quest Log&nbsp;&nbsp;
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
            )}

            {navState !== NavState.achievements ? (
                <button className='button-as-text'
                        onClick={() => changeNavState(NavState.achievements)}
                        onMouseEnter={() => handleMouseEnter(NavState.achievements)}
                        onMouseLeave={handleMouseLeave}
                >
                    {hoveredButton === NavState.achievements ? '>' : '\u00A0'}
                    &nbsp;Achievements&nbsp;&nbsp;
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
            )}

            {navState !== NavState.support ? (
                <button className='button-as-text'
                        onClick={() => changeNavState(NavState.support)}
                        onMouseEnter={() => handleMouseEnter(NavState.support)}
                        onMouseLeave={handleMouseLeave}
                >
                    {hoveredButton === NavState.support ? '>' : '\u00A0'}
                    &nbsp;Support&nbsp;&nbsp;
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
            )}

        </div>
    </div>
  );
}

export default Nav;
