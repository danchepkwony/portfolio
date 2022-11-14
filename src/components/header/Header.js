import React, { useContext } from 'react';
import './Header.scss';
import { ReactComponent as Sun } from '../../assets/images/sun.svg';
import { ReactComponent as Moon } from '../../assets/images/moon.svg';
import { ThemeContext } from '../../context/Theme';

export const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header className='header'>
        <button onClick={setTheme}>
            <Moon className={theme ? "link" : "link hide"}/>
            <Sun className={!theme ? "link" : "link hide"}/>
        </button>
        <nav>
            <a className="link" href="#projects" >Projects</a>
            <a className="link" href="#about">About</a>
        </nav>
    </header>
  )
}
