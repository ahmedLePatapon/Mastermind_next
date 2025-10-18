import { useState, useMemo } from "react";
import { GameLogic } from "@/lib/gamelogic";
import type { GameBoardProps, GuessLine, HintResult } from "@/types";



export const useMasterMindGame = (codeLength = 4, maxAttempts = 10): GameBoardProps => {
    const [game, setGame] = useState(() => new GameLogic(codeLength, maxAttempts));
    const [lines, setLines] = useState<GuessLine[]>([]);
    const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
    const initLines = () => {
        return [{ guess: ["#6b7280", "#6b7280", "#6b7280", "#6b7280"], result: { hintNoir: 0, hintGrey: 0 } }];
    };

    useMemo(() => {
        setLines(initLines());
    }, []);


    const submitGuess = (guess: string[]) => {
        if (status !== "playing") return;

        const result = game.checkGuess(guess);
        if (!result) return;

        const newLines = [...lines, { guess, result }];
        setLines(newLines);

        if (game.isWin(result)) {
            setStatus("won");
        } else if (game.isGameOver()) {
            setStatus("lost");
        }
    };

    const resetGame = () => {
        setGame(new GameLogic(codeLength, maxAttempts));
        setLines([]);
        setStatus("playing");
    };

    return {
        game,
        lines,
        status,
        attemptsLeft: game.getAttemptsLeft(),
        secret: status !== "playing" ? game.revealCode() : null,
        submitGuess,
        resetGame,
    };
};
