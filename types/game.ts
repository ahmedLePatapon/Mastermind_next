export interface GameState {
    secretCombination: string[];
    guesses: string[][];
    currentGuessIndex: number;
    gameStatus: 'playing' | 'won' | 'lost';
    timeLeft: number; // in seconds
}

export interface LeaderboardEntry {
    playerName: string;
    timeTaken: number; // in seconds
    date: string; // ISO date string
}

export interface GameProps {
    initialGameState?: GameState;
    onGameStateChange?: (newState: GameState) => void;
    onGameEnd?: (finalState: GameState) => void;
}