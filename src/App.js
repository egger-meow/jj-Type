import React, { useEffect } from 'react';
import TypingTest from './components/TypingTest';
import './App.css';

function App() {
  useEffect(() => {
    // Add keyboard shortcuts
    const handleKeyDown = (e) => {
      // Tab + Enter to restart (when test is completed)
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

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">JJType</h1>
        <p className="app-subtitle">Test your typing speed</p>
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
