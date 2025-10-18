import { COULEURS_MAP } from './variables';
import type { HintResult, PegProps } from '../types';

export const shuffle = (o: Array<any>) => {
    for (let i = o.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [o[i], o[j]] = [o[j], o[i]];
    }
    return o;
};

export function compareArray(
    secret: string[],
    guess: string[]
): HintResult {

    let hintNoir: number = 0;
    let hintGrey: number = 0;

    // Copies pour tracker les éléments déjà utilisés
    const secretCopy: (string | null)[] = [...secret];
    const guessCopy: (string | null)[] = [...guess];

    // Première passe : chercher les correspondances exactes (hintNoir)
    for (let i: number = 0; i < guessCopy.length; i++) {
        if (guessCopy[i] === secretCopy[i]) {
            hintNoir++;
            // Marquer comme utilisé
            secretCopy[i] = null;
            guessCopy[i] = null;
        }
    }

    // Deuxième passe : chercher les couleurs correctes mal placées (hintGrey)
    for (let i: number = 0; i < guessCopy.length; i++) {
        if (guessCopy[i] !== null) {
            const index: number = secretCopy.indexOf(guessCopy[i]);
            if (index !== -1) {
                hintGrey++;
                // Marquer comme utilisé
                secretCopy[index] = null;
            }
        }
    }

    return { hintNoir, hintGrey };
}


export class GameLogic {
    private secretCode: string[];
    private attempts: number = 0;
    maxAttempts: number = 20;
    public COULEURS_MAP: Object

    guesses: any[];

    constructor(private couleursMap: Object = COULEURS_MAP, codeLength: number = 4, maxAttempts = 20) {
        this.COULEURS_MAP = COULEURS_MAP;
        this.maxAttempts = maxAttempts;
        this.secretCode = this.generateSecretCombination(codeLength);
        this.guesses = [];
    }

    private generateSecretCombination(length: number = 4): string[] {
        const colors = Object.keys(this.couleursMap);
        const shuffledColors = shuffle(colors);
        return shuffledColors.slice(0, length);
    }

    public checkGuess(guess: string[]): { hintNoir: number; hintGrey: number } | null {
        if (guess.length !== this.secretCode.length) {
            throw new Error("Guess length must match the secret code length.");
        }

        if (this.attempts >= this.maxAttempts) {
            return null; // Partie terminée
        }
        this.attempts++;
        return compareArray(this.secretCode, guess);
    }

    isWin(result: HintResult): boolean {
        return result.hintNoir === this.secretCode.length;
    }

    isGameOver(): boolean {
        return this.attempts >= this.maxAttempts;
    }

    public getAttemptsLeft(): number {
        return this.maxAttempts - this.attempts;
    }
    public revealCode(): string[] {
        return [...this.secretCode];
    }
    getStatus(guess: string[]): "win" | "lose" | { hintNoir: number; hintGrey: number } {
        let guessChecked = this.checkGuess(guess) || { hintNoir: 0, hintGrey: 0 };

        if (this.isWin(guessChecked)) {
            return "win";
        } else if (this.isGameOver()) {
            return "lose";
        } else {
            return guessChecked;
        }
    }

    logSecretCombination() {
        console.log('**********************');
        console.log("Secret Combination:", this.secretCode);
        console.log('**********************');
    }
};