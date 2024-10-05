import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

function ListGroup() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        document.body.classList.toggle('dark-mode', newMode);
    };

    return (
        <div className="top-bar">
            <div className="top-bar-content">
                <h1>AI Future</h1>
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </div>
    );
}

export default ListGroup;