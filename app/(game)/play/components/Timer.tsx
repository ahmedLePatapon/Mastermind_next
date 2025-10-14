import React from "react";

type TimerProps = { minutes: number; seconds: number };

export default function Timer({ minutes, seconds }: TimerProps) {
    return (
        <div className="flex gap-4 py-6 px-4">
            <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <div className="flex h-16 grow items-center justify-center rounded-lg px-3 bg-[#242447]">
                    <p className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">{minutes.toString().padStart(2, "0")}</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-white text-sm font-normal leading-normal">Minutes</p>
                </div>
            </div>
            <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <div className="flex h-16 grow items-center justify-center rounded-lg px-3 bg-[#242447]">
                    <p className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">{seconds.toString().padStart(2, "0")}</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-white text-sm font-normal leading-normal">Seconds</p>
                </div>
            </div>
        </div>
    );
}
