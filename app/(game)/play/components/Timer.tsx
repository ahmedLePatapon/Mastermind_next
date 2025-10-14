"use client";

import React, { useEffect, useState } from "react";
import { useTimer } from "../TimerContext";

export default function Timer() {
    const { isRunning, resetKey } = useTimer();
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [flipMin, setFlipMin] = useState(false);
    const [flipSec, setFlipSec] = useState(false);

    // Reset quand resetKey change
    useEffect(() => {
        setMinutes(0);
        setSeconds(0);
    }, [resetKey]);

    // Logique du timer
    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 59) {
                    setMinutes((m) => m + 1);
                    setFlipMin(true);
                    setTimeout(() => setFlipMin(false), 600);
                    return 0;
                }
                return prev + 1;
            });
            setFlipSec(true);
            setTimeout(() => setFlipSec(false), 600);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="flex gap-4 py-6 px-4">
            <FlipUnit label="Minutes" value={minutes} flip={flipMin} />
            <FlipUnit label="Seconds" value={seconds} flip={flipSec} />
        </div>
    );
}

function FlipUnit({
    label,
    value,
    flip,
}: {
    label: string;
    value: number;
    flip: boolean;
}) {
    return (
        <div className="flex grow basis-0 flex-col items-stretch gap-4">
            <div className="relative h-16 perspective">
                <div
                    className={`absolute inset-0 flex items-center justify-center rounded-lg bg-[#242447] text-white text-2xl font-bold leading-tight tracking-[-0.015em] transition-transform duration-500 ${flip ? "animate-flip" : ""
                        }`}
                >
                    {value.toString().padStart(2, "0")}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-white text-sm font-normal leading-normal">{label}</p>
            </div>
        </div>
    );
}
