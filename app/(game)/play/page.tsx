"use client";

import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import ColorSelector from "./components/ColorSelector";
import type { GuessRow } from "@/types";
import { GameLogic } from "@/lib/gamelogic";

export default function GamePage() {
    const [selectedColor, setSelectedColor] = useState("#0000ff");
    const [secretCombination, setSecretCombination] = useState<string[]>();
    const guesses: GuessRow[] = [
        { number: 1, pegs: [{ key: 0, color: null }, { key: 1, color: null }, { key: 2, color: null }, { key: 3, color: null }], feedback: [] },
        { number: 2, pegs: [{ key: 0, color: "#ff0000" }, { key: 1, color: "#0000ff" }, { key: 2, color: "#00ff00" }, { key: 3, color: "#ffff00" }], feedback: ["#fff", "#000", "", ""] },
        { number: 3, pegs: [{ key: 0, color: null }, { key: 1, color: null }, { key: 2, color: null }, { key: 3, color: null }], feedback: [] },
        { number: 4, pegs: [{ key: 0, color: null }, { key: 1, color: null }, { key: 2, color: null }, { key: 3, color: null }], feedback: [] },
    ];


    useEffect(() => {
        const gameLogic = new GameLogic();
        const A = gameLogic.init;
        console.log('A', A);
    }, []);


    return (
        <main className="flex-grow p-5 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-2/3">
                    <h1 className=" tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                        Game Board
                    </h1>
                    <GameBoard guesses={guesses} />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    <Timer />
                    <ColorSelector onSelectColor={setSelectedColor} />
                    <button className="w-full flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-lg font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
                        Submit Guess
                    </button>
                </div>
            </div>
        </main>
    );
}
