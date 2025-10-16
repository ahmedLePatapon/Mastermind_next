import { PegProps } from "./peg"

export interface GuessRow {
    number: number
    pegs: (PegProps)[]
    feedback?: string[]
}

export interface GameBoardProps {
    guesses: GuessRow[]
};

export interface HintResult {
    hintNoir: number;
    hintGrey: number;
}