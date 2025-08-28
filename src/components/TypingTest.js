import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generateText } from '../utils/wordGenerator';
import './TypingTest.css';

const TypingTest = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTestActive, setIsTestActive] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [testDuration, setTestDuration] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  
  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize test
  useEffect(() => {
    resetTest();
  }, []);

  // Timer logic
  useEffect(() => {
    if (isTestActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isTestActive, timeLeft]);

  // Calculate WPM and accuracy
  useEffect(() => {
    if (testStarted) {
      const timeElapsed = (testDuration - timeLeft) / 60;
      const wordsTyped = correctChars / 5; // Standard: 5 chars = 1 word
      const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
      
      setWpm(currentWpm);
      
      const totalChars = correctChars + incorrectChars;
      const currentAccuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
      setAccuracy(currentAccuracy);
    }
  }, [correctChars, incorrectChars, timeLeft, testDuration, testStarted]);

  const resetTest = useCallback(() => {
    const newText = generateText(150);
    setText(newText);
    setUserInput('');
    setCurrentCharIndex(0);
    setIsTestActive(false);
    setTestStarted(false);
    setTimeLeft(testDuration);
    setWpm(0);
    setAccuracy(100);
    setCorrectChars(0);
    setIncorrectChars(0);
    setIsTestCompleted(false);
    
    // Focus input after reset
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  }, [testDuration]);

  const startTest = () => {
    if (!testStarted) {
      setTestStarted(true);
      setIsTestActive(true);
    }
  };

  const finishTest = () => {
    setIsTestActive(false);
    setIsTestCompleted(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    if (!testStarted) {
      startTest();
    }

    // Prevent typing beyond text length
    if (value.length > text.length) {
      return;
    }

    setUserInput(value);
    setCurrentCharIndex(value.length);

    // Calculate correct and incorrect characters
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < value.length; i++) {
      if (value[i] === text[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    setCorrectChars(correct);
    setIncorrectChars(incorrect);

    // Check if test is complete
    if (value.length === text.length) {
      finishTest();
    }
  };

  const handleKeyDown = (e) => {
    // Prevent backspace beyond current position
    if (e.key === 'Backspace' && userInput.length === 0) {
      e.preventDefault();
    }
    
    // Handle Tab + Enter for restart
    if (e.key === 'Tab' && e.shiftKey && isTestCompleted) {
      e.preventDefault();
      resetTest();
    }
  };

  const handleContainerClick = () => {
    if (inputRef.current && !isTestCompleted) {
      inputRef.current.focus();
    }
  };

  const handleContainerKeyDown = (e) => {
    if (!isTestCompleted && inputRef.current) {
      inputRef.current.focus();
      // Forward the key event to the input
      if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Space') {
        // Let the input handle the key naturally
      }
    }
  };

  const getCharacterClass = (index) => {
    if (index < userInput.length) {
      return userInput[index] === text[index] ? 'correct' : 'incorrect';
    } else if (index === currentCharIndex) {
      return 'current';
    }
    return 'pending';
  };

  const renderText = () => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`char ${getCharacterClass(index)}`}
      >
        {char}
      </span>
    ));
  };

  return (
    <div 
      className="typing-test"
      onClick={handleContainerClick}
      onKeyDown={handleContainerKeyDown}
      tabIndex={0}
    >
      <div className="test-header">
        <div className="timer">
          <span className="timer-label">time</span>
          <span className="timer-value">{timeLeft}s</span>
        </div>
        
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{wpm}</span>
            <span className="stat-label">wpm</span>
          </div>
          <div className="stat">
            <span className="stat-value">{accuracy}%</span>
            <span className="stat-label">acc</span>
          </div>
        </div>

        <div className="test-config">
          <button 
            className={testDuration === 15 ? 'active' : ''}
            onClick={() => setTestDuration(15)}
            disabled={isTestActive}
          >
            15s
          </button>
          <button 
            className={testDuration === 30 ? 'active' : ''}
            onClick={() => setTestDuration(30)}
            disabled={isTestActive}
          >
            30s
          </button>
          <button 
            className={testDuration === 60 ? 'active' : ''}
            onClick={() => setTestDuration(60)}
            disabled={isTestActive}
          >
            60s
          </button>
          <button 
            className={testDuration === 120 ? 'active' : ''}
            onClick={() => setTestDuration(120)}
            disabled={isTestActive}
          >
            2m
          </button>
        </div>
      </div>

      <div className="text-display" onClick={handleContainerClick}>
        {renderText()}
        <div className="typing-cursor" style={{ display: isTestCompleted ? 'none' : 'block' }}></div>
      </div>

      <div className="input-area">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="typing-input"
          placeholder={isTestCompleted ? "Test completed! Press Shift+Tab to restart" : "Click here or start typing..."}
          disabled={isTestCompleted}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <div className="input-label">
          {!testStarted && !isTestCompleted && "Click here and start typing"}
          {testStarted && !isTestCompleted && "Keep typing..."}
          {isTestCompleted && "Test completed! Press Shift+Tab to restart"}
        </div>
      </div>

      {isTestCompleted && (
        <div className="results">
          <h2>Test Complete!</h2>
          <div className="final-stats">
            <div className="final-stat">
              <span className="final-stat-value">{wpm}</span>
              <span className="final-stat-label">WPM</span>
            </div>
            <div className="final-stat">
              <span className="final-stat-value">{accuracy}%</span>
              <span className="final-stat-label">Accuracy</span>
            </div>
            <div className="final-stat">
              <span className="final-stat-value">{correctChars}</span>
              <span className="final-stat-label">Correct</span>
            </div>
            <div className="final-stat">
              <span className="final-stat-value">{incorrectChars}</span>
              <span className="final-stat-label">Incorrect</span>
            </div>
          </div>
          <button className="restart-btn" onClick={resetTest}>
            Try Again
          </button>
        </div>
      )}

      {!testStarted && !isTestCompleted && (
        <div className="instructions">
          Start typing to begin the test
        </div>
      )}
    </div>
  );
};

export default TypingTest;
