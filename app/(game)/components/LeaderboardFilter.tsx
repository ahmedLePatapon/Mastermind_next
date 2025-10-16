'use client';

import React from "react";
import { FilterType, LeaderboardFilterProps } from "@/types";

export default function LeaderboardFilter({
    activeFilter,
    onChange,
}: LeaderboardFilterProps) {
    const filters: FilterType[] = ["All-Time", "This Week", "Today"];

    return (
        <div className="flex gap-3 overflow-x-auto">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onChange(filter)}
                    className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-colors ${activeFilter === filter
                        ? "bg-primary text-white"
                        : "bg-[#242447] text-white hover:bg-primary/80"
                        }`}
                >
                    <p className="text-sm font-medium leading-normal">{filter}</p>
                </button>
            ))}
        </div>
    );
}
