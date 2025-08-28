import React, { useEffect, useState } from 'react';
import TypingTest from './components/TypingTest';
import ThemeSelector from './components/ThemeSelector';
import { getStoredTheme, getTheme } from './utils/themes';
import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState(getStoredTheme());

  useEffect(() => {
    // Add keyboard shortcuts
    const handleKeyDown = (e) => {
      // Tab + Enter for restart (when test is completed)
      if (e.key === 'Tab' && e.ctrlKey) {
        e.preventDefault();
        window.location.reload();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Apply theme to document root
    const themeData = getTheme(currentTheme);
    const root = document.documentElement;
    
    Object.entries(themeData.colors).forEach(([property, value]) => {
      root.style.setProperty(`--${property.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });
  }, [currentTheme]);

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">jj-Type</h1>
        <p className="app-subtitle">Test your typing speed</p>
        <ThemeSelector 
          currentTheme={currentTheme} 
          onThemeChange={handleThemeChange} 
        />
      </header>
      <main>
        <TypingTest />
      </main>
      <footer className="app-footer">
        <p>Press Ctrl+Tab to restart • Inspired by MonkeyType</p>
      </footer>
    </div>
  );
}

export default App;
