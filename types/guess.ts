import { GameLogicType } from "./game";

export interface GuessRow {
    guess: (string | null)[];
    result: string[] | null;
}

export interface GuessLine extends GuessRow { }

export interface HintResult {
    hintNoir: number;
    hintGrey: number;
}
