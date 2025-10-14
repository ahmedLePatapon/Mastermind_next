"use client";
import React from "react";

type Player = {
    rank: number;
    name: string;
    avatar: string;
    score: number;
    fastestTime: string;
};

type LeaderboardProps = {
    players: Player[];
};

export default function Leaderboard({ players }: LeaderboardProps) {
    return (
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#343465] bg-[#1a1a32]">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-[#1a1a32]">
                            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">Rank</th>
                            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">Player</th>
                            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">Score</th>
                            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">Fastest Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {players.map((player) => (
                            <tr
                                key={player.rank}
                                className="border-t border-t-[#343465] hover:bg-[#242447] transition-colors"
                            >
                                {/* RANK */}
                                <td
                                    className={`h-[72px] px-4 py-2 text-lg font-bold ${player.rank === 1
                                            ? "text-[#FFD700]"
                                            : player.rank === 2
                                                ? "text-[#C0C0C0]"
                                                : player.rank === 3
                                                    ? "text-[#CD7F32]"
                                                    : "text-[#9393c8] text-sm font-normal leading-normal"
                                        }`}
                                >
                                    #{player.rank}
                                </td>

                                {/* PLAYER */}
                                <td className="h-[72px] px-4 py-2 text-white font-medium flex items-center gap-3">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                                        style={{ backgroundImage: `url(${player.avatar})` }}
                                        aria-label={`${player.name} avatar`}
                                    />
                                    {player.name}
                                </td>

                                {/* SCORE */}
                                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                                    {player.score}
                                </td>

                                {/* TIME */}
                                <td className="h-[72px] px-4 py-2 text-[#9393c8] text-sm font-normal leading-normal">
                                    {player.fastestTime}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Responsive container queries */}
            <style jsx>{`
        @container (max-width: 480px) {
          td:nth-child(4),
          th:nth-child(4) {
            display: none;
          }
        }

        @container (max-width: 360px) {
          td:nth-child(3),
          th:nth-child(3) {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}
