import React from "react";
import type { PegProps, FeedbackPegProps, GameBoardProps } from "@/types";

function Peg({ color, isEmpty = false, dashed = false }: PegProps) {
    if (isEmpty) return <div className="w-10 h-10 rounded-full bg-gray-400"></div>;
    if (dashed) return <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-500"></div>;
    return <div className={`w-10 h-10 rounded-full`} style={{ backgroundColor: color || "#6b7280" }}></div>;
}

function FeedbackPeg({ color = "#6b7280" }: FeedbackPegProps) {
    return <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>;
}

export default function GameBoard({ guesses }: GameBoardProps) {
    return (
        <div className="bg-[#1a1a3a] p-4 rounded-xl space-y-3">
            {guesses.map((row) => (
                <div
                    key={row.number}
                    className={`flex items-center justify-between p-3 rounded-lg ${row.pegs.every((p) => !p) ? "bg-[#242447]/50 opacity-50" : "bg-[#242447]"
                        }`}
                >
                    <div className="flex items-center gap-4">
                        <span className="text-lg font-bold">{row.number}</span>
                        <div className="flex gap-3">
                            {row.pegs.map((peg, i) => (
                                <Peg key={i} color={peg?.color ?? null} isEmpty={!peg} dashed={!peg} />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                        {(row.feedback ?? ["", "", "", ""]).map((f, i) => (
                            <FeedbackPeg key={i} color={f || "#6b7280"} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
