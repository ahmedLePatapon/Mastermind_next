"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface TimerContextType {
    isRunning: boolean;
    resetKey: number;
    toggleTimer: () => void;
    resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [isRunning, setIsRunning] = useState(false);
    const [resetKey, setResetKey] = useState(0);

    const toggleTimer = () => setIsRunning((prev) => !prev);
    const resetTimer = () => {
        setIsRunning(false);
        setResetKey((prev) => prev + 1);
    };

    return (
        <TimerContext.Provider
            value={{ isRunning, resetKey, toggleTimer, resetTimer }}
        >
            {children}
        </TimerContext.Provider>
    );
}

export function useTimer() {
    const context = useContext(TimerContext);
    if (!context)
        throw new Error("useTimer must be used within a <TimerProvider>");
    return context;
}
