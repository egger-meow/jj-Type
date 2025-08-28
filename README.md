# JJType - Typing Speed Test

A React-based typing speed test application inspired by [MonkeyType](https://monkeytype.com).

## Features

- **Real-time typing test** with live WPM and accuracy tracking
- **Multiple test durations**: 15s, 30s, 60s, 2m
- **Visual feedback** for correct/incorrect characters
- **Detailed results** showing WPM, accuracy, correct/incorrect characters
- **Responsive design** optimized for all devices
- **Keyboard shortcuts** for quick navigation
- **Modern UI** with MonkeyType-inspired design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use

1. **Start typing** - The test begins as soon as you start typing
2. **Choose duration** - Select from 15s, 30s, 60s, or 2m before starting
3. **Type accurately** - Correct characters are highlighted in white, incorrect in red
4. **View results** - After completing the test, see your detailed statistics
5. **Restart** - Click "Try Again" or use Ctrl+Tab to restart

## Keyboard Shortcuts

- **Ctrl+Tab** - Restart the application
- **Tab** - Focus on the typing area (when available)

## Technologies Used

- **React 18** - Frontend framework
- **CSS3** - Styling with modern features
- **JetBrains Mono** - Monospace font for optimal typing experience

## Features Detail

### Typing Test Engine
- Real-time character-by-character comparison
- Live WPM calculation (5 characters = 1 word)
- Accuracy percentage calculation
- Current character highlighting with cursor animation

### Statistics Tracking
- Words Per Minute (WPM)
- Accuracy percentage
- Correct characters count
- Incorrect characters count
- Test duration tracking

### User Interface
- Clean, distraction-free design
- Dark theme optimized for long typing sessions
- Responsive layout for desktop and mobile
- Visual feedback for typing progress

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes Create React App tooling (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── TypingTest.js      # Main typing test component
│   └── TypingTest.css     # Styling for typing test
├── utils/
│   └── wordGenerator.js   # Word generation utility
├── App.js                 # Main app component
├── App.css               # Global app styles
├── index.js              # React entry point
└── index.css             # Global CSS reset
```

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the MIT License.
