"use client";

import { TimerProvider } from "./TimerContext";

export default function GameClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <TimerProvider>{children}</TimerProvider>;
}
