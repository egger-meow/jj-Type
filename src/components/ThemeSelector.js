import React, { useState } from 'react';
import { themes, getTheme, setStoredTheme } from '../utils/themes';
import './ThemeSelector.css';

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeSelect = (themeKey) => {
    onThemeChange(themeKey);
    setStoredTheme(themeKey);
    setIsOpen(false);
  };

  const currentThemeData = getTheme(currentTheme);

  return (
    <div className="theme-selector">
      <button
        className="theme-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Change theme"
      >
        <span className="theme-icon">🎨</span>
        <span className="theme-name">{currentThemeData.name}</span>
      </button>

      {isOpen && (
        <>
          <div className="theme-overlay" onClick={() => setIsOpen(false)} />
          <div className="theme-dropdown">
            <h3>Choose Theme</h3>
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                className={`theme-option ${key === currentTheme ? 'active' : ''}`}
                onClick={() => handleThemeSelect(key)}
              >
                <div className="theme-preview">
                  <div
                    className="color-sample"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div
                    className="color-sample"
                    style={{ backgroundColor: theme.colors.correct }}
                  />
                  <div
                    className="color-sample"
                    style={{ backgroundColor: theme.colors.incorrect }}
                  />
                  <div
                    className="color-sample"
                    style={{ backgroundColor: theme.colors.surface }}
                  />
                </div>
                <span className="theme-option-name">{theme.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;
