// Common words for basic typing practice
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
  'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat',
  
  // Medium length words
  'ability', 'absolute', 'academic', 'accept', 'access', 'accident', 'accurate', 'achieve', 'acknowledge', 'acquire',
  'activity', 'actually', 'addition', 'address', 'adequate', 'adjust', 'admire', 'admission', 'advance', 'advantage',
  'adventure', 'advertise', 'advice', 'aesthetic', 'affect', 'afternoon', 'aggressive', 'agreement', 'airplane', 'algorithm',
  'alliance', 'allocate', 'allowance', 'alongside', 'already', 'alternate', 'although', 'altitude', 'amazing', 'ambition',
  'analysis', 'announce', 'annual', 'anonymous', 'answer', 'anticipate', 'anxiety', 'apartment', 'apologize', 'apparent',
  'appeal', 'appearance', 'appendix', 'appliance', 'application', 'appointment', 'appreciate', 'approach', 'approval', 'architect',
  'argument', 'arrange', 'arrival', 'article', 'artistic', 'assembly', 'assessment', 'assignment', 'assistance', 'associate',
  'assumption', 'assurance', 'athlete', 'atmosphere', 'attachment', 'attention', 'attitude', 'attraction', 'attribute', 'audience',
  'authority', 'automatic', 'available', 'average', 'aviation', 'awareness', 'awesome', 'background', 'bacteria', 'balance',
  'basement', 'bathroom', 'battery', 'beautiful', 'beginning', 'behavior', 'believe', 'benefit', 'biology', 'birthday',
  'blanket', 'blossom', 'boundary', 'breakfast', 'brilliant', 'broadcast', 'browser', 'building', 'business', 'calculate',
  'calendar', 'campaign', 'capacity', 'capital', 'capture', 'carbon', 'careful', 'category', 'celebrate', 'century',
  'ceremony', 'chairman', 'challenge', 'champion', 'channel', 'chapter', 'charity', 'chemical', 'chicken', 'chocolate',
  'cigarette', 'circuit', 'citizen', 'classic', 'classify', 'climate', 'clothing', 'cluster', 'coalition', 'cognitive',
  'collapse', 'colleague', 'collect', 'college', 'colonial', 'colorful', 'column', 'comfort', 'command', 'comment',
  'commerce', 'committee', 'commodity', 'communicate', 'community', 'company', 'compare', 'compete', 'complain', 'complete',
  'complex', 'component', 'compose', 'computer', 'concept', 'concern', 'concert', 'conclude', 'concrete', 'condition',
  'conduct', 'conference', 'confidence', 'confirm', 'conflict', 'confront', 'confusion', 'connect', 'consensus', 'consent',
  'consider', 'consist', 'constant', 'construct', 'consult', 'consumer', 'contact', 'contain', 'content', 'context',
  'continue', 'contract', 'contrast', 'contribute', 'control', 'convenient', 'convert', 'convince', 'cooperate', 'coordinate',
  
  // Longer and more complex words
  'accommodation', 'accomplishment', 'accountability', 'accreditation', 'administration', 'advertisement', 'agricultural', 'anthropology', 'appreciation', 'appropriation',
  'archaeological', 'assassination', 'authorization', 'autobiography', 'biodiversity', 'biotechnology', 'capitalization', 'cardiovascular', 'certification', 'characteristic',
  'classification', 'collaboration', 'communication', 'comprehensive', 'concentration', 'configuration', 'consciousness', 'consideration', 'constitutional', 'contamination',
  'contradiction', 'controversial', 'conventional', 'correspondence', 'cryptocurrency', 'crystallization', 'demonstration', 'determination', 'differentiation', 'discrimination',
  'documentation', 'effectiveness', 'electromagnetic', 'embarrassment', 'entertainment', 'entrepreneurial', 'environmental', 'establishment', 'extraordinary', 'functionality',
  'fundamentalism', 'generalization', 'globalization', 'grandparent', 'hallucination', 'identification', 'implementation', 'impossibility', 'improvisation', 'independence',
  'individualism', 'industrialization', 'infrastructure', 'institutional', 'intellectual', 'intelligence', 'international', 'interpretation', 'investigation', 'justification',
  'kindergarten', 'knowledgeable', 'liberalization', 'manufacturing', 'mathematical', 'maximization', 'Mediterranean', 'memorization', 'microprocessor', 'misunderstanding',
  'modernization', 'multiplication', 'nationalization', 'naturalization', 'nevertheless', 'notwithstanding', 'objectivity', 'observation', 'organizational', 'overwhelming',
  'participation', 'perfectionism', 'personalization', 'pharmaceutical', 'philosophical', 'photosynthesis', 'precipitation', 'predictability', 'predominantly', 'presentation',
  'preservation', 'privatization', 'productivity', 'professional', 'profitability', 'pronunciation', 'psychological', 'qualification', 'quantification', 'questionnaire',
  'rationalization', 'recommendation', 'reconciliation', 'reconstruction', 'refrigerator', 'rehabilitation', 'relationship', 'relativity', 'representative', 'reproduction',
  'responsibility', 'revolutionary', 'satisfaction', 'semiconductor', 'simplification', 'sophisticated', 'specialization', 'specification', 'standardization', 'subscription',
  'substantially', 'sustainability', 'technological', 'temperature', 'terminology', 'thanksgiving', 'theoretical', 'transformation', 'transportation', 'undergraduate',
  'understanding', 'unemployment', 'unfortunately', 'universality', 'urbanization', 'visualization', 'vulnerability', 'wholeheartedly', 'workstation', 'xylophone',
  
  // Technical and specialized terms
  'algorithm', 'analytics', 'bandwidth', 'blockchain', 'browser', 'buffer', 'byte', 'cache', 'callback', 'capacity',
  'client', 'cloud', 'cluster', 'compiler', 'component', 'compression', 'computation', 'concurrent', 'configuration', 'connectivity',
  'container', 'cookie', 'database', 'debugging', 'deployment', 'desktop', 'developer', 'digital', 'domain', 'download',
  'dynamic', 'encryption', 'endpoint', 'engine', 'ethernet', 'execution', 'export', 'extension', 'firewall', 'firmware',
  'framework', 'frontend', 'function', 'gateway', 'graphics', 'hardware', 'hosting', 'hyperlink', 'implementation', 'indexing',
  'integration', 'interface', 'internet', 'iteration', 'javascript', 'kernel', 'keyboard', 'latency', 'library', 'localhost',
  'logic', 'malware', 'memory', 'metadata', 'microchip', 'middleware', 'migration', 'module', 'monitor', 'multimedia',
  'namespace', 'network', 'node', 'offline', 'operating', 'optimization', 'overflow', 'package', 'parameter', 'partition',
  'password', 'peripheral', 'platform', 'plugin', 'pointer', 'portal', 'processor', 'programming', 'protocol', 'prototype',
  'query', 'queue', 'recursion', 'registry', 'rendering', 'repository', 'resolution', 'resource', 'responsive', 'runtime',
  'scaling', 'schema', 'script', 'security', 'semantic', 'server', 'session', 'software', 'sorting', 'source',
  'storage', 'streaming', 'string', 'structure', 'subnet', 'syntax', 'system', 'tablet', 'template', 'terminal',
  'testing', 'thread', 'throughput', 'token', 'toolbar', 'topology', 'traffic', 'transaction', 'transfer', 'typescript',
  'update', 'upload', 'utility', 'validation', 'variable', 'vector', 'version', 'virtual', 'virus', 'visualization',
  'webhook', 'website', 'widget', 'wireless', 'workflow', 'workspace', 'wrapper', 'xml', 'yaml', 'zip',

    // Scientific terms
    'absorption', 'acid', 'adaptation', 'aerobic', 'allele', 'amino', 'analysis', 'anatomy', 'antibiotic', 'asteroid',
    'atmosphere', 'atom', 'bacteria', 'biome', 'botany', 'catalyst', 'cell', 'chromosome', 'climate', 'clone',
    'compound', 'condensation', 'conservation', 'cosmos', 'crystal', 'density', 'dna', 'ecology', 'electron', 'element',
    'embryo', 'energy', 'enzyme', 'equilibrium', 'evolution', 'experiment', 'fossil', 'frequency', 'fusion', 'galaxy',
    'gene', 'genetics', 'genome', 'geology', 'gravity', 'habitat', 'hemisphere', 'heredity', 'hormone', 'hypothesis',
    'immunity', 'isotope', 'kinetic', 'laboratory', 'laser', 'magnet', 'mass', 'matter', 'membrane', 'metabolism',
    'microscope', 'mineral', 'molecule', 'mutation', 'neuron', 'neutron', 'nitrogen', 'nucleus', 'nutrient', 'orbit',
    'organism', 'oxygen', 'particle', 'pathogen', 'periodic', 'photon', 'physics', 'planet', 'plasma', 'polymer',
    'pressure', 'protein', 'proton', 'quantum', 'radiation', 'reaction', 'receptor', 'respiration', 'rna', 'sediment',
    'seismic', 'solar', 'soluble', 'species', 'spectrum', 'symbiosis', 'synthesis', 'telescope', 'temperature', 'theory',
    'thermodynamics', 'tissue', 'vaccine', 'velocity', 'vertebrate', 'virus', 'vitamin', 'wavelength', 'weather', 'zoology',

    // Foreign-derived words
    'aficionado', 'angst', 'aperitif', 'archipelago', 'avant-garde', 'barista', 'bazaar', 'bonsai', 'bourgeois', 'bravado',
    'cabaret', 'cafe', 'chauffeur', 'chic', 'concierge', 'connoisseur', 'croissant', 'cuisine', 'debacle', 'debut',
    'deja-vu', 'doppelganger', 'elite', 'encore', 'entrepreneur', 'espresso', 'facade', 'faux-pas', 'fiasco', 'finesse',
    'flamboyant', 'forte', 'futon', 'genre', 'gourmet', 'haiku', 'hors-d-oeuvre', 'impasse', 'karaoke', 'karate',
    'kindergarten', 'kitsch', 'kowtow', 'laissez-faire', 'liaison', 'lingerie', 'machismo', 'maestro', 'malaise', 'mantra',
    'matinee', 'memoir', 'mirage', 'nirvana', 'noir', 'nouveau', 'origami', 'paparazzi', 'paprika', 'paradigm',
    'pasta', 'patois', 'penchant', 'persona', 'piazza', 'plaza', 'potpourri', 'protege', 'quid-pro-quo', 'renaissance',
    'rendezvous', 'rucksack', 'safari', 'samurai', 'sangria', 'savoir-faire', 'schadenfreude', 'siesta', 'smorgasbord', 'soiree',
    'souffle', 'sushi', 'taco', 'taekwondo', 'tapas', 'tempura', 'teriyaki', 'tsunami', 'uber', 'umlaut',
    'vendetta', 'versus', 'vignette', 'virtuoso', 'visa', 'wanderlust', 'wunderkind', 'yoga', 'zeitgeist', 'zen',

  // Literary and poetic words
  'allegory', 'alliteration', 'ambiance', 'ambivalence', 'anecdote', 'anthology', 'arcane', 'archetype', 'ardent', 'articulate',
  'assonance', 'aura', 'ballad', 'baroque', 'beguile', 'bittersweet', 'brevity', 'cadence', 'catharsis', 'celestial',
  'chasm', 'chronicle', 'clandestine', 'clarity', 'coalesce', 'cognizant', 'compelling', 'confluence', 'contemplative', 'crescendo',
  'cryptic', 'cynical', 'dalliance', 'decadence', 'delicate', 'desolate', 'dichotomy', 'discourse', 'dissonance', 'dulcet',
  'ebullient', 'effervescent', 'elegy', 'eloquent', 'embellish', 'enchant', 'enigmatic', 'ephemeral', 'epiphany', 'epitome',
  'ethereal', 'euphony', 'evocative', 'exquisite', 'fable', 'facade', 'fallacy', 'fervent', 'fervid', 'flair',
  'flourish', 'forlorn', 'fragile', 'gallant', 'gossamer', 'grandeur', 'harbinger', 'harrowing', 'haunting', 'hedonism',
  'hyperbole', 'idyllic', 'illusion', 'imagery', 'imbue', 'immaculate', 'immerse', 'immortal', 'impeccable', 'incandescent',
  'ineffable', 'inevitable', 'infallible', 'infinite', 'innate', 'innocuous', 'iridescent', 'juxtapose', 'labyrinth', 'laconic',
  'languid', 'lethargic', 'liminal', 'linger', 'literary', 'luminous', 'lyrical', 'macabre', 'majestic', 'melancholy',

  // Business and finance terms
  'acquisition', 'amortization', 'arbitrage', 'asset', 'audit', 'bailout', 'bankruptcy', 'benchmark', 'bond', 'budget',
  'capital', 'collateral', 'commodity', 'compliance', 'conglomerate', 'corporation', 'credit', 'currency', 'debt', 'deficit',
  'deflation', 'depreciation', 'derivative', 'dividend', 'downturn', 'earnings', 'economy', 'equity', 'escrow', 'exchange',
  'expense', 'fiscal', 'forecast', 'franchise', 'fund', 'futures', 'gross', 'hedge', 'holdings', 'income',
  'inflation', 'infrastructure', 'insolvency', 'insurance', 'interest', 'inventory', 'investment', 'invoice', 'leverage', 'liability',
  'liquidity', 'margin', 'market', 'merger', 'mortgage', 'negotiable', 'net', 'overhead', 'portfolio', 'premium',
  'principal', 'profit', 'prospectus', 'quota', 'recession', 'reconciliation', 'recovery', 'regulation', 'revenue', 'risk',
  'securities', 'shareholder', 'solvency', 'stock', 'subsidy', 'surplus', 'tax', 'trade', 'treasury', 'turnover',
  'valuation', 'venture', 'volatility', 'warrant', 'wealth', 'yield', 'zone', 'account', 'balance', 'cashflow',
  'debenture', 'diversification', 'entrepreneur', 'fiduciary', 'globalization', 'incentive', 'index', 'inflation', 'liquidity',

  // Medical terminology
  'abdomen', 'abrasion', 'abscess', 'acute', 'adenoids', 'adhesion', 'adrenal', 'aerobic', 'allergen', 'allergy',
  'alopecia', 'amnesia', 'analgesia', 'anaphylaxis', 'anemia', 'anesthesia', 'aneurysm', 'angina', 'angiogram', 'antibody',
  'antigen', 'apnea', 'arrhythmia', 'arteriole', 'arthritis', 'asthma', 'atherosclerosis', 'atrophy', 'bacteria', 'benign',
  'biopsy', 'bronchitis', 'carcinoma', 'cardiac', 'cartilage', 'cataract', 'catheter', 'cerebral', 'cholesterol', 'chronic',
  'cirrhosis', 'clavicle', 'clinical', 'coccyx', 'cognition', 'collagen', 'coma', 'congenital', 'contusion', 'coronary',
  'cortisol', 'cranial', 'defibrillator', 'dehydration', 'dementia', 'dermatitis', 'diabetes', 'diagnosis', 'dialysis', 'diastolic',
  'dilation', 'distal', 'diuretic', 'dysphagia', 'dyspnea', 'eczema', 'edema', 'electrocardiogram', 'embolism', 'endocrine',
  'endoscopy', 'enzyme', 'epidermis', 'epilepsy', 'epinephrine', 'erythrocyte', 'esophagus', 'etiology', 'exacerbation', 'fascia',
  'fibrillation', 'fibromyalgia', 'fracture', 'ganglion', 'gastritis', 'gastrointestinal', 'genetic', 'glaucoma', 'glucose', 'hemoglobin',

  // Food and culinary terms
  'aioli', 'alfredo', 'almond', 'appetizer', 'aromatic', 'artichoke', 'arugula', 'asparagus', 'avocado', 'balsamic',
  'barbecue', 'basil', 'batter', 'bechamel', 'biscotti', 'blanch', 'blend', 'boil', 'braised', 'bread',
  'brioche', 'broth', 'bruschetta', 'buffet', 'bulgur', 'burrito', 'butter', 'calamari', 'capers', 'caramel',
  'cardamom', 'casserole', 'cayenne', 'ceviche', 'cheddar', 'cheesecake', 'chef', 'chiffon', 'chimichurri', 'chives',
  'chocolate', 'chutney', 'cilantro', 'cinnamon', 'citrus', 'cloves', 'cocoa', 'coconut', 'compote', 'confection',
  'consomme', 'coriander', 'couscous', 'creme', 'crisp', 'crust', 'cucumber', 'cumin', 'curry', 'custard',
  'dashi', 'decant', 'delicacy', 'dessert', 'deviled', 'dill', 'dough', 'dressing', 'dukkah', 'dumpling',
  'edamame', 'emulsion', 'enchilada', 'entree', 'falafel', 'fennel', 'fillet', 'flambe', 'focaccia', 'fondue',
  'frappe', 'frittata', 'frosting', 'fusion', 'galette', 'garlic', 'gastronomy', 'gelato', 'ginger', 'glaze',
  'gnocchi', 'goulash', 'granola', 'grate', 'gravy', 'grilled', 'guacamole', 'habanero', 'halibut', 'hollandaise',

  // Sports and games terminology
  'aerobics', 'archery', 'athlete', 'backhand', 'badminton', 'baseball', 'basketball', 'billiards', 'bocce', 'bowling',
  'boxing', 'breaststroke', 'bungee', 'canoe', 'championship', 'checkmate', 'chess', 'cleats', 'coach', 'competition',
  'cricket', 'crossbar', 'cycling', 'decathlon', 'defense', 'dribble', 'endurance', 'equestrian', 'exercise', 'fencing',
  'fielder', 'fitness', 'football', 'forehand', 'frisbee', 'gambit', 'goalie', 'golf', 'gymnasium', 'handball',
  'hockey', 'hurdle', 'infield', 'inning', 'javelin', 'jockey', 'jogging', 'judo', 'karate', 'kayak',
  'kickboxing', 'league', 'marathon', 'martial', 'match', 'medal', 'offense', 'olympics', 'outfield', 'overtime',
  'parkour', 'penalty', 'pickleball', 'pitch', 'player', 'playoff', 'polo', 'puck', 'quarterback', 'racquet',
  'referee', 'regatta', 'relay', 'rugby', 'sailing', 'scoreboard', 'scuba', 'serve', 'skateboard', 'skiing',
  'snorkel', 'soccer', 'softball', 'spike', 'sprint', 'squash', 'stadium', 'strategy', 'stroke', 'surfing',
  'swimming', 'table-tennis', 'tackle', 'taekwondo', 'team', 'tennis', 'tournament', 'track', 'triathlon', 'umpire',

  // Geography and travel terms
  'adventure', 'airport', 'altitude', 'archipelago', 'arctic', 'atlas', 'backpack', 'beach', 'border', 'canyon',
  'capital', 'caravan', 'cardinal', 'cartography', 'castle', 'cathedral', 'cave', 'city', 'climate', 'coast',
  'compass', 'continent', 'coordinates', 'country', 'cruise', 'culture', 'customs', 'delta', 'desert', 'destination',
  'domestic', 'embassy', 'equator', 'erosion', 'estuary', 'excursion', 'expedition', 'explorer', 'fjord', 'forest',
  'geography', 'glacier', 'global', 'globe', 'harbor', 'hemisphere', 'heritage', 'highway', 'hiking', 'hill',
  'horizon', 'hostel', 'hotel', 'immigration', 'international', 'island', 'isthmus', 'itinerary', 'journey', 'jungle',
  'lagoon', 'lake', 'landmark', 'landscape', 'latitude', 'lighthouse', 'locale', 'longitude', 'map', 'meridian',
  'migration', 'monument', 'mountain', 'museum', 'navigation', 'oasis', 'ocean', 'orient', 'passport', 'peninsula',
  'plain', 'plateau', 'port', 'prairie', 'reef', 'region', 'resort', 'river', 'route', 'safari',
  'savanna', 'scenery', 'sea', 'shore', 'sightseeing', 'skyline', 'souvenir', 'strait', 'summit', 'terrain' 
];

const easyWords = [
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
  'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat',
];

const mediumWords = [
  'ability', 'absolute', 'academic', 'accept', 'access', 'accident', 'accurate', 'achieve', 'acknowledge', 'acquire',
  'activity', 'actually', 'addition', 'address', 'adequate', 'adjust', 'admire', 'admission', 'advance', 'advantage',
  'adventure', 'advertise', 'advice', 'aesthetic', 'affect', 'afternoon', 'aggressive', 'agreement', 'airplane', 'algorithm',
  'alliance', 'allocate', 'allowance', 'alongside', 'already', 'alternate', 'although', 'altitude', 'amazing', 'ambition',
  'analysis', 'announce', 'annual', 'anonymous', 'answer', 'anticipate', 'anxiety', 'apartment', 'apologize', 'apparent',
  'appeal', 'appearance', 'appendix', 'appliance', 'application', 'appointment', 'appreciate', 'approach', 'approval', 'architect',
  'argument', 'arrange', 'arrival', 'article', 'artistic', 'assembly', 'assessment', 'assignment', 'assistance', 'associate',
  'assumption', 'assurance', 'athlete', 'atmosphere', 'attachment', 'attention', 'attitude', 'attraction', 'attribute', 'audience',
  'authority', 'automatic', 'available', 'average', 'aviation', 'awareness', 'awesome', 'background', 'bacteria', 'balance',
  'basement', 'bathroom', 'battery', 'beautiful', 'beginning', 'behavior', 'believe', 'benefit', 'biology', 'birthday',
  'blanket', 'blossom', 'boundary', 'breakfast', 'brilliant', 'broadcast', 'browser', 'building', 'business', 'calculate',
  'calendar', 'campaign', 'capacity', 'capital', 'capture', 'carbon', 'careful', 'category', 'celebrate', 'century',
  'ceremony', 'chairman', 'challenge', 'champion', 'channel', 'chapter', 'charity', 'chemical', 'chicken', 'chocolate',
  'cigarette', 'circuit', 'citizen', 'classic', 'classify', 'climate', 'clothing', 'cluster', 'coalition', 'cognitive',
  'collapse', 'colleague', 'collect', 'college', 'colonial', 'colorful', 'column', 'comfort', 'command', 'comment',
  'commerce', 'committee', 'commodity', 'communicate', 'community', 'company', 'compare', 'compete', 'complain', 'complete',
  'complex', 'component', 'compose', 'computer', 'concept', 'concern', 'concert', 'conclude', 'concrete', 'condition',
  'conduct', 'conference', 'confidence', 'confirm', 'conflict', 'confront', 'confusion', 'connect', 'consensus', 'consent',
  'consider', 'consist', 'constant', 'construct', 'consult', 'consumer', 'contact', 'contain', 'content', 'context',
  'continue', 'contract', 'contrast', 'contribute', 'control', 'convenient', 'convert', 'convince', 'cooperate', 'coordinate',
];

const hardWords = [
  'accommodation', 'accomplishment', 'accountability', 'accreditation', 'administration', 'advertisement', 'agricultural', 'anthropology', 'appreciation', 'appropriation',
  'archaeological', 'assassination', 'authorization', 'autobiography', 'biodiversity', 'biotechnology', 'capitalization', 'cardiovascular', 'certification', 'characteristic',
  'classification', 'collaboration', 'communication', 'comprehensive', 'concentration', 'configuration', 'consciousness', 'consideration', 'constitutional', 'contamination',
  'contradiction', 'controversial', 'conventional', 'correspondence', 'cryptocurrency', 'crystallization', 'demonstration', 'determination', 'differentiation', 'discrimination',
  'documentation', 'effectiveness', 'electromagnetic', 'embarrassment', 'entertainment', 'entrepreneurial', 'environmental', 'establishment', 'extraordinary', 'functionality',
  'fundamentalism', 'generalization', 'globalization', 'grandparent', 'hallucination', 'identification', 'implementation', 'impossibility', 'improvisation', 'independence',
  'individualism', 'industrialization', 'infrastructure', 'institutional', 'intellectual', 'intelligence', 'international', 'interpretation', 'investigation', 'justification',
  'kindergarten', 'knowledgeable', 'liberalization', 'manufacturing', 'mathematical', 'maximization', 'Mediterranean', 'memorization', 'microprocessor', 'misunderstanding',
  'modernization', 'multiplication', 'nationalization', 'naturalization', 'nevertheless', 'notwithstanding', 'objectivity', 'observation', 'organizational', 'overwhelming',
  'participation', 'perfectionism', 'personalization', 'pharmaceutical', 'philosophical', 'photosynthesis', 'precipitation', 'predictability', 'predominantly', 'presentation',
  'preservation', 'privatization', 'productivity', 'professional', 'profitability', 'pronunciation', 'psychological', 'qualification', 'quantification', 'questionnaire',
  'rationalization', 'recommendation', 'reconciliation', 'reconstruction', 'refrigerator', 'rehabilitation', 'relationship', 'relativity', 'representative', 'reproduction',
  'responsibility', 'revolutionary', 'satisfaction', 'semiconductor', 'simplification', 'sophisticated', 'specialization', 'specification', 'standardization', 'subscription',
  'substantially', 'sustainability', 'technological', 'temperature', 'terminology', 'thanksgiving', 'theoretical', 'transformation', 'transportation', 'undergraduate',
  'understanding', 'unemployment', 'unfortunately', 'universality', 'urbanization', 'visualization', 'vulnerability', 'wholeheartedly', 'workstation', 'xylophone',
];

export const generateWords = (count = 50, difficulty = 'easy') => {
  let wordsArray;
  if (difficulty === 'easy') {
    wordsArray = easyWords;
  } else if (difficulty === 'medium') {
    wordsArray = mediumWords;
  } else if (difficulty === 'hard') {
    wordsArray = hardWords;
  } else {
    wordsArray = easyWords; // Default to easy
  }
  const selectedWords = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    selectedWords.push(wordsArray[randomIndex]);
  }
  return selectedWords;
};

export const generateText = (wordCount = 50, difficulty = 'easy') => {
  return generateWords(wordCount, difficulty).join(' ');
};
