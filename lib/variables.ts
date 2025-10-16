export const COULEURS = ['rouge', 'bleu', 'vert', 'jaune', 'violet', 'marron'];
export const TAILLE_COMBINAISON = 4;
export const MAX_GUESSES = 10;
export const MAX_TIME = 300; // in seconds (5 minutes)
export const COULEURS_DISPO = COULEURS; // Exporting available colors for use in other modules
export const COULEURS_SECRET = COULEURS; // Exporting secret colors for use in other modules

export const COULEURS_MAP = {
    'rouge': 'rgb(255, 0, 0)',
    'bleu': 'rgb(0, 0, 255)',
    'vert': 'rgb(0, 255, 0)',
    'jaune': 'rgb(255, 255, 0)',
    'violet': 'rgb(128, 0, 128)',
    'orange': 'rgb(255, 165, 0)',
};

export const FEEDBACK_COLORS = {
    correct: '#000000', // Black for correct position
    present: '#ffffff', // White for correct color but wrong position
    absent: '#808080',  // Grey for absent color
};

export const INITIAL_GUESSES = Array.from({ length: MAX_GUESSES }, (_, index) => ({
    number: index + 1,
    pegs: Array(TAILLE_COMBINAISON).fill(null),
    feedback: [],
}));

export const INITIAL_GAME_STATE = {
    secretCombination: [],
    guesses: INITIAL_GUESSES,
    currentGuessIndex: 0,
    gameStatus: 'playing', // can be 'playing', 'won', 'lost'
    timeLeft: MAX_TIME,
};

export const INITIAL_LEADERBOARD = []; // Initial empty leaderboard array

export const STORAGE_KEYS = {
    gameState: 'mastermind_game_state',
    leaderboard: 'mastermind_leaderboard',
};
export const API_ENDPOINTS = {
    saveGame: '/api/save-game',
    getLeaderboard: '/api/leaderboard',
};
export const MESSAGES = {
    win: 'Congratulations! You guessed the combination!',
    lose: 'Game Over! Better luck next time.',
    invalidGuess: 'Please fill all pegs before submitting your guess.',
};
export const SOUNDS = {
    correct: '/sounds/correct.mp3',
    incorrect: '/sounds/incorrect.mp3',
    win: '/sounds/win.mp3',
    lose: '/sounds/lose.mp3',
};
export const ANIMATION_DURATIONS = {
    pegDrop: 300, // in milliseconds
    feedbackReveal: 500, // in milliseconds
};
export const THEMES = {
    light: {
        background: '#ffffff',
        text: '#000000',
        primary: '#007bff',
    },
    dark: {
        background: '#121212',
        text: '#ffffff',
        primary: '#1e90ff',
    },
};
export const DEFAULT_THEME = 'light';
export const LOCALIZATION = {
    en: {
        guessPrompt: 'Enter your guess:',
        submitButton: 'Submit Guess',
        timerLabel: 'Time Left:',
    },
    fr: {
        guessPrompt: 'Entrez votre proposition :',
        submitButton: 'Soumettre la proposition',
        timerLabel: 'Temps restant :',
    },
};
export const DEFAULT_LANGUAGE = 'en';

export const MAX_HINTS = 2; // Maximum number of hints a player can use per game
export const HINT_PENALTY = 2; // Number of extra guesses lost per hint used
export const BONUS_TIME = 30; // Bonus time in seconds for using a hint
export const HINT_MESSAGES = {
    hintUsed: 'Hint used! You have lost 2 guesses.',
    noHintsLeft: 'No hints left!',
};
export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'; // Standard date format for leaderboard entries
export const LEADERBOARD_SIZE = 10; // Number of top scores to display on the leaderboard
export const SCORE_MULTIPLIER = 10; // Multiplier for calculating score based on time left and guesses used
export const MAX_SCORE = 1000; // Maximum possible score
export const MIN_SCORE = 100; // Minimum possible score
export const SCORE_MESSAGES = {
    highScore: 'New High Score!',
    lowScore: 'Better luck next time!',
}; export const SAVE_INTERVAL = 60000; // Interval to auto-save game state in milliseconds (1 minute)
export const ANIMATION_EASING = 'ease-in-out'; // Easing function for animations
export const MOBILE_BREAKPOINT = 768; // Screen width in pixels to switch to mobile layout
export const TABLET_BREAKPOINT = 1024; // Screen width in pixels to switch to tablet layout
export const DESKTOP_BREAKPOINT = 1440; // Screen width in pixels to switch to desktop layout
export const MAX_PLAYERS = 4; // Maximum number of players in multiplayer mode
export const MULTIPLAYER_API_ENDPOINTS = {
    createGame: '/api/multiplayer/create-game',
    joinGame: '/api/multiplayer/join-game',
    gameState: '/api/multiplayer/game-state',
};
export const MULTIPLAYER_MESSAGES = {
    waitingForPlayers: 'Waiting for other players to join...',
    playerJoined: 'A new player has joined the game!',
    gameStarting: 'All players are ready! The game is starting...',
};
export const MULTIPLAYER_STATUSES = {
    waiting: 'waiting',
    inProgress: 'in_progress',
    completed: 'completed',
};
export const CHAT_MESSAGES = {
    welcome: 'Welcome to the game chat!',
    playerLeft: 'A player has left the game.',
    newMessage: 'You have a new message.',
};
export const MAX_CHAT_MESSAGES = 100;
export const CHAT_API_ENDPOINT = '/api/multiplayer/chat';
export const ENABLE_SOUND = true;
export const ENABLE_MUSIC = false;
export const MUSIC_TRACKS = [
    '/music/track1.mp3',
    '/music/track2.mp3',
    '/music/track3.mp3',
];
export const MUSIC_VOLUME = 0.5; // Volume level from 0.0 to 1.0
export const SOUND_VOLUME = 0.7; // Volume level from 0.0 to 1.0
export const VIBRATION_DURATION = 200; // Duration of vibration in milliseconds for mobile devices
export const VIBRATION_PATTERN = [100, 50, 100]; // Vibration pattern for mobile devices
export const ENABLE_VIBRATION = true;
export const NOTIFICATION_MESSAGES = {
    gameSaved: 'Game saved successfully!',
    errorSaving: 'Error saving game. Please try again.',
    newTurn: 'It\'s your turn!',
};
export const NOTIFICATION_API_ENDPOINT = '/api/notifications';
export const MAX_NOTIFICATIONS = 5; // Maximum number of notifications to display at once
export const NOTIFICATION_DURATION = 5000; // Duration to show notifications in milliseconds
export const ENABLE_NOTIFICATIONS = true;
export const AUTO_FOCUS_INPUT = true; // Automatically focus input field on page load
export const ENABLE_SHORTCUTS = true; // Enable keyboard shortcuts for game actions
export const SHORTCUTS = {
    submitGuess: 'Enter',
    useHint: 'H',
    toggleSound: 'S',
    toggleMusic: 'M',
};
export const DEBUG_MODE = false; // Enable debug mode for development purposes
export const LOG_LEVEL = 'info'; // Logging level: 'debug', 'info', 'warn', 'error'
export const API_TIMEOUT = 5000; // Timeout for API requests in milliseconds
export const RETRY_ATTEMPTS = 3; // Number of retry attempts for failed API requests
export const RETRY_DELAY = 2000; // Delay between retry attempts in milliseconds
export const CACHE_DURATION = 300000; // Duration to cache API responses in milliseconds (5 minutes)
export const ENABLE_CACHE = true; // Enable caching of API responses
export const PROXY_API_ENDPOINT = '/api/proxy'; // Proxy endpoint for API requests
export const RATE_LIMIT = 100; // Maximum number of API requests per minute
export const RATE_LIMIT_WINDOW = 60000; // Time window for rate limiting in milliseconds (1 minute)
export const ENABLE_RATE_LIMITING = true; // Enable rate limiting for API requests
export const CORS_ORIGINS = ['*']; // Allowed origins for CORS
export const ENABLE_CORS = true; // Enable CORS for API requests
export const SSL_CERT_PATH = '/path/to/cert.pem'; // Path to SSL certificate for secure API requests
export const SSL_KEY_PATH = '/path/to/key.pem'; // Path to SSL key for secure API requests
export const ENABLE_SSL = false; // Enable SSL for API requests
export const API_PORT = 3000; // Port for the API server
export const FRONTEND_PORT = 8080; // Port for the frontend server
export const BACKEND_PORT = 4000; // Port for the backend server
export const DATABASE_URL = 'mongodb://localhost:27017/mastermind'; // Database connection URL
export const ENABLE_DATABASE = true; // Enable database connection
export const DATABASE_POOL_SIZE = 10; // Maximum number of database connections in the pool
export const ENABLE_MIGRATIONS = true; // Enable database migrations on startup
export const MIGRATIONS_PATH = '/migrations'; // Path to database migration files
export const SEED_DATA_PATH = '/seed-data'; // Path to seed data files
export const ENABLE_SEEDING = false; // Enable seeding of initial data into the database
export const LOG_FILE_PATH = '/logs/app.log'; // Path to log file
export const MAX_LOG_FILE_SIZE = 10485760; // Maximum size of log file in bytes (10 MB)
export const BACKUP_INTERVAL = 86400000; // Interval to backup database in milliseconds (24 hours)
export const BACKUP_PATH = '/backups'; // Path to store database backups
export const ENABLE_BACKUPS = true; // Enable automatic database backups
export const MAINTENANCE_MODE = false; // Enable maintenance mode for the application
export const MAINTENANCE_MESSAGE = 'The site is currently under maintenance. Please check back later.'; // Maintenance mode message
export const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif']; // Allowed file types for uploads
export const MAX_FILE_SIZE = 5242880; // Maximum file size for uploads in bytes (5 MB)
export const UPLOAD_PATH = '/uploads'; // Path to store uploaded files
export const ENABLE_FILE_UPLOADS = true; // Enable file uploads
export const THUMBNAIL_SIZE = { width: 100, height: 100 }; // Size of thumbnails for uploaded images
export const ENABLE_THUMBNAILS = true; // Enable generation of thumbnails for uploaded images
export const IMAGE_COMPRESSION_QUALITY = 80; // Quality of image compression from 0 to 100
export const ENABLE_IMAGE_COMPRESSION = true; // Enable compression of uploaded images
export const SESSION_SECRET = 'your-secret-key'; // Secret key for session management
export const SESSION_EXPIRY = 86400000; // Session expiry time in milliseconds (24 hours)
export const ENABLE_SESSIONS = true; // Enable session management
export const COOKIE_NAME = 'mastermind_session'; // Name of the session cookie
export const COOKIE_SECURE = false; // Set to true if using HTTPS