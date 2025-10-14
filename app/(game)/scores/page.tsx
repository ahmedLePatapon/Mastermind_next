"use client";

import Leaderboard from "../components/Leaderboard";

export default function ScoresPage() {
    const players = [
        {
            rank: 1,
            name: "Player One",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAZV3bgNYpzX2aqY5HnAdihWze9wH91s1Icils0XMKqYLYo9NVROdBooLctUWZ4S7AXD-Z1ereLvLYOSGLp21EvP5CNl1J3xABDoTQb_jVpNVUmTIdj_4tZsgE0iEJJB2NIpx2tu-cj5tna-xR3xhbdlK0ztIHHXo2rYcVR41oOBuQSm8ImYiTe8gybUiH1M-Su-KNaxGToBkjcrualYb4sivHvcylAbjzOexz9vwPChTKeXWQ8kCGGK4Xadv-StTP59rJRJ-bj1Bsr",
            score: 1500,
            fastestTime: "2:30",
        },
        {
            rank: 2,
            name: "Player Two",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuATFzVTW7zCFFe5AGdQJ4j-hbuN5TZL_1mH9kozS7q1VKqnyyIh4GhDKfXZHJF--1Igh9u97a_VK5xN0YeibRQisDUlBPwRowEDavO5j1OA9twy-IIBB67gQA0c8AHH1HlYIL4bwMeoopcicogWpcOPqVtZ6Nc9r0SAV-fq1Qus8d_xzH3KUVxvpt-oEvB0258Rj4k444uGK10vXCvP8K8QhZNHUpEodDLqlzfYrEogLmVGWIS3YSCTVo4ZalKP7in1yvb3mLHxuUxz",
            score: 1450,
            fastestTime: "2:45",
        },
    ];
    return (
        <main className="flex flex-col p-4 gap-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    Mastermind Leaderboard</p>
                <div className="flex gap-3 overflow-x-auto">
                    <div
                        className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary px-4">
                        <p className="text-white text-sm font-medium leading-normal">All-Time</p>
                    </div>
                    <div
                        className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#242447] px-4 cursor-pointer hover:bg-primary/80 transition-colors">
                        <p className="text-white text-sm font-medium leading-normal">This Week</p>
                    </div>
                    <div
                        className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#242447] px-4 cursor-pointer hover:bg-primary/80 transition-colors">
                        <p className="text-white text-sm font-medium leading-normal">Today</p>
                    </div>
                </div>
            </div>
            <Leaderboard players={players} />
        </main>
    );
}
