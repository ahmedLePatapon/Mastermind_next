import React, { useState, } from "react";
import Peg from "./Peg";
import FeedbackPeg from "./FeedbackPeg";

import type { GameBoardProps, GameLogicType } from "@/types";

export default function GameBoard({
    lines,
    status,
    attemptsLeft,
    secret,
    submitGuess,
    resetGame,
    game,
}: GameBoardProps) {
    const [pegToReset, setPegToReset] = useState<{ rowIndex: number; pegIndex: number } | null>(null);

    const handleColorChange = (rowIndex: number, pegIndex: number, newColor: string) => {
        // Mettre à jour la couleur du peg
        const updatedGuesses = lines?.guess.map((row, rIdx) => {
            if (rIdx === rowIndex) {
                return {
                    ...row,
                    pegs: row.guess.map((peg, pIdx) => {
                        if (pIdx === pegIndex) {
                            return { ...peg, color: newColor };
                        }
                        return peg;
                    })
                };
            }
            return row;
        });

        // Chercher un autre peg avec la même couleur sur la même ligne
        const currentRow = lines[rowIndex];
        const duplicatePegIndex = currentRow.guess.findIndex(
            (color, idx) => idx !== pegIndex && color === newColor
        );

        // Si trouvé, marquer pour réinitialisation
        if (duplicatePegIndex !== -1) {
            setPegToReset({ rowIndex, pegIndex: duplicatePegIndex });
            setTimeout(() => {
                setPegToReset(null);
            }, 2000);
        }
    };
    // const handleSubmitGuess = (rowIdx: number) => {
    //     console.log("Submitting guess for row:", lines, rowIdx);
    //     const guessColors = lines[rowIdx].pegs.map(peg => peg.color!);
    //     const status = game.getStatus(guessColors);
    //     console.log("Status on submit:", status);

    //     let feedback: string[] = [];
    //     if (typeof status === "object") {
    //         // Construire le feedback basé sur hintNoir et hintGrey
    //         feedback = [
    //             ...Array(status.hintNoir).fill("#000"), // Noir pour bien placés
    //             ...Array(status.hintGrey).fill("#fff"), // Blanc pour mal placés
    //             ...Array(4 - status.hintNoir - status.hintGrey).fill(""), // Vide pour les autres
    //         ];
    //     } else if (status === "win") {
    //         feedback = Array(4).fill("#000"); // Tous noirs si gagné
    //     } else {
    //         feedback = Array(4).fill(""); // Vide si perdu
    //     }

    //     // Mettre à jour le feedback dans les guesses
    //     const updatedGuesses = guesses.map((row, rIdx) => {
    //         if (rIdx === rowIdx) {
    //             return {
    //                 ...row,
    //                 feedback: feedback,
    //             };
    //         }
    //         return row;
    //     });

    //     setGuesses(updatedGuesses);
    // };
    function AllPegSelected(pegs: { key: number; color: string | null }[]) {
        return pegs.every((peg) => peg.color !== null && peg.color !== undefined && peg.color !== "" && peg.color !== "#6b7280");
    }

    return (
        <div className="bg-[#1a1a3a] p-4 rounded-xl space-y-3">
            <p className="text-lg font-bold text-white" >{status}</p>
            {lines.length > 0 && (status === "playing") && lines.map((row, rowIdx) => (
                <div
                    key={rowIdx}
                    className={`flex items-center justify-between p-3 rounded-lg ${row.pegs.every((p) => !p) ? "bg-[#242447]/50 opacity-50" : "bg-[#242447]"
                        }`}
                >
                    <div className="flex items-center gap-4">
                        <span className="text-lg font-bold">{rowIdx + 1}</span>
                        <div className="flex gap-3">
                            {row?.guess.map((color, colorIdx) => (
                                <Peg
                                    key={colorIdx}
                                    color={color ?? null}
                                    isEmpty={!color || !color}
                                    dashed={!color || !color}
                                    shouldReset={
                                        pegToReset?.rowIndex === rowIdx &&
                                        pegToReset?.pegIndex === colorIdx
                                    }
                                    onColorChange={(newColor) =>
                                        handleColorChange(rowIdx, colorIdx, newColor)
                                    }
                                />
                            ))}
                            {AllPegSelected(row?.guess) && (
                                <button onClick={() => handleSubmitGuess(rowIdx)}
                                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-white gap-2 text-lg leading-normal tracking-[0.015em] min-w-0 px-4"
                                >Valider</button>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                        {(row.result && row.result.hintNoir > 0 Array.from(row.result.hintNoir).map(
                            (f, i) =>
                        <FeedbackPeg key={i} color="#000" />)
                        }
                        {row.result && row.result.hintGrey > 0 && Array.from(row.result.hintGrey).map(
                            (f, i) => {
                                <FeedbackPeg key={i} color="#fff" />;
                            }
}
                        ) <FeedbackPeg color="#000" />}
                        {(row.result ?? ["", "", "", ""]).map((f, i) => (
                            <FeedbackPeg key={i} color={f || "#6b7280"} />
                        ))}
                    </div>
                </div>
            ))
            }
            <p>ok</p>
        </div >
    );
}