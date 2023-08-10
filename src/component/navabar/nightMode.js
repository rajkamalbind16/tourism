import React, { useState, useEffect } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import Styles from './nightMode.css';

export default function DayNightButton() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isNightMode]);

  return (
    <div
      className={isNightMode ? Styles.nightButton : Styles.dayButton}
      onClick={toggleMode}
    >
      {isNightMode ? <RiMoonFill /> : <RiSunFill />}
      {isNightMode ? 'Night Mode' : 'Day Mode'}
    </div>
  );
}
