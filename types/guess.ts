import { GameLogicType } from "./game";

export interface HintResult {
    hintNoir: number;
    hintGrey: number;
}

export interface GuessRow {
    guess: (string | null)[];
}

export interface GuessLine extends GuessRow {
    guess: (string | null)[];
    result: HintResult | null;
}

