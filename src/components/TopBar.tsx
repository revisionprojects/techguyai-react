import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface TopBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <h1>TechGuy.Ai</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
