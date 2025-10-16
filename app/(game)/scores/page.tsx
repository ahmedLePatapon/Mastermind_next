"use client";

import React, { useMemo, useState } from "react";
import Pagination from "../components/Pagination";
import Leaderboard from "../components/Leaderboard";
import LeaderboardFilter from "../components/LeaderboardFilter";

export default function ScoresPage() {
    const players = Array.from({ length: 23 }, (_, i) => {
        // Génère une date aléatoire entre aujourd’hui et 30 jours en arrière
        const daysAgo = Math.floor(Math.random() * 1200);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        return {
            rank: i + 1,
            name: `Player ${i + 1}`,
            avatar: `https://i.pravatar.cc/100?img=${i + 1}`,
            score: 2000 - i * 50,
            fastestTime: `${2 + Math.floor(i / 5)}:${(i * 5) % 60}`,
            date: date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }), // exemple : "14 Oct 2025"
        };
    });

    const [filter, setFilter] = useState<"All-Time" | "This Week" | "Today">("All-Time");
    const filteredPlayers = useMemo(() => {
        const now = new Date();
        return players.filter((player) => {
            const date = new Date(player.date);
            const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);

            switch (filter) {
                case "Today":
                    return diffDays <= 1;
                case "This Week":
                    return diffDays <= 7;
                default:
                    return true; // All-Time
            }
        });
    }, [filter]);


    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPlayers = filteredPlayers.slice(startIndex, startIndex + itemsPerPage);
    // 🔹 Applique un filtre sur les joueurs selon la date

    return (
        <main className="flex flex-col p-4 gap-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
                <p className="text-white px-0 md:px-4 py-3 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    Mastermind Leaderboard</p>
                <LeaderboardFilter activeFilter={filter} onChange={setFilter} />
            </div>
            <Leaderboard players={currentPlayers} />
            <Pagination
                totalItems={players.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />

        </main>
    );
}
