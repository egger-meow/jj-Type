export const themes = {
  dark: {
    name: 'Dark',
    colors: {
      background: '#323437',
      surface: '#2c2e31',
      primary: '#e2b714',
      text: '#d1d0c5',
      textSecondary: '#646669',
      correct: '#d1d0c5',
      incorrect: '#ca4754',
      current: '#e2b714',
      border: '#646669',
      borderHover: '#d1d0c5',
      inputBg: '#2c2e31',
      inputFocus: '#323437',
      buttonBg: 'transparent',
      buttonActive: 'rgba(226, 183, 20, 0.1)',
      restartButton: '#e2b714',
      restartButtonHover: '#d4a50d',
      // New global theming vars
      bgGradientFrom: '#2d2f32',
      bgGradientTo: '#373a3e',
      bgGradientAngle: '180deg',
      scrollbarTrack: '#2c2e31',
      scrollbarThumb: '#646669',
      selectionBg: 'rgba(226, 183, 20, 0.25)',
      selectionText: '#d1d0c5',
      shadowColor: 'rgba(0, 0, 0, 0.35)'
    }
  },
  light: {
    name: 'Light',
    colors: {
      background: '#f8f9fa',
      surface: '#ffffff',
      primary: '#007bff',
      text: '#212529',
      textSecondary: '#6c757d',
      correct: '#28a745',
      incorrect: '#dc3545',
      current: '#007bff',
      border: '#dee2e6',
      borderHover: '#6c757d',
      inputBg: '#ffffff',
      inputFocus: '#f8f9fa',
      buttonBg: 'transparent',
      buttonActive: 'rgba(0, 123, 255, 0.1)',
      restartButton: '#007bff',
      restartButtonHover: '#0056b3',
      bgGradientFrom: '#f3f4f6',
      bgGradientTo: '#e9ecef',
      bgGradientAngle: '180deg',
      scrollbarTrack: '#e9ecef',
      scrollbarThumb: '#ced4da',
      selectionBg: 'rgba(0, 123, 255, 0.15)',
      selectionText: '#212529',
      shadowColor: 'rgba(0, 0, 0, 0.12)'
    }
  },
  matrix: {
    name: 'Matrix',
    colors: {
      background: '#0a0a0a',
      surface: '#1a1a1a',
      primary: '#00ff41',
      text: '#00ff41',
      textSecondary: '#008f11',
      correct: '#00ff41',
      incorrect: '#ff073a',
      current: '#00ff41',
      border: '#008f11',
      borderHover: '#00ff41',
      inputBg: '#1a1a1a',
      inputFocus: '#0a0a0a',
      buttonBg: 'transparent',
      buttonActive: 'rgba(0, 255, 65, 0.1)',
      restartButton: '#00ff41',
      restartButtonHover: '#00cc33',
      bgGradientFrom: '#0a0a0a',
      bgGradientTo: '#0f0f0f',
      bgGradientAngle: '180deg',
      scrollbarTrack: '#111',
      scrollbarThumb: '#008f11',
      selectionBg: 'rgba(0, 255, 65, 0.2)',
      selectionText: '#00ff41',
      shadowColor: 'rgba(0, 255, 65, 0.15)'
    }
  },
  sunset: {
    name: 'Sunset',
    colors: {
      background: '#2d1810',
      surface: '#3d251c',
      primary: '#ff6b35',
      text: '#ffebc6',
      textSecondary: '#cc8b5c',
      correct: '#ffebc6',
      incorrect: '#ff4757',
      current: '#ff6b35',
      border: '#cc8b5c',
      borderHover: '#ffebc6',
      inputBg: '#3d251c',
      inputFocus: '#2d1810',
      buttonBg: 'transparent',
      buttonActive: 'rgba(255, 107, 53, 0.1)',
      restartButton: '#ff6b35',
      restartButtonHover: '#e55a2b',
      bgGradientFrom: '#24130d',
      bgGradientTo: '#3d251c',
      bgGradientAngle: '180deg',
      scrollbarTrack: '#2d1810',
      scrollbarThumb: '#cc8b5c',
      selectionBg: 'rgba(255, 107, 53, 0.18)',
      selectionText: '#ffebc6',
      shadowColor: 'rgba(255, 107, 53, 0.2)'
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      background: '#0f1419',
      surface: '#1b2631',
      primary: '#00d4ff',
      text: '#e8f4f8',
      textSecondary: '#7fb3c7',
      correct: '#00d4ff',
      incorrect: '#ff6b7d',
      current: '#00d4ff',
      border: '#7fb3c7',
      borderHover: '#e8f4f8',
      inputBg: '#1b2631',
      inputFocus: '#0f1419',
      buttonBg: 'transparent',
      buttonActive: 'rgba(0, 212, 255, 0.1)',
      restartButton: '#00d4ff',
      restartButtonHover: '#00b8e6',
      bgGradientFrom: '#0b1116',
      bgGradientTo: '#0f1419',
      bgGradientAngle: '180deg',
      scrollbarTrack: '#13202b',
      scrollbarThumb: '#7fb3c7',
      selectionBg: 'rgba(0, 212, 255, 0.18)',
      selectionText: '#e8f4f8',
      shadowColor: 'rgba(0, 212, 255, 0.18)'
    }
  }
};

export const getTheme = (themeName) => {
  return themes[themeName] || themes.dark;
};

export const getStoredTheme = () => {
  return localStorage.getItem('jjtype-theme') || 'dark';
};

export const setStoredTheme = (themeName) => {
  localStorage.setItem('jjtype-theme', themeName);
};
