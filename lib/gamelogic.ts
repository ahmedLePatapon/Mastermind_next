import { COULEURS_MAP } from './variables';
import type { HintResult } from '../types';

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

interface GameLogicType {
    COULEURS_MAP: Object;
    secretCombination: string[];
    evaluateGuess: (guess: string[]) => { hintNoir: number; hintGrey: number };
    generateSecretCombination: (length?: number) => string[];
};

export class GameLogic implements GameLogicType {
    COULEURS_MAP: Object;
    secretCombination: string[];

    constructor() {
        this.COULEURS_MAP = COULEURS_MAP;
        this.secretCombination = this.generateSecretCombination(4);
    }

    generateSecretCombination(length: number = 4): string[] {
        const colors = Object.keys(this.COULEURS_MAP);
        const shuffledColors = shuffle(colors);
        return shuffledColors.slice(0, length);
    }

    evaluateGuess(guess: string[]): { hintNoir: number; hintGrey: number } {
        return compareArray(this.secretCombination, guess);
    }

    init = () => {
        this.secretCombination = this.generateSecretCombination(4);
    }
    get = () => {
        return this.secretCombination;
    }
};