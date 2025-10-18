"use client";

import { useState } from "react";
import { useMasterMindGame } from "@/hooks/useMasterMindGame";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import ColorSelector from "./components/ColorSelector";

export default function GamePage() {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const { lines, status, attemptsLeft, secret, submitGuess, resetGame, game } = useMasterMindGame(4, 10);

    const handleSubmitGuess = () => {
        if (selectedColor) {
            submitGuess([selectedColor]);
            setSelectedColor(null);
        }
    };

    return (
        <main className="flex-grow p-5 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-2/3">
                    <h1 className="tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                        Game Board
                    </h1>
                    <GameBoard
                        lines={lines}
                        game={game}
                        status={status}
                        attemptsLeft={attemptsLeft}
                        secret={secret}
                        submitGuess={submitGuess}
                        resetGame={resetGame}
                    />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    <Timer />
                    <ColorSelector onSelectColor={setSelectedColor} />
                    <button
                        onClick={handleSubmitGuess}
                        disabled={!selectedColor || status !== "playing"}
                        className="w-full flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-lg font-bold leading-normal tracking-[0.015em] min-w-0 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit Guess
                    </button>
                </div>
            </div>
        </main>
    );
}