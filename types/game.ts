import { GuessLine, HintResult } from "./guess";

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

export interface GameBoardProps {
    game: GameLogicType;
    lines: GuessLine[];
    status: "playing" | "won" | "lost";
    attemptsLeft: number;
    secret: string[] | null;
    submitGuess: (guess: string[]) => void;
    resetGame: () => void;
}

export interface GameLogicType {
    // Propriétés
    maxAttempts: number;
    COULEURS_MAP: Record<string, any>;
    guesses: any[];

    // Méthodes publiques
    checkGuess(guess: string[]): HintResult | null;
    getAttemptsLeft(): number;
    revealCode(): string[];
    isWin(result: HintResult): boolean;
    isGameOver(): boolean;
    getStatus(guess: string[]): "win" | "lose" | HintResult;
    logSecretCombination(): void;
}