const commonWords = [
  'the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with',
  'his', 'they', 'i', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what',
  'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'each', 'which', 'she', 'do', 'how', 'their',
  'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would',
  'make', 'like', 'into', 'him', 'time', 'has', 'two', 'more', 'very', 'after', 'words', 'first', 'where',
  'did', 'get', 'may', 'way', 'who', 'its', 'now', 'find', 'long', 'down', 'day', 'came', 'made', 'may',
  'part', 'over', 'new', 'sound', 'take', 'only', 'little', 'work', 'know', 'place', 'year', 'live', 'me',
  'back', 'give', 'most', 'very', 'good', 'woman', 'through', 'just', 'form', 'sentence', 'great', 'think',
  'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before', 'move', 'right', 'boy',
  'old', 'too', 'same', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small',
  'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must',
  'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off',
  'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build',
  'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school',
  'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'between', 'state', 'keep',
  'eye', 'never', 'last', 'let', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might',
  'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', 'dont', 'while', 'press', 'close', 'night',
  'real', 'life', 'few', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got',
  'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter',
  'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat'
];

export const generateWords = (count = 50) => {
  const words = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    words.push(commonWords[randomIndex]);
  }
  return words;
};

export const generateText = (wordCount = 50) => {
  return generateWords(wordCount).join(' ');
};
