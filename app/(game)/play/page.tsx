"use client";
import GameBoard, { GuessRow } from "./components/GameBoard";
import Timer from "./components/Timer";
import ColorSelector from "./components/ColorSelector";
import { useState } from "react";

export default function GamePage() {
    const [selectedColor, setSelectedColor] = useState("#0000ff");
    const guesses: GuessRow[] = [
        { number: 1, pegs: [null, null, null, null], feedback: [] },
        { number: 2, pegs: ["#ff0000", "#0000ff", "#00ff00", "#ffff00"], feedback: ["#fff", "#000", "", ""] },
        { number: 3, pegs: [null, null, null, null], feedback: [] },
        { number: 4, pegs: [null, null, null, null], feedback: [] },
    ];

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
